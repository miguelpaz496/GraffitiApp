import axios from "axios";

const baseURL: string = import.meta.env.VITE_BASE_URL_DIRECTIONS!
const access_token: string = import.meta.env.VITE_ACCESS_TOKEN!


const directionsApi = axios.create({
    baseURL: baseURL,
    params: {
        alternatives: true,
        continue_straight: true,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: access_token
    }
})
 

export default directionsApi;