/* eslint-disable @typescript-eslint/no-unused-vars */
export interface Customer {
    id: number;
    name: string;
    title: string;
    address: string;
}

export interface CustomerCardProps {
    customer: Customer;
    isSelected: boolean;
    onClick: () => void;
}

export interface CustomerListProps {
    customers: Customer[];
    selectedCustomerId: number | null;
    onSelectCustomer: (customerId: number) => void;
}

export interface CustomerDetailsProps {
    customer: Customer | null;
    selectedCustomerId: any;
}