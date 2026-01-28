/**
 * Example usage of the Bank Products API Client
 * This file demonstrates how to use the TypeScript types and API client
 */

import {
  BankProductsApiClient,
  type Provider,
  type BankProductConfig,
  type RefundAdvanceOffer,
  type BankProductSelection,
  type ConsentSubmission,
  type ApplicationSubmission,
  type RefundAllocation,
} from './index';

// Initialize the API client
const apiClient = new BankProductsApiClient({
  baseUrl: 'https://api.rosstaxprep.com',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
  },
});

/**
 * Example 1: Get available providers
 */
async function getAvailableProviders(): Promise<void> {
  try {
    const providers: Provider[] = await apiClient.getProviders();
    console.log('Available providers:', providers);
    
    // Filter enabled providers
    const enabledProviders = providers.filter(p => p.enabled);
    console.log('Enabled providers:', enabledProviders);
  } catch (error) {
    console.error('Error fetching providers:', error);
  }
}

/**
 * Example 2: Get office configuration
 */
async function getOfficeConfig(): Promise<void> {
  try {
    const config: BankProductConfig = await apiClient.getConfig();
    console.log('Office configuration:', config);
    console.log('Show savings bonds?', config.showSavingsBonds);
    console.log('Allowed payout methods:', config.allowedPayoutMethods);
  } catch (error) {
    console.error('Error fetching config:', error);
  }
}

/**
 * Example 3: Check refund advance eligibility
 */
async function checkRefundAdvanceEligibility(clientId: string): Promise<void> {
  try {
    const offers: RefundAdvanceOffer[] = await apiClient.getOffers(clientId);
    
    for (const offer of offers) {
      console.log(`Provider: ${offer.provider}`);
      console.log(`Decision: ${offer.decision}`);
      
      if (offer.decision === 'APPROVED' && offer.approvedAmountCents) {
        const amountDollars = offer.approvedAmountCents / 100;
        console.log(`Approved amount: $${amountDollars.toFixed(2)}`);
      }
      
      if (offer.reasons && offer.reasons.length > 0) {
        console.log('Reasons:', offer.reasons.join(', '));
      }
    }
  } catch (error) {
    console.error('Error fetching offers:', error);
  }
}

/**
 * Example 4: Get and display disclosures
 */
async function getDisclosures(): Promise<void> {
  try {
    const disclosures = await apiClient.getDisclosures('SBTPG', 'REFUND_ADVANCE');
    
    console.log('Required disclosures:');
    for (const disclosure of disclosures) {
      console.log(`- ${disclosure.title} ${disclosure.required ? '(Required)' : '(Optional)'}`);
      console.log(`  URL: ${disclosure.url}`);
      if (disclosure.version) {
        console.log(`  Version: ${disclosure.version}`);
      }
    }
  } catch (error) {
    console.error('Error fetching disclosures:', error);
  }
}

/**
 * Example 5: Save consent with compliance tracking
 */
async function saveConsent(clientId: string, disclosureId: string): Promise<void> {
  try {
    const consentData: ConsentSubmission = {
      clientId,
      disclosureId,
      disclosureVersion: '2.1',
      acceptedAt: new Date().toISOString(),
      ipAddress: '192.168.1.100', // Should be captured from request
      userAgent: navigator.userAgent,
    };
    
    const savedConsent = await apiClient.saveConsent(consentData);
    console.log('Consent saved successfully:', savedConsent);
  } catch (error) {
    console.error('Error saving consent:', error);
  }
}

/**
 * Example 6: Submit refund advance application
 */
async function submitApplication(clientId: string, offerId: string): Promise<void> {
  try {
    const applicationData: ApplicationSubmission = {
      clientId,
      provider: 'SBTPG',
      product: 'REFUND_ADVANCE',
      offerId,
    };
    
    const application = await apiClient.submitApplication(applicationData);
    console.log('Application submitted:', application.id);
    console.log('Status:', application.status);
    
    // Poll for status updates
    const finalStatus = await apiClient.getApplicationStatus(application.id);
    console.log('Final status:', finalStatus.status);
  } catch (error) {
    console.error('Error submitting application:', error);
  }
}

/**
 * Example 7: Save bank product selection with direct deposit
 */
async function saveBankProductSelection(clientId: string): Promise<void> {
  try {
    const selection: BankProductSelection = {
      clientId,
      provider: 'SBTPG',
      product: 'REFUND_TRANSFER',
      payoutMethod: 'DIRECT_DEPOSIT',
      directDeposit: {
        routingNumber: '123456789',
        accountNumber: '987654321',
        accountType: 'CHECKING',
      },
    };
    
    const savedSelection = await apiClient.saveSelection(selection);
    console.log('Selection saved:', savedSelection);
  } catch (error) {
    console.error('Error saving selection:', error);
  }
}

/**
 * Example 8: Save refund allocation with bonds and splits
 */
async function saveRefundAllocation(clientId: string): Promise<void> {
  try {
    const allocation: RefundAllocation = {
      clientId,
      savingsBonds: {
        amountCents: 50000, // $500.00
        bondType: 'Series I',
      },
      splits: [
        {
          accountName: 'Primary Checking',
          routingNumber: '123456789',
          accountNumber: '111111111',
          accountType: 'CHECKING',
          amountCents: 100000, // $1,000.00
        },
        {
          accountName: 'Savings Account',
          routingNumber: '123456789',
          accountNumber: '222222222',
          accountType: 'SAVINGS',
          amountCents: 50000, // $500.00
        },
      ],
    };
    
    const savedAllocation = await apiClient.saveRefundAllocation(allocation);
    console.log('Refund allocation saved:', savedAllocation);
  } catch (error) {
    console.error('Error saving allocation:', error);
  }
}

/**
 * Example 9: Load existing allocation for editing
 */
async function loadRefundAllocation(clientId: string): Promise<void> {
  try {
    const allocation = await apiClient.getRefundAllocation(clientId);
    console.log('Loaded allocation:', allocation);
    
    if (allocation.savingsBonds) {
      const bondAmount = allocation.savingsBonds.amountCents / 100;
      console.log(`Savings Bonds: $${bondAmount.toFixed(2)}`);
    }
    
    if (allocation.splits) {
      console.log('Account splits:');
      for (const split of allocation.splits) {
        const splitAmount = split.amountCents / 100;
        console.log(`- ${split.accountName}: $${splitAmount.toFixed(2)}`);
      }
    }
  } catch (error) {
    console.error('Error loading allocation:', error);
  }
}

/**
 * Complete workflow example: From eligibility check to application
 */
async function completeWorkflow(clientId: string): Promise<void> {
  try {
    // Step 1: Check eligibility
    console.log('Step 1: Checking eligibility...');
    const offers = await apiClient.getOffers(clientId);
    const approvedOffer = offers.find(o => o.decision === 'APPROVED');
    
    if (!approvedOffer) {
      console.log('No approved offers found');
      return;
    }
    
    console.log(`Approved for $${(approvedOffer.approvedAmountCents! / 100).toFixed(2)}`);
    
    // Step 2: Get disclosures
    console.log('Step 2: Getting disclosures...');
    const disclosures = await apiClient.getDisclosures(
      approvedOffer.provider,
      'REFUND_ADVANCE'
    );
    
    // Step 3: Save consent for each required disclosure
    console.log('Step 3: Saving consents...');
    const requiredDisclosures = disclosures.filter(d => d.required);
    for (const disclosure of requiredDisclosures) {
      await apiClient.saveConsent({
        clientId,
        disclosureId: disclosure.id,
        disclosureVersion: disclosure.version,
        acceptedAt: new Date().toISOString(),
        ipAddress: '192.168.1.100',
        userAgent: navigator.userAgent,
      });
    }
    
    // Step 4: Submit application
    console.log('Step 4: Submitting application...');
    const application = await apiClient.submitApplication({
      clientId,
      provider: approvedOffer.provider,
      product: 'REFUND_ADVANCE',
      offerId: approvedOffer.offerId,
    });
    
    console.log(`Application ${application.id} submitted with status: ${application.status}`);
    
    // Step 5: Save selection
    console.log('Step 5: Saving selection...');
    await apiClient.saveSelection({
      clientId,
      provider: approvedOffer.provider,
      product: 'REFUND_ADVANCE',
      payoutMethod: 'DIRECT_DEPOSIT',
      directDeposit: {
        routingNumber: '123456789',
        accountNumber: '987654321',
        accountType: 'CHECKING',
      },
    });
    
    console.log('Workflow completed successfully!');
  } catch (error) {
    console.error('Error in workflow:', error);
  }
}

// Export examples for use in other files
export {
  getAvailableProviders,
  getOfficeConfig,
  checkRefundAdvanceEligibility,
  getDisclosures,
  saveConsent,
  submitApplication,
  saveBankProductSelection,
  saveRefundAllocation,
  loadRefundAllocation,
  completeWorkflow,
};
