import {useCallback, useContext, useEffect, useState} from "react";
import type {InfoMember} from "~/domain";
import {AuthContext, type AuthValue} from "./context";
import config from "~/lib/config";
import {useNavigate} from "react-router";
import useJwt from "~/hook/useJwt";
import {api} from "~/api";

export const useAuthImpl = (): AuthValue => {
    const navigate = useNavigate();
    const [member, setMember] = useState<InfoMember>();
    const {jwt, setToken, clearToken} = useJwt();
    const authorized: boolean = !!(jwt.accessToken && jwt.refreshToken);

    const signInWithKakao = useCallback(() => {
        const {Kakao} = window;
        console.info(`signInWithKakao ${Kakao.Auth}`);
        Kakao?.Auth?.authorize({
            redirectUri: config.kakao.redirectUri,
        });
    }, []);

    const signIn = useCallback(
        async (code: string) => {
            try {
                const {data} = await api.kakao.authorize(code);
                setToken(data);
            } catch (error) {
                console.error(error);
            }
            navigate("/", {replace: true});
        },
        [navigate, setToken],
    );

    const signOut = useCallback(() => {
        clearToken();
        navigate("/", {replace: true});
    }, [clearToken, navigate]);

    const removeMember = useCallback(async () => {
        try {
            await api.member.removeMember();
            clearToken();
            navigate("/", {replace: true});
        } catch (error) {
            console.error(error);
        }
    }, [clearToken, navigate]);

    const fetchMember = useCallback(async () => {
        try {
            const {data} = await api.member.getMyProfile();
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

    return {
        member,
        authorized,
        signInWithKakao,
        signIn,
        signOut,
        removeMember,
        fetchMember,
    };
};

export const useAuth = () => {
    const value = useContext(AuthContext);
    if (!value) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return value;
};
