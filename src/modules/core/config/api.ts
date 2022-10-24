import axios from 'axios';

export const createAxiosInstance = () =>
  axios.create({ baseURL: process.env.NEXT_PUBLIC_COMMERCE_API_URL || '' });
