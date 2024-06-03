import React, { useState, useEffect } from 'react';
import productsData from '../data/productData';
import { FaHeart, FaShoppingCart, FaFilter } from 'react-icons/fa';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showFilter, setShowFilter] = useState(false); // Modal visibility
  const [productsToShow, setProductsToShow] = useState(10); // Initialize with 10 products

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
    setSearchSuggestions([]);
  };

  // Function to toggle filter visibility
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  // Function to toggle showing more products
  const toggleShowMore = () => {
    if (productsToShow >= 100) {
      setProductsToShow(10); // Reset to initial state
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    } else {
      setProductsToShow(prev => Math.min(prev + 10, 100)); // Show 10 more products, max 100
    }
  };
  const toggleShowLess = () => {
    const minProductsToShow = 10; // Minimum number of products to show
  
    if (productsToShow > minProductsToShow) {
      setProductsToShow(minProductsToShow);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    }
  };
  const allProducts = searchProducts(searchTerm).filter(product =>
    selectedCategories.length === 0 || selectedCategories.includes(product.category)
  );

  return (
    <div className="bg-slate-900  px-4 md:px-20 text-white font-Main">
      <div className=" ">
      <div className="container   mx-auto py-4 gap-10 md:flex">
        {/* Search Section */}
        <div className="w-full md:w-1/4  mt-20  mb-4 md:mb-0">
          
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 placeholder-text-black border text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          {searchTerm && (
            <div
              className="absolute   left-80 top-1/7 transform -translate-y-8 cursor-pointer"
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
          <div className="mt-2">
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

        {/* Filtering Section */}
        {/* <div className={`w-full md:w-1/ ${showFilter ? 'block' : 'hidden'} md:block bg-purple-900 h-screen overflow-y-auto sticky top-0 md:top-32`}>
          <h1 className=' font-Main mt-5 text-xl text-[#ebceff]'>Filter</h1>
          <hr />
          <div className="mt-5">
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
        </div> */}

        {/* Products Section */}
        <div className="w-full bg-fuchsia-0 mt-20 md:w-full  ml-0 md:ml">
          {/* <button
            className="md:hidden px-4 py-2 bg-blue-500 text-white rounded-md my-4"
            onClick={toggleFilter}
          >
            <FaFilter className="inline-block mr-2" /> Filter
          </button> */}

          <div className="w-full  ">
            <div className=' flex justify-between '>
            <h2 className="text-3xl font-Main font-bold ml-2 mb-4">Products</h2>
            <div className="flex justify-start mb-2">
            <button
              className="px-4 py-2   text-white rounded-md mr-2"
              onClick={toggleFilter}
            >
              <FaFilter className="inline-block mr-2" /> Filter
            </button>
          </div>
            </div>
            <hr className='md:w-1/4 w-52'  />
            <div className="grid mt-9 px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {allProducts.slice(0, productsToShow).map((product) => (
                <div key={product.id} className={`bg-white hover:-translate-y-2 mt-5 transition ease-in-out hover:shadow-2xl rounded-lg shadow-xl hover:bg-[#e8e9ff] p-4`}>
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                  <h3 className="text-lg text-black font-bold">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
                  <p className="text-gray-600">Category: {product.category}</p>
                  <div className="flex transition ease-in-out justify-between mt-4 gap-10">
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
            <div className="flex md:gap-20  gap-5 justify-center mt-9">
              <button className="px-4 py-2 w-full  bg-[#9f9ff7a5] text-purple-100 hover:bg-[#9f9ff7e3] transition ease-in-out rounded-full " onClick={toggleShowMore}>
                {productsToShow >= 100 ? 'Show Less' : 'View More'}
              </button>
              <button className="px-4 py-2 w-full  bg-[#9f9ff7a5] text-purple-100 hover:bg-[#9f9ff7e3] transition ease-in-out rounded-full " onClick={toggleShowLess}>Show Less
                {/* {productsToShow >= 100 ? 'Show Less' : 'View More'} */}
              </button>
            </div>
          </div>
          </div>

          {/* Recommended Products Section */}
          <div className="mb-10 md:mt-20 mt-20 bg-yellow-00
          ">
          <div className="w-full bg-purple-00 md:w-full ml-0 md:   mt-4 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Recommended Products on your Past Search</h2> <hr className=' w-full '/>
            <div className="grid mt- px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
              {recommendedProducts.map(product => (
                <div
                  key={product.id}
                  className="bg-white hover:shadow-xl mt-10 shadow-black transition ease-in-out rounded-lg shadow-md p-4"
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
      </div>

      {/* Filter Modal */}
      {showFilter && (
        <div className="fixed inset-0 bg-[#0f172a] bg-opacity-50  backdrop-blur-lg flex justify-center items-center z-50">
          <div className="bg-purple-900 w-11/12 md:w-1/3 p-5 rounded-lg overflow-y-auto max-h-full">
            <button
              className="text-white text-2xl float-right"
              onClick={toggleFilter}
            >
              &times;
            </button>
            <h1 className='mt-5 font-Main font-bold  text-xl text-[#ebceff]'>Filter</h1>
            <hr className=' w-1/6 '/>
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
      )}
    </div>
  );
};

export default Homepage;
