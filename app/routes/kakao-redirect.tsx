import {useEffect} from 'react';
import {useSearchParams} from "react-router";
import {useAuth} from "~/hook/useAuth.tsx";

function KakaoRedirect() {
    const {signIn} = useAuth();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const code = searchParams.get('code');

        if (code === null) return;
        (async () => {
            await signIn(code);
        })();
    }, [searchParams, signIn]);

    return null;
}

export default KakaoRedirect;