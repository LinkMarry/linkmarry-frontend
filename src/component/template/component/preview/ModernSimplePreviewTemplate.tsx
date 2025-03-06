import React, {ComponentProps} from 'react';
import PreviewTemplate from "@src/component/template/component/preview/PreviewTemplate";
import {Column} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import Text from "@designsystem/component/Text";
import CustomStyle from "@designsystem/core/CustomStyle";
import {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import {format} from "date-fns";
import {getDetails} from "@remote/value/WeddingSchedule";

function ModernSimplePreviewTemplate(
    {
        template,
        baseInfo,
        weddingSchedule
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {isValidDate, date} = getDetails(weddingSchedule);
    return (
        <Column gap={60} $alignItems={'center'} css={css`
            padding: 92px 0;
            * {
                color: #333333;
            }
        `}>
            <Text size={44} weight={400}>Our Wedding Day</Text>
            <CustomStyle as={'img'} src={template.titleImgUrl} css={css`
                align-self: stretch;
                max-height: 312px;
            `}/>
            <Column $alignItems={'center'} gap={24}>
                <Text size={40} weight={400}>
                    <Column $alignItems={'center'} gap={16}>
                        <span>{first.name}</span>
                        <span>{second.name}</span>
                    </Column>
                </Text>
                {isValidDate && (
                    <Text size={24} weight={400}>{format(date, 'yyyy. MM. dd E HH:mm')}</Text>
                )}
            </Column>
        </Column>
    )
        ;
}

export default ModernSimplePreviewTemplate;
