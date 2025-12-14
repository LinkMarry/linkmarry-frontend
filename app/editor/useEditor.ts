import {useCallback, useEffect, useState} from "react";
import {useImmer} from "use-immer";
import {makeDefaultWedding, toDTO, type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import weddingApi from "~/infrastructure/network/api/wedding-api.ts";
import {useParams} from "react-router";
import lodash from 'lodash';
import type Music from "~/infrastructure/network/value/Music.ts";
import musicApi from "~/infrastructure/network/api/music-api.ts";


const {throttle} = lodash;

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
