import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
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
      image: "https://source.unsplash.com/1920x1080/?shopping,mall",
      // text: "Welcome to DigiHaat",
      // subtext: "Your one-stop shop for all things awesome",
    },
    {
      image: "https://source.unsplash.com/1920x1080/?ecommerce,store",
      // text: "Discover Amazing Deals",
      // subtext: "Find the latest trends in clothing, electronics, and more",
    },
    {
      image: "https://source.unsplash.com/1920x1080/?fashion,technology",
      // text: "Shop with Confidence",
      // subtext: "Top-quality products and exceptional customer service",
    },
    {
      image: "https://source.unsplash.com/1920x1080/?electronics,gadgets",
      // text: "Find Your Style",
      // subtext: "Explore a wide range of products to suit your lifestyle",
    },
    {
      image: "https://source.unsplash.com/1920x1080/?sarees",
      // text: "Welcome to DigiHaat",
      // subtext: "Your one-stop shop for all things awesome",
    },
    {
      image: "https://source.unsplash.com/1920x1080/?shirts",
      // text: "Discover Amazing Deals",
      // subtext: "Find the latest trends in clothing, electronics, and more",
    },
    {
      image: "https://source.unsplash.com/1920x1080/?electronics",
      // text: "Shop with Confidence",
      // subtext: "Top-quality products and exceptional customer service",
    },
  ];

  return (
    <>
      {/* About Section */}
      <section className="md:py-20 py-10 w-full bg-gray-900">
    <hr className='md:w-full w-full border-black ' />

        <div className="w-full mt-20 md:mx-auto text-center">
          <h2 className="text-3xl text-[#b7c6f6] font-bold font-Main md:mb-6">
            About DigiHaat
          </h2>
          <p className="text-lg text-gray-300 text-justify w-full p-9 md:p-10">
            DigiHaat is an e-commerce platform offering a wide range of
            products including clothing, electronics, and more. We are dedicated
            to providing the best online shopping experience with top-quality
            products and exceptional customer service. Our user-friendly
            interface makes it easy to browse and purchase items from the
            comfort of your home. We prioritize customer satisfaction and offer
            a hassle-free return policy. giHaat features a diverse selection of
            brands and products to cater to all your needs. With secure payment
            options, you can shop with confidence. Our fast and reliable
            delivery service ensures that your purchases arrive on time. We also
            offer regular promotions and discounts to give you the best value
            for your money. At giHaat, we are committed to sustainability and
            offer eco-friendly products. Join our community and enjoy a
            seamless, enjoyable shopping experience every time you visit
            DigiHaat.
          </p>
        </div>
      </section>

      {/* Carousels Section */}
      <section className="py-10 bg-gray-800">
      <h1 className="text-center font-Main text-3xl text-white">Our highlights</h1>
<hr className="md:mt-5 mt-5 mx-auto w-60 md:w-1/4" /> {/* Add mx-auto to center the hr element */}
<div className=" mt-10 md:p-16   md:container w-full md:mx-auto md:flex   justify-center md:space-x-6">
  {Array.from({ length: 3 }).map((_, idx) => (
    <div key={idx} className="md:w-1/3 rounded-2xl md:p-0 p-5">
      <Slider {...settings}>
  {carouselImages.map((slide, index) => (
    <div
      className=" rounded-2xl w-full h-[400px] md:flex"
      key={index}
      style={{ position: "relative" }}
    >
      <img
        src={slide.image}
        alt={`Slide ${index + 1}`}
        className="w-full rounded-2xl  h-[400px] object-cover"
      />
      <div className="absolute rounded-2xl inset-0 flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-3xl font-bold mb-2">{slide.text}</h2>
        {/* <p className="text-lg mb-1">{slide.subtext}</p> */}
        <Link
          to="/products"
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  ))}
</Slider>

            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
