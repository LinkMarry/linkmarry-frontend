import {useCallback, useEffect, useState} from "react";
import {Updater, useImmer} from "use-immer";
import WeddingDto, {makeDefaultWedding, toDTO} from "@remote/value/WeddingDto";
import weddingApi from "@remote/api/WeddingApi";
import {useNavigate, useParams} from "react-router-dom";
import {debounce} from 'lodash';

function useWedding() {
    const {url} = useParams();
    const [wedding, updateWedding] = useImmer<WeddingDto>(makeDefaultWedding('', ''));
    const [isSaveing, setIsSaveing] = useState(false);

    const throttledEditWedding = useCallback(debounce(async (updatedWedding: WeddingDto) => {
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
            throttledEditWedding(wedding);
        }
    }, [wedding]);

    useEffect(() => {
        if (!url) return;

        (async () => {
            const {data} = await weddingApi.getWedding(url);
            updateWedding(toDTO(data));
        })();
    }, []);

    return {
        wedding,
        updateWedding,
        isSaveing
    }
}

export default useWedding;
