import React, {useRef} from 'react';
import WeddingSchedule from "@src/infrastructure/network/value/WeddingSchedule";
import WeddingPlace from "@src/infrastructure/network/value/WeddingPlace";
import BaseInfo from "@src/infrastructure/network/value/BaseInfo";
import WeddingDesign from "@src/infrastructure/network/value/WeddingDesign";
import WhiteMomentPreviewTemplate from "@src/userinterface/specific/wedding/component/preview/WhiteMomentPreviewTemplate";
import ForestLovePreviewTemplate from "@src/userinterface/specific/wedding/component/preview/ForestLovePreviewTemplate";
import NatureBlissPreviewTemplate from "@src/userinterface/specific/wedding/component/preview/NatureBlissPreviewTemplate";
import SoulmatePreviewTemplate from "@src/userinterface/specific/wedding/component/preview/SoulmatePreviewTemplate";
import ClassicElegancePreviewTemplate from "@src/userinterface/specific/wedding/component/preview/ClassicElegancePreviewTemplate";
import NaturalGardenPreviewTemplate from "@src/userinterface/specific/wedding/component/preview/NaturalGardenPreviewTemplate";
import ModernSimplePreviewTemplate from "@src/userinterface/specific/wedding/component/preview/ModernSimplePreviewTemplate";
import RomanticForestPreviewTemplate from "@src/userinterface/specific/wedding/component/preview/RomanticForestPreviewTemplate";
import DreamWeddingPreviewTemplate from "@src/userinterface/specific/wedding/component/preview/DreamWeddingPreviewTemplate";
import PureLovePreviewTemplate from "@src/userinterface/specific/wedding/component/preview/PureLovePreviewTemplate";
import ModernLovePreviewTemplate from "@src/userinterface/specific/wedding/component/preview/ModernLovePreviewTemplate";
import ClassicRomancePreviewTemplate from "@src/userinterface/specific/wedding/component/preview/ClassicRomancePreviewTemplate";
import useScrollOnUpdate from "@src/hook/useScrollOnUpdate";
import {Column} from "@src/userinterface/core/FlexLayout";

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
        }
    };
    return (
        <Column $alignItems={'stretch'} ref={previewRef}>
            {content()}
        </Column>
    )
}

export default PreviewTemplate;
