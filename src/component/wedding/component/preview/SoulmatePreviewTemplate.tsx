import React, {ComponentProps} from 'react';
import {css} from "styled-components";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import {format} from "date-fns";
import PreviewTemplate from "@src/component/wedding/component/preview/PreviewTemplate";
import {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import {getDetails} from "@remote/value/WeddingSchedule";
import View from "@designsystem/core/View";
import {backgroundStyle} from "@remote/value/WeddingDesign";

function SoulmatePreviewTemplate(
    {
        baseInfo,
        template,
        weddingSchedule,
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);

    return (
        <Column $alignItems={'stretch'} $ui={css`
            ${backgroundStyle(template.weddingDesignColor)};
        `}>
            <Column $gap={12} $alignItems={'center'} $ui={css`
                margin: 40px 0;
            `}>
                <Text size={40} weight={100}>{isValidDate && format(date, 'MM / dd')}</Text>
                <Text size={20} weight={300} ui={css`
                    color: var(--g-600);
                `}>
                    <Row $gap={24} $alignItems={'center'}>
                        <span>{first.name}</span>
                        <span>그리고</span>
                        <span>{second.name}</span>
                    </Row>
                </Text>
            </Column>
            <View as={'img'} src={template.titleImgUrl ?? '/EmptyImage.png'} $ui={css`
                display: flex;
                width: 100%;
                object-fit: cover;
            `}/>
        </Column>
    );
}

export default SoulmatePreviewTemplate;
