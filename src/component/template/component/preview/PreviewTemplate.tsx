import React from 'react';
import WeddingSchedule from "@remote/value/WeddingSchedule";
import WeddingPlace from "@remote/value/WeddingPlace";
import BaseInfo from "@remote/value/BaseInfo";
import Template from "@remote/value/Template";
import Preview1Template from "@src/component/template/component/preview/Preview1Template";
import Preview2Template from "@src/component/template/component/preview/Preview2Template";
import Preview3Template from "@src/component/template/component/preview/Preview3Template";
import Preview4Template from "@src/component/template/component/preview/Preview4Template";
import Preview5Template from "@src/component/template/component/preview/Preview5Template";
import Preview6Template from "@src/component/template/component/preview/Preview6Template";

export interface PreviewTemplateProps {
    template: Template;
    baseInfo: BaseInfo;
    weddingPlace: WeddingPlace;
    weddingSchedule: WeddingSchedule;
}

function PreviewTemplate(
    props: PreviewTemplateProps
) {
    switch (props.template.templateName) {
        case '템플릿1':
            return <Preview1Template {...props}/>;
        case '템플릿2':
            return <Preview2Template {...props}/>;
        case '템플릿3':
            return <Preview3Template {...props}/>;
        case '템플릿4':
            return <Preview4Template {...props}/>;
        case '템플릿5':
            return <Preview5Template {...props}/>;
        case '템플릿6':
            return <Preview6Template {...props}/>;
        case '클래식 엘레강스':
            return (
                <></>
            );
        case '내추럴 가든':
            return (
                <></>
            );
        case '모던 심플':
            return (
                <></>
            );
        case '로맨틱 포레스트':
            return (
                <></>
            );
        case '드림 웨딩':
            return (
                <></>
            );
        case '퓨어 러브':
            return (
                <></>
            );
        case '모던 러브':
            return (
                <></>
            );
        case '클래식 로맨스':
            return (
                <></>
            );
    }
}

export default PreviewTemplate;