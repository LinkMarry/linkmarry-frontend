import React from 'react';
import WeddingSchedule from "@remote/value/WeddingSchedule";
import WeddingPlace from "@remote/value/WeddingPlace";
import BaseInfo from "@remote/value/BaseInfo";
import WeddingDesign from "@remote/value/WeddingDesign";
import WhiteMomentPreviewTemplate from "@src/component/wedding/component/preview/WhiteMomentPreviewTemplate";
import ForestLovePreviewTemplate from "@src/component/wedding/component/preview/ForestLovePreviewTemplate";
import NatureBlissPreviewTemplate from "@src/component/wedding/component/preview/NatureBlissPreviewTemplate";
import SoulmatePreviewTemplate from "@src/component/wedding/component/preview/SoulmatePreviewTemplate";
import ClassicElegancePreviewTemplate from "@src/component/wedding/component/preview/ClassicElegancePreviewTemplate";
import NaturalGardenPreviewTemplate from "@src/component/wedding/component/preview/NaturalGardenPreviewTemplate";
import ModernSimplePreviewTemplate from "@src/component/wedding/component/preview/ModernSimplePreviewTemplate";
import RomanticForestPreviewTemplate from "@src/component/wedding/component/preview/RomanticForestPreviewTemplate";
import DreamWeddingPreviewTemplate from "@src/component/wedding/component/preview/DreamWeddingPreviewTemplate";
import PureLovePreviewTemplate from "@src/component/wedding/component/preview/PureLovePreviewTemplate";
import ModernLovePreviewTemplate from "@src/component/wedding/component/preview/ModernLovePreviewTemplate";
import ClassicRomancePreviewTemplate from "@src/component/wedding/component/preview/ClassicRomancePreviewTemplate";
import FadeIn from "@src/component/fadein/FadeIn";

export interface PreviewTemplateProps {
    template: WeddingDesign;
    baseInfo: BaseInfo;
    weddingPlace: WeddingPlace;
    weddingSchedule: WeddingSchedule;
}

function PreviewTemplate(
    props: PreviewTemplateProps
) {
    const content = () => {
        switch (props.template.weddingDesignName) {
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
        }
    };
    return (
        <>
            {content()}
        </>
        // <FadeIn>
        // </FadeIn>
    )
}

//todo: temp to remove fade in
export default PreviewTemplate;
