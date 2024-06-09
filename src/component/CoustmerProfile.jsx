import React, { useState } from 'react';
import VehicleAccordion from '../CardComponents/VehicleAccordion';

const CustomerProfile = ({ customer, updateCustomer }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    address: customer.address,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCustomer(formData);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-7xl mx-auto mt-8 p-8">
      <div className="flex items-center">
        <img
          className="w-32 h-32 rounded-full object-cover"
          src="./pictures/custmer.png"
          alt="Customer avatar"
        />
        <div className="ml-6 flex-1">
          {!isEditing ? (
            <>
              <h2 className="text-4xl font-semibold text-gray-800">{customer.name}</h2>
              <p className="text-gray-600">{customer.email}</p>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Edit Profile
              </button>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-gray-700 text-lg">Profile Details</h3>
        <ul className="mt-2">
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Phone:</span>
            <span>{customer.phone}</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Policy Number:</span>
            <span>{customer.policyNumber}</span>
          </li>
          <li className="flex justify-between py-1">
            <span className="text-gray-600">Address:</span>
            <span>{customer.address}</span>
          </li>
        </ul>
        <VehicleAccordion vehicles={customer.vehicles} />
      </div>
    </div>
  );
};

export default CustomerProfile;
