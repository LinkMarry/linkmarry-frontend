import React, {ComponentProps} from 'react';
import PreviewTemplate from "@src/component/wedding/component/preview/PreviewTemplate";
import View from "@designsystem/core/View";
import {css} from "styled-components";
import {Column, Row} from "@designsystem/core/FlexLayout";
import {getDetails} from "@remote/value/WeddingSchedule";
import Text from "@designsystem/component/Text";
import {format} from "date-fns";
import Spacer from "@designsystem/component/Spacer";
import {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import {implementText} from "@designsystem/foundation/text/TextProperties";

function RomanticForestPreviewTemplate(
    {
        weddingDesign,
        baseInfo,
        weddingSchedule
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {isValidDate, date} = getDetails(weddingSchedule);
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    return (
        <Column className={'override-font'} $alignItems={'stretch'} $ui={css`
            position: relative;
            ${implementText({fontFamily: 'GangwonEduAll'})};
        `}>
            <View as={'img'} src={weddingDesign.titleImgUrl} $ui={css`
                height: 100dvh;
                max-height: 810px;
                object-fit: cover;
            `}/>
            <View $ui={css`
                background: linear-gradient(180deg, rgba(61, 61, 61, 0.60) 0%, rgba(61, 61, 61, 0.00) 100%);
                height: 140px;
                position: absolute;
                top: 0;
                width: 100%;
            `}/>
            {isValidDate && (
                <Text size={24} weight={700} ui={css`
                    position: absolute;
                    color: white;
                    top: 60px;
                    left: 50%;
                    white-space: nowrap;
                    transform: translateX(-50%);
                `}>{format(date, 'yyyy. MM. dd E HH:mm')}</Text>
            )}
            <View $ui={css`
                background: linear-gradient(0, rgba(61, 61, 61, 0.60) 0%, rgba(61, 61, 61, 0.00) 100%);
                height: 140px;
                position: absolute;
                bottom: 0;
                width: 100%;
            `}/>
            <Text size={24} weight={700} ui={css`
                color: white;
                bottom: 32px;
                margin: 0 32px;
                width: calc(100% - 32px * 2);
                position: absolute;
            `}>
                <Row>
                    <span>{first.korean} {first.name}</span>
                    <Spacer/>
                    <span>{second.korean} {second.name}</span>
                </Row>
            </Text>
        </Column>
    );
}

export default RomanticForestPreviewTemplate;
