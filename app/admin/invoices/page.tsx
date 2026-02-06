import { generateInvoice, renderInvoiceHTML, generateInvoicePDF } from "../../lib/invoice-service";
import { getBrandingConfig } from "../../lib/branding-multitenant";
import { useState } from "react";

// Demo: In-memory invoice list (replace with DB/API in production)
const DEMO_INVOICES = [];

export default function AdminInvoicesPage({ tenantKey = "ross" }) {
  const [invoices, setInvoices] = useState(DEMO_INVOICES);
  const [clientName, setClientName] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const [dueDate, setDueDate] = useState("");
  const [items, setItems] = useState([]);
  const branding = getBrandingConfig(tenantKey);

  function addItem() {
    setItems([...items, { description: desc, amount: parseFloat(amount) }]);
    setDesc("");
    setAmount(0);
  }

  function createInvoice() {
    const invoice = generateInvoice({ tenantKey, clientName, items, dueDate });
    setInvoices([...invoices, invoice]);
    setClientName("");
    setItems([]);
    setDueDate("");
  }

  async function downloadPDF(invoice) {
    const pdfBytes = await generateInvoicePDF(invoice);
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${invoice.invoiceId}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div style={{ maxWidth: 700, margin: "32px auto", fontFamily: "sans-serif" }}>
      <h2>{branding.businessName} Invoices</h2>
      <div style={{ background: "#f9f9f9", padding: 24, borderRadius: 12, marginBottom: 32 }}>
        <h3>Create Invoice</h3>
        <input placeholder="Client Name" value={clientName} onChange={e => setClientName(e.target.value)} />
        <input placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
        <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
        <button onClick={addItem}>Add Item</button>
        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
        <button onClick={createInvoice}>Create Invoice</button>
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item.description}: ${item.amount.toFixed(2)}</li>
          ))}
        </ul>
      </div>
      <h3>All Invoices</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th><th>Client</th><th>Total</th><th>Status</th><th>Due</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(inv => (
            <tr key={inv.invoiceId}>
              <td>{inv.invoiceId}</td>
              <td>{inv.clientName}</td>
              <td>${inv.total.toFixed(2)}</td>
              <td>{inv.status}</td>
              <td>{inv.dueDate}</td>
              <td>
                <button onClick={() => window.open().document.write(renderInvoiceHTML(inv))}>View</button>
                <button onClick={() => downloadPDF(inv)}>PDF</button>
                {/* Payment integration buttons go here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
