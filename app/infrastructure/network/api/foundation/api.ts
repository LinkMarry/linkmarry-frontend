import config from "~/config";
import axios from "axios";

const api = axios.create({
    baseURL: config.baseUrl,
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});

export default api;
