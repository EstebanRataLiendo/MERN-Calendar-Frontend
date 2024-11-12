import axios from 'axios';
import { getEnvvariables } from '../helpers';

const { VITE_API_URL } = getEnvvariables();

const calendarApi = axios.create({
    baseURL: VITE_API_URL
});

// CONFIRGURAR INTERCEPTORES
calendarApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config;
})

export default calendarApi;