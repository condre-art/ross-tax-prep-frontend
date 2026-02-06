// /pages/api/pay/paypal.js
// PayPal order creation (scaffold)
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  // You would use PayPal REST API here
  // For demo, just return a fake approval URL
  const { amount, invoiceId } = req.body;
  res.status(200).json({
    approvalUrl: `https://www.sandbox.paypal.com/checkoutnow?token=FAKE-${invoiceId}`
  });
}
