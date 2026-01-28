export interface AllocationItem {
  id: string
  label: string
  amount: number
  type: 'fee' | 'advance' | 'payout' | 'other'
  description?: string
  required: boolean
}

export interface RefundAllocation {
  id: string
  clientId: string
  taxYear: number
  totalRefund: number
  allocations: AllocationItem[]
  clientPayout: number
  status: 'draft' | 'pending' | 'approved' | 'completed'
  createdAt: string
  updatedAt: string
  approvedBy?: string
  approvedAt?: string
}

export interface AllocationSummary {
  totalRefund: number
  totalFees: number
  totalAdvances: number
  clientPayout: number
  items: AllocationItem[]
}

export interface AllocationTemplate {
  id: string
  name: string
  description?: string
  defaultAllocations: Omit<AllocationItem, 'id' | 'amount'>[]
  active: boolean
}

export interface FeeSchedule {
  id: string
  name: string
  type: 'flat' | 'percentage' | 'tiered'
  amount?: number
  percentage?: number
  tiers?: {
    minAmount: number
    maxAmount: number
    fee: number
  }[]
}
