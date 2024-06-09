import React from 'react'
import Accordion from '../CardComponents/Accordion';

const steps = [
  { label: 'Submitted', status: 'completed', details: 'Your submission has been received.' },
  { label: 'Analyzing', status: 'in-progress', details: 'We are analyzing your request.' },
  { label: 'Decision Taken', status: 'pending', details: 'A decision will be made soon.' },
  { label: 'Refunded', status: 'pending', details: 'Your refund is being processed.' },
];

const ClaimTemp = () => {

  
  
  return (
    <div className="p-8">
      <Accordion title="Reimbursement of medical cost - Japan" steps={steps} status={'refunded'} />
      
    </div>
  );
};
  

export default ClaimTemp
