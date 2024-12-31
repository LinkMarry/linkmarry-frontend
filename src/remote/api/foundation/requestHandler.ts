import {InternalAxiosRequestConfig} from "axios";
import Cookies from "js-cookie";

const requestHandler = (config: InternalAxiosRequestConfig) => {
    if (Cookies.get('accessToken') === undefined || Cookies.get('refreshToken') === undefined) {
        window.location.href = '/';
        return config;
    }
    for (const url of ['kakao']) {
        if (config.url?.includes(url)) return config;
    }

    config.headers.Authorization = Cookies.get('accessToken');
    
    return config;
};

export default requestHandler;