import {useCookies} from "react-cookie";
import {useCallback} from "react";
import type Jwt from "~/api/value/Jwt";
import index from "~/api";

const useJwt = () => {
    const [cookie, setCookie, removeCookie] = useCookies(['accessToken', 'refreshToken']);

    const setToken = useCallback((jwt: Jwt) => {
        setCookie('accessToken', jwt.accessToken);
        setCookie('refreshToken', jwt.refreshToken);
        index.defaults.headers.common.Authorization = jwt.accessToken;
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
