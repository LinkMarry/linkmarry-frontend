import {useEffect, useState} from "react";
import Wedding from "@src/infrastructure/network/value/Wedding";
import WeddingStatistics from "@src/infrastructure/network/value/WeddingStatistics";
import RsvpInfo from "@src/infrastructure/network/value/RsvpInfo";
import weddingApi from "@src/infrastructure/network/api/wedding-api";
import {useNavigate, useParams} from "react-router-dom";

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
