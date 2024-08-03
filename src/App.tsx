import React, { useState } from 'react';
import './App.css';
import { Customer } from './types';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { dummyText } from './constant';

function App() {
  const customers: Customer[] = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    name: `Customer ${i + 1}`,
    title: dummyText,
    address: `Address ${i + 1}`,
  }));

  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  const selectedCustomer = customers.find((customer) => customer.id === selectedCustomerId) || null;
  return (
    <div className='main'>
      <p className='heading-title'>{`This here is the Heading`}</p>
      <div className="main-container">
        <div className="customer-list-container">
          <CustomerList
            customers={customers}
            selectedCustomerId={selectedCustomerId}
            onSelectCustomer={setSelectedCustomerId}
          />
        </div>
        <div className="customer-details-container">
          <CustomerDetails customer={selectedCustomer} selectedCustomerId={selectedCustomerId} />
        </div>
      </div>
    </div>
  );
}

export default App;
