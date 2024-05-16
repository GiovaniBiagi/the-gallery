import axios from "axios";

const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_PEXELS_API_URL,
  headers: {
    Authorization: process.env.EXPO_PUBLIC_PEXELS_API_KEY,
  },
});

export default instance;
