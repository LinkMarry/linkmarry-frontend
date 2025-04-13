import {useEffect, useState} from "react";
import {groupedByCategory} from "@src/infrastructure/network/value/GroupedWeddingDesignPresets";
import WeddingDesignPreset from "@src/infrastructure/network/value/WeddingDesignPreset";
import weddingDesignApi from "@src/infrastructure/network/api/wedding-design-api";

const useHome = () => {
    const [weddingDesigns, setWeddingDesigns] = useState<WeddingDesignPreset[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('전체');
    const groupedDesigns = groupedByCategory(weddingDesigns);
    const categories = ['전체', ...groupedDesigns.map(i => i.category)];
    const selectedWeddingDesigns = selectedCategory === '전체'
        ? weddingDesigns
        : groupedDesigns.find(i => i.category === selectedCategory)?.items ?? [];

    useEffect(() => {
        (async () => {
            const {data} = await weddingDesignApi.getWeddingDesignPresets();
            setWeddingDesigns(data);
        })();
    }, []);

    return {
        selectedCategory,
        setSelectedCategory,
        categories,
        selectedWeddingDesigns
    };
};

export default useHome;
