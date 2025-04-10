import {useEffect, useState} from "react";
import weddingDesignApi from "@remote/api/WeddingDesignApi";
import WeddingDesignPreset from "@remote/value/WeddingDesignPreset";

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
