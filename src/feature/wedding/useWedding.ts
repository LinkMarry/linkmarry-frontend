import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import Wedding from "@src/infrastructure/network/value/Wedding";
import {useCookies} from "react-cookie";
import weddingApi from "@src/infrastructure/network/api/wedding-api";

const useWedding = () => {
    const {url} = useParams();
    const [wedding, setWedding] = useState<Wedding>();
    const [isError, setIsError] = useState(false);
    const cookieKey = `firstVisitor_${url}`;
    const [cookie, setCookie] = useCookies([cookieKey]);

    const getWedding = useCallback(async () => {
        if (!url) return;

        const isFirstVisitor = !cookie[cookieKey];

        if (isFirstVisitor) {
            const date = new Date();
            date.setDate(date.getDate() + 365);
            setCookie(cookieKey, 'false', {
                expires: date
            });
        }

        try {
            const {data} = await weddingApi.getWeddingInvitation(url, {
                firstVisitor: isFirstVisitor
            });
            setWedding(data);
        } catch (error) {
            console.error(error);
            setIsError(true);
        }
    }, [cookie, cookieKey, setCookie, url]);

    useEffect(() => {
        (async () => {
            await getWedding();
        })();
    }, [getWedding]);

    return {
        wedding,
        getWedding,
        isError
    }
};

export default useWedding;
