import {useEffect, useState} from "react";
import Music from "@remote/value/Music";
import musicApi from "@remote/api/MusicApi";

export default function useBackgroundMusics() {
    const [musics, setMusics] = useState<Music[]>();

    useEffect(() => {
        (async () => {
            const {data} = await musicApi.getMusics();
            setMusics(data);
        })();
    }, []);

    return {
        musics
    };
}
