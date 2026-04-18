import {useRef} from 'react';
import type WeddingSchedule from "~/api/value/WeddingSchedule.ts";
import type WeddingPlace from "~/api/value/WeddingPlace.ts";
import type BaseInfo from "~/api/value/BaseInfo.ts";
import type WeddingDesign from "~/api/value/WeddingDesign.ts";
import useScrollOnUpdate from "~/hook/useScrollOnUpdate.ts";
import View from "~/components/core/View.tsx";
import WhiteMomentPreviewTemplate
    from "~/components/WeddingComponent/component/preview/WhiteMomentPreviewTemplate.tsx";
import ForestLovePreviewTemplate from "~/components/WeddingComponent/component/preview/ForestLovePreviewTemplate.tsx";
import NatureBlissPreviewTemplate
    from "~/components/WeddingComponent/component/preview/NatureBlissPreviewTemplate.tsx";
import SoulmatePreviewTemplate from "~/components/WeddingComponent/component/preview/SoulmatePreviewTemplate.tsx";
import ClassicElegancePreviewTemplate
    from "~/components/WeddingComponent/component/preview/ClassicElegancePreviewTemplate.tsx";
import NaturalGardenPreviewTemplate
    from "~/components/WeddingComponent/component/preview/NaturalGardenPreviewTemplate.tsx";
import ModernSimplePreviewTemplate
    from "~/components/WeddingComponent/component/preview/ModernSimplePreviewTemplate.tsx";
import RomanticForestPreviewTemplate
    from "~/components/WeddingComponent/component/preview/RomanticForestPreviewTemplate.tsx";
import DreamWeddingPreviewTemplate
    from "~/components/WeddingComponent/component/preview/DreamWeddingPreviewTemplate.tsx";
import PureLovePreviewTemplate from "~/components/WeddingComponent/component/preview/PureLovePreviewTemplate.tsx";
import ModernLovePreviewTemplate from "~/components/WeddingComponent/component/preview/ModernLovePreviewTemplate.tsx";
import ClassicRomancePreviewTemplate
    from "~/components/WeddingComponent/component/preview/ClassicRomancePreviewTemplate.tsx";
import LovelyHighTeenPreviewTemplate
    from "~/components/WeddingComponent/component/preview/LovelyHighTeenPreviewTemplate.tsx";
import VintageMomentPreviewTemplate
    from "~/components/WeddingComponent/component/preview/VintageMomentPreviewTemplate.tsx";
import PureNaturalPreviewTemplate
    from "~/components/WeddingComponent/component/preview/PureNaturalPreviewTemplate.tsx";
import VintageWeddingPreviewTemplate
    from "~/components/WeddingComponent/component/preview/VintageWeddingPreviewTemplate.tsx";
import DearMyLovePreviewTemplate from "~/components/WeddingComponent/component/preview/DearMyLovePreviewTemplate.tsx";
import type {WeddingMode} from "~/components/WeddingComponent/WeddingMode.ts";

export interface PreviewTemplateProps {
    weddingDesign: WeddingDesign;
    baseInfo: BaseInfo;
    weddingPlace: WeddingPlace;
    weddingSchedule: WeddingSchedule;
    mode: WeddingMode;
}

function PreviewTemplate(
    props: PreviewTemplateProps
) {
    const previewRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(previewRef, [props.weddingDesign.weddingDesignName], props.mode === 'preview');

    const content = () => {
        switch (props.weddingDesign.weddingDesignName) {
            case '화이트 모먼트':
                return <WhiteMomentPreviewTemplate {...props}/>;
            case '포레스트 러브':
                return <ForestLovePreviewTemplate {...props}/>;
            case '네이처 블리스':
                return <NatureBlissPreviewTemplate {...props}/>;
            case '소울메이트':
                return <SoulmatePreviewTemplate {...props}/>;
            case '클래식 엘레강스':
                return <ClassicElegancePreviewTemplate {...props}/>;
            case '내추럴 가든':
                return <NaturalGardenPreviewTemplate {...props}/>;
            case '모던 심플':
                return <ModernSimplePreviewTemplate {...props}/>;
            case '로맨틱 포레스트':
                return <RomanticForestPreviewTemplate {...props}/>;
            case '드림 웨딩':
                return <DreamWeddingPreviewTemplate {...props}/>;
            case '퓨어 러브':
                return <PureLovePreviewTemplate {...props}/>;
            case '모던 러브':
                return <ModernLovePreviewTemplate {...props}/>;
            case '클래식 로맨스':
                return <ClassicRomancePreviewTemplate {...props}/>;
            case '러블리 하이틴':
                return <LovelyHighTeenPreviewTemplate {...props}/>;
            case '빈티지 모먼트':
                return <VintageMomentPreviewTemplate {...props}/>;
            case '퓨어 내추럴':
                return <PureNaturalPreviewTemplate {...props}/>;
            case '빈티지 웨딩':
                return <VintageWeddingPreviewTemplate {...props}/>;
            case '디어 마이 러브':
                return <DearMyLovePreviewTemplate {...props}/>;
        }
    };
    return (
        <View ref={previewRef}>
            {content()}
        </View>
    )
}

export default PreviewTemplate;
