import React, { useEffect, useState } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
    } else {
      updatedCartItems.splice(index, 1);
    }
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    alert("Item removed from cart successfully!");
  };

  // const handleProceedToPay = () => {
  //   const isAuthenticated = JSON.parse(localStorage.getItem("currentUser")) || false;
  //   if (isAuthenticated) {
  //     const totalAmount = calculateTotalInINR().replace('₹', '').replace(',', ''); // Get the total amount in INR
  //     localStorage.setItem('totalAmount', totalAmount); // Store the total amount in localStorage
  //     navigate("/payment"); // Redirect to payment page if authenticated
  //   } else {
  //     alert("Please sign in to proceed to payment."); // Alert user if not authenticated
  //     navigate("/signin"); // Redirect to signin page if not authenticated
  //   }
  // };
  const handleProceedToPay = () => {
    // const isAuthenticated = JSON.parse(localStorage.getItem("currentUser")) || false;
    
      const totalAmount = calculateTotalInINR().replace('₹', '').replace(',', ''); // Get the total amount in INR
      localStorage.setItem('totalAmount', totalAmount); // Store the total amount in localStorage
      navigate("/payment"); // Redirect to payment page if authenticated
    
  };
  const formatPrice = (priceInUSD) => {
    const exchangeRate = 74; // Example exchange rate, 1 USD = 74 INR
    const priceInINR = (priceInUSD * exchangeRate).toFixed(2);
    return `₹${priceInINR} ($${priceInUSD})`;
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTotalInINR = () => {
    const exchangeRate = 74; // Example exchange rate, 1 USD = 74 INR
    const totalInUSD = calculateTotal();
    const totalInINR = (totalInUSD * exchangeRate).toFixed(2);
    return `₹${totalInINR} ($${totalInUSD})`;
  };

  return (
    <div className="flex bg-gray-900  h-full font-Main flex-wrap">
      {/* <h1 className=" text-white mt-24 text-2xl font-bold">Your Cart Items Appear here:</h1> */}
      <div className="w-full md:h-full h-full md:w-3/4 p-4">
        <div className="flex bg-fuchsi-300 flex-wrap mt-20 -mx-2">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 m-2 flex flex-col justify-between w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/5 relative"
            >
              <button
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                onClick={() => handleRemoveItem(index)}
              >
                <FaMinusCircle size={20} />
              </button>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover mb-2 rounded"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">Price: {formatPrice(item.price)}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/4 p-4 mt-20 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between mb-2">
            <span>{item.name} (x{item.quantity})</span>
            <span>{formatPrice(item.price * item.quantity)}</span>
          </div>
        ))}
        <hr className="my-4" />
        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total:</span>
          <span>{calculateTotalInINR()}</span>
        </div>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleProceedToPay}
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Cart;
