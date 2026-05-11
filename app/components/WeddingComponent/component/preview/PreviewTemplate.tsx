import {
    View,
    WhiteMomentPreviewTemplate,
    ForestLovePreviewTemplate,
    NatureBlissPreviewTemplate,
    SoulmatePreviewTemplate,
    ClassicElegancePreviewTemplate,
    NaturalGardenPreviewTemplate,
    ModernSimplePreviewTemplate,
    RomanticForestPreviewTemplate,
    DreamWeddingPreviewTemplate,
    PureLovePreviewTemplate,
    ModernLovePreviewTemplate,
    ClassicRomancePreviewTemplate,
    LovelyHighTeenPreviewTemplate,
    VintageMomentPreviewTemplate,
    PureNaturalPreviewTemplate,
    VintageWeddingPreviewTemplate,
    DearMyLovePreviewTemplate,
} from "~/components";
import {useRef} from "react";
import type {WeddingSchedule, WeddingPlace, BaseInfo, WeddingDesign} from "~/domain";
import useScrollOnUpdate from "~/hook/useScrollOnUpdate.ts";

import type {WeddingMode} from "~/components/WeddingComponent/WeddingMode.ts";

export interface PreviewTemplateProps {
    weddingDesign: WeddingDesign;
    baseInfo: BaseInfo;
    weddingPlace: WeddingPlace;
    weddingSchedule: WeddingSchedule;
    mode: WeddingMode;
}

export const PreviewTemplate = (props: PreviewTemplateProps) => {
    const previewRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(previewRef, [props.weddingDesign.weddingDesignName], props.mode === "preview");

    const content = () => {
        switch (props.weddingDesign.weddingDesignName) {
            case "화이트 모먼트":
                return <WhiteMomentPreviewTemplate {...props} />;
            case "포레스트 러브":
                return <ForestLovePreviewTemplate {...props} />;
            case "네이처 블리스":
                return <NatureBlissPreviewTemplate {...props} />;
            case "소울메이트":
                return <SoulmatePreviewTemplate {...props} />;
            case "클래식 엘레강스":
                return <ClassicElegancePreviewTemplate {...props} />;
            case "내추럴 가든":
                return <NaturalGardenPreviewTemplate {...props} />;
            case "모던 심플":
                return <ModernSimplePreviewTemplate {...props} />;
            case "로맨틱 포레스트":
                return <RomanticForestPreviewTemplate {...props} />;
            case "드림 웨딩":
                return <DreamWeddingPreviewTemplate {...props} />;
            case "퓨어 러브":
                return <PureLovePreviewTemplate {...props} />;
            case "모던 러브":
                return <ModernLovePreviewTemplate {...props} />;
            case "클래식 로맨스":
                return <ClassicRomancePreviewTemplate {...props} />;
            case "러블리 하이틴":
                return <LovelyHighTeenPreviewTemplate {...props} />;
            case "빈티지 모먼트":
                return <VintageMomentPreviewTemplate {...props} />;
            case "퓨어 내추럴":
                return <PureNaturalPreviewTemplate {...props} />;
            case "빈티지 웨딩":
                return <VintageWeddingPreviewTemplate {...props} />;
            case "디어 마이 러브":
                return <DearMyLovePreviewTemplate {...props} />;
        }
    };
    return <View ref={previewRef}>{content()}</View>;
};
