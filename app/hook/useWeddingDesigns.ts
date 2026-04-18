import {groupedByCategory} from "~/api/value/GroupedWeddingDesignPresets";
import weddingDesignApi from "~/api/wedding-design-api.ts";
import {useState} from "react";
import type WeddingDesignPreset from "~/api/value/WeddingDesignPreset.ts";

const useWeddingDesigns = (weddingDesigns: WeddingDesignPreset[]) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('전체');
    const groupedDesigns = groupedByCategory(weddingDesigns);
    const categories = ['전체', ...groupedDesigns.map(i => i.category)];
    const selectedWeddingDesigns = selectedCategory === '전체'
        ? weddingDesigns
        : groupedDesigns.find(i => i.category === selectedCategory)?.items ?? [];

    return {
        selectedCategory,
        setSelectedCategory,
        categories,
        selectedWeddingDesigns
    };
};

export default useWeddingDesigns;
