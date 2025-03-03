import api from "@remote/api/foundation/api";
import {AxiosError, InternalAxiosRequestConfig} from "axios";
import memberApi from "@remote/api/MemberApi";
import {useNavigate} from "react-router-dom";
import useJwt from "@hook/useJwt";

const useAxiosInterceptor = () => {
    const navigate = useNavigate();
    const {jwt, clearToken, refresh} = useJwt();

    const requestHandler = (config: InternalAxiosRequestConfig) => {
        const shouldAuthorizeRequest = config.shouldAuthorizeRequest ?? true;
        if (!shouldAuthorizeRequest) return config;

        config.headers.Authorization = jwt.accessToken;

        return config;
    };

    const errorResponseHandler = async (error: AxiosError) => {

        if (!error.response) {
            return Promise.reject({
                error,
                message: 'Error.response is undefined'
            });
        }

        const shouldAuthorizeRequest = error.config?.shouldAuthorizeRequest ?? true;
        if (!shouldAuthorizeRequest) {
            return Promise.reject({
                error,
                message: 'Should not authorize request'
            });
        }

        if (error.status !== 401) {
            return Promise.reject({
                error,
                message: 'Status code is not 401'
            });
        }

        const refreshToken = jwt.refreshToken;
        if (!refreshToken) {
            return Promise.reject({
                error,
                message: 'Refresh token is undefined'
            });
        }

        console.log('Trying refresh...');
        try {
            const {data: accessToken} = await memberApi.refresh(jwt.refreshToken);

            api.defaults.headers.common.Authorization = accessToken;
            refresh(accessToken);
            return new Promise(resolve => {
                const {config} = error;
                if (!config) return;

                config.headers.Authorization = accessToken;
                resolve(api(config));
            });
        } catch (error) {
            clearToken();
            navigate('/login');
            alert('로그인해 주세요');

            return Promise.reject({
                error,
                message: 'Refresh token failure'
            });
        }
    };

    api.interceptors.request.use(requestHandler, res => res);
    api.interceptors.response.use(response => response, errorResponseHandler);
};

export default useAxiosInterceptor;
