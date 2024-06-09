import React from 'react';
import CustomerProfile from './CoustmerProfile';

const CoustmerSelect = () => {
    
        const customer = {
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '123-456-7890',
          policyNumber: 'POLICY123456',
          address: '123 Main St, Anytown, USA',
          photo: 'https://via.placeholder.com/150',
          vehicles: [
            { model: 'Toyota Camry', year: 2015, licensePlate: 'ABC123', expiredate:' 22/4/2026' },
            { model: 'Honda Accord', year: 2018, licensePlate: 'XYZ789', expiredate:' 22/4/2026' },
            { model: 'Ford Mustang', year: 2020, licensePlate: 'MUST2020' , expiredate:' 22/4/2026'},
          ],
        };
        const updateCustomer = (updatedInfo) => {
            setCustomer({ ...customer, ...updatedInfo });
          };

  return (
    <div className=" bg-gray-100 flex items-center justify-center p-4">
      <CustomerProfile customer={customer} updateCustomer={updateCustomer} />
    </div>
  );
};

export default CoustmerSelect;
