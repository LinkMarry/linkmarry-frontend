import {useEffect, useRef} from "react";

export default function useAudio(autoPlay: boolean) {
    const ref = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = ref.current;

        if (!autoPlay || !audio) {
            // console.log(`audio: ${audio}`);
            return;
        }
        (async () => {
            try {
                await audio.play();
                audio.volume = 0.15;
            } catch (error) {
                console.error(error);
            }
        })();
    }, [autoPlay]);

    return {
        ref
    }
};
