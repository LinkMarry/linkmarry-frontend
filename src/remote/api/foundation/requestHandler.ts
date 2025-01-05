import Cookies from "js-cookie";
import {InternalAxiosRequestConfig} from "axios";

const requestHandler = (config: InternalAxiosRequestConfig) => {
    const shouldAuthorizeRequest = config.shouldAuthorizeRequest ?? true;
    if (!shouldAuthorizeRequest) return config;
    
    if (Cookies.get('accessToken') === undefined || Cookies.get('refreshToken') === undefined) {
        console.error('token is undefined');
        window.location.href = '/';
        alert('로그인 해 주세요');
        return config;
    }

    config.headers.Authorization = Cookies.get('accessToken');

    return config;
};

export default requestHandler;