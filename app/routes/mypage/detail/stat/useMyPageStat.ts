import {useEffect, useState} from "react";
import type WeddingStatistics from "~/api/value/WeddingStatistics.ts";
import type RsvpInfo from "~/api/value/RsvpInfo.ts";
import {useNavigate, useParams} from "react-router";
import type {WeddingDto} from "~/api/value/WeddingDto.ts";
import {api} from "~/api/index.ts";

const useMyPageStat = () => {
    const {url} = useParams();
    const navigate = useNavigate();
    const [wedding, setWedding] = useState<WeddingDto>();
    const [statistics, setStatistics] = useState<WeddingStatistics>();
    const [rsvpInfoList, setRsvpInfoList] = useState<RsvpInfo[]>();

    useEffect(() => {
        if (!url) {
            navigate("/");
            return;
        }

        (async () => {
            try {
                const {data} = await api.wedding.getStatistics(url);
                setStatistics(data);
            } catch (error) {
                console.error(error);
            }
        })();

        (async () => {
            const {data} = await api.wedding.getRsvp(url);
            setRsvpInfoList(data);
        })();

        (async () => {
            const {data} = await api.wedding.getWedding(url);
            setWedding(data);
        })();
    }, [navigate, url]);

    return {
        statistics,
        wedding,
        rsvpInfoList,
    };
};

export default useMyPageStat;
