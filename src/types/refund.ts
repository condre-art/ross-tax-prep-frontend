/**
 * Represents a savings bond purchase allocation.
 * @property amountCents - The purchase amount in cents (must be non-negative)
 * @property recipientName - Optional name of the bond recipient
 */
export interface SavingsBondPurchase {
  amountCents: number;
  recipientName?: string;
}

/**
 * Represents the allocation of a tax refund to bonds and bank deposits.
 * @property clientId - Unique identifier for the client
 * @property bonds - Array of savings bond purchases (can be empty)
 * @property deposits - Array of bank deposit allocations (can be empty)
 */
export interface RefundAllocation {
  clientId: string;
  bonds: SavingsBondPurchase[];
  deposits: Array<{
    /** Amount in cents (must be non-negative) */
    amountCents: number;
    /** 9-digit US bank routing number */
    routingNumber: string;
    /** Bank account number */
    accountNumber: string;
    /** Type of bank account */
    accountType: "CHECKING" | "SAVINGS";
  }>;
}
