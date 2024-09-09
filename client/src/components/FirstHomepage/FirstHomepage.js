// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useSelector } from "react-redux";

// const HomePage = () => {
//   const [settings] = useState({
//     dots: true,
//     infinite: true,
//     speed: 1000, // Adjust the speed of the carousel
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000, // Adjust the duration between slides
//     arrows: false,
//   });

//   const carouselImages = [
//     {
//       image: "https://source.unsplash.com/1920x1080/?shopping,mall",
//       text: "Welcome to DigiHaat",
//       subtext: "Your one-stop shop for all things awesome",
//     },
//     {
//       image: "https://source.unsplash.com/1920x1080/?ecommerce,store",
//       text: "Discover Amazing Products",
//       subtext: "Find the latest trends in clothing, electronics, and more",
//     },
//     {
//       image: "https://source.unsplash.com/1920x1080/?fashion,technology",
//       text: "Shop with Confidence",
//       subtext: "Top-quality products and exceptional customer service",
//     },
//     {
//       image: "https://source.unsplash.com/1920x1080/?electronics,gadgets",
//       text: "Find Your Style",
//       subtext: "Explore a wide range of products to suit your lifestyle",
//     },
//   ];

//   // Get user from Redux store
//   const user = useSelector(state => state.user);

//   const products = [
//     {
//       name: "Stylish T-shirt",
//       category: "Clothing",
//       description: "A trendy t-shirt perfect for casual outings.",
//       image: "https://source.unsplash.com/500x500/?clothing,tshirt",
//     },
//     {
//       name: "Smartphone",
//       category: "Electronics",
//       description: "The latest smartphone with advanced features.",
//       image: "https://source.unsplash.com/500x500/?smartphone,device",
//     },
//     {
//       name: "Designer Watch",
//       category: "Accessories",
//       description: "A classy watch to complement your style.",
//       image: "https://source.unsplash.com/500x500/?watch,accessory",
//     },
//     {
//       name: "Fresh Fruits Basket",
//       category: "Fruits",
//       description: "A variety of fresh fruits packed in a beautiful basket.",
//       image: "https://source.unsplash.com/500x500/?fruit,basket",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 text-gray-900 relative">
//       {/* Carousel */}
//       <Slider {...settings}>
//         {carouselImages.map((slide, index) => (
//           <div key={index} style={{ position: "relative" }}>
//             <img
//               src={slide.image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-screen object-cover"
//               style={{ filter: "blur(8px)" }}
//             />
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
//               <h2 className="text-5xl font-bold mb-4">{slide.text}</h2>
//               <p className="text-xl mb-6">{slide.subtext}</p>
//               <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Shop Now</Link>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       {/* About Section */}
//       <section className="py-20">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">About DigiHaat</h2>
//           <p className="text-lg max-w-2xl mx-auto">DigiHaat is an e-commerce platform offering a wide range of products including clothing, electronics, and more. We are dedicated to providing the best online shopping experience with top-quality products and exceptional customer service.</p>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="py-20 bg-gray-100">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-12">Featured Products</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {products.map((product, index) => (
//               <div key={index} className="border p-6 rounded-lg shadow-lg bg-white">
//                 <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
//                 <h3 className="text-xl font-bold mb-2">{product.name}</h3>
//                 <p className="text-lg text-gray-700 mb-4">{product.description}</p>
//                 <p className="text-sm text-gray-500">Category: {product.category}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* User Info */}
//       {user && (
//         <div className="fixed top-0 right-0 p-4 text-white bg-blue-500">
//           Logged in as: {user.username}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { FaHeart, FaShoppingCart } from 'react-icons/fa';


const HomePage = () => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed of the carousel
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the duration between slides
    arrows: false,
    className: "custom-dots"
  });

  const carouselImages = [
    {
      image: "https://images.unsplash.com/photo-1634978946872-7aff94521b1e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Welcome to DigiHaat",
      subtext: "Your one-stop shop for all things awesome",
    },
    {
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Discover Amazing Deals",
      subtext: "Find the latest trends in clothing, electronics, and more",
    },
    {
      image: "https://images.unsplash.com/photo-1477558716721-e28322f187c6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Shop with Confidence",
      subtext: "Top-quality products and exceptional customer service",
    },
    {
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Find Your Style",
      subtext: "Explore a wide range of products to suit your lifestyle",
    },
    {
        image: "https://images.unsplash.com/photo-1535978115060-d01ae6702684?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Welcome to DigiHaat",
        subtext: "Your one-stop shop for all things awesome",
      },
      {
        image: "https://images.unsplash.com/photo-1600841784377-45b805f54d34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Discover Amazing Deals",
        subtext: "Find the latest trends in clothing, electronics, and more",
      },
      {
        image: "https://images.unsplash.com/photo-1601368156156-fb9e52e2f5dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Shop with Confidence",
        subtext: "Top-quality products and exceptional customer service",
      },
  ];

  // Get user from Redux store
  const user = useSelector(state => state.user);

  const products = [
    {
      name: "Seeds",
      category: "Seeds",
      description: "A trendy t-shirt perfect for casual outings.",
      image: "https://images.unsplash.com/photo-1563760836797-bf5d5f9d2243?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Manure",
      category: "Manure",
      description: "A trendy t-shirt perfect for casual outings.",
      image: "https://images.unsplash.com/photo-1708437237775-6c89e28913d4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Fertilizers",
        category: "Fertilizers",
        description: "An elegant saree perfect for special occasions.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx5-0xolzI-KFVTsq1Z_u7Xwu7rNHVzzUJw&s",
      },
    // {
    //   name: "Smartphone",
    //   category: "Electronics",
    //   description: "The latest smartphone with advanced features.",
    //   image: "https://thegreytechnologies.in/cdn/shop/products/mini-smartphone-android-7_1000x.jpg?v=1701107216",
    // },
    {
      name: "Flowers",
      category: "Flowers",
      description: "A classy watch to complement your style.",
      image: "https://images.unsplash.com/photo-1571992049393-827d13da8fe3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // {
    //   name: "Fresh Fruits Basket",
    //   category: "Fruits",
    //   description: "A variety of fresh fruits packed in a beautiful basket.",
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBK7B6isWoobBQcSvi9RHOAO_HlTFOUh-Ig&s",
    // },
    {
        name: "Pots and basket",
        category: "Pots and basket",
        description: "A cute and comfortable t-shirt for kids.",
        image: "https://images.unsplash.com/photo-1616961002389-504228edfcb7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Saplings",
        category: "Saplings",
        description: "A fun and educational toy set for kids to learn while playing.",
        image: "https://images.unsplash.com/photo-1505235687559-28b5f54645b7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      // {
      //   name: "Kids' Backpack",
      //   category: "Kids",
      //   description: "A colorful and durable backpack for kids to carry their essentials.",
      //   image: "https://5.imimg.com/data5/SELLER/Default/2023/4/300120740/FK/QK/QD/87329053/check-printed-kids-school-backpack-school-for-girl-with-teddy-toy-inner-linning-500x500.jpeg",
      // },
  ];
  const products1 = [
    // Seeds's section
    {
      name: "Pumkin  ",
      category: "Seeds",
      description: "Fresh pumpkin seeds in the market",
      image: "https://images.unsplash.com/photo-1706961088910-6f182d386aab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Fresh pistachios",
      category: "Seeds",
      description: "Fresh pistachios at the market",
      image: "https://images.unsplash.com/photo-1708521203160-2a1e7c8f774a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Fresh corn kernels",
      category: "Seeds",
      description: "Fresh corn kernels at the market",
      image: "https://images.unsplash.com/photo-1672333660572-cf4f1a097878?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    // 's section
    {
      name: "Horse manure",
      category: "Manure",
      // description: "A beautiful summer dress for women.",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Hestem%C3%B8j.jpg",
    },
    {
      name: "Plants Manure",
      category: "Manure",
      // description: "A trendy handbag for women.",
      image: "https://images.unsplash.com/photo-1609784969374-b53a14d91338?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Freshly Prepared Cow's Manure",
      category: "Manure",
      // description: "Stylish sandals for women.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    // Children's section
    {
      name: "Newly born Saplings",
      category: "Plants, Pots and Basket",
      description: "Freshly sprouted saplings ready to be nurtured, perfect for enhancing your garden or home décor.",
      image: "https://images.unsplash.com/photo-1611843467160-25afb8df1074?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Domestic Saplings",
      category: "Plants, Pots and Basket",
      description: "Ideal for indoor spaces, these saplings bring a touch of nature and freshness to your home.",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Decorative Saplings",
      category: "Plants, Pots and Basket",
      description: "Beautiful decorative saplings that add a vibrant and aesthetic touch to any space.",
      image: "https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    
    ];
  
  return (
    <>
    <div className="bg-slate-900 text-gray-900 relative">
    <hr className='md:w-full w-full border-black ' />

    <div className=" mt-28 md:mt-36 ">
       {/* Carousel */}
       <div className=" ">
      <Slider {...settings}>
        {carouselImages.map((slide, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[200px] md:h-[350px] object-cover"
            //   style={{ filter: "blur(2px)" }}
            />
            {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
              <h2 className="text-5xl font-bold mb-4">{slide.text}</h2>
              <p className="text-xl mb-6">{slide.subtext}</p>
              <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Shop Now</Link>
            </div> */}
          </div>
        ))}
      </Slider></div>
    <section className="md:  md:p-20 p-5 md:mt- 0 mt-8 bg-gray-900">
    <div className="container mx-auto text-left">
      <h2 className="text-3xl font-Main text-gray-300 font-bold mb-4">Featured Products</h2>
      <hr className=" md:w-1/5 " />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap- md:gap-12">
        {products.map((product, index) => (
          <div key={index} className="border mt-10 p-6 hover:shadow-2xl shadow-black hover:shadow-blue-900 ease-in-out rounded-2xl shadow-xl bg-white hover:bg-[#e1e2ff]  transform transition-transform hover:scale-105">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
            </div>
            <h3 className="text-xl mt-5 font-Main font-bold mb-2">{product.name}</h3>
            <p className="text-lg text-gray-700 mb-2">{product.description}</p>
            <p className="text-sm text-gray-500">Category: {product.category}</p>
            {/* <div className="flex justify-center mt-4 gap-40">
              <button className="px-4 py-2 bg-red-500 hover:bg-red-600 transition ease-in-out text-white rounded-md">
                <FaHeart className="inline-block mr-2" /> Like
              </button>
              <button className="px-4 py-2 bg-[#8f5af9] text-white rounded-md hover:bg-[#5d17e5]">
                <FaShoppingCart className="inline-block mr-2" /> Add to Cart
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  </section>
     

      {/* About Section */}
      <section className="md:py-20 md:p-20 p-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-white text-left font-scnd font-bold mb-6">About DigiHaat</h2>
      <hr className=" md:w-1/5 w-72 " />

          <p className="text-lg mt-10 text-justify font-scnd text-white  ">Need4Need is a premier e-commerce platform catering specifically to gardening enthusiasts. With a carefully curated selection of items such as manure, seeds, plants, pots, and baskets, Need4Need ensures that all your gardening needs are met in one convenient location. Whether you're a seasoned gardener or just starting out, this platform offers a diverse range of products to help you create the perfect garden. With a focus on providing top-quality items, transparent pricing, secure transactions, and timely delivery, Need4Need strives to make your shopping experience seamless and reliable. Join the community of gardening lovers who trust Need4Need for all their plant and gardening essentials.</p>
        </div>
      </section>

      {/* Products Section */}
 {/* Men's Section */}
 <section className="md:py-10 md:p-20 p-5 bg-gray-900">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl text-white text-left font-bold mb-6">Seeds Section</h2>
    <hr className=" md:w-1/5 w-72 " />

    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {products1
        .filter(
          (product1) =>
            product1.category === "Seeds" ||
            product1.category === "Seeds"
        )
        .map((product1, index) => (
          <div
            key={index}
            className="group border p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-900 transition ease-in-out bg-white overflow-hidden  duration-500  transform hover:scale-105"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={product1.image}
                alt={product1.name}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-Main mt-5 font-bold mb-2">{product1.name}</h3>
            <p className="text-lg text-gray-700 mb-4">{product1.description}</p>
            <p className="text-sm text-gray-500">Category: {product1.category}</p>
          </div>
        ))}
    </div>
  </div>
</section>

{/* Women's Section */}
<section className="py-10 md:p-20 p-5 bg-gray-900">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl text-white text-left font-bold mb-6">Manure Section</h2>
    <hr className="md:w-1/5 w-72  mb-10" />
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-12">
      {products1
        .filter(
          (product1) =>
            product1.category === "Manure" ||
            product1.category === "Manure" ||
            product1.category === "Manure"
        )
        .map((product1, index) => (
          <div
            key={index}
            className="group border p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-900 bg-white overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={product1.image}
                alt={product1.name}
                className="w-full h-64 object-cover mb-4 transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{product1.name}</h3>
            <p className="text-lg text-gray-700 mb-4">{product1.description}</p>
            <p className="text-sm text-gray-500">Category: {product1.category}</p>
          </div>
        ))}
    </div>
  </div>
</section>

      {/* Children's Section */}
      <section className="md:p-20 p-5 bg-gray-900">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl text-white text-left font-bold mb-6">Plants, Pots and Basket</h2>
    <hr className="md:w-1/5 w-72   mb-10" />
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-12">
      {products1
        .filter((product1) => product1.category === "Plants, Pots and Basket")
        .map((product1, index) => (
          <div
            key={index}
            className="group border p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-900 bg-white overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={product1.image}
                alt={product1.name}
                className="w-full h-64 object-cover mb-4 transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{product1.name}</h3>
            <p className="text-lg text-gray-700 mb-4">{product1.description}</p>
            <p className="text-sm text-gray-500">Category: {product1.category}</p>
          </div>
        ))}
    </div>
  </div>
</section>


      {/* User Info */}
      {/* {user && (
        <div className="fixed top-0 right-0 p-4 text-white bg-blue-500">
          Logged in as: {user.username}
        </div>
      )} */}
    </div>
    </div>
    </>
  );
};

export default HomePage;
