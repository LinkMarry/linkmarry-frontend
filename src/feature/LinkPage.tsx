import {useEffect} from 'react';
import {Navigate, useSearchParams} from "react-router-dom";
import ClientRendering from "@src/ClientRendering.tsx";

const LinkPage = () => {
    const [searchParams] = useSearchParams();
    const url = searchParams.get('url');

    useEffect(() => {
        if (url) {
            window.location.href = url;
        }
    }, [url]);

    if (!url) {
        return <ClientRendering>
            <Navigate to={'/'}/>
        </ClientRendering>
    }

    return null;
};

export default LinkPage;
