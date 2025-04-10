import {useCallback, useEffect, useState} from "react";
import {useImmer} from "use-immer";
import WeddingDto, {makeDefaultWedding, toDTO} from "@remote/value/WeddingDto";
import weddingApi from "@remote/api/WeddingApi";
import {useParams} from "react-router-dom";
import {throttle} from 'lodash';

function useWedding() {
    const {url} = useParams();
    const [wedding, updateWedding] = useImmer<WeddingDto>(makeDefaultWedding('', ''));
    const [isSaveing, setIsSaveing] = useState(false);

    // eslint-disable-next-line
    const throttledEditWedding = useCallback(throttle(async (updatedWedding: WeddingDto) => {
        if (updatedWedding.url === '' || updatedWedding.name === '') return;

        setIsSaveing(false);
        try {
            await weddingApi.editWedding(updatedWedding);
        } catch (error) {
            console.error(error);
        } finally {
        }
    }, 3000), []);

    useEffect(() => {
        if (wedding) {
            setIsSaveing(true);
            throttledEditWedding(wedding).then(() => {});
        }
    }, [throttledEditWedding, wedding]);

    useEffect(() => {
        if (!url) return;

        (async () => {
            const {data} = await weddingApi.getWedding(url);
            updateWedding(toDTO(data));
        })();
    }, [updateWedding, url]);

    return {
        wedding,
        updateWedding,
        isSaveing
    }
}

export default useWedding;
