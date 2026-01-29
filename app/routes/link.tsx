import {useEffect} from 'react';
import {Navigate, useSearchParams} from "react-router";

const Link = () => {
    const [searchParams] = useSearchParams();
    const url = searchParams.get('url');

    useEffect(() => {
        if (url) {
            window.location.href = url;
        }
    }, [url]);

    if (!url) {
        return <Navigate to={'/'}/>
    }

    return null;
};

export default Link;
