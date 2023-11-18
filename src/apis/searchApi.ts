import axios from "axios";

const baseURL: string = import.meta.env.VITE_BASE_URL_PLACES!
const access_token: string = import.meta.env.VITE_ACCESS_TOKEN!

const searchApi = axios.create({
    baseURL: baseURL,
    params: {
        limit: 5,
        language: 'es',
        access_token: access_token
    }
})
 

export default searchApi;