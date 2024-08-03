import React from 'react'
import { CustomerCardProps } from '../types';

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, isSelected, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`customer-card ${isSelected ? 'selected' : ''}`}
        >
            <h2 className="customer-name">{customer.name}</h2>
            <p className="customer-title">{customer.title}</p>
        </div>
    );
};

export default CustomerCard