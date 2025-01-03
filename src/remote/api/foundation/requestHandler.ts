import Cookies from "js-cookie";
import {InternalAxiosRequestConfig} from "axios";

const requestHandler = (config: InternalAxiosRequestConfig) => {
    if (Cookies.get('accessToken') === undefined || Cookies.get('refreshToken') === undefined) {
        window.location.href = '/';
        return config;
    }

    const shouldAuthorizeRequest = config.shouldAuthorizeRequest ?? true;
    if (!shouldAuthorizeRequest) return config;

    config.headers.Authorization = Cookies.get('accessToken');

    return config;
};

export default requestHandler;