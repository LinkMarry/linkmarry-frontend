import {useCallback, useEffect, useState} from "react";
import {useImmer} from "use-immer";
import WeddingDto, {makeDefaultWedding, toDTO} from "@src/infrastructure/network/value/WeddingDto";
import weddingApi from "@src/infrastructure/network/api/wedding-api";
import {useParams} from "react-router-dom";
import {throttle} from 'lodash';

function useWedding() {
    const {url} = useParams();
    const [wedding, updateWedding] = useImmer<WeddingDto>(makeDefaultWedding('', ''));
    const [isSaving, setIsSaving] = useState(false);

    // eslint-disable-next-line
    const throttledEditWedding = useCallback(throttle(async (updatedWedding: WeddingDto) => {
        if (updatedWedding.url === '' || updatedWedding.name === '') return;

        setIsSaving(false);
        try {
            await weddingApi.editWedding(updatedWedding);
        } catch (error) {
            console.error(error);
        } finally {
        }
    }, 3000), []);

    useEffect(() => {
        if (wedding) {
            setIsSaving(true);
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
        isSaving
    }
}

export default useWedding;
