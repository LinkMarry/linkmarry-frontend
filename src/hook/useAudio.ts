import {useEffect, useRef} from "react";

export default function useAudio(autoPlay: boolean) {
    const ref = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        (async () => {
            const audio = ref.current;

            if (autoPlay && audio) {
                await navigator.mediaDevices.getUserMedia({audio: true});
                await audio.play();
                audio.volume = 0.15;
            }
        })()
    }, []);

    return {
        ref
    }
};
