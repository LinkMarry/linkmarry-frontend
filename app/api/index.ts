import config from "~/config.ts";
import axios from "axios";

const index = axios.create({
    baseURL: config.baseUrl,
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});

export default index;
