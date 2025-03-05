import {useEffect, useState} from "react";
import Music from "@remote/value/Music";
import fileApi from "@remote/api/FileApi";

export default function useBackgroundMusics() {
    const [musics, setMusics] = useState<Music[]>();

    useEffect(() => {
        (async () => {
            const {data} = await fileApi.getMusics();
            setMusics(data);
        })();
    }, []);

    return {
        musics
    };
}
