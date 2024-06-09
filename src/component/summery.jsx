import React from 'react';

const Summary = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold">Last step to own your free headache policy.</h3>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/3 px-4">
                <div className="bg-white shadow-md rounded p-4 mb-6">
                  <p className="font-semibold">Quote ID:</p>
                  <p>Id</p>
                  <hr className="my-4"/>
                  <p className="font-semibold">Fullname:</p>
                  <p>fullname</p>
                  <p className="font-semibold">NRIC/Passport No.:</p>
                  <p>identify number</p>
                  <p className="font-semibold">Email Address:</p>
                  <p>email</p>
                  <p className="font-semibold">Mobile Number:</p>
                  <p>12345678</p>
                  <hr className="my-4"/>
                  <dl className="text-left">
                    <dt className="font-semibold">Market Price (MYR):</dt>
                    <dd>price</dd>
                    <dt className="font-semibold">Vehicle Number:</dt>
                    <dd>Vehicle number</dd>
                    <dt className="font-semibold">Coverage Type:</dt>
                    <dd>coverage type</dd>
                    <dt className="font-semibold">Location Type:</dt>
                    <dd>location</dd>
                    <dt className="font-semibold">Engine Capacity Type:</dt>
                    <dd>Engine capacity</dd>
                  </dl>
                </div>
              </div>
              <div className="w-full md:w-2/3 px-4">
                <div className="bg-white shadow-md rounded p-4 mb-6">
                  <h3 className="text-xl font-semibold">Congratulations User!</h3>
                  <p>Your quotation of Car Insurance is now ready. Just a step behind of getting it. Insurance Company is the best partner on the road and will protect you and your car all day 24/7 for 365 days.</p>

                  <div className="flex flex-wrap mt-6">
                    <div className="w-full sm:w-1/3 p-2">
                      <p className="font-semibold">Plan Name</p>
                      <h4 className="text-lg">Advance Protection</h4>
                    </div>
                    <div className="w-full sm:w-1/3 p-2">
                      <p className="font-semibold">From</p>
                      <h4 className="text-lg">month date</h4>
                    </div>
                    <div className="w-full sm:w-1/3 p-2">
                      <p className="font-semibold">To</p>
                      <h4 className="text-lg">month date</h4>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-2/3 p-2">
                    <p className="my-2"><i className="fa fa-envelope-o"></i> <a href="/" className="text-blue-500">Send quote summary to my email</a></p>
                    <p className="my-2"><i className="fa fa-mobile"></i> <a href="/" className="text-blue-500">Send sms of quote link to my phone</a></p>
                    <p className="my-2"><i className="fa fa-phone"></i> <a href="/" className="text-blue-500">Contact agent for further questions</a></p>
                  </div>
                  <div className="w-full md:w-1/3 p-2">
                    <div className="bg-white shadow-md rounded p-4 text-right">
                      <h3 className="text-xl font-bold">Total : money</h3>
                      <h5 className="text-sm">6% GST Included</h5>
                      <h5 className="text-sm">0% Service Charge Included</h5>
                    </div>
                    <div className="mt-4 text-center">
                      <button className="btn btn-success w-full py-3 bg-green-500 text-white font-semibold rounded">Pay Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
