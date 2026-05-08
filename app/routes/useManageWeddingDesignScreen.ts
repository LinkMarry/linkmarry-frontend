import {useEffect, useState} from "react";
import weddingDesignApi from "~/api/wedding-design-api.ts";
import type WeddingDesignPreset from "~/api/value/WeddingDesignPreset.ts";

export function useManageWeddingDesignScreen() {
    const [presets, setPresets] = useState<WeddingDesignPreset[]>();

    useEffect(() => {
        (async () => {
            try {
                const {data} = await weddingDesignApi.getWeddingDesignPresets();
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
