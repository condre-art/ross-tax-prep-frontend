// Invoice model for multi-tenant (ERO) system
export class Invoice {
  constructor({ invoiceId, tenantKey, clientName, items, total, dueDate, status, createdAt }) {
    this.invoiceId = invoiceId;
    this.tenantKey = tenantKey;
    this.clientName = clientName;
    this.items = items; // [{ description, amount }]
    this.total = total;
    this.dueDate = dueDate;
    this.status = status; // 'unpaid', 'paid', etc.
    this.createdAt = createdAt || new Date();
  }
}
