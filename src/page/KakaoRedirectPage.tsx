import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import useAuth from "../hook/useAuth";

function KakaoRedirectPage() {
    const [searchParams] = useSearchParams();
    const {signIn} = useAuth();

    useEffect(() => {
        const code = searchParams.get('code');
        
        if (code === null) return;
        signIn(code);
    }, []);
    
    return (
        <div></div>
    );
}

export default KakaoRedirectPage;