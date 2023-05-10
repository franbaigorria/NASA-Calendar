import axios from 'axios';


export const apodInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apodInstance.interceptors.request.use(
  (config) => {
    config.params['api_key'] = process.env.NEXT_PUBLIC_API_KEY;
    return config;
  },
  async (onError) => {
    if (onError.response.status === 401)
      return onError;
  },
);