// unsplashAPI.js
import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'smVpT1d8A8Yq6QVO5DKB0CYONEwXEtN2mxyKnKA_ids';

export const fetchImages = async (category) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: category,
        per_page: 1, // Fetch one image per category
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error);
    return [];
  }
};
