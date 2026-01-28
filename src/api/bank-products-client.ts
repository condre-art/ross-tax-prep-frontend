/**
 * API client for bank products endpoints
 * Provider-agnostic interface to backend
 */

import type {
  Provider,
  BankProductConfig,
  RefundAdvanceOffer,
  DisclosureRef,
  ConsentRecord,
  BankProductApplication,
  BankProductSelection,
  RefundAllocation,
  ProviderId,
  BankProductType,
} from '../types/bank-products';

/**
 * Base API client configuration
 */
export interface ApiClientConfig {
  baseUrl: string;
  headers?: Record<string, string>;
}

/**
 * Consent submission payload
 * Note: This interface is intentionally separate from ConsentRecord.
 * ConsentSubmission represents the client-provided data being sent to the API,
 * while ConsentRecord represents the stored server response with potential
 * additional server-side fields (e.g., database IDs, computed values).
 */
export interface ConsentSubmission {
  clientId: string;
  disclosureId: string;
  disclosureVersion?: string;
  acceptedAt: string; // ISO 8601 timestamp
  ipAddress: string;
  userAgent: string;
}

/**
 * Application submission payload
 */
export interface ApplicationSubmission {
  clientId: string;
  provider: ProviderId;
  product: BankProductType;
  offerId?: string;
}

/**
 * Bank Products API Client
 */
export class BankProductsApiClient {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor(config: ApiClientConfig) {
    this.baseUrl = config.baseUrl;
    this.headers = {
      'Content-Type': 'application/json',
      ...config.headers,
    };
  }

  /**
   * Helper method to handle API errors with detailed information
   */
  private async handleApiError(response: Response, context: string): Promise<never> {
    let errorDetails = '';
    try {
      const errorBody = await response.json();
      errorDetails = errorBody.message || errorBody.error || JSON.stringify(errorBody);
    } catch {
      errorDetails = response.statusText;
    }
    throw new Error(
      `${context} failed: ${response.status} ${response.statusText}. ${errorDetails}`
    );
  }

  /**
   * Validate that a required parameter is not empty
   */
  private validateNotEmpty(value: string, paramName: string): void {
    if (!value || value.trim() === '') {
      throw new Error(`${paramName} is required and cannot be empty`);
    }
  }

  /**
   * GET /api/providers
   * Get list of enabled providers with supported products
   */
  async getProviders(): Promise<Provider[]> {
    const response = await fetch(`${this.baseUrl}/api/providers`, {
      method: 'GET',
      headers: this.headers,
    });

    if (!response.ok) {
      await this.handleApiError(response, 'Get providers');
    }

    return response.json();
  }

  /**
   * GET /api/bank-products/config
   * Get office configuration for bank products
   */
  async getConfig(): Promise<BankProductConfig> {
    const response = await fetch(`${this.baseUrl}/api/bank-products/config`, {
      method: 'GET',
      headers: this.headers,
    });

    if (!response.ok) {
      await this.handleApiError(response, 'Get config');
    }

    return response.json();
  }

  /**
   * GET /api/bank-products/offers?clientId=
   * Get refund advance offers and eligibility for a client
   */
  async getOffers(clientId: string): Promise<RefundAdvanceOffer[]> {
    this.validateNotEmpty(clientId, 'clientId');

    const url = new URL(`${this.baseUrl}/api/bank-products/offers`);
    url.searchParams.append('clientId', clientId);

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: this.headers,
    });

    if (!response.ok) {
      await this.handleApiError(response, 'Get offers');
    }

    return response.json();
  }

  /**
   * GET /api/bank-products/disclosures?provider=&product=
   * Get disclosure documents for a provider and product
   */
  async getDisclosures(
    provider: ProviderId,
    product: BankProductType
  ): Promise<DisclosureRef[]> {
    const url = new URL(`${this.baseUrl}/api/bank-products/disclosures`);
    url.searchParams.append('provider', provider);
    url.searchParams.append('product', product);

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: this.headers,
    });

    if (!response.ok) {
      await this.handleApiError(response, 'Get disclosures');
    }

    return response.json();
  }

  /**
   * POST /api/bank-products/consents
   * Save consent with audit trail (timestamp, IP, user agent)
   * Critical for compliance
   */
  async saveConsent(consent: ConsentSubmission): Promise<ConsentRecord> {
    this.validateNotEmpty(consent.clientId, 'consent.clientId');
    this.validateNotEmpty(consent.disclosureId, 'consent.disclosureId');

    const response = await fetch(`${this.baseUrl}/api/bank-products/consents`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(consent),
    });

    if (!response.ok) {
      await this.handleApiError(response, 'Save consent');
    }

    return response.json();
  }

  /**
   * POST /api/bank-products/applications
   * Submit bank product application (RT or Advance)
   */
  async submitApplication(
    application: ApplicationSubmission
  ): Promise<BankProductApplication> {
    this.validateNotEmpty(application.clientId, 'application.clientId');

    const response = await fetch(`${this.baseUrl}/api/bank-products/applications`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(application),
    });

    if (!response.ok) {
      await this.handleApiError(response, 'Submit application');
    }

    return response.json();
  }

  /**
   * GET /api/bank-products/applications/:id
   * Poll application status (approved/pending/denied)
   */
  async getApplicationStatus(applicationId: string): Promise<BankProductApplication> {
    this.validateNotEmpty(applicationId, 'applicationId');

    const response = await fetch(
      `${this.baseUrl}/api/bank-products/applications/${applicationId}`,
      {
        method: 'GET',
        headers: this.headers,
      }
    );

    if (!response.ok) {
      await this.handleApiError(response, 'Get application status');
    }

    return response.json();
  }

  /**
   * POST /api/bank-products/selection
   * Save client's bank product selection (provider, product, payout method)
   */
  async saveSelection(selection: BankProductSelection): Promise<BankProductSelection> {
    this.validateNotEmpty(selection.clientId, 'selection.clientId');

    const response = await fetch(`${this.baseUrl}/api/bank-products/selection`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(selection),
    });

    if (!response.ok) {
      await this.handleApiError(response, 'Save selection');
    }

    return response.json();
  }

  /**
   * POST /api/refund-allocation
   * Save refund allocation (bonds, splits)
   */
  async saveRefundAllocation(allocation: RefundAllocation): Promise<RefundAllocation> {
    this.validateNotEmpty(allocation.clientId, 'allocation.clientId');

    const response = await fetch(`${this.baseUrl}/api/refund-allocation`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(allocation),
    });

    if (!response.ok) {
      await this.handleApiError(response, 'Save refund allocation');
    }

    return response.json();
  }

  /**
   * GET /api/refund-allocation/:clientId
   * Load refund allocation for editing/continuing
   */
  async getRefundAllocation(clientId: string): Promise<RefundAllocation> {
    this.validateNotEmpty(clientId, 'clientId');

    const response = await fetch(`${this.baseUrl}/api/refund-allocation/${clientId}`, {
      method: 'GET',
      headers: this.headers,
    });

    if (!response.ok) {
      await this.handleApiError(response, 'Get refund allocation');
    }

    return response.json();
  }
}
