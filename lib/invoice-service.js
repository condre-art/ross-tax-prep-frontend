import { Invoice } from "./invoice-model";
import { getBrandingConfig } from "./branding-multitenant";

// Generate a new invoice for a tenant and client
export function generateInvoice({ tenantKey, clientName, items, dueDate }) {
  const total = items.reduce((sum, item) => sum + item.amount, 0);
  const invoiceId = "INV-" + Date.now();
  return new Invoice({
    invoiceId,
    tenantKey,
    clientName,
    items,
    total,
    dueDate,
    status: "unpaid"
  });
}

// Render invoice as HTML (for display/email)
export function renderInvoiceHTML(invoice) {
  const branding = getBrandingConfig(invoice.tenantKey);
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;">
      <h2>${branding.businessName} Invoice</h2>
      <img src="${branding.logoUrl}" alt="Logo" style="width:100px;" />
      <p>To: ${invoice.clientName}</p>
      <ul>
        ${invoice.items.map(item => `<li>${item.description}: $${item.amount.toFixed(2)}</li>`).join("")}
      </ul>
      <p><strong>Total: $${invoice.total.toFixed(2)}</strong></p>
      <p>Due: ${invoice.dueDate}</p>
      <p>Status: ${invoice.status}</p>
      <hr/>
      <p>Contact: ${branding.supportEmail} | ${branding.supportPhone}</p>
    </div>
  `;
}

// PDF export using pdf-lib (scaffold)
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
export async function generateInvoicePDF(invoice) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const { width, height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const branding = getBrandingConfig(invoice.tenantKey);
  let y = height - 50;
  page.drawText(`${branding.businessName} Invoice`, { x: 50, y, size: 24, font, color: rgb(0,0,0.5) });
  y -= 40;
  page.drawText(`To: ${invoice.clientName}`, { x: 50, y, size: 16, font });
  y -= 30;
  invoice.items.forEach(item => {
    page.drawText(`${item.description}: $${item.amount.toFixed(2)}`, { x: 60, y, size: 14, font });
    y -= 20;
  });
  y -= 10;
  page.drawText(`Total: $${invoice.total.toFixed(2)}`, { x: 50, y, size: 16, font });
  y -= 30;
  page.drawText(`Due: ${invoice.dueDate}`, { x: 50, y, size: 14, font });
  y -= 20;
  page.drawText(`Status: ${invoice.status}`, { x: 50, y, size: 14, font });
  y -= 40;
  page.drawText(`Contact: ${branding.supportEmail} | ${branding.supportPhone}`, { x: 50, y, size: 12, font });
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
