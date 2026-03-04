import {useCallback, useEffect, useEffectEvent, useState} from "react";
import {useImmer} from "use-immer";
import {makeDefaultWedding, toDTO, type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import weddingApi from "~/infrastructure/network/api/wedding-api.ts";
import {useNavigate, useParams} from "react-router";
import lodash from 'lodash';
import type Music from "~/infrastructure/network/value/Music.ts";
import musicApi from "~/infrastructure/network/api/music-api.ts";
import {isAxiosError} from "axios";


const {throttle} = lodash;

function useEditor() {
    const {url} = useParams();
    const [wedding, updateWedding] = useImmer<WeddingDto>(makeDefaultWedding('', ''));
    const [isSaving, setIsSaving] = useState(false);
    const [musics, setMusics] = useState<Music[]>();
    const navigate = useNavigate();

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

    const fetchWedding = useEffectEvent(async () => {
        if (!url) return;

        try {
            const {data} = await weddingApi.getWedding(url);
            updateWedding(data);
        } catch (error) {
            if (isAxiosError(error) && error.status === 404) {
                console.error(error);
                navigate('/');
            }
        }
    });

    const fetchMusics = useEffectEvent(async () => {
        const {data} = await musicApi.getMusics();
        setMusics(data);
    });

    useEffect(() => {
        fetchWedding().then();
    }, [url]);

    useEffect(() => {
        fetchMusics().then();
    }, []);

    return {
        wedding,
        updateWedding,
        isSaving,
        musics
    }
}

export default useEditor;
