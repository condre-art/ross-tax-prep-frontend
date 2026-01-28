'use client';

import { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import Link from 'next/link';

export default function RefundAllocationPage() {
  const [useSavingsBonds, setUseSavingsBonds] = useState(false);
  const [savingsBondsAmount, setSavingsBondsAmount] = useState('');
  const [bondType, setBondType] = useState('');

  const [useDepositSplits, setUseDepositSplits] = useState(false);
  const [account1, setAccount1] = useState({
    routingNumber: '',
    accountNumber: '',
    accountType: 'CHECKING' as 'CHECKING' | 'SAVINGS',
    amount: '',
  });
  const [account2, setAccount2] = useState({
    routingNumber: '',
    accountNumber: '',
    accountType: 'CHECKING' as 'CHECKING' | 'SAVINGS',
    amount: '',
  });
  const [account3, setAccount3] = useState({
    routingNumber: '',
    accountNumber: '',
    accountType: 'CHECKING' as 'CHECKING' | 'SAVINGS',
    amount: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate savings bonds amount
    if (useSavingsBonds) {
      const amount = parseFloat(savingsBondsAmount);
      if (isNaN(amount) || amount < 50) {
        alert('Savings bonds amount must be at least $50');
        return;
      }
      if (amount > 5000) {
        alert('Savings bonds amount cannot exceed $5,000');
        return;
      }
    }

    // Validate deposit splits
    if (useDepositSplits) {
      const validateAccount = (account: any, name: string) => {
        if (account.routingNumber || account.accountNumber || account.amount) {
          if (!account.routingNumber || !account.accountNumber || !account.amount) {
            alert(`${name}: All fields (routing, account, amount) must be provided`);
            return false;
          }
          const amount = parseFloat(account.amount);
          if (isNaN(amount) || amount < 0) {
            alert(`${name}: Amount must be a positive number`);
            return false;
          }
        }
        return true;
      };

      if (!validateAccount(account1, 'Account 1') || 
          !validateAccount(account2, 'Account 2') || 
          !validateAccount(account3, 'Account 3')) {
        return;
      }
    }

    const allocation = {
      clientId: localStorage.getItem('clientId') || 'demo-client-123',
      savingsBonds: useSavingsBonds && savingsBondsAmount
        ? {
            amount: parseFloat(savingsBondsAmount),
            bondType,
          }
        : undefined,
      depositSplits: useDepositSplits
        ? {
            account1: account1.routingNumber && account1.accountNumber ? account1 : undefined,
            account2: account2.routingNumber && account2.accountNumber ? account2 : undefined,
            account3: account3.routingNumber && account3.accountNumber ? account3 : undefined,
          }
        : undefined,
    };

    // TODO: Replace with actual API call
    // await refundAllocationApi.submit(allocation);
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Submitting refund allocation:', allocation);
    }
    
    // TODO: Replace alert with proper toast notification
    alert('Refund allocation saved successfully!');
  };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-navy mb-2">Refund Allocation</h1>
        <p className="text-gray-600 mb-6">
          Configure savings bonds and split your refund across multiple accounts
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Savings Bonds Section */}
          <div className="card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-navy">Savings Bonds</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Purchase U.S. Savings Bonds with part of your refund
                </p>
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="text-sm text-gray-600">Enable</span>
                <input
                  type="checkbox"
                  checked={useSavingsBonds}
                  onChange={(e) => setUseSavingsBonds(e.target.checked)}
                  className="w-5 h-5"
                />
              </label>
            </div>

            {useSavingsBonds && (
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Bond Type</label>
                    <select
                      value={bondType}
                      onChange={(e) => setBondType(e.target.value)}
                      className="input-field"
                      required={useSavingsBonds}
                    >
                      <option value="">Select bond type</option>
                      <option value="SERIES_I">Series I</option>
                      <option value="SERIES_EE">Series EE</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">Amount</label>
                    <input
                      type="number"
                      value={savingsBondsAmount}
                      onChange={(e) => setSavingsBondsAmount(e.target.value)}
                      className="input-field"
                      placeholder="0.00"
                      min="50"
                      max="5000"
                      step="0.01"
                      required={useSavingsBonds}
                    />
                  </div>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
                  <strong>Note:</strong> Savings bonds must be purchased in amounts of $50 or more.
                  Maximum $5,000 per tax year.
                </div>
              </div>
            )}
          </div>

          {/* Deposit Splits Section */}
          <div className="card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-navy">Deposit Splits</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Split your refund across up to 3 different accounts
                </p>
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="text-sm text-gray-600">Enable</span>
                <input
                  type="checkbox"
                  checked={useDepositSplits}
                  onChange={(e) => setUseDepositSplits(e.target.checked)}
                  className="w-5 h-5"
                />
              </label>
            </div>

            {useDepositSplits && (
              <div className="space-y-6 pt-4 border-t border-gray-200">
                {/* Account 1 */}
                <div className="p-4 bg-gray-50 rounded">
                  <h3 className="font-semibold text-navy mb-3">Account 1</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="label">Routing Number</label>
                      <input
                        type="text"
                        value={account1.routingNumber}
                        onChange={(e) => setAccount1({ ...account1, routingNumber: e.target.value })}
                        className="input-field"
                        placeholder="123456789"
                        pattern="[0-9]{9}"
                        title="Routing number must be exactly 9 digits"
                        maxLength={9}
                      />
                    </div>
                    <div>
                      <label className="label">Account Number</label>
                      <input
                        type="text"
                        value={account1.accountNumber}
                        onChange={(e) => setAccount1({ ...account1, accountNumber: e.target.value })}
                        className="input-field"
                        placeholder="987654321"
                        pattern="[0-9]{4,17}"
                        title="Account number must be 4-17 digits"
                        minLength={4}
                        maxLength={17}
                      />
                    </div>
                    <div>
                      <label className="label">Account Type</label>
                      <select
                        value={account1.accountType}
                        onChange={(e) =>
                          setAccount1({ ...account1, accountType: e.target.value as 'CHECKING' | 'SAVINGS' })
                        }
                        className="input-field"
                      >
                        <option value="CHECKING">Checking</option>
                        <option value="SAVINGS">Savings</option>
                      </select>
                    </div>
                    <div>
                      <label className="label">Amount</label>
                      <input
                        type="number"
                        value={account1.amount}
                        onChange={(e) => setAccount1({ ...account1, amount: e.target.value })}
                        className="input-field"
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                      />
                    </div>
                  </div>
                </div>

                {/* Account 2 */}
                <div className="p-4 bg-gray-50 rounded">
                  <h3 className="font-semibold text-navy mb-3">Account 2 (Optional)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="label">Routing Number</label>
                      <input
                        type="text"
                        value={account2.routingNumber}
                        onChange={(e) => setAccount2({ ...account2, routingNumber: e.target.value })}
                        className="input-field"
                        placeholder="123456789"
                        pattern="[0-9]{9}"
                        title="Routing number must be exactly 9 digits"
                        maxLength={9}
                      />
                    </div>
                    <div>
                      <label className="label">Account Number</label>
                      <input
                        type="text"
                        value={account2.accountNumber}
                        onChange={(e) => setAccount2({ ...account2, accountNumber: e.target.value })}
                        className="input-field"
                        placeholder="987654321"
                        pattern="[0-9]{4,17}"
                        title="Account number must be 4-17 digits"
                        minLength={4}
                        maxLength={17}
                      />
                    </div>
                    <div>
                      <label className="label">Account Type</label>
                      <select
                        value={account2.accountType}
                        onChange={(e) =>
                          setAccount2({ ...account2, accountType: e.target.value as 'CHECKING' | 'SAVINGS' })
                        }
                        className="input-field"
                      >
                        <option value="CHECKING">Checking</option>
                        <option value="SAVINGS">Savings</option>
                      </select>
                    </div>
                    <div>
                      <label className="label">Amount</label>
                      <input
                        type="number"
                        value={account2.amount}
                        onChange={(e) => setAccount2({ ...account2, amount: e.target.value })}
                        className="input-field"
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                      />
                    </div>
                  </div>
                </div>

                {/* Account 3 */}
                <div className="p-4 bg-gray-50 rounded">
                  <h3 className="font-semibold text-navy mb-3">Account 3 (Optional)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="label">Routing Number</label>
                      <input
                        type="text"
                        value={account3.routingNumber}
                        onChange={(e) => setAccount3({ ...account3, routingNumber: e.target.value })}
                        className="input-field"
                        placeholder="123456789"
                        pattern="[0-9]{9}"
                        title="Routing number must be exactly 9 digits"
                        maxLength={9}
                      />
                    </div>
                    <div>
                      <label className="label">Account Number</label>
                      <input
                        type="text"
                        value={account3.accountNumber}
                        onChange={(e) => setAccount3({ ...account3, accountNumber: e.target.value })}
                        className="input-field"
                        placeholder="987654321"
                        pattern="[0-9]{4,17}"
                        title="Account number must be 4-17 digits"
                        minLength={4}
                        maxLength={17}
                      />
                    </div>
                    <div>
                      <label className="label">Account Type</label>
                      <select
                        value={account3.accountType}
                        onChange={(e) =>
                          setAccount3({ ...account3, accountType: e.target.value as 'CHECKING' | 'SAVINGS' })
                        }
                        className="input-field"
                      >
                        <option value="CHECKING">Checking</option>
                        <option value="SAVINGS">Savings</option>
                      </select>
                    </div>
                    <div>
                      <label className="label">Amount</label>
                      <input
                        type="number"
                        value={account3.amount}
                        onChange={(e) => setAccount3({ ...account3, amount: e.target.value })}
                        className="input-field"
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
                  <strong>Note:</strong> Total split amounts must equal your refund amount. Remaining balance
                  will go to the first account if amounts don't sum to total.
                </div>
              </div>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-4">
            <Link href="/app/dashboard" className="px-6 py-3 text-gray-600 hover:text-navy">
              Cancel
            </Link>
            <button type="submit" className="btn-primary">
              Save Allocation
            </button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}
