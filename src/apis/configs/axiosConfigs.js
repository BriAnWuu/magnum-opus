import axios from 'axios';
import 'dotenv/config';

const api = axios.create({
    baseURL: process.env.VITE_APP_API_BASE_URL,
})

export {
    api
};
