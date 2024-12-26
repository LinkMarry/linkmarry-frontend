import {AxiosError} from "axios";
import Cookies from "js-cookie";
import customApi from "./customApi";
import Jwt from "../../value/Jwt";

const refreshSubscribers: ((accessToken: string) => void)[] = [];
let isRefreshing = false;

const errorResponseHandler = async (error: AxiosError) => {
    if (error.response === undefined) {
        return Promise.reject(error);
    }

    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    if (accessToken === undefined || refreshToken === undefined || error.status === 401) {
        return Promise.reject(error);
    }

    // 아무 요청중 하나하도 리프레쉬 작업중이 아니라면
    if (!isRefreshing) {
        isRefreshing = true;
        let response: Jwt | undefined;
        try {
            // const {data} = await authApi.reissue({
            //     refreshToken: refreshToken
            // });
            // response = data
        } catch (error) {
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');

            window.location.href = '/';

            console.error(error);
        }
        const newAccessToken = response?.accessToken ?? ""

        customApi.defaults.headers.common.Authorization = newAccessToken;
        Cookies.set('accessToken', newAccessToken);

        // 리프레쉬 작업을 마침
        isRefreshing = false;
        refreshSubscribers.forEach(callback => callback(newAccessToken));
    }

    // 어떤 요청이 리프레쉬 작업중이라면 여기로 와서 그 후에 요청된 다른 API Promise를 refreshSubscribers에 넣어줌
    return new Promise(resolve => {
        refreshSubscribers.push(accessToken => {
            const {config} = error;
            if (!config) return;

            config.headers.Authorization = accessToken;
            resolve(customApi(config));
        })
    });
};

export default errorResponseHandler;