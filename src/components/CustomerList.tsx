import React from 'react'
import { CustomerListProps } from '../types';
import CustomerCard from './CustomerCard';

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomerId, onSelectCustomer }) => {
    return (
      <div className="customer-list">
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            isSelected={selectedCustomerId === customer.id}
            onClick={() => onSelectCustomer(customer.id)}
          />
        ))}
      </div>
    );
  };

export default CustomerList