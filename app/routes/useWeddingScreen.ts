import {useParams} from "react-router";
import {useCallback, useEffect, useState} from "react";
import type {Wedding} from "~/domain";
import {useCookies} from "react-cookie";
import {api} from "~/api/index.ts";

export const useWeddingScreen = () => {
    const {url} = useParams();
    const [wedding, setWedding] = useState<Wedding>();
    const [isError, setIsError] = useState(false);
    const cookieKey = `firstVisitor_${url}`;
    const [cookie, setCookie] = useCookies([cookieKey]);

    const fetchWedding = useCallback(async () => {
        if (!url) return;

        const isFirstVisitor = !cookie[cookieKey];

        if (isFirstVisitor) {
            const date = new Date();
            date.setDate(date.getDate() + 365);
            setCookie(cookieKey, "false", {
                expires: date,
            });
        }

        try {
            const {data} = await api.wedding.getWeddingInvitation(url, {
                firstVisitor: isFirstVisitor,
            });
            setWedding(data);
        } catch (error) {
            console.error(error);
            setIsError(true);
        }
    }, [cookie, cookieKey, setCookie, url]);

    const onAppear = useCallback(async () => {
        fetchWedding().then();
    }, [fetchWedding]);

    const handleRefresh = useCallback(async () => {
        fetchWedding().then();
    }, [fetchWedding]);

    useEffect(() => {
        onAppear().then();
    }, [onAppear]);

    return {
        wedding,
        handleRefresh,
        isError,
    };
};
