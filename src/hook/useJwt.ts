import {useCookies} from "react-cookie";
import {useCallback} from "react";
import Jwt from "@remote/value/Jwt";

const useJwt = () => {
    const [cookie, setCookie, removeCookie] = useCookies(['accessToken', 'refreshToken']);

    const setToken = useCallback((jwt: Jwt) => {
        setCookie('accessToken', jwt.accessToken);
        setCookie('refreshToken', jwt.refreshToken);
    }, [setCookie]);

    const clearToken = useCallback(() => {
        removeCookie('accessToken');
        removeCookie('refreshToken');
    }, [removeCookie]);

    const refresh = useCallback((accessToken: string) => {
        setCookie('accessToken', accessToken);
    }, [setCookie]);

    return {
        jwt: {
            accessToken: cookie.accessToken,
            refreshToken: cookie.refreshToken,
        },
        setToken,
        clearToken,
        refresh
    }
};

export default useJwt;
