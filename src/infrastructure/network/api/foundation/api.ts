import axios from "axios";
import config from "@src/config";

const api = axios.create({
    baseURL: config.baseUrl,
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});

export default api;
