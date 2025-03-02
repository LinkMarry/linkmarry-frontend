import Cookies from "js-cookie";
import {useCallback} from "react";
import config from "@config/config";
import kakaoApi from "@remote/api/KakaoApi";
import {useNavigate} from "react-router-dom";
import memberApi from "@remote/api/MemberApi";

const {Kakao} = window as any;

export default function useAuth() {
    const authorized = Cookies.get('accessToken') !== undefined && Cookies.get('refreshToken') !== undefined;
    const navigate = useNavigate();

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
        } catch (error) {
            console.error(error);
        }

        window.location.href = '/';
    }, []);

    const signOut = useCallback(() => {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        navigate('/');
    }, [navigate]);

    const removeMember = useCallback(async () => {
        try {
            await memberApi.removeMember();

            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }, [navigate]);

    return {
        authorized,
        signInWithKakao,
        signIn,
        signOut,
        removeMember
    };
}
