import {useEffect, useEffectEvent, useState} from "react";
import type {PosterPreset} from "~/api/value/PosterPreset.ts";
import posterApi from "~/api/poster-api.ts";
import {useImmer} from "use-immer";
import {makeDefaultPoster, type Poster} from "~/api/value/Poster.ts";
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
        const {data} = await posterApi.getPosterPresets();
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
