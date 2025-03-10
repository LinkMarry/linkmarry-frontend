import {useCallback} from "react";
import {useImmer} from "use-immer";
import WeddingDto, {makeDefaultWedding} from "@remote/value/WeddingDto";
import weddingApi from "@remote/api/WeddingApi";
import {useParams} from "react-router-dom";

function useWedding() {
    const [wedding, updateWedding] = useImmer<WeddingDto>(makeDefaultWedding(''));
    const {url} = useParams();

    const saveWedding = useCallback(async () => {
        try {
            await weddingApi.editWedding(wedding);
        } catch (error) {
            console.error(error);
        }
    }, [wedding]);

    return {
        wedding,
        updateWedding,
        saveWedding,
        url
    }
}

export default useWedding;
