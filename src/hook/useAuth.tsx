import {createContext, PropsWithChildren, useCallback, useContext, useEffect, useState} from "react";
import config from "@src/config";
import kakaoApi from "@src/infrastructure/network/api/kakao-api";
import {useNavigate} from "react-router-dom";
import memberApi from "@src/infrastructure/network/api/member-api";
import InfoMember from "@src/infrastructure/network/value/InfoMember";
import useJwt from "@src/hook/useJwt";


type AuthValue = {
    member?: InfoMember;
    authorized: boolean;
    signInWithKakao: () => void;
    signIn: (code: string) => Promise<void>;
    signOut: () => void;
    removeMember: () => Promise<void>;
    fetchMember: () => Promise<void>;
};
const AuthContext = createContext<AuthValue | null>(null);

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

const useAuth = () => {
    const value = useContext(AuthContext);
    if (!value) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return value;
}

export default useAuth;
