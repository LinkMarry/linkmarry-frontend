import {useCallback} from "react";
import {useImmer} from "use-immer";
import WeddingDto, {makeDefaultWedding} from "@remote/value/WeddingDto";
import weddingApi from "@remote/api/WeddingApi";

function useWedding() {
    const [wedding, updateWedding] = useImmer<WeddingDto>(makeDefaultWedding(''));

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
    }
}

export default useWedding;
