import React from 'react';
import WeddingSchedule from "@remote/value/WeddingSchedule";
import WeddingPlace from "@remote/value/WeddingPlace";
import BaseInfo from "@remote/value/BaseInfo";
import Template from "@remote/value/Template";
import WhiteMomentPreviewTemplate from "@src/component/template/component/preview/WhiteMomentPreviewTemplate";
import ForestLovePreviewTemplate from "@src/component/template/component/preview/ForestLovePreviewTemplate";
import NatureBlissPreviewTemplate from "@src/component/template/component/preview/NatureBlissPreviewTemplate";
import SoulmatePreviewTemplate from "@src/component/template/component/preview/SoulmatePreviewTemplate";
import ClassicElegancePreviewTemplate from "@src/component/template/component/preview/ClassicElegancePreviewTemplate";
import NaturalGardenPreviewTemplate from "@src/component/template/component/preview/NaturalGardenPreviewTemplate";
import ModernSimplePreviewTemplate from "@src/component/template/component/preview/ModernSimplePreviewTemplate";
import RomanticForestPreviewTemplate from "@src/component/template/component/preview/RomanticForestPreviewTemplate";
import DreamWeddingPreviewTemplate from "@src/component/template/component/preview/DreamWeddingPreviewTemplate";
import PureLovePreviewTemplate from "@src/component/template/component/preview/PureLovePreviewTemplate";
import ModernLovePreviewTemplate from "@src/component/template/component/preview/ModernLovePreviewTemplate";
import ClassicRomancePreviewTemplate from "@src/component/template/component/preview/ClassicRomancePreviewTemplate";
import FadeIn from "@designsystem/component/fadein/FadeIn";

export interface PreviewTemplateProps {
    template: Template;
    baseInfo: BaseInfo;
    weddingPlace: WeddingPlace;
    weddingSchedule: WeddingSchedule;
}

function PreviewTemplate(
    props: PreviewTemplateProps
) {
    const content = () => {
        switch (props.template.templateName) {
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
        <FadeIn>
            {content()}
        </FadeIn>
    )
}

export default PreviewTemplate;