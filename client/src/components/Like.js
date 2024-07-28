import React, { useEffect, useState } from "react";
import { FaMinusCircle, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Like = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedLikedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];
    setLikedProducts(storedLikedProducts);
  }, []);

  const handleRemoveLike = (index) => {
    if (window.confirm("Do you really want to remove this product from your liked items?")) {
      const updatedLikedProducts = likedProducts.filter((_, i) => i !== index);
      setLikedProducts(updatedLikedProducts);
      localStorage.setItem("likedProducts", JSON.stringify(updatedLikedProducts));
    }
  };

  const handleAddToCart = (product, index) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If product exists, update the quantity
      cartItems[existingProductIndex].quantity += 1;
    } else {
      // If product doesn't exist, add it to the cart
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Remove from liked products after adding to cart
    const updatedLikedProducts = likedProducts.filter((_, i) => i !== index);
    setLikedProducts(updatedLikedProducts);
    localStorage.setItem("likedProducts", JSON.stringify(updatedLikedProducts));

    alert("Product added to cart successfully!");
  };

  return (
    <div className="w-full h-screen  p-4 font-Main  bg-gray-900">
      <h2 className="text-xl font-bold mt-20 text-white mb-4">Liked Products</h2>
      {likedProducts.length === 0 ? (
        <p className=" text-gray-400">No products liked yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {likedProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 relative"
            >
              <button
                className="absolute top-0 right-0 text-red-600 hover:text-red-800"
                onClick={() => handleRemoveLike(index)}
              >
                <FaMinusCircle size={20} />
              </button>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
                onClick={() => handleAddToCart(product, index)}
              >
                <FaShoppingCart className="inline-block mr-2" /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Like;
