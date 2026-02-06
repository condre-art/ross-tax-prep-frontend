// Payment integration utility (scaffold)
// Stripe, PayPal, and Langley FCU (manual ACH info)

// Stripe/PayPal would use their SDKs in production. Here we just scaffold the API.

export function getPaymentOptions(invoice) {
  return [
    {
      name: "Stripe",
      url: `/pay/stripe?invoiceId=${invoice.invoiceId}`
    },
    {
      name: "PayPal",
      url: `/pay/paypal?invoiceId=${invoice.invoiceId}`
    },
    {
      name: "Langley FCU ACH",
      info: "Routing: 251480738, Account: 1234567890, Name: Langley Federal Credit Union, Type: Essential Checking"
    }
  ];
}
