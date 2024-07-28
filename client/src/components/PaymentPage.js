// import React from 'react';

// const PaymentPage = () => {
//   const handlePayment = () => {
//     const totalAmountInINR = parseInt(localStorage.getItem('totalAmount'), 10);
//     const amountInPaise = totalAmountInINR * 100; // Convert to paise

//     const options = {
//       key: 'rzp_test_jKTtZwMGoJnc3o', // Replace with your Razorpay key
//       amount: amountInPaise, // Amount in paise
//       currency: 'INR',
//       name: 'Your Company',
//       description: 'Test Transaction',
//       handler: function (response) {
//         alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
//       },
//       prefill: {
//         name: 'John Doe',
//         email: 'john@example.com',
//         contact: '9876543210',
//       },
//       theme: {
//         color: '#3399cc',
//       },
//       modal: {
//         ondismiss: function () {
//           alert('Payment process was cancelled.');
//         },
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//         <h1 className="text-xl font-bold mb-4">Payment Page</h1>
//         <p className="mb-4">Click the button below to proceed with the payment.</p>
//         <button
//           onClick={handlePayment}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Pay Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import PaymentRecords from './PaymentRecords';

const PaymentPage = () => {
  const [paymentStatus, setPaymentStatus] = useState(''); // State for payment status
  const navigate = useNavigate(); // Hook for navigation
  const totalAmountInINR = parseInt(localStorage.getItem('totalAmount'), 10);

  // Convert amount to a more readable format with the currency symbol
  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  const handlePayment = () => {
    const amountInPaise = totalAmountInINR * 100; // Convert to paise

    const options = {
      key: 'rzp_test_jKTtZwMGoJnc3o', // Replace with your Razorpay key
      amount: amountInPaise, // Amount in paise
      currency: 'INR',
      name: 'Your Company',
      description: 'Test Transaction',
      handler: function (response) {
        alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
        setPaymentStatus('Success'); // Update status to Success
        savePaymentDetails(response.razorpay_payment_id, amountInPaise / 100, 'INR', 'Success'); // Save payment
        setTimeout(() => navigate('/'), 2000); // Redirect to homepage after 2 seconds
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9876543210',
      },
      theme: {
        color: '#3399cc',
      },
      modal: {
        ondismiss: function () {
          alert('Payment process was cancelled.');
        },
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const savePaymentDetails = (id, amount, currency, status) => {
    const payments = JSON.parse(localStorage.getItem('payments')) || [];
    payments.push({
      id,
      amount,
      currency,
      status,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('payments', JSON.stringify(payments));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-start min-h-screen py-6 px-4 space-y-6 md:space-y-0 md:space-x-6">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
          <p className="mb-4 text-gray-400">Total amount to be paid:</p>
          {/* Conditionally render the amount based on payment status */}
          {paymentStatus !== 'Success' && (
            <h2 className="text-3xl font-semibold mb-6">{formatAmount(totalAmountInINR)}</h2>
          )}
          <p className="mb-6 text-gray-400">Click the button below to proceed with the payment.</p>
          <button
            onClick={handlePayment}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Pay Now
          </button>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <PaymentRecords />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
