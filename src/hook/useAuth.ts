import Cookies from "js-cookie";
import {useCallback} from "react";
import config from "@config/config";
import kakaoApi from "@remote/api/KakaoApi";

const {Kakao} = window as any;

export default function useAuth() {
    const authorized = Cookies.get('accessToken') !== undefined && Cookies.get('refreshToken') !== undefined;

    const signInWithKakao = useCallback(() => {
        Kakao?.Auth?.authorize({
            redirectUri: config.kakao.redirectUri
        });
    }, []);

    const signIn = useCallback(async (code: string) => {
        try {
            const {data} = await kakaoApi.authorize(code);

            Cookies.set('accessToken', data.accessToken);
            Cookies.set('refreshToken', data.refreshToken);
        } catch (e) {
        }
        window.location.href = '/';
    }, []);

    return {
        authorized,
        signInWithKakao,
        signIn
    };
}