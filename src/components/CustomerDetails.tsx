import React, { useEffect, useState } from 'react'
import { CustomerDetailsProps } from '../types';
import axios from 'axios';

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer, selectedCustomerId }) => {
    const [photos, setPhotos] = useState<string[]>([]);

    console.log(photos, "++66")

    const fetchPhotos = async () => {
        try {
            const response = await axios.get('https://api.unsplash.com/photos/random', {
                params: { count: 9 },
                headers: {
                    Authorization: `Client-ID txK5keyMmtwKNpM4kvDW7tR716QxA8wu-5DRMRPcvGA`,
                },
            });
            setPhotos(response.data.map((photo: any) => photo.urls.small));
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    };

    useEffect(() => {
        fetchPhotos();
        const interval = setInterval(fetchPhotos, 10000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetchPhotos();
    }, [selectedCustomerId]);

    if (!customer) {
        return <div>Select a customer to view details</div>;
    }

    return (
        <div className="customer-details">
            <div className='customer-info'>
                <h1 className="customer-name">{customer.name}</h1>
                <p className="customer-title">{customer.title}</p>
                {/* <p>{customer.address}</p> */}
            </div>

            <div className="photo-grid">
                {photos?.map((photo, index) => (
                    <div key={index} className='photo-container'>
                        <img key={index} src={photo} alt={`Random ${index}`} className="photo" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerDetails