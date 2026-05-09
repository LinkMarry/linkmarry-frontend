import {useEffect, useEffectEvent, useState} from "react";
import type {PosterPreset,makeDefaultPoster, type Poster} from "~/domain";
import {api} from "~/api/index.ts";
import {useImmer} from "use-immer";
import type {WeddingPosterEditorNavigationBarType} from "~/routes/editor/domain.ts";

export function useWeddingPosterEditor() {
    const [poster, updatePoster] = useImmer<Poster>(makeDefaultPoster());
    const [posterPresets, setPosterPresets] = useState<PosterPreset[]>();

    // UI States
    const [selectedNav, setSelectedNav] = useState<WeddingPosterEditorNavigationBarType>("design");
    const [openInspector, setOpenInspector] = useState(true);

    const toggleInspector = () => {
        setOpenInspector(i => !i);
    };

    const fetchPosterPresets = useEffectEvent(async () => {
        const {data} = await api.poster.getPosterPresets();
        setPosterPresets(data);
    });

    useEffect(() => {
        fetchPosterPresets().then();
    }, []);

    return {
        selectedNav,
        setSelectedNav,
        poster,
        updatePoster,
        posterPresets,
        openInspector,
        toggleInspector,
    };
}
