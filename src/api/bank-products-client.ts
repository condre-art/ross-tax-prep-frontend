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
   * GET /api/providers
   * Get list of enabled providers with supported products
   */
  async getProviders(): Promise<Provider[]> {
    const response = await fetch(`${this.baseUrl}/api/providers`, {
      method: 'GET',
      headers: this.headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch providers: ${response.statusText}`);
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
      throw new Error(`Failed to fetch config: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * GET /api/bank-products/offers?clientId=
   * Get refund advance offers and eligibility for a client
   */
  async getOffers(clientId: string): Promise<RefundAdvanceOffer[]> {
    const url = new URL(`${this.baseUrl}/api/bank-products/offers`);
    url.searchParams.append('clientId', clientId);

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: this.headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch offers: ${response.statusText}`);
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
      throw new Error(`Failed to fetch disclosures: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * POST /api/bank-products/consents
   * Save consent with audit trail (timestamp, IP, user agent)
   * Critical for compliance
   */
  async saveConsent(consent: ConsentSubmission): Promise<ConsentRecord> {
    const response = await fetch(`${this.baseUrl}/api/bank-products/consents`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(consent),
    });

    if (!response.ok) {
      throw new Error(`Failed to save consent: ${response.statusText}`);
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
    const response = await fetch(`${this.baseUrl}/api/bank-products/applications`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(application),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit application: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * GET /api/bank-products/applications/:id
   * Poll application status (approved/pending/denied)
   */
  async getApplicationStatus(applicationId: string): Promise<BankProductApplication> {
    const response = await fetch(
      `${this.baseUrl}/api/bank-products/applications/${applicationId}`,
      {
        method: 'GET',
        headers: this.headers,
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch application status: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * POST /api/bank-products/selection
   * Save client's bank product selection (provider, product, payout method)
   */
  async saveSelection(selection: BankProductSelection): Promise<BankProductSelection> {
    const response = await fetch(`${this.baseUrl}/api/bank-products/selection`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(selection),
    });

    if (!response.ok) {
      throw new Error(`Failed to save selection: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * POST /api/refund-allocation
   * Save refund allocation (bonds, splits)
   */
  async saveRefundAllocation(allocation: RefundAllocation): Promise<RefundAllocation> {
    const response = await fetch(`${this.baseUrl}/api/refund-allocation`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(allocation),
    });

    if (!response.ok) {
      throw new Error(`Failed to save refund allocation: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * GET /api/refund-allocation/:clientId
   * Load refund allocation for editing/continuing
   */
  async getRefundAllocation(clientId: string): Promise<RefundAllocation> {
    const response = await fetch(`${this.baseUrl}/api/refund-allocation/${clientId}`, {
      method: 'GET',
      headers: this.headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch refund allocation: ${response.statusText}`);
    }

    return response.json();
  }
}
