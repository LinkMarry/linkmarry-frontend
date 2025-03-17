import {useCallback, useEffect} from "react";
import {Updater, useImmer} from "use-immer";
import WeddingDto, {makeDefaultWedding, toDTO} from "@remote/value/WeddingDto";
import weddingApi from "@remote/api/WeddingApi";
import {useNavigate, useParams} from "react-router-dom";

function useWedding() {
    const {url} = useParams();
    const navigate = useNavigate();
    const [wedding, updateWedding] = useImmer<WeddingDto>(makeDefaultWedding('', ''));
    // const tempLocalStorageKey = `temp_Design_${url}`;

    const saveWedding = useCallback(async () => {
        try {
            await weddingApi.editWedding(wedding);
            // localStorage.removeItem(tempLocalStorageKey);
        } catch (error) {
            console.error(error);
        }
    }, [wedding]);

    useEffect(() => {
        if (!url) return;

        (async () => {
            const {data} = await weddingApi.getWedding(url);
            updateWedding(toDTO(data));
            // loadTemp(toDTO(data));
        })();
    }, []);

    // const loadTemp = (alt: WeddingDto) => {
    //     const temp = localStorage.getItem(tempLocalStorageKey);
    //     localStorage.removeItem(tempLocalStorageKey);
    //     if (temp === null) {
    //         updateWedding(alt);
    //         console.log('temp is null');
    //         return;
    //     }
    //
    //     const isLoad = window.confirm('임시 저장된 디자인이 있습니다. 불러오시겠습니까?');
    //     if (!isLoad) {
    //         updateWedding(alt);
    //         localStorage.removeItem(tempLocalStorageKey);
    //         return;
    //     }
    //
    //     const wedding: WeddingDto = JSON.parse(temp);
    //     updateWedding(wedding);
    // };

    // useEffect(() => {
    //     if (wedding.url === '' && wedding.name === '') return;
    //     localStorage.setItem(tempLocalStorageKey, JSON.stringify(wedding));
    // }, [wedding]);

    return {
        wedding,
        updateWedding,
        saveWedding,
    }
}

export default useWedding;
