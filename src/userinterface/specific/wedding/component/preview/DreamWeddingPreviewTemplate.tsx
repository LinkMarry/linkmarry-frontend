import React, {ComponentProps} from 'react';
import PreviewTemplate from "@src/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import View from "@src/userinterface/core/View";
import {format} from "date-fns";
import {getDetails} from "@src/infrastructure/network/value/WeddingSchedule";
import Text from "@src/userinterface/component/Text";
import {getBaseInfoByBrideMarkFirst} from "@src/infrastructure/network/value/BaseInfo";
import {implementText} from "@src/userinterface/foundation/text/TextProperties";

function DreamWeddingPreviewTemplate(
    {
        baseInfo,
        weddingDesign,
        weddingSchedule
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {isValidDate, date} = getDetails(weddingSchedule);
    return (
        <Column $gap={64} className={'override-font'} $alignItems={'stretch'} $ui={css`
            padding: 78px 28px 72px 28px;
            position: relative;
            ${implementText({fontFamily: 'GangwonEduAll'})};
        `}>
            <View as={'img'} src={weddingDesign.titleImgUrl} $ui={css`
                object-fit: cover;
                min-height: 517px;
                * {
                    color: #4A3F35;
                }
            `}/>
            <Text className={'override-font'} size={88} font={'iceJaram'} ui={css`
                position: absolute;
                top: 36px;
                left: 28px;
                color: #AAAD99;
            `}>love</Text>
            <Column $gap={32} $alignItems={'center'}>
                <Row $gap={24} $alignItems={'flex-end'}>
                    <Text size={28} weight={700}>{first.name}</Text>
                    <Text size={24} weight={700}>그리고</Text>
                    <Text size={28} weight={700}>{second.name}</Text>
                </Row>
                {isValidDate && (
                    <Text size={20} weight={700}>{format(date, 'yyyy. MM. dd E HH:mm')}</Text>
                )}
            </Column>
        </Column>
    );
}

export default DreamWeddingPreviewTemplate;
