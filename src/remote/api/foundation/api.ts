import axios from "axios";
import config from "@config/config";

const api = axios.create({
    baseURL: config.baseUrl,
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});

export default api;
