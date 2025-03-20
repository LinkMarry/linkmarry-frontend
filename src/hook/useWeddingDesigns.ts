import {useEffect, useState} from "react";
import WeddingDesign from "@remote/value/WeddingDesign";
import weddingDesignApi from "@remote/api/WeddingDesignApi";
import WeddingDesignPreset from "@remote/value/WeddingDesignPreset";

export default function useWeddingDesigns() {
    const [weddingDesigns, setWeddingDesigns] = useState<WeddingDesignPreset[]>();

    useEffect(() => {
        (async () => {
            const {data} = await weddingDesignApi.getWeddingDesignPresets();
            setWeddingDesigns(data);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        weddingDesigns,
    }
}
