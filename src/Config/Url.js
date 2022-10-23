export const BASE_URL = 'http://192.168.1.14/absen_sholat/web/api'; // change this to your local ip address

const GET_URL = path => {
  return `${BASE_URL}${path}`;
};

export const API = {
  AUTH: {
    LOGIN: GET_URL('/v1/auth/login'),
    REGISTER: GET_URL('/v1/auth/register'),
    LOGOUT: GET_URL('/v1/auth/logout'),
  },

  GET_USER: GET_URL('/v1/auth/get_user'),
  GET_ABSEN: GET_URL('/v1/auth/get_absen'),
};

export default {
  BASE_URL,
  API,
  GET_URL,
};
