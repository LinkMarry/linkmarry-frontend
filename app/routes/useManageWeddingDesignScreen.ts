import {useEffect, useState} from "react";
import {api} from "~/api/index.ts";
import type {WeddingDesignPreset} from "~/domain";

export function useManageWeddingDesignScreen() {
    const [presets, setPresets] = useState<WeddingDesignPreset[]>();

    useEffect(() => {
        (async () => {
            try {
                const {data} = await api.weddingDesign.getWeddingDesignPresets();
                setPresets(data);
            } catch (error) {
                console.error("Failed to fetch wedding design presets:", error);
            }
        })();
    }, []);

    return {
        presets,
    };
}
