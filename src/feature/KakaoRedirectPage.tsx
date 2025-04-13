import {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import useAuth from "@src/hook/useAuth";

function KakaoRedirectPage() {
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

export default KakaoRedirectPage;
