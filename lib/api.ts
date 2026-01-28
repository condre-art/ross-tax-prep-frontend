import { apiClient } from './api-client';
import {
  Provider,
  BankProductConfig,
  BankProductOffer,
  Disclosure,
  Consent,
  BankProductApplication,
  RefundAllocation,
  ApiResponse,
} from '@/types';

// Providers API
export const providersApi = {
  getAll: () => apiClient.get<ApiResponse<Provider[]>>('/api/providers'),
};

// Bank Products API
export const bankProductsApi = {
  getConfig: () => apiClient.get<ApiResponse<BankProductConfig[]>>('/api/bank-products/config'),
  
  getOffers: (clientId: string) =>
    apiClient.get<ApiResponse<BankProductOffer[]>>(`/api/bank-products/offers?clientId=${clientId}`),
  
  getDisclosures: (provider: string, product: string) =>
    apiClient.get<ApiResponse<Disclosure>>(`/api/bank-products/disclosures?provider=${provider}&product=${product}`),
  
  submitConsent: (consent: Consent) =>
    apiClient.post<ApiResponse<{ consentId: string }>>('/api/bank-products/consents', consent),
  
  submitApplication: (application: Partial<BankProductApplication>) =>
    apiClient.post<ApiResponse<BankProductApplication>>('/api/bank-products/applications', application),
  
  getApplication: (id: string) =>
    apiClient.get<ApiResponse<BankProductApplication>>(`/api/bank-products/applications/${id}`),
  
  submitSelection: (selection: { clientId: string; offerId: string; productType: string }) =>
    apiClient.post<ApiResponse<{ selectionId: string }>>('/api/bank-products/selection', selection),
};

// Refund Allocation API
export const refundAllocationApi = {
  submit: (allocation: RefundAllocation) =>
    apiClient.post<ApiResponse<RefundAllocation>>('/api/refund-allocation', allocation),
  
  get: (clientId: string) =>
    apiClient.get<ApiResponse<RefundAllocation>>(`/api/refund-allocation/${clientId}`),
};
