import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import config from "@config/config";
import kakaoApi from "@remote/api/KakaoApi";
import {useNavigate} from "react-router-dom";
import memberApi from "@remote/api/MemberApi";
import InfoMember from "@remote/value/InfoMember";
import useJwt from "@hook/useJwt";

const {Kakao} = window as any;

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

    const signInWithKakao = () => {
        Kakao?.Auth?.authorize({
            redirectUri: config.kakao.redirectUri
        });
    };

    const signIn = async (code: string) => {
        try {
            const {data} = await kakaoApi.authorize(code);
            setToken(data);
        } catch (error) {
            console.error(error);
        }

        navigate('/', {replace: true});
    }

    const signOut = () => {
        clearToken();
        navigate('/', {replace: true});
    };

    const removeMember = async () => {
        try {
            await memberApi.removeMember();
            clearToken();
            navigate('/', {replace: true});
        } catch (error) {
            console.error(error);
        }
    };

    const fetchMember = async () => {
        try {
            const {data} = await memberApi.getMyProfile();
            setMember(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        (async () => {
            await fetchMember();
        })();
    }, []);

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
