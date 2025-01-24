import {AxiosError} from "axios";
import Cookies from "js-cookie";
import customApi from "@remote/api/foundation/customApi";
import memberApi from "@remote/api/MemberApi";

const errorResponseHandler = async (error: AxiosError) => {
    if (error.response === undefined) {
        console.error('error.response is undefined');
        return Promise.reject(error);
    }

    const shouldAuthorizeRequest = error.config?.shouldAuthorizeRequest ?? true; 
    if (!shouldAuthorizeRequest) {
        console.error('should not authorize request');
        return Promise.reject(error);
    }

    if (error.status !== 401) {
        console.error('status code is not 401')
        return Promise.reject(error);
    }

    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    if (accessToken === undefined || refreshToken === undefined) {
        console.error('token is undefined');
        return Promise.reject(error);
    }

    console.log('Trying refresh...');
    try {
        const {data: newAccessToken} = await memberApi.refresh(refreshToken);

        customApi.defaults.headers.common.Authorization = newAccessToken;
        Cookies.set('accessToken', newAccessToken);
        return new Promise(resolve => {
            const {config} = error;
            if (!config) return;

            config.headers.Authorization = accessToken;
            resolve(customApi(config));
        });
    } catch (error) {
        console.error('refresh 실패');
        console.error(error);
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        window.location.href = '/login';
        alert('로그인해 주세요');
        return Promise.reject(error);
    }
};

export default errorResponseHandler;