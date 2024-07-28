import React, { useState, useEffect } from "react";
import axios from "axios";

const UnsplashGallery = () => {
  const [images, setImages] = useState([]);
  const accessKey = "smVpT1d8A8Yq6QVO5DKB0CYONEwXEtN2mxyKnKA_ids"; // Replace with your actual Unsplash Access Key

  useEffect(() => {
    fetchDogImages();
  }, []);

  const fetchDogImages = async () => {
    try {
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: "headphone",
          per_page: 10,
        },
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      });
      setImages(response.data.results);
    } catch (error) {
      console.error("Error fetching images from Unsplash", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="w-64 p-2 border rounded-lg shadow-lg">
          <img src={image.urls.small} alt={image.alt_description} className="w-full rounded-lg" />
          <p className="mt-2 text-center text-sm text-gray-700">{image.alt_description}</p>
        </div>
      ))}
    </div>
  );
};

export default UnsplashGallery;
