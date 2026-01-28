export const API_ENDPOINTS = {
  // Client endpoints
  clients: {
    list: '/clients',
    get: (id: string) => `/clients/${id}`,
    create: '/clients',
    update: (id: string) => `/clients/${id}`,
    delete: (id: string) => `/clients/${id}`,
  },

  // Document endpoints
  documents: {
    list: (clientId: string) => `/clients/${clientId}/documents`,
    get: (clientId: string, documentId: string) =>
      `/clients/${clientId}/documents/${documentId}`,
    upload: (clientId: string) => `/clients/${clientId}/documents`,
    delete: (clientId: string, documentId: string) =>
      `/clients/${clientId}/documents/${documentId}`,
  },

  // Bank products endpoints
  bankProducts: {
    list: '/bank-products',
    get: (id: string) => `/bank-products/${id}`,
    providers: '/bank-products/providers',
    offers: '/bank-products/offers',
    approve: (offerId: string) => `/bank-products/offers/${offerId}/approve`,
    decline: (offerId: string) => `/bank-products/offers/${offerId}/decline`,
  },

  // Refund allocation endpoints
  allocation: {
    get: (clientId: string) => `/clients/${clientId}/allocation`,
    create: (clientId: string) => `/clients/${clientId}/allocation`,
    update: (clientId: string) => `/clients/${clientId}/allocation`,
  },

  // E-signature endpoints
  esign: {
    list: '/esign/requests',
    get: (id: string) => `/esign/requests/${id}`,
    create: '/esign/requests',
    sign: (id: string) => `/esign/requests/${id}/sign`,
  },

  // Status endpoints
  status: {
    list: '/status',
    get: (clientId: string) => `/status/${clientId}`,
  },
}

export default API_ENDPOINTS
