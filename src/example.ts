/**
 * Example usage of RefundAllocation interfaces
 * This file demonstrates how to use the SavingsBondPurchase and RefundAllocation types
 */

import { RefundAllocation, SavingsBondPurchase } from './types';

// Example: Create a savings bond purchase
const bond: SavingsBondPurchase = {
  amountCents: 500000, // $5,000.00
  recipientName: "John Doe"
};

// Example: Create a refund allocation with bonds and deposits
const refundAllocation: RefundAllocation = {
  clientId: "client-12345",
  bonds: [
    {
      amountCents: 500000, // $5,000.00
      recipientName: "John Doe"
    },
    {
      amountCents: 100000 // $1,000.00
      // recipientName is optional
    }
  ],
  deposits: [
    {
      amountCents: 1000000, // $10,000.00
      routingNumber: "123456789",
      accountNumber: "9876543210",
      accountType: "CHECKING"
    },
    {
      amountCents: 500000, // $5,000.00
      routingNumber: "987654321",
      accountNumber: "1234567890",
      accountType: "SAVINGS"
    }
  ]
};

// Example: Empty allocation (no bonds or deposits yet)
const emptyAllocation: RefundAllocation = {
  clientId: "client-67890",
  bonds: [],
  deposits: []
};

export { refundAllocation, emptyAllocation };
