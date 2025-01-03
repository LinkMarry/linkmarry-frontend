import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import useAuth from "@hook/useAuth";

function KakaoRedirectPage() {
    const {signIn} = useAuth();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const code = searchParams.get('code');
        
        if (code === null) return;
        (async () => {
            await signIn(code);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div></div>
    );
}

export default KakaoRedirectPage;