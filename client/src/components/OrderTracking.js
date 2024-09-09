import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaTruck, FaBox } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";

const OrderTracking = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("orderDetails"));
    setOrderDetails(orderData);
  }, []);

  if (!orderDetails) {
    return <div className="text-white">No order details found.</div>;
  }

  const statusSteps = [
    { status: "Nearby Store", icon: <AiOutlineClockCircle size={24} /> },
    { status: "Out for Delivery", icon: <FaTruck size={24} /> },
    { status: "At Your Doorstep", icon: <FaBox size={24} /> },
  ];

  return (
    <div className="bg-gray-900 font-Main p-6 h-full w-full text-white">
      <h1 className="text-2xl mt-20 font-bold mb-4">Track Your Order</h1>
      <hr className="w-56 mb-6" />
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Order ID: {orderDetails.id}</h2>
          <p>Status: {orderDetails.status}</p>
          <p>Amount: {orderDetails.amount} {orderDetails.currency}</p>
          <p>Timestamp: {new Date(orderDetails.timestamp).toLocaleString()}</p>
          <p className="mt-4 font-semibold">Products:</p>
          <ul>
            {orderDetails.products.map((product, index) => (
              <li key={index} className="flex items-center mt-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded mr-4"
                />
                <div>
                  <p className="text-gray-300">{product.name}</p>
                  <p className="text-gray-400">
                    {product.quantity} x {product.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 mt-8 md:mt-0 ml-0 md:ml-8 bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Delivery Timeline</h2>
          <div className="relative">
            {statusSteps.map((step, index) => (
              <div key={index} className="flex items-center mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 text-white">
                    {step.icon}
                  </div>
                  <div className="ml-4 text-gray-300">{step.status}</div>
                </div>
                {index < statusSteps.length - 1 && (
                  <div
                    className={`absolute top-1/2 left-2 w-0.5 h-8 bg-blue-500 ${
                      index === statusSteps.length - 2 ? "mb-8" : ""
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery GIF */}
      <div className="mt-8 text-center">
        <img
          src="https://media.tenor.com/boiTr.gif" // Correct URL format
          alt="Delivery Man"
          className="w-40 h-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default OrderTracking;
