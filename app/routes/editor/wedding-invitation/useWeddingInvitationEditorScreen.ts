import {useCallback, useEffect, useEffectEvent, useState} from "react";
import {useImmer} from "use-immer";
import {makeDefaultWedding, type WeddingDto} from "~/api/value/WeddingDto.ts";
import {api} from "~/api/index.ts";
import {useNavigate, useParams, useSearchParams} from "react-router";
import lodash from "lodash";
import type Music from "~/api/value/Music.ts";
import {isAxiosError} from "axios";
import type Wedding from "~/api/value/Wedding.ts";
import {type WeddingInvitationEditorNavigationBarType} from "~/routes/editor/domain.ts";
import type WeddingDesignPreset from "~/api/value/WeddingDesignPreset.ts";

const {throttle} = lodash;

function useDesignId() {
    const [searchParams] = useSearchParams();
    const designId = searchParams.get("designId");

    return designId ? Number(designId) : null;
}

export function useWeddingInvitationEditorScreen() {
    const {url} = useParams();
    const designId = useDesignId();
    const navigate = useNavigate();

    const [wedding, updateWedding] = useImmer<Wedding>(makeDefaultWedding("", ""));
    const [isSaving, setIsSaving] = useState(false);
    const [musics, setMusics] = useState<Music[]>();

    // UI States
    const [selectedNav, setSelectedNav] = useState<WeddingInvitationEditorNavigationBarType>("design");
    const [openInspector, setOpenInspector] = useState(true);
    const [weddingDesigns, setWeddingDesigns] = useState<WeddingDesignPreset[]>();
    const [showRemoveWatermarkDialog, setShowRemoveWatermarkDialog] = useState(false);

    const t = throttle(async (updatedWedding: WeddingDto) => {
        if (updatedWedding.url === "" || updatedWedding.name === "") return;

        setIsSaving(false);
        try {
            await api.wedding.editWedding(updatedWedding);
        } catch (error) {
            console.error(error);
        }
    }, 3000);

    // eslint-disable-next-line
    const throttledEditWedding = useCallback(t, []);

    useEffect(() => {
        if (wedding) {
            setIsSaving(true);
            throttledEditWedding(wedding).then(() => {});
        }
    }, [throttledEditWedding, wedding]);

    const fetchWedding = useEffectEvent(async () => {
        if (!url) return;

        try {
            const {data} = await api.wedding.getWedding(url);
            updateWedding(data);
        } catch (error) {
            if (isAxiosError(error) && error.status === 404) {
                console.error(error);
                navigate("/");
            }
        }
    });

    const fetchMusics = useEffectEvent(async () => {
        const {data} = await api.music.getMusics();
        setMusics(data);
    });

    const fetchWeddingDesigns = useEffectEvent(async () => {
        const {data} = await api.weddingDesign.getWeddingDesignPresets();
        setWeddingDesigns(data);
    });

    useEffect(() => {
        fetchWedding().then();
    }, [url]);

    useEffect(() => {
        fetchMusics().then();
        fetchWeddingDesigns().then();
    }, []);

    useEffect(() => {
        if (designId === null || !weddingDesigns) return;

        const weddingDesign = weddingDesigns.find(i => i.id === designId);
        if (weddingDesign) {
            updateWedding(draft => {
                draft.weddingDesign.weddingDesignName = weddingDesign.name;
            });
        }
    }, [designId, updateWedding, weddingDesigns]);

    const handleShowPreview = () => {
        navigate(`/wedding/${wedding.url}`);
    };

    const handleRemoveWatermark = () => {
        setShowRemoveWatermarkDialog(true);
    };

    const toggleInspector = () => {
        setOpenInspector(i => !i);
    };

    return {
        wedding,
        updateWedding,
        isSaving,
        musics,
        selectedNav,
        setSelectedNav,
        openInspector,
        toggleInspector,
        weddingDesigns,
        showRemoveWatermarkDialog,
        setShowRemoveWatermarkDialog,
        handleShowPreview,
        handleRemoveWatermark,
    };
}

export default useWeddingInvitationEditorScreen;
