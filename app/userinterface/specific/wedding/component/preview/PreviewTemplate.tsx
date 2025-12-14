import {useRef} from 'react';
import type WeddingSchedule from "~/infrastructure/network/value/WeddingSchedule";
import type WeddingPlace from "~/infrastructure/network/value/WeddingPlace";
import type BaseInfo from "~/infrastructure/network/value/BaseInfo";
import type WeddingDesign from "~/infrastructure/network/value/WeddingDesign";
import useScrollOnUpdate from "~/hook/useScrollOnUpdate";
import View from "~/userinterface/core/View.tsx";
import WhiteMomentPreviewTemplate
    from "~/userinterface/specific/wedding/component/preview/WhiteMomentPreviewTemplate";
import ForestLovePreviewTemplate from "~/userinterface/specific/wedding/component/preview/ForestLovePreviewTemplate";
import NatureBlissPreviewTemplate
    from "~/userinterface/specific/wedding/component/preview/NatureBlissPreviewTemplate";
import SoulmatePreviewTemplate from "~/userinterface/specific/wedding/component/preview/SoulmatePreviewTemplate";
import ClassicElegancePreviewTemplate
    from "~/userinterface/specific/wedding/component/preview/ClassicElegancePreviewTemplate";
import NaturalGardenPreviewTemplate
    from "~/userinterface/specific/wedding/component/preview/NaturalGardenPreviewTemplate";
import ModernSimplePreviewTemplate
    from "~/userinterface/specific/wedding/component/preview/ModernSimplePreviewTemplate";
import RomanticForestPreviewTemplate
    from "~/userinterface/specific/wedding/component/preview/RomanticForestPreviewTemplate";
import DreamWeddingPreviewTemplate
    from "~/userinterface/specific/wedding/component/preview/DreamWeddingPreviewTemplate";
import PureLovePreviewTemplate from "~/userinterface/specific/wedding/component/preview/PureLovePreviewTemplate";
import ModernLovePreviewTemplate from "~/userinterface/specific/wedding/component/preview/ModernLovePreviewTemplate";
import ClassicRomancePreviewTemplate
    from "~/userinterface/specific/wedding/component/preview/ClassicRomancePreviewTemplate";
import LovelyHighTeenPreviewTemplate
    from "~/userinterface/specific/wedding/component/preview/LovelyHighTeenPreviewTemplate";
import VintageMomentPreviewTemplate
    from "~/userinterface/specific/wedding/component/preview/VintageMomentPreviewTemplate";
import PureNaturalPreviewTemplate
    from "~/userinterface/specific/wedding/component/preview/PureNaturalPreviewTemplate";
import VintageWeddingPreviewTemplate
    from "~/userinterface/specific/wedding/component/preview/VintageWeddingPreviewTemplate";
import DearMyLovePreviewTemplate from "~/userinterface/specific/wedding/component/preview/DearMyLovePreviewTemplate";

export interface PreviewTemplateProps {
    weddingDesign: WeddingDesign;
    baseInfo: BaseInfo;
    weddingPlace: WeddingPlace;
    weddingSchedule: WeddingSchedule;
}

function PreviewTemplate(
    props: PreviewTemplateProps
) {
    const previewRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(previewRef, [props.weddingDesign.weddingDesignName]);

    const content = () => {
        switch (props.weddingDesign.weddingDesignName) {
            case '화이트 모먼트':
                return <WhiteMomentPreviewTemplate {...props}/>;
            case '포레스트 러브':
                return <ForestLovePreviewTemplate {...props}/>;
            case '네이처 블리스':
                return <NatureBlissPreviewTemplate {...props}/>;
            case '소울 메이트':
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
