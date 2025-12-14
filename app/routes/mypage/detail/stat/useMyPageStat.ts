import {useEffect, useState} from "react";
import type Wedding from "~/infrastructure/network/value/Wedding.ts";
import type WeddingStatistics from "~/infrastructure/network/value/WeddingStatistics.ts";
import type RsvpInfo from "~/infrastructure/network/value/RsvpInfo.ts";
import weddingApi from "~/infrastructure/network/api/wedding-api.ts";
import {useNavigate, useParams} from "react-router";

const useMyPageStat = () => {
    const {url} = useParams();
    const navigate = useNavigate();
    const [wedding, setWedding] = useState<Wedding>();
    const [statistics, setStatistics] = useState<WeddingStatistics>();
    const [rsvpInfoList, setRsvpInfoList] = useState<RsvpInfo[]>();

    useEffect(() => {
        if (!url) {
            navigate('/');
            return;
        }

        (async () => {
            try {
                const {data} = await weddingApi.getStatistics(url);
                setStatistics(data);
            } catch (error) {
                console.error(error);
            }
        })();

        (async () => {
            const {data} = await weddingApi.getRsvp(url);
            setRsvpInfoList(data);
        })();

        (async () => {
            const {data} = await weddingApi.getWedding(url);
            setWedding(data);
        })();
    }, [navigate, url]);

    return {
        statistics,
        wedding,
        rsvpInfoList
    }
}

export default useMyPageStat;
