import axios from "axios";
import config from "@config/config";
import requestHandler from "@remote/api/foundation/requestHandler";
import errorResponseHandler from "@remote/api/foundation/errorResponseHandler";

const customApi = axios.create({
    baseURL: config.baseUrl,
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});

customApi.interceptors.request.use(requestHandler, res => res);
customApi.interceptors.response.use(response => response, errorResponseHandler);

export default customApi;