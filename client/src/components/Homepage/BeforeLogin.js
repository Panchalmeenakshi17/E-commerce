import React, { useState, useEffect } from 'react';
import productsData from '../data/productData';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const BeforeLogin = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  // Dummy recommendation function (replace with actual recommendation logic)
  const generateRecommendations = () => {
    const randomRecommendations = [];
    const numRecommendations = 6; // Number of recommended products to display

    while (randomRecommendations.length < numRecommendations) {
      const randomIndex = Math.floor(Math.random() * productsData.length);
      randomRecommendations.push(productsData[randomIndex]);
    }

    setRecommendedProducts(randomRecommendations);
  };

  // Dummy search function (replace with actual search logic)
  const searchProducts = (query) => {
    return productsData.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.price.toString().includes(query.toLowerCase())
    );
  };

  // Dummy function to generate search suggestions (replace with actual suggestions logic)
  const generateSearchSuggestions = (query) => {
    const randomSuggestions = Array.from({ length: 5 }, () => {
      const randomIndex = Math.floor(Math.random() * productsData.length);
      return productsData[randomIndex].name;
    });

    setSearchSuggestions(randomSuggestions);
  };

  // Generate recommendations and search suggestions when the component mounts
  useEffect(() => {
    generateRecommendations();
    generateSearchSuggestions();
  }, []);

  // Function to handle search input change
  const handleSearchChange = (query) => {
    setSearchTerm(query);
    generateSearchSuggestions(query); // Generate search suggestions as the user types
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Function to handle search suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
  };
  const clearSearch = () => {
    setSearchTerm("");
    // setSearchSuggestions([]);
  };

  return (
    <div className="bg-slate-900 text-white font-Main">
    <div className="container    mx-auto py-4 flex">
      {/* Filtering Section */}
      <div className="w-1/8 bg-purple 00 h-screen overflow-y-auto sticky top-32">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2  placeholder:text-black border text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          {/* {searchTerm && (
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          onClick={clearSearch}
        >
          ✖
        </button>
      )} */}
        {searchTerm && (
        <div
          className="absolute bg-fuchsia-00 right-3 top-1/7 transform -translate-y-8 cursor-pointer"
          onClick={clearSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}
          <div className="mt-2 ">
            {searchSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="cursor-pointer hover:bg-gray-700 rounded-md px-3 py-1"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        </div>
        <hr/>
        <div className="  ">
          <h1 className=' mt-5 text-xl text-[#ebceff]'>Filter</h1>
          <div className='mt-5'>
          {['Electronics', 'Clothing', 'Footwear', 'Accessories', 'Home & Living', 'Fitness & Sports', 'Gaming', 'Outdoor Gear', 'Tools', 'Furniture'].map(category => (
            <label key={category} className="block">
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              <span className="ml-2">{category}</span>
            </label>
          ))}
          </div>
        </div>
      </div>

      <div className="flex bg-yellow-00 flex-grow ml-1/4 overflow-x-auto">
        {/* Products Section */}
        <div className="w-[850px] translate-x-8 bg-fuchsia 0 ">
          <h2 className="text-3xl font-Main font-bold ml-2 mb-4">Products</h2>
          <hr className=' w-1/5'/>
          <div className="grid mt-9 tra grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {searchProducts(searchTerm).filter(product => 
              selectedCategories.length === 0 || selectedCategories.includes(product.category)
            ).map(product => (
              <div key={product.id} className="bg-white hover:-translate-y-2 mt-5 transition ease-in-out hover:shadow-2xl  rounded-lg shadow-xl hover:bg-[#e8e9ff] p-10">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                <h3 className="text-lg text-black font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
                <p className="text-gray-600">Category: {product.category}</p>
                 <div className="flex transition ease-in-out justify-center mt-4 gap-20">
              <button className="px-4 py-2 bg-red-500 hover:bg-red-600 transition ease-in-out text-white rounded-md">
                <FaHeart className="inline-block mr-2" /> Like
              </button>
              <button className="px-4 py-2 bg-[#8f5af9] text-white rounded-md hover:bg-[#5d17e5]">
                <FaShoppingCart className="inline-block mr-2" /> Add to Cart
              </button>
            </div> 
              </div>
            ))}
          </div>
        
        </div>

      </div>

      {/* Recommended Products Section */}
      <div className="w-1/4   overflow-y-auto ">
  <h2 className="text-2xl font-semibold mb-4">Recommended Products on your Past Search</h2>
  <div className="grid grid-cols-1 gap-4">
    {recommendedProducts.map(product => (
      <div
        key={product.id}
        className="bg-white  hover:shadow-xl mt-10 shadow-black transition ease-in-out rounded-lg   shadow-md p-4"
      >
        <div className="overflow-hidden rounded">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 transform transition duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
        <p className="text-gray-600">Category: {product.category}</p>
      </div>
    ))}
  </div>
</div>

    </div>
    </div>
  );
};

export default BeforeLogin;
