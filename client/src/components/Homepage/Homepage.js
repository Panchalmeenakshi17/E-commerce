import React, { useState, useEffect, useContext } from "react";
import productsData from "../data/productData";
import { FaHeart, FaShoppingCart, FaFilter } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductData from "../data/productData";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [cartItems, setCartItems] = useState([]); // State for cart items
  const [allProducts, setAllProducts] = useState(ProductData); // Assuming you have an array of products
  const [productsToShow, setProductsToShow] = useState(10); // Number of products to show
  const [likedProducts, setLikedProducts] = useState([]);

  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed of the carousel
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the duration between slides
    arrows: false,
  });

  const carouselImages = [
    {
      image:
        "https://static01.nyt.com/images/2021/03/30/multimedia/28xp-shoes-09/28xp-shoes-09-superJumbo.jpg",
      text: "Welcome to DigiHaat",
      subtext: "Your one-stop shop for all things awesome",
    },
    {
      image:
        "https://static-assets.business.amazon.com/assets/in/24th-jan/705_Website_Blog_Appliances_1450x664.jpg.transform/1450x664/image.jpg",
      text: "Discover Amazing Deals",
      subtext: "Find the latest trends in clothing, electronics, and more",
    },
    {
      image:
        "https://static.thcdn.com/images/large/original//productimg/1600/1600/12656224-1464802597501868.jpg",
      text: "Shop with Confidence",
      subtext: "Top-quality products and exceptional customer service",
    },
    {
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Find Your Style",
      subtext: "Explore a wide range of products to suit your lifestyle",
    },
    {
      image:
        "https://i0.wp.com/www.satvagold.com/admin/uploads/2021/09/29/20210929032122210897597.jpg?w=1280",
      text: "Welcome to DigiHaat",
      subtext: "Your one-stop shop for all things awesome",
    },
    {
      image:
        "https://images.unsplash.com/photo-1524679813234-66a389fe1a42?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Discover Amazing Deals",
      subtext: "Find the latest trends in clothing, electronics, and more",
    },
    {
      image:
        "https://cdn.mos.cms.futurecdn.net/GXHa4PWwDPx7tGQG9MDQvK-1200-80.jpg",
      text: "Shop with Confidence",
      subtext: "Top-quality products and exceptional customer service",
    },
  ];
  const carouselAd = [
    {
      image:
        "https://api.digihaat.com.bd/api/upload/images/dahua-imou-ipc-s21fep-cruiser-se-digihaat-8d33.webp",
      text: "Welcome to DigiHaat",
      subtext: "Your one-stop shop for all things awesome",
    },
    {
      image:
        "https://i.gadgets360cdn.com/large/galaxy_s24_ultra_1705641251336.jpg",
      text: "Discover Amazing Deals",
      subtext: "Find the latest trends in clothing, electronics, and more",
    },
    {
      image:
        "https://www.singlegrain.com/wp-content/uploads/2023/05/04142014_Fruits_Desktop_Hero.jpeg",
      text: "Shop with Confidence",
      subtext: "Top-quality products and exceptional customer service",
    },
    {
      image:
        "https://theimpression.com/wp-content/uploads/2021/10/gucci-lifestyle-fall-2021-ad-campaign-the-impression-003.jpg",
      text: "Find Your Style",
      subtext: "Explore a wide range of products to suit your lifestyle",
    },
    {
      image:
        "https://4.img-dpreview.com/files/p/TS560x560~forums/64065557/d2c9c3d48b114f34811187dd1b9ab435",
      text: "Welcome to DigiHaat",
      subtext: "Your one-stop shop for all things awesome",
    },
    {
      image: "https://i.ytimg.com/vi/XHTrLYShBRQ/hqdefault.jpg",
      text: "Discover Amazing Deals",
      subtext: "Find the latest trends in clothing, electronics, and more",
    },
    {
      image:
        "https://i.pinimg.com/736x/ab/f5/a3/abf5a351dc1dbef4cb2c625cf6b6a975.jpg",
      text: "Shop with Confidence",
      subtext: "Top-quality products and exceptional customer service",
    },
    {
      image:
        "https://gumlet-images.assettype.com/afaqs/2023-11/1dc7cce7-d6f8-4f71-91b3-2ed0d0b5059a/image003__1_.png?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0",
      text: "Shop with Confidence",
      subtext: "Top-quality products and exceptional customer service",
    },
    {
      image:
        "https://hpr.com/wp-content/uploads/2021/08/MG_back_ad_Argent-Perfume-1.jpg",
      text: "Shop with Confidence",
      subtext: "Top-quality products and exceptional customer service",
    },
    {
      image:
        "https://gumlet-images.assettype.com/afaqs%2F2024-05%2Ffb0ad47c-ee71-4d26-a53e-e2a05cc19221%2FNIVEA_Men_Fresh_Roll_On_Campaign__Image.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
      text: "Shop with Confidence",
      subtext: "Top-quality products and exceptional customer service",
    },
  ];

  const carouselbrand = [
    {
      image:
        "https://gumlet-images.assettype.com/afaqs%2F2023-02%2Fb256d8f4-6fe4-4502-b4c0-5f7fd19926b7%2FLakm___UnapologeticallyM_____This_Once__Red_Means_Go____Campaign_Visual_2.png?rect=0%2C24%2C843%2C474&format=webp&w=480&dpr=2.6", // Amazon with Jeff Bezos
      text: "Welcome to DigiHaat",
      subtext: "Your one-stop shop for all things awesome",
    },
    {
      image:
        "https://exchange4media.gumlet.io/news-photo/133208-big-2024-03-18T115125.441.jpg?w=400&dpr=2.6", // Apple with Tim Cook
      text: "Discover Amazing Deals",
      subtext: "Find the latest trends in clothing, electronics, and more",
    },
    {
      image:
        "https://exchange4media.gumlet.io/news-photo/108157-bam.jpg?w=400&dpr=2.6", // Nike with Michael Jordan
      text: "Shop with Confidence",
      subtext: "Top-quality products and exceptional customer service",
    },
    {
      image:
        "https://exchange4media.gumlet.io/news-photo/132333-main-2024-02-05T133550.958.jpg?w=400&dpr=2.6", // Samsung with BTS
      text: "Find Your Style",
      subtext: "Explore a wide range of products to suit your lifestyle",
    },
    {
      image:
        "https://www.medianews4u.com/wp-content/uploads/2019/03/Consumer-Electronics-brand-Vingajoy-roped-in-Ayushman-Khurrana-as-their-brand-ambassador-2.jpg", // Adidas with Lionel Messi
      text: "Welcome to DigiHaat",
      subtext: "Your one-stop shop for all things awesome",
    },
    {
      image:
        "https://www.adgully.com/img/800/202207/copy-of-copy-of-adgully-61.png.jpg", // Sony with Robert Downey Jr.
      text: "Discover Amazing Deals",
      subtext: "Find the latest trends in clothing, electronics, and more",
    },
    {
      image:
        "https://static.startuptalky.com/2022/12/cosmetic-brands-india-lakme-startuptalky--1-.jpg", // Gucci with Harry Styles
      text: "Shop with Confidence",
      subtext: "Top-quality products and exceptional customer service",
    },
  ];

  // Dummy recommendation function (replace with actual recommendation logic)
  //   const generateRecommendations = () => {
  //     const randomRecommendations = [];
  //     const numRecommendations = 4; // Number of recommended products to display

  //     while (randomRecommendations.length < numRecommendations) {
  //       const randomIndex = Math.floor(Math.random() * productsData.length);
  //       randomRecommendations.push(productsData[randomIndex]);
  //     }

  //     setRecommendedProducts(randomRecommendations);
  //   };

  //   // Dummy search function (replace with actual search logic)
  //   const searchProducts = (query) => {
  //     return productsData.filter(
  //       (product) =>
  //         product.name.toLowerCase().includes(query.toLowerCase()) ||
  //         product.description.toLowerCase().includes(query.toLowerCase()) ||
  //         product.category.toLowerCase().includes(query.toLowerCase()) ||
  //         product.price.toString().includes(query.toLowerCase())
  //     );
  //   };

  //   // Dummy function to generate search suggestions (replace with actual suggestions logic)
  //   const generateSearchSuggestions = (query) => {
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
  //       setSelectedCategories(
  //         selectedCategories.filter((item) => item !== category)
  //       );
  //     } else {
  //       setSelectedCategories([...selectedCategories, category]);
  //     }
  //   };

  //   // Function to handle search suggestion click
  //   const handleSuggestionClick = (suggestion) => {
  //     setSearchTerm(suggestion);
  //   };

  //   const clearSearch = () => {
  //     setSearchTerm("");
  //     setSearchSuggestions([]);
  //   };

  //   // Function to toggle filter visibility
  //   const toggleFilter = () => {
  //     setShowFilter(!showFilter);
  //   };

  //   // Function to toggle showing more products
  //   const toggleShowMore = () => {
  //     if (productsToShow >= 100) {
  //       setProductsToShow(9); // Reset to initial state
  //       window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  //     } else {
  //       setProductsToShow((prev) => Math.min(prev + 10, 100)); // Show 10 more products, max 100
  //     }
  //   };
  //   const toggleShowLess = () => {
  //     const minProductsToShow = 10; // Minimum number of products to show

  //     if (productsToShow > minProductsToShow) {
  //       setProductsToShow(minProductsToShow);
  //       window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  //     }
  //   };
  //   // const addToCart = (product) => {
  //   //   const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  //   //   const updatedCart = [...existingCart, product];
  //   //   localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  //   //   alert(`${product.name} added to liked products!`);
  //   // };

  // const addToCart = (product) => {
  //   const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  //   const productIndex = existingCart.findIndex(item => item.id === product.id);

  //   if (productIndex > -1) {
  //     // Product already in cart, update quantity
  //     existingCart[productIndex].quantity += 1;
  //   } else {
  //     // Add new product to cart
  //     product.quantity = 1; // Set initial quantity
  //     existingCart.push(product);
  //   }

  //   localStorage.setItem("cartItems", JSON.stringify(existingCart));
  //   alert(`${product.name} added to cart!`);
  // };
  //   const handleLike = (product) => {
  //     const likedProducts =
  //       JSON.parse(localStorage.getItem("likedProducts")) || [];
  //     const updatedLikedProducts = [...likedProducts, product];
  //     localStorage.setItem("likedProducts", JSON.stringify(updatedLikedProducts));
  //     alert(`${product.name} added to liked products!`);
  //   };
  const generateRecommendations = () => {
    const randomRecommendations = [];
    const numRecommendations = 4;

    while (randomRecommendations.length < numRecommendations) {
      const randomIndex = Math.floor(Math.random() * productsData.length);
      randomRecommendations.push(productsData[randomIndex]);
    }

    setRecommendedProducts(randomRecommendations);
  };

  // Function to filter products based on search term and selected categories
  const filterProducts = (query) => {
    return productsData
      .filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.price.toString().includes(query.toLowerCase())
      )
      .filter(
        (product) =>
          selectedCategories.length === 0 ||
          selectedCategories.includes(product.category)
      );
  };

  // Function to generate search suggestions based on search term
  const generateSearchSuggestions = (query) => {
    const filteredSuggestions = productsData
      .filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
      .map((product) => product.name);
    setSearchSuggestions(filteredSuggestions.slice(0, 5));
  };

  useEffect(() => {
    generateRecommendations();
    generateSearchSuggestions(searchTerm);
  }, [searchTerm]);

  const handleSearchChange = (query) => {
    setSearchTerm(query);
  };

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((cat) => cat !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    generateSearchSuggestions(suggestion);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchSuggestions([]);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleShowMore = () => {
    if (productsToShow >= 100) {
      setProductsToShow(10);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setProductsToShow((prev) => Math.min(prev + 10, 100));
    }
  };

  const toggleShowLess = () => {
    setProductsToShow(10);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const productIndex = existingCart.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex > -1) {
      existingCart[productIndex].quantity += 1;
    } else {
      product.quantity = 1;
      existingCart.push(product);
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));
    alert(`${product.name} added to cart!`);
  };

  const handleLike = (product) => {
    const likedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || [];
    const updatedLikedProducts = [...likedProducts, product];
    localStorage.setItem("likedProducts", JSON.stringify(updatedLikedProducts));
    alert(`${product.name} added to liked products!`);
  };

  // const filteredProducts = filterProducts(searchTerm);
  const filteredProducts = allProducts.filter(
    (product) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="bg-slate-900 px-4 text-white font-Main">
        <hr className="md:w-full w-full border-black" />
        <div className="flex bg-yellow-30 mt-20 md:mt-28 w-full bg-yellow500 px-0 overflow-x-auto overflow-y-hidden sm:grid-cols-2 md:grid-cols-9 space-x-5">
          {productsData.slice(0, 10).map((product) => (
            <div
              key={product.id}
              className={`bg-[#ca515100] md:w-[] w-[150px] h-[100px] md:h-[180px] hover:-translate-y-2 mt-5 transition ease-in-out`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="md:w-[] md:h-[100px] w-[150px] h-[60px] flex rounded-full object-cover mb-4"
              />
              <h3 className="md:text-sm text-xs text-white text-center font-bold">
                {product.category}
              </h3>
            </div>
          ))}
        </div>
        <div className="md:px-20 mt-10 mb-10">
          <Slider {...settings}>
            {carouselImages.map((slide, index) => (
              <div
                className="w-full h-[400px]"
                key={index}
                style={{ position: "relative" }}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="bg-gray-900">
          <div className="bg-gray-900 mt-0">
            <div className="container mx-auto py-4 gap-10 md:flex">
              {/* Search Section */}
              <div className="w-full md:w-1/4 md:mt-10 mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 placeholder-text-black border text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
                {searchTerm && (
                  <div
                    className="absolute left-80 top-1/7 transform -translate-y-8 cursor-pointer"
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
                <div className="md:mt-20 mt-10">
                  <Slider {...settings}>
                    {carouselAd.map((slide, index) => (
                      <div key={index} style={{ position: "relative" }}>
                        <img
                          src={slide.image}
                          alt={`Slide ${index + 1}`}
                          className="w-full md:h-[900px] object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              {/* Products Section */}
              <div className="w-full bg-fuchsia300 md:w-full ml-0 md:ml">
                <div className="w-full">
                  <div className="flex justify-between">
                    <h2 className="text-3xl font-Main font-bold ml-2 mb-4">
                      Products
                    </h2>
                    <div className="flex justify-start mb-2">
                      <button
                        className="px-4 py-2 text-white rounded-md mr-2"
                        onClick={toggleFilter}
                      >
                        <FaFilter className="inline-block mr-2" /> Filter
                      </button>
                    </div>
                  </div>
                  <hr className="md:w-1/4 w-52" />
                  <div className="grid mt-9 px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                    {filteredProducts
                      .slice(0, productsToShow)
                      .map((product) => (
                        <div
                          key={product.id}
                          className={`bg-white hover:-translate-y-2 mt-5 transition ease-in-out hover:shadow-2xl rounded-lg shadow-xl hover:bg-[#e8e9ff] p-3`}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover mb-4 rounded"
                          />
                          <h3 className="text-lg text-black font-bold">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {product.description}
                          </p>
                          <p className="text-blue-600 text-sm font-semibold">
                            Price: ${product.price}
                          </p>
                          <p className="text-gray-600 text-sm">
                            Category: {product.category}
                          </p>

                          <div className="flex transition ease-in-out justify-between mt-4 gap-">
                            <button
                              onClick={() => handleLike(product)}
                              className="px-3 py-2 bg-red-500 text-sm hover:bg-red-600 transition ease-in-out text-white rounded-md"
                            >
                              <FaHeart className="inline-block mr-2" /> Like
                            </button>
                            <button
                              onClick={() => addToCart(product)}
                              className="bg-blue-500 hover:bg-blue-900 text-white p-2 rounded mt-2"
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="flex md:gap-20 gap-5 justify-center mt-9">
                    <button
                      className="px-4 py-2 w-full bg-[#9f9ff7a5] text-purple-100 hover:bg-[#9f9ff7e3] transition ease-in-out rounded-full"
                      onClick={toggleShowMore}
                    >
                      {productsToShow >= 100 ? "Show Less" : "View More"}
                    </button>
                    <button
                      className="px-4 py-2 w-full bg-[#9f9ff7a5] text-purple-100 hover:bg-[#9f9ff7e3] transition ease-in-out rounded-full"
                      onClick={toggleShowLess}
                    >
                      Show Less
                    </button>
                  </div>
                </div>
              </div>

              {/* Recommended Products */}
              <div className="md:px-  md:mt-  bg-yellow600  mt-5">
                <div className="container mx-auto  ">
                  <h2 className="text-3xl font-bold mb-4">
                    Recommended Products
                  </h2>
                  <hr className="md:w-5/6 w-52" />

                  <div className=" ">
                    {recommendedProducts.map((product, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 mt-4 rounded-lg shadow-lg"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h3 className="text-lg font-bold mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {product.description}
                        </p>
                        <p className="text-blue-600 font-semibold">
                          Price: ${product.price}
                        </p>
                        {/* <button
                          onClick={() => addToCart(product)}
                          className="bg-blue-500 text-white p-2 rounded mt-2"
                        >
                          Add to Cart
                        </button> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Modal */}
          {showFilter && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
              onClick={toggleFilter}
            >
              <div
                className="bg-white text-black p-4 rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl font-bold mb-4">Filter by Category</h3>
                <div className="flex flex-col">
                  {[
                    "Seeds",
"Saplings",
"Manure & Fertilizers",
"Pots & Planters",
"Gardening Tools",
"Watering Equipment",
"Soil & Compost",
"Pesticides & Herbicides",
"Irrigation Systems",
"Mulch & Coverings",
"Plant Support Systems",
"Plant Nutrients",
"Garden Décor",
"Compost Bins",
"Greenhouses & Shade Nets",
"Grow Bags",
"Plant Protection Products",
"Organic Pesticides",
"Hydroponic Equipment",
"Gardening Books & Guides",
"Garden Furniture",
                  ].map((category) => (
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
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                  onClick={toggleFilter}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

         {/* Brand Carousel */}
         <div className="md:p-10 p-5 w-full font-Main md:mt-0 bg-gray-900">
  <div className="w-full bg-purple-00 md:w-full ml-0 md:mt-4 md:mt-0">
    <h2 className="text-2xl text-gray-300 font-semibold mb-4">
      Some Famous brands
    </h2>
    <hr className="w-full" />
    <div className="mt-10">
      <Slider {...settings}>
        {carouselbrand.map((slide, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full md:h-96 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>

  <div className="md:px-12 px-5 md:mt-40">
    <h2 className="text-2xl text-gray-300 font-semibold mb-4">
      Select Categories
    </h2>
    <hr className="px-10 w-full" />
    <div className="md:flex md:mt-20 flex-wrap mt-10 overflow-x-auto overflow-y-hidden grid grid-cols-2 md:grid-cols-9 gap-10 mb-10">
      {productsData.slice(0, 10).map((product) => (
        <div key={product.id} className="w-full md:w-1/6 mb-5 mt-2 md:mb-0">
          <div className="bg-[#ca515100] rounded-2xl hover:-translate-y-2 transition ease-in-out">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-2xl object-cover"
            />
            <h3 className="text-sm mt-5 text-white text-center font-bold">
              {product.category}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


        </div>
      </div>
    </>
  );
};

export default Homepage;
