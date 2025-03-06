import React, {ComponentProps} from 'react';
import PreviewTemplate from "@src/component/wedding/component/preview/PreviewTemplate";
import Style from "@designsystem/core/Style";
import {css} from "styled-components";
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import {format} from "date-fns";
import {getDetails} from "@remote/value/WeddingSchedule";

function PureLovePreviewTemplate(
    {
        template,
        baseInfo,
        weddingSchedule
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {isValidDate, date} = getDetails(weddingSchedule);
    return (
        <Column $alignItems={'stretch'} css={css`
            position: relative;
        `}>
            <Style as={'img'} src={template.titleImgUrl} css={css`
                height: 100vh;
                max-height: 800px;
                object-fit: cover;
            `}/>
            <Style css={css`
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
                <Column gap={12} $alignItems={'center'}>
                    <span>{first.name}</span>
                    <span>{second.name}</span>
                </Column>
            </Text>
            <Style css={css`
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 247px;
                background: linear-gradient(0deg, rgba(0, 33, 71, 0.40) 0%, rgba(0, 33, 71, 0.40) 55.5%, rgba(0, 33, 71, 0.00) 100%);
            `}/>
            <Style css={css`
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
            </Style>
        </Column>
    );
}

export default PureLovePreviewTemplate;
