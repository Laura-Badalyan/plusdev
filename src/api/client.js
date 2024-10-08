import { AUTH_KEYS, PATHS } from '../helpers/constants';
import axios from 'axios';

export const client = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_BASE_URL,
});

client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(AUTH_KEYS.TOKEN) || '';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
client.interceptors.response.use(
  async function (response) {
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      localStorage.removeItem(AUTH_KEYS.USER);
      localStorage.removeItem(AUTH_KEYS.TOKEN);
      window.location.href = PATHS.SIGN_IN;
    }

    return Promise.reject(error);
  }
);
