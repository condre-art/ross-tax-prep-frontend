// /pages/api/pay/stripe.js
// Stripe payment intent creation (scaffold)
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { amount, currency = 'usd', invoiceId } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency,
      metadata: { invoiceId }
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
