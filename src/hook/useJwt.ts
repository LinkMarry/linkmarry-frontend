import {useCookies} from "react-cookie";
import {useCallback} from "react";
import Jwt from "@remote/value/Jwt";
import api from "@remote/api/foundation/api";

const useJwt = () => {
    const [cookie, setCookie, removeCookie] = useCookies(['accessToken', 'refreshToken']);

    const setToken = useCallback((jwt: Jwt) => {
        setCookie('accessToken', jwt.accessToken);
        setCookie('refreshToken', jwt.refreshToken);
        api.defaults.headers.common.Authorization = jwt.accessToken;
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
