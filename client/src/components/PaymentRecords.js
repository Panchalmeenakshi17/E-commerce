import React, { useEffect, useState } from 'react';

const PaymentRecords = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const storedPayments = JSON.parse(localStorage.getItem('payments')) || [];
    setPayments(storedPayments);
  }, []);

  return (
    <div className="bg-gray-900 font-Main p-6 shadow-lg h-screen w-full">
      <h1 className="text-2xl mt-20 md:mt-20 font-bold text-white font-Main mb-4">Payment Records</h1>
      <hr className="md:w-1/4 w-56" />

      {payments.length > 0 ? (
        <div className="overflow-x-auto md:w-[900px] mt-10">
          <table className="min-w-full bg-gray-700 text-white">
            <thead>
              <tr className="text-left">
                <th className="py-3 px-4 border-b border-gray-600">Sr. No.</th>
                <th className="py-3 px-4 border-b border-gray-600">Amount</th>
                <th className="py-3 px-4 border-b border-gray-600">Currency</th>
                <th className="py-3 px-4 border-b border-gray-600">Status</th>
                <th className="py-3 px-4 border-b border-gray-600">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index} className="hover:bg-gray-600">
                  <td className="py-2 px-4 border-b border-gray-600">{index + 1}</td>
                  <td className="py-2 px-4 border-b border-gray-600">{payment.amount}</td>
                  <td className="py-2 px-4 border-b border-gray-600">{payment.currency}</td>
                  <td className="py-2 px-4 border-b border-gray-600">{payment.status}</td>
                  <td className="py-2 px-4 border-b border-gray-600">{new Date(payment.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-400">No payment records found.</p>
      )}
    </div>
  );
};

export default PaymentRecords;
