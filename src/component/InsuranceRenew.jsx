import React from 'react';

const InsuranceRenew = () => {

  

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-10 lg:p-16">
        <h1 className="text-3xl font-bold mb-6">Insurance Renewal</h1>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Current Policy Details</h2>
          
          <p className="mb-2"><strong>Policy Holder:</strong> John Doe</p>
          <p className="mb-2"><strong>Email:</strong> John@gmail.com</p>
          <p className="mb-2"><strong>Phone Number</strong> 123456789</p>

          
        </div>
        
        <form > 
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="policyNumber">Policy Number</label>
            <input className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" type="text" id="policyNumber"   />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="policyHolder">Plate Number</label>
            <input className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" type="text"  id="policyHolder"  />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="expirationDate">Expiration Date</label>
            <input className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" type="date"  id="expirationDate"  />
          </div>
          
          <div className="mb-8">
            <label className="block text-gray-700 mb-2" htmlFor="renewalOption">Renewal Option</label>
            <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"  id="renewalOption">
              <option value="6months">6 Months</option>
              <option value="1year">1 Year</option>
              <option value="2years">2 Years</option>
            </select>
          </div>
          
          <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default InsuranceRenew;
