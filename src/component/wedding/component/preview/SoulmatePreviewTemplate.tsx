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
import {implementText} from "@designsystem/foundation/text/TextProperties";

function SoulmatePreviewTemplate(
    {
        baseInfo,
        weddingDesign,
        weddingSchedule,
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);

    return (
        <Column className={'override-font'} $alignItems={'stretch'} $ui={css`
            ${backgroundStyle(weddingDesign.weddingDesignColor)};
            ${implementText({fontFamily: 'Pretendard'})};
        `}>
            <Column $gap={12} $alignItems={'center'} $ui={css`
                margin: 40px 0;
            `}>
                <Text size={40} weight={100} ui={css`
                    letter-spacing: 8px;
                `}>{isValidDate && format(date, 'MM / dd')}</Text>
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
            <View as={'img'} src={weddingDesign.titleImgUrl ?? '/EmptyImage.png'} $ui={css`
                display: flex;
                width: 100%;
                object-fit: cover;
            `}/>
        </Column>
    );
}

export default SoulmatePreviewTemplate;
