import api from "@remote/api/foundation/api";
import {AxiosError, InternalAxiosRequestConfig} from "axios";
import memberApi from "@remote/api/MemberApi";
import {useNavigate} from "react-router-dom";
import useJwt from "@hook/useJwt";
import {useEffect} from "react";

const useAxios = () => {
    const navigate = useNavigate();
    const {jwt, clearToken, refresh} = useJwt();

    const requestHandler = (config: InternalAxiosRequestConfig) => {
        const shouldAuthorizeRequest = config.shouldAuthorizeRequest ?? true;
        if (!shouldAuthorizeRequest) return config;

        if (config.headers.isRefreshing) return config;

        config.headers.Authorization = jwt.accessToken;

        return config;
    };

    const errorResponseHandler = async (error: AxiosError) => {
        console.log('Error response handler');
        console.log(error);

        const shouldAuthorizeRequest = error.config?.shouldAuthorizeRequest ?? true;
        if (!shouldAuthorizeRequest) {
            console.log('Should not authorize request');
            return Promise.reject(error);
        }

        if (error.status !== 401) {
            console.log(`Status code is ${error.status}`);
            console.log('Status code is not 401');
            return Promise.reject(error);
        }

        const refreshToken = jwt.refreshToken as string;
        if (!refreshToken) {
            console.log('Refresh token is undefined');
            return Promise.reject(error);
        }

        const {response, config} = error;

        if (!response || !config) {
            console.log('Error is undefined');
            return Promise.reject(error);
        }

        config.headers.isRefreshing = true;
        if (config.headers.refreshCount === undefined) {
            config.headers.refreshCount = 0;
        } else {
            if (response.config.headers.refreshCount > 3) {
                console.log('Refresh count');
                return new Promise(() => {
                });
            }
            config.headers.refreshCount += 1;
        }

        console.log('Trying refresh...');
        try {
            const {data: accessToken} = await memberApi.refresh(jwt.refreshToken);

            refresh(accessToken);
            api.defaults.headers.Authorization = accessToken;
            config.headers.Authorization = accessToken;
            return api(config);
        } catch (refreshError) {
            clearToken();
            navigate('/login');
            alert('로그인해 주세요');

            console.log('Refresh token failure');
            return Promise.reject(refreshError);
        }
    };

    api.interceptors.request.use(requestHandler, res => res);
    api.interceptors.response.use(response => response, errorResponseHandler);
};

export default useAxios;
