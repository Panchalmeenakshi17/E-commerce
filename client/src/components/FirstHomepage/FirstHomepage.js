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
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Welcome to DigiHaat",
      subtext: "Your one-stop shop for all things awesome",
    },
    {
      image: "https://www.cougar.com.pk/cdn/shop/articles/New_Women_s_Collection.jpg?v=1662637654",
      text: "Discover Amazing Deals",
      subtext: "Find the latest trends in clothing, electronics, and more",
    },
    {
      image: "https://global.bonanzasatrangi.com/cdn/shop/collections/kids_1_654e2bd2-a4bf-4182-ac09-00ff5fa0abb8.jpg?v=1604457023",
      text: "Shop with Confidence",
      subtext: "Top-quality products and exceptional customer service",
    },
    {
      image: "https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/06/How-to-Start-a-Watch-Collection-Rolex-Daytona-Panerai-Radiomir-Vacheron-Constantin-Overseas-Omega-Seamaster.jpg",
      text: "Find Your Style",
      subtext: "Explore a wide range of products to suit your lifestyle",
    },
    {
        image: "https://preview.redd.it/j5uuq5jcp5y81.jpg?auto=webp&s=481585743a22a115459128964763e959294b0270",
        text: "Welcome to DigiHaat",
        subtext: "Your one-stop shop for all things awesome",
      },
      {
        image: "https://shop.zebronics.com/cdn/shop/collections/Laptop-PR-banner.jpg?v=1699940282",
        text: "Discover Amazing Deals",
        subtext: "Find the latest trends in clothing, electronics, and more",
      },
      {
        image: "https://static.vecteezy.com/system/resources/previews/034/139/197/large_2x/empty-clothing-store-in-shopping-mall-new-fashion-collection-on-shelf-fashionable-clothes-on-hangers-and-racks-modern-boutique-filled-with-merchandise-and-accessories-at-sale-for-customers-photo.jpg",
        text: "Shop with Confidence",
        subtext: "Top-quality products and exceptional customer service",
      },
  ];

  // Get user from Redux store
  const user = useSelector(state => state.user);

  const products = [
    {
      name: "Stylish T-shirt",
      category: "Clothing",
      description: "A trendy t-shirt perfect for casual outings.",
      image: "https://assets.ajio.com/medias/sys_master/root/20230810/uHn0/64d3e8fea9b42d15c99f6d1b/-473Wx593H-466428340-taupe-MODEL.jpg",
    },
    {
      name: "Stylish T-shirt",
      category: "Clothing",
      description: "A trendy t-shirt perfect for casual outings.",
      image: "https://m.media-amazon.com/images/I/41bPLkNlFEL._AC_UY1100_.jpg",
    },
    {
        name: "Elegant Saree",
        category: "Sarees",
        description: "An elegant saree perfect for special occasions.",
        image: "https://www.sairasboutique.net/cdn/shop/products/ClaretPink_GrayDesignerEmbroideredSilkPartyWearSaree-Saira_sBoutique.jpg?v=1667277430",
      },
    {
      name: "Smartphone",
      category: "Electronics",
      description: "The latest smartphone with advanced features.",
      image: "https://thegreytechnologies.in/cdn/shop/products/mini-smartphone-android-7_1000x.jpg?v=1701107216",
    },
    {
      name: "Designer Watch",
      category: "Accessories",
      description: "A classy watch to complement your style.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqcc4yVVLTZo8vsLOn1g3IoYlxbPecRpB-g&s",
    },
    {
      name: "Fresh Fruits Basket",
      category: "Fruits",
      description: "A variety of fresh fruits packed in a beautiful basket.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBK7B6isWoobBQcSvi9RHOAO_HlTFOUh-Ig&s",
    },
    {
        name: "Kids' T-shirt",
        category: "Kids",
        description: "A cute and comfortable t-shirt for kids.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmBys4cIEKxSyju-XsqdEN7jRQun-fUstAw&s",
      },
      {
        name: "Educational Toy Set",
        category: "Kids",
        description: "A fun and educational toy set for kids to learn while playing.",
        image: "https://www.jiomart.com/images/product/original/rvdw1sjtso/vastate-satsun-bricks-toys-sets-with-wheel-lego-blocks-educational-toys-for-kids-60-pcs-multicolor-product-images-orvdw1sjtso-p601176536-1-202305050653.jpg?im=Resize=(420,420)",
      },
      {
        name: "Kids' Backpack",
        category: "Kids",
        description: "A colorful and durable backpack for kids to carry their essentials.",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/4/300120740/FK/QK/QD/87329053/check-printed-kids-school-backpack-school-for-girl-with-teddy-toy-inner-linning-500x500.jpeg",
      },
  ];
  const products1 = [
    // Men's section
    {
      name: "Men's Formal Shirt",
      category: "Men's Clothing",
      description: "A stylish formal shirt for men.",
      image: "https://m.media-amazon.com/images/I/41bPLkNlFEL._AC_UY1100_.jpg",
    },
    {
      name: "Men's Casual Jeans",
      category: "Men's Clothing",
      description: "Comfortable jeans for casual wear.",
      image: "https://turtle.in/cdn/shop/files/027A9537copy_1400x.jpg?v=1702376499",
    },
    {
      name: "Men's Leather Shoes",
      category: "Men's Shoes",
      description: "Classic leather shoes for men.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/12/IC/UG/UG/142936861/men-leather-shoes.jpg",
    },

    // Women's section
    {
      name: "Women's Summer Dress",
      category: "Women's Clothing",
      description: "A beautiful summer dress for women.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_1UfeAOaOfwRhv9A9iAij_s9ZBEpnjfh6g&s",
    },
    {
      name: "Women's Handbag",
      category: "Women's Accessories",
      description: "A trendy handbag for women.",
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/hand-messenger-bag/k/h/r/-original-imagrhgksuzv7xcg.jpeg?q=90&crop=false",
    },
    {
      name: "Women's Sandals",
      category: "Women's Shoes",
      description: "Stylish sandals for women.",
      image: "https://m.media-amazon.com/images/I/61LWZFYMkZL._AC_UY1000_.jpg",
    },

    // Children's section
    {
        name: "Kids' T-shirt",
        category: "Kids",
        description: "A cute and comfortable t-shirt for kids.",
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/465147/item/ingoods_03_465147.jpg?width=494",
      },
      {
        name: "Educational Toy Set",
        category: "Kids",
        description: "A fun and educational toy set for kids to learn while playing.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvesWl8mhUR38OffWiMV2-Tj5k5TZctJnmw&s",
      },
      {
        name: "Kids' Backpack",
        category: "Kids",
        description: "A colorful and durable backpack for kids to carry their essentials.",
        image: "https://funblast.in/cdn/shop/files/81oS4QJz3WL._UL1500.jpg?v=1694067737",
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

          <p className="text-lg mt-10 text-justify font-scnd text-white  ">DigiHaat is your premier destination for an unparalleled online shopping experience. Our commitment to excellence is reflected in every aspect of our platform, from the carefully curated selection of top-quality products to the seamless browsing and purchasing process. Whether you're in search of fashionable clothing, cutting-edge electronics, or essential home goods, DigiHaat offers a diverse range of items to cater to your every need. With a dedication to customer satisfaction at the forefront, we provide transparent pricing, secure transactions, and prompt delivery services. Our mission is simple: to exceed your expectations at every turn. Join the thousands of satisfied customers who trust DigiHaat for their online shopping needs, and embark on a journey of convenience, reliability, and unparalleled quality today.</p>
        </div>
      </section>

      {/* Products Section */}
 {/* Men's Section */}
 <section className="md:py-10 md:p-20 p-5 bg-gray-900">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl text-white text-left font-bold mb-6">Men's Section</h2>
    <hr className=" md:w-1/5 w-72 " />

    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {products1
        .filter(
          (product1) =>
            product1.category === "Men's Clothing" ||
            product1.category === "Men's Shoes"
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
    <h2 className="text-3xl text-white text-left font-bold mb-6">Women's Section</h2>
    <hr className="md:w-1/5 w-72  mb-10" />
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-12">
      {products1
        .filter(
          (product1) =>
            product1.category === "Women's Clothing" ||
            product1.category === "Women's Accessories" ||
            product1.category === "Women's Shoes"
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
    <h2 className="text-3xl text-white text-left font-bold mb-6">Children's Section</h2>
    <hr className="md:w-1/5 w-72   mb-10" />
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-12">
      {products1
        .filter((product1) => product1.category === "Kids")
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
