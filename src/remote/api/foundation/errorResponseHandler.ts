import {AxiosError} from "axios";
import Cookies from "js-cookie";
import customApi from "@remote/api/foundation/customApi";
import memberApi from "@remote/api/MemberApi";

const refreshSubscribers: ((accessToken: string) => void)[] = [];
let isRefreshing = false;

const errorResponseHandler = async (error: AxiosError) => {
    if (error.response === undefined) {
        console.error('error.response is undefined');
        return Promise.reject(error);
    }

    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    if (accessToken === undefined || refreshToken === undefined) {
        console.error('token is undefined');
        return Promise.reject(error);
    }

    // 아무 요청중 하나하도 리프레쉬 작업중이 아니라면
    if (!isRefreshing) {
        isRefreshing = true;
        try {
            const {data: newAccessToken} = await memberApi.refresh(refreshToken);

            customApi.defaults.headers.common.Authorization = newAccessToken;
            Cookies.set('accessToken', newAccessToken);
            refreshSubscribers.forEach(callback => callback(newAccessToken));
        } catch (error) {
            console.error('refresh 실패');
            console.error(error);
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
            window.location.href = '/';
            alert('로그인해 주세요');
        } finally {
            isRefreshing = false;
        }
    }

    // 어떤 요청이 리프레쉬 작업중이라면 여기로 와서 그 후에 요청된 다른 API Promise를 refreshSubscribers에 넣어줌
    return new Promise(resolve => {
        refreshSubscribers.push(accessToken => {
            const {config} = error;
            if (!config) return;

            config.headers.Authorization = accessToken;
            resolve(customApi(config));
        });
    });
};

export default errorResponseHandler;