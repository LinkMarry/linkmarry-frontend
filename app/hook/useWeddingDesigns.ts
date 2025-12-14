import {groupedByCategory} from "~/infrastructure/network/value/GroupedWeddingDesignPresets";
import weddingDesignApi from "~/infrastructure/network/api/wedding-design-api";
import {useState} from "react";
import type WeddingDesignPreset from "~/infrastructure/network/value/WeddingDesignPreset.ts";

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
