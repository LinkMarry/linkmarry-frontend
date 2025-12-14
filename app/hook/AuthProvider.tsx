import {type PropsWithChildren, useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import type InfoMember from "~/infrastructure/network/value/InfoMember.ts";
import useJwt from "~/hook/useJwt.ts";
import config from "~/config.ts";
import kakaoApi from "~/infrastructure/network/api/kakao-api.ts";
import memberApi from "~/infrastructure/network/api/member-api.ts";
import { AuthContext } from "./useAuth";

export const AuthProvider = ({children}: PropsWithChildren) => {
    const navigate = useNavigate();
    const [member, setMember] = useState<InfoMember>();
    const {jwt, setToken, clearToken} = useJwt();
    const authorized: boolean = jwt.accessToken && jwt.refreshToken;

    const signInWithKakao = useCallback(() => {
        const {Kakao} = window as any;
        console.info(`signInWithKakao ${Kakao.Auth}`);
        Kakao?.Auth?.authorize({
            redirectUri: config.kakao.redirectUri
        });
    }, []);

    const signIn = useCallback(async (code: string) => {
        try {
            const {data} = await kakaoApi.authorize(code);
            setToken(data);
        } catch (error) {
            console.error(error);
        }
        navigate('/', {replace: true});
    }, [navigate, setToken]);

    const signOut = useCallback(() => {
        clearToken();
        navigate('/', {replace: true});
    }, [clearToken, navigate]);

    const removeMember = useCallback(async () => {
        try {
            await memberApi.removeMember();
            clearToken();
            navigate('/', {replace: true});
        } catch (error) {
            console.error(error);
        }
    }, [clearToken, navigate]);

    const fetchMember = useCallback(async () => {
        try {
            const {data} = await memberApi.getMyProfile();
            setMember(data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        (async () => {
            await fetchMember();
        })();
    }, [fetchMember, jwt.accessToken]);

    return (
        <AuthContext.Provider value={{
            member,
            authorized,
            signInWithKakao,
            signIn,
            signOut,
            removeMember,
            fetchMember,
        }}>
            {children}
        </AuthContext.Provider>
    )
}