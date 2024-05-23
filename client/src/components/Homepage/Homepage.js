// import React from 'react';
// import productsData from '../data/productData';

// const Homepage = () => {
//   return (
//     <div className="container mx-auto py-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {productsData.map(product => (
//           <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-gray-600">{product.description}</p>
//             <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
//             <p className="text-gray-600">Category: {product.category}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Homepage;
// import React, { useState } from 'react';
// import productsData from '../data/productData';

// const Homepage = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filter products based on search term (case-insensitive)
//   const filteredProducts = productsData.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.price.toString().includes(searchTerm.toLowerCase()) // Convert price to string before comparison
//   );

//   return (
//     <div className="container mx-auto py-4">
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {filteredProducts.map(product => (
//           <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-gray-600">{product.description}</p>
//             <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
//             <p className="text-gray-600">Category: {product.category}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Homepage;
// import React, { useState } from 'react';
// import productsData from '../data/productData';

// const Homepage = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filter products based on search term (case-insensitive)
//   const filteredProducts = productsData.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.price.toString().includes(searchTerm.toLowerCase()) // Convert price to string before comparison
//   );

//   return (
//     <div className="container mx-auto py-4">
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
//         {filteredProducts.map(product => (
//           <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-gray-600">{product.description}</p>
//             <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
//             <p className="text-gray-600">Category: {product.category}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Homepage;

// import React, { useState } from 'react';
// import productsData from '../data/productData';

// const Homepage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   // Filter products based on search term and selected categories
//   const filteredProducts = productsData.filter(product =>
//     (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.price.toString().includes(searchTerm.toLowerCase())) &&
//     (selectedCategories.length === 0 || selectedCategories.includes(product.category))
//   );

//   // Function to handle checkbox change
//   const handleCheckboxChange = (category) => {
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(selectedCategories.filter(item => item !== category));
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   return (
//     <div className="container mx-auto py-4">
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <div className="flex mb-4">
//         {['Electronics', 'Clothing', 'Footwear', 'Accessories', 'Home & Living', 'Fitness & Sports', 'Gaming', 'Outdoor Gear', 'Tools', 'Furniture'].map(category => (
//           <label key={category} className="mr-4">
//             <input
//               type="checkbox"
//               value={category}
//               checked={selectedCategories.includes(category)}
//               onChange={() => handleCheckboxChange(category)}
//             />
//             <span className="ml-1">{category}</span>
//           </label>
//         ))}
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
//         {filteredProducts.map(product => (
//           <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-gray-600">{product.description}</p>
//             <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
//             <p className="text-gray-600">Category: {product.category}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Homepage;

//crucial upwards

// import React, { useState, useEffect } from 'react';
// import productsData from '../data/productData';

// const Homepage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [recommendedProducts, setRecommendedProducts] = useState([]);

//   // Dummy recommendation function (replace with actual recommendation logic)
//   const generateRecommendations = (userData) => {
//     // In a real scenario, use userData to generate recommendations
//     // For demonstration, we'll simply select random products
//     const randomRecommendations = [];
//     const numRecommendations = 6; // Number of recommended products to display

//     while (randomRecommendations.length < numRecommendations) {
//       const randomIndex = Math.floor(Math.random() * productsData.length);
//       randomRecommendations.push(productsData[randomIndex]);
//     }

//     setRecommendedProducts(randomRecommendations);
//   };

//   // Dummy user data (replace with actual user data)
//   const userData = {
//     // Provide user's view history or past purchases here
//     // For demonstration, we'll assume an empty view history
//   };

//   // Generate recommendations when the component mounts
//   useEffect(() => {
//     generateRecommendations(userData);
//   }, []);

//   // Filter products based on search term and selected categories
//   const filteredProducts = productsData.filter(product =>
//     (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     product.price.toString().includes(searchTerm.toLowerCase())) &&
//     (selectedCategories.length === 0 || selectedCategories.includes(product.category))
//   );

//   // Function to handle checkbox change
//   const handleCheckboxChange = (category) => {
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(selectedCategories.filter(item => item !== category));
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   return (
//     <div className="container mx-auto py-4">
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <div className="flex mb-4">
//         {['Electronics', 'Clothing', 'Footwear', 'Accessories', 'Home & Living', 'Fitness & Sports', 'Gaming', 'Outdoor Gear', 'Tools', 'Furniture'].map(category => (
//           <label key={category} className="mr-4">
//             <input
//               type="checkbox"
//               value={category}
//               checked={selectedCategories.includes(category)}
//               onChange={() => handleCheckboxChange(category)}
//             />
//             <span className="ml-1">{category}</span>
//           </label>
//         ))}
//       </div>
//       <h2 className="text-2xl font-semibold mb-2">Recommended Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
//         {recommendedProducts.map(product => (
//           <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-600">{product.description}</p>
//             <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
//             <p className="text-gray-600">Category: {product.category}</p>
//           </div>
//         ))}
//       </div>
//       <h2 className="text-2xl font-semibold mt-8">Filtered Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
//         {filteredProducts.map(product => (
//           <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-600">{product.description}</p>
//             <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
//             <p className="text-gray-600">Category: {product.category}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Homepage;


// import React, { useState, useEffect } from 'react';
// import productsData from '../data/productData';

// const Homepage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [recommendedProducts, setRecommendedProducts] = useState([]);
//   const [searchSuggestions, setSearchSuggestions] = useState([]);

//   // Dummy recommendation function (replace with actual recommendation logic)
//   const generateRecommendations = (userData) => {
//     // In a real scenario, use userData to generate recommendations
//     // For demonstration, we'll simply select random products
//     const randomRecommendations = [];
//     const numRecommendations = 6; // Number of recommended products to display

//     while (randomRecommendations.length < numRecommendations) {
//       const randomIndex = Math.floor(Math.random() * productsData.length);
//       randomRecommendations.push(productsData[randomIndex]);
//     }

//     setRecommendedProducts(randomRecommendations);
//   };

//   // Dummy search function (replace with actual search logic)
//   const searchProducts = (query) => {
//     // In a real scenario, use AI-powered search to get search results
//     // For demonstration, we'll filter products based on the search query
//     return productsData.filter(product =>
//       product.name.toLowerCase().includes(query.toLowerCase()) ||
//       product.description.toLowerCase().includes(query.toLowerCase()) ||
//       product.category.toLowerCase().includes(query.toLowerCase()) ||
//       product.price.toString().includes(query.toLowerCase())
//     );
//   };

//   // Dummy function to generate search suggestions (replace with actual suggestions logic)
//   const generateSearchSuggestions = (query) => {
//     // In a real scenario, use AI-powered search to generate suggestions
//     // For demonstration, we'll generate random suggestions
//     const randomSuggestions = Array.from({ length: 5 }, () => {
//       const randomIndex = Math.floor(Math.random() * productsData.length);
//       return productsData[randomIndex].name;
//     });

//     setSearchSuggestions(randomSuggestions);
//   };

//   // Generate recommendations and search suggestions when the component mounts
//   useEffect(() => {
//     generateRecommendations();
//     generateSearchSuggestions();
//   }, []);

//   // Function to handle search input change
//   const handleSearchChange = (query) => {
//     setSearchTerm(query);
//     generateSearchSuggestions(query); // Generate search suggestions as the user types
//   };

//   // Function to handle checkbox change
//   const handleCheckboxChange = (category) => {
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(selectedCategories.filter(item => item !== category));
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   // Function to handle search suggestion click
//   const handleSuggestionClick = (suggestion) => {
//     setSearchTerm(suggestion);
//   };

//   return (
//     <div className="container mx-auto py-4">
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//           value={searchTerm}
//           onChange={(e) => handleSearchChange(e.target.value)}
//         />
//         <div className="mt-2">
//           {searchSuggestions.map((suggestion, index) => (
//             <div
//               key={index}
//               className="cursor-pointer hover:bg-gray-100 rounded-md px-3 py-1"
//               onClick={() => handleSuggestionClick(suggestion)}
//             >
//               {suggestion}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex mb-4">
//         {['Electronics', 'Clothing', 'Footwear', 'Accessories', 'Home & Living', 'Fitness & Sports', 'Gaming', 'Outdoor Gear', 'Tools', 'Furniture'].map(category => (
//           <label key={category} className="mr-4">
//             <input
//               type="checkbox"
//               value={category}
//               checked={selectedCategories.includes(category)}
//               onChange={() => handleCheckboxChange(category)}
//             />
//             <span className="ml-1">{category}</span>
//           </label>
//         ))}
//       </div>
//       <h2 className="text-2xl font-semibold mb-2">Recommended Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
//         {recommendedProducts.map(product => (
//           <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-600">{product.description}</p>
//             <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
//             <p className="text-gray-600">Category: {product.category}</p>
//           </div>
//         ))}
//       </div>
//       <h2 className="text-2xl font-semibold mt-8">Search Results</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
//         {searchProducts(searchTerm).map(product => (
//           <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-600">{product.description}</p>
//             <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
//             <p className="text-gray-600">Category: {product.category}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Homepage;


//new
// import React, { useState, useEffect } from 'react';
// import productsData from '../data/productData';

// const Homepage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [recommendedProducts, setRecommendedProducts] = useState([]);
//   const [searchSuggestions, setSearchSuggestions] = useState([]);

//   // Dummy recommendation function (replace with actual recommendation logic)
//   const generateRecommendations = (userData) => {
//     // In a real scenario, use userData to generate recommendations
//     // For demonstration, we'll simply select random products
//     const randomRecommendations = [];
//     const numRecommendations = 6; // Number of recommended products to display

//     while (randomRecommendations.length < numRecommendations) {
//       const randomIndex = Math.floor(Math.random() * productsData.length);
//       randomRecommendations.push(productsData[randomIndex]);
//     }

//     setRecommendedProducts(randomRecommendations);
//   };

//   // Dummy search function (replace with actual search logic)
//   const searchProducts = (query) => {
//     // In a real scenario, use AI-powered search to get search results
//     // For demonstration, we'll filter products based on the search query
//     return productsData.filter(product =>
//       product.name.toLowerCase().includes(query.toLowerCase()) ||
//       product.description.toLowerCase().includes(query.toLowerCase()) ||
//       product.category.toLowerCase().includes(query.toLowerCase()) ||
//       product.price.toString().includes(query.toLowerCase())
//     );
//   };

//   // Dummy function to generate search suggestions (replace with actual suggestions logic)
//   const generateSearchSuggestions = (query) => {
//     // In a real scenario, use AI-powered search to generate suggestions
//     // For demonstration, we'll generate random suggestions
//     const randomSuggestions = Array.from({ length: 5 }, () => {
//       const randomIndex = Math.floor(Math.random() * productsData.length);
//       return productsData[randomIndex].name;
//     });

//     setSearchSuggestions(randomSuggestions);
//   };

//   // Generate recommendations and search suggestions when the component mounts
//   useEffect(() => {
//     generateRecommendations();
//     generateSearchSuggestions();
//   }, []);

//   // Function to handle search input change
//   const handleSearchChange = (query) => {
//     setSearchTerm(query);
//     generateSearchSuggestions(query); // Generate search suggestions as the user types
//   };

//   // Function to handle checkbox change
//   const handleCheckboxChange = (category) => {
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(selectedCategories.filter(item => item !== category));
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   // Function to handle search suggestion click
//   const handleSuggestionClick = (suggestion) => {
//     setSearchTerm(suggestion);
//   };

//   return (
//     <div className="container mx-auto py-4 grid grid-cols-4 gap-4">
//       {/* Filtering Section */}
//       <div className="col-span-1">
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//             value={searchTerm}
//             onChange={(e) => handleSearchChange(e.target.value)}
//           />
//           <div className="mt-2">
//             {searchSuggestions.map((suggestion, index) => (
//               <div
//                 key={index}
//                 className="cursor-pointer hover:bg-gray-100 rounded-md px-3 py-1"
//                 onClick={() => handleSuggestionClick(suggestion)}
//               >
//                 {suggestion}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mb-4">
//           {['Electronics', 'Clothing', 'Footwear', 'Accessories', 'Home & Living', 'Fitness & Sports', 'Gaming', 'Outdoor Gear', 'Tools', 'Furniture'].map(category => (
//             <label key={category} className="block">
//               <input
//                 type="checkbox"
//                 value={category}
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => handleCheckboxChange(category)}
//               />
//               <span className="ml-2">{category}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Products Section */}
//       <div className="col-span-2">
//         <h2 className="text-2xl font-semibold mb-4">Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {searchProducts(searchTerm).filter(product => 
//             selectedCategories.length === 0 || selectedCategories.includes(product.category)
//           ).map(product => (
//             <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-gray-600">{product.description}</p>
//               <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
//               <p className="text-gray-600">Category: {product.category}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Recommended Products Section */}
//       <div className="col-span-1">
//         <h2 className="text-2xl font-semibold mb-4">Recommended Products</h2>
//         <div className="grid grid-cols-1 gap-4">
//           {recommendedProducts.map(product => (
//             <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-gray-600">{product.description}</p>
//               <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
//               <p className="text-gray-600">Category: {product.category}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Homepage;

//impor
// import React, { useState, useEffect } from 'react';
// import productsData from '../data/productData';

// const Homepage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [recommendedProducts, setRecommendedProducts] = useState([]);
//   const [searchSuggestions, setSearchSuggestions] = useState([]);

//   // Dummy recommendation function (replace with actual recommendation logic)
//   const generateRecommendations = (userData) => {
//     // In a real scenario, use userData to generate recommendations
//     // For demonstration, we'll simply select random products
//     const randomRecommendations = [];
//     const numRecommendations = 6; // Number of recommended products to display

//     while (randomRecommendations.length < numRecommendations) {
//       const randomIndex = Math.floor(Math.random() * productsData.length);
//       randomRecommendations.push(productsData[randomIndex]);
//     }

//     setRecommendedProducts(randomRecommendations);
//   };

//   // Dummy search function (replace with actual search logic)
//   const searchProducts = (query) => {
//     // In a real scenario, use AI-powered search to get search results
//     // For demonstration, we'll filter products based on the search query
//     return productsData.filter(product =>
//       product.name.toLowerCase().includes(query.toLowerCase()) ||
//       product.description.toLowerCase().includes(query.toLowerCase()) ||
//       product.category.toLowerCase().includes(query.toLowerCase()) ||
//       product.price.toString().includes(query.toLowerCase())
//     );
//   };

//   // Dummy function to generate search suggestions (replace with actual suggestions logic)
//   const generateSearchSuggestions = (query) => {
//     // In a real scenario, use AI-powered search to generate suggestions
//     // For demonstration, we'll generate random suggestions
//     const randomSuggestions = Array.from({ length: 5 }, () => {
//       const randomIndex = Math.floor(Math.random() * productsData.length);
//       return productsData[randomIndex].name;
//     });

//     setSearchSuggestions(randomSuggestions);
//   };

//   // Generate recommendations and search suggestions when the component mounts
//   useEffect(() => {
//     generateRecommendations();
//     generateSearchSuggestions();
//   }, []);

//   // Function to handle search input change
//   const handleSearchChange = (query) => {
//     setSearchTerm(query);
//     generateSearchSuggestions(query); // Generate search suggestions as the user types
//   };

//   // Function to handle checkbox change
//   const handleCheckboxChange = (category) => {
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(selectedCategories.filter(item => item !== category));
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   // Function to handle search suggestion click
//   const handleSuggestionClick = (suggestion) => {
//     setSearchTerm(suggestion);
//   };

//   return (
//     <div className="container mx-auto py-4 grid grid-cols-4 gap-4">
//       {/* Filtering Section */}
//       <div className="col-span-1">
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//             value={searchTerm}
//             onChange={(e) => handleSearchChange(e.target.value)}
//           />
//           <div className="mt-2">
//             {searchSuggestions.map((suggestion, index) => (
//               <div
//                 key={index}
//                 className="cursor-pointer hover:bg-gray-100 rounded-md px-3 py-1"
//                 onClick={() => handleSuggestionClick(suggestion)}
//               >
//                 {suggestion}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mb-4">
//           {['Electronics', 'Clothing', 'Footwear', 'Accessories', 'Home & Living', 'Fitness & Sports', 'Gaming', 'Outdoor Gear', 'Tools', 'Furniture'].map(category => (
//             <label key={category} className="block">
//               <input
//                 type="checkbox"
//                 value={category}
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => handleCheckboxChange(category)}
//               />
//               <span className="ml-2">{category}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Products Section */}
//       <div className="col-span-2">
//         <h2 className="text-2xl font-semibold mb-4">Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {searchProducts(searchTerm).filter(product => 
//             selectedCategories.length === 0 || selectedCategories.includes(product.category)
//           ).map(product => (
//             <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
//               <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-gray-600">{product.description}</p>
//               <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
//               <p className="text-gray-600">Category: {product.category}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Recommended Products Section */}
//       <div className="col-span-1">
//         <h2 className="text-2xl font-semibold mb-4">Recommended Products</h2>
//         <div className="grid grid-cols-1 gap-4">
//           {recommendedProducts.map(product => (
//             <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
//               <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-gray-600">{product.description}</p>
//               <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
//               <p className="text-gray-600">Category: {product.category}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Homepage;

import React, { useState, useEffect } from 'react';
import productsData from '../data/productData';

const Homepage = () => {
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

  return (
    <div className="container mt-32 mx-auto py-4 flex">
      {/* Filtering Section */}
      <div className="w-1/8 bg-purple 00 h-screen overflow-y-auto sticky top-36">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <div className="mt-2">
            {searchSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="cursor-pointer hover:bg-gray-100 rounded-md px-3 py-1"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
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

      <div className="flex bg-yellow- 00 flex-grow ml-1/4 overflow-x-auto">
        {/* Products Section */}
        <div className="w-[900px] translate-x-5 bg-fuchsia 0 ">
          <h2 className="text-2xl font-semibold ml-2 mb-4">Products</h2>
          <div className="grid mt-9 tra grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {searchProducts(searchTerm).filter(product => 
              selectedCategories.length === 0 || selectedCategories.includes(product.category)
            ).map(product => (
              <div key={product.id} className="bg-white hover:-translate-y-2 mt-5 transition ease-in-out hover:shadow-2xl  rounded-lg shadow-xl hover:bg-[#d4d5f8c6] p-10">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
                <p className="text-gray-600">Category: {product.category}</p>
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
  );
};

export default Homepage;
