import {useEffect} from 'react';
import {Navigate, useSearchParams} from "react-router-dom";

const LinkPage = () => {
    const [searchParams] = useSearchParams();
    const url = searchParams.get('url');

    useEffect(() => {
        if (url) {
            window.location.href = url;
        }
    }, [url]);

    if (!url) {
        return <Navigate to={'/'}/>;
    }

    return null;
};

export default LinkPage;
