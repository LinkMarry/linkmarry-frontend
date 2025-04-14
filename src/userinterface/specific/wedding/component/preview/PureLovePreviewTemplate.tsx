import React, {ComponentProps} from 'react';
import PreviewTemplate from "@src/userinterface/specific/wedding/component/preview/PreviewTemplate";
import View from "@src/userinterface/core/View";
import {css} from "styled-components";
import {Column} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import {getBaseInfoByBrideMarkFirst} from "@src/infrastructure/network/value/BaseInfo";
import {format} from "date-fns";
import {getDetails} from "@src/infrastructure/network/value/WeddingSchedule";
import {implementText} from "@src/userinterface/foundation/text/TextProperties";

function PureLovePreviewTemplate(
    {
        weddingDesign,
        baseInfo,
        weddingSchedule
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {isValidDate, date} = getDetails(weddingSchedule);
    return (
        <Column className={'override-font'} $alignItems={'stretch'} $ui={css`
            position: relative;
            ${implementText({fontFamily: 'KoPubWorldBatang'})};
        `}>
            <View as={'img'} src={weddingDesign.titleImgUrl} $ui={css`
                height: 100dvh;
                max-height: 800px;
                object-fit: cover;
            `}/>
            <View $ui={css`
                position: absolute;
                top: 0;
                width: 100%;
                height: 247px;
                background: linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.60) 55.5%, rgba(255, 255, 255, 0.00) 100%);
            `}/>
            <Text size={24} weight={500} ui={css`
                color: #002147;
                position: absolute;
                top: 92px;
                left: 50%;
                transform: translateX(-50%);
            `}>
                <Column $gap={12} $alignItems={'center'}>
                    <span>{first.englishName}</span>
                    <span>{second.englishName}</span>
                </Column>
            </Text>
            <View $ui={css`
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 247px;
                background: linear-gradient(0deg, rgba(0, 33, 71, 0.40) 0%, rgba(0, 33, 71, 0.40) 55.5%, rgba(0, 33, 71, 0.00) 100%);
            `}/>
            <View $ui={css`
                position: absolute;
                bottom: 44px;
                left: 50%;
                transform: translateX(-50%);
            `}>
                {isValidDate && (
                    <Text size={20} weight={500} ui={css`
                        color: white;
                    `}>{format(date, 'yyyy. MM. dd E HH:mm')}</Text>
                )}
            </View>
        </Column>
    );
}

export default PureLovePreviewTemplate;
