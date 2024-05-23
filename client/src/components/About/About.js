import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

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
          text: "Welcome to DigiHaat",
          subtext: "Your one-stop shop for all things awesome",
        },
        {
          image: "https://source.unsplash.com/1920x1080/?ecommerce,store",
          text: "Discover Amazing Deals",
          subtext: "Find the latest trends in clothing, electronics, and more",
        },
        {
          image: "https://source.unsplash.com/1920x1080/?fashion,technology",
          text: "Shop with Confidence",
          subtext: "Top-quality products and exceptional customer service",
        },
        {
          image: "https://source.unsplash.com/1920x1080/?electronics,gadgets",
          text: "Find Your Style",
          subtext: "Explore a wide range of products to suit your lifestyle",
        },
        {
            image: "https://source.unsplash.com/1920x1080/?sarees",
            text: "Welcome to DigiHaat",
            subtext: "Your one-stop shop for all things awesome",
          },
          {
            image: "https://source.unsplash.com/1920x1080/?shirts",
            text: "Discover Amazing Deals",
            subtext: "Find the latest trends in clothing, electronics, and more",
          },
          {
            image: "https://source.unsplash.com/1920x1080/?electronics",
            text: "Shop with Confidence",
            subtext: "Top-quality products and exceptional customer service",
          },
      ];
    

  return (
   <>
      {/* About Section */}
      <section className="py-20 w-full -200 ">
        <div className=" w-full mx-auto text-center">
          <h2 className="text-8xl 00  font-bold font-scnditalic mb-6">About DigiHaat</h2>
          <p className="text-xl   0 w-full p-10 bg-gray-300 ">DigiHaat is an e-commerce platform offering a wide range of products including clothing, electronics, and more. We are dedicated to providing the best online shopping experience with top-quality products and exceptional customer service.</p>
        </div>
      </section>
    <Slider {...settings}>
        {carouselImages.map((slide, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[600px] object-cover"
            //   style={{ filter: "blur(2px)" }}
            />
            {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
              <h2 className="text-5xl font-bold mb-4">{slide.text}</h2>
              <p className="text-xl mb-6">{slide.subtext}</p>
              <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Shop Now</Link>
            </div> */}
          </div>
        ))}
      </Slider>

   
   </>
  )
}

export default About