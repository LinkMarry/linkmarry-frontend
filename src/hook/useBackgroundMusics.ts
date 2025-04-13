import {useEffect, useState} from "react";
import Music from "@src/infrastructure/network/value/Music";
import musicApi from "@src/infrastructure/network/api/MusicApi";

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
