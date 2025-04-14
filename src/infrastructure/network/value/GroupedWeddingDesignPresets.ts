import WeddingDesignPreset from "@src/infrastructure/network/value/WeddingDesignPreset";

interface GroupedWeddingDesignPresets {
    category: string;
    items: WeddingDesignPreset[];
}

export function groupedByCategory(presets: WeddingDesignPreset[]): GroupedWeddingDesignPresets[] {
    const grouped = presets.reduce((acc, preset) => {
        if (!acc[preset.category]) {
            acc[preset.category] = [];
        }
        acc[preset.category].push(preset);
        return acc;
    }, {} as Record<string, WeddingDesignPreset[]>);

    return Object.keys(grouped).map(category => ({
        category,
        items: grouped[category]
    }));
}

export default GroupedWeddingDesignPresets;
