import {useCallback} from "react";
import {useImmer} from "use-immer";
import WeddingDto, {makeDefaultWedding} from "@remote/value/WeddingDto";
import {useSearchParams} from "react-router-dom";
import weddingApi from "@remote/api/WeddingApi";

function useWedding() {
    const [wedding, updateWedding] = useImmer<WeddingDto>(makeDefaultWedding(''));
    const [searchParams, setSearchParams] = useSearchParams();
    const isCreateMode = (searchParams.get('m') ?? 'w') === 'w';

    const saveWedding = useCallback(async () => {
        try {
            if (isCreateMode) {
                await weddingApi.createWedding(wedding);
                setSearchParams({m: 'e'});
            } else {
                await weddingApi.editWedding(wedding);
            }
        } catch (error) {
            console.error(error);
        }
    }, [isCreateMode, setSearchParams, wedding]);

    return {
        wedding,
        updateWedding,
        saveWedding
    }
}

export default useWedding;
