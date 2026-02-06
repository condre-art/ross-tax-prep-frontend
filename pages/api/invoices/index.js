// /pages/api/invoices/index.js
// REST API for invoice CRUD (MongoDB example, replace with your DB)
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/ross-tax-prep";
const dbName = "ross-tax-prep";

export default async function handler(req, res) {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("invoices");

  if (req.method === "GET") {
    // List invoices for a tenant
    const { tenantKey } = req.query;
    const invoices = await collection.find({ tenantKey }).toArray();
    res.status(200).json(invoices);
  } else if (req.method === "POST") {
    // Create new invoice
    const invoice = req.body;
    await collection.insertOne(invoice);
    res.status(201).json({ ok: true });
  } else {
    res.status(405).end();
  }
  await client.close();
}
