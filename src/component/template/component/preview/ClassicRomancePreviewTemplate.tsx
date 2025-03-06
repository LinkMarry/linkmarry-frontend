import React, {ComponentProps} from 'react';
import PreviewTemplate from "@src/component/template/component/preview/PreviewTemplate";
import {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import {Column, Row} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import CustomStyle from "@designsystem/core/CustomStyle";
import Text from "@designsystem/component/Text";
import {getDetails} from "@remote/value/WeddingSchedule";
import {format} from "date-fns";

function ClassicRomancePreviewTemplate(
    {
        template,
        baseInfo,
        weddingSchedule
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {isValidDate, date} = getDetails(weddingSchedule);

    return (
        <Column gap={28} $alignItems={'stretch'} css={css`
            padding: 96px 36px;

            * {
                color: #989796;
            }
        `}>
            <CustomStyle as={'img'} src={template.titleImgUrl} css={css`
                min-height: 516px;
                object-fit: cover;
            `}/>
            <Column gap={12} $alignItems={'center'}>
                <Text size={36} weight={400}>
                    <Row gap={20} $alignItems={'center'}>
                        <span>{first.name}</span>
                        <span>&</span>
                        <span>{second.name}</span>
                    </Row>
                </Text>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 364 2" fill="none">
                    <path d="M0 1H364" stroke="#C8C6C5" strokeOpacity="0.4"/>
                </svg>
                {isValidDate && (
                    <Text size={20} weight={400}>{format(date, 'yyyy. MM. dd E HH:mm')}</Text>
                )}
            </Column>
        </Column>
    );
}

export default ClassicRomancePreviewTemplate;
