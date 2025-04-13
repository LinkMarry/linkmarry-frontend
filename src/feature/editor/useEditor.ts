import {useCallback, useEffect, useState} from "react";
import {useImmer} from "use-immer";
import WeddingDto, {makeDefaultWedding, toDTO} from "@src/infrastructure/network/value/WeddingDto";
import weddingApi from "@src/infrastructure/network/api/wedding-api";
import {useParams} from "react-router-dom";
import {throttle} from 'lodash';
import Music from "@src/infrastructure/network/value/Music";
import musicApi from "@src/infrastructure/network/api/music-api";

function useEditor() {
    const {url} = useParams();
    const [wedding, updateWedding] = useImmer<WeddingDto>(makeDefaultWedding('', ''));
    const [isSaving, setIsSaving] = useState(false);
    const [musics, setMusics] = useState<Music[]>();

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

    useEffect(() => {
        (async () => {
            const {data} = await musicApi.getMusics();
            setMusics(data);
        })();
    }, []);

    return {
        wedding,
        updateWedding,
        isSaving,
        musics
    }
}

export default useEditor;
