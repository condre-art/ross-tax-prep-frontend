export interface SavingsBondPurchase {
  amountCents: number;
  recipientName?: string;
}

export interface RefundAllocation {
  clientId: string;
  bonds: SavingsBondPurchase[];
  deposits: Array<{
    amountCents: number;
    routingNumber: string;
    accountNumber: string;
    accountType: "CHECKING" | "SAVINGS";
  }>;
}
