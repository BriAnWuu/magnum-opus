import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASE_URL || "http://localhost:8080/api",
})

const errorHandler = (error) => {
    const statusCode = error.response?.status;

    if (statusCode) {
        console.error(error);
    }

    return Promise.reject(error);
}

api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error);
});

export {
    api
};
