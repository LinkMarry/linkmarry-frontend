import {useEffect, useState} from "react";
import weddingDesignApi from "@src/infrastructure/network/api/WeddingDesignApi";
import WeddingDesignPreset from "@src/infrastructure/network/value/WeddingDesignPreset";

export default function useWeddingDesigns() {
    const [weddingDesigns, setWeddingDesigns] = useState<WeddingDesignPreset[]>();

    useEffect(() => {
        (async () => {
            const {data} = await weddingDesignApi.getWeddingDesignPresets();
            setWeddingDesigns(data);
        })();
    }, []);

    return {
        weddingDesigns,
    }
}
