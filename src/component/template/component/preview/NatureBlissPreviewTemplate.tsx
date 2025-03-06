import React, {ComponentProps} from 'react';
import {css} from "styled-components";
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import {format} from "date-fns";
import {ko} from "date-fns/locale";
import {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import {getDetails} from "@remote/value/WeddingSchedule";
import PreviewTemplate from "@src/component/template/component/preview/PreviewTemplate";
import CustomStyle from "@designsystem/core/CustomStyle";

function NatureBlissPreviewTemplate(
    {
        baseInfo,
        template,
        weddingPlace,
        weddingSchedule,
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);
    return (
        <Column $alignItems={'stretch'} css={css`
            background: white;
        `}>
            <Column gap={16} $alignItems={'center'} css={css`
                padding: 52px 0;
            `}>
                <Text size={24} weight={100}>{first.name} & {second.name}</Text>
                <Column gap={4} $alignItems={'center'}>
                    <Text size={14}
                          weight={300}>{isValidDate && format(date, 'yyyy.MM.dd a h시', {locale: ko})}</Text>
                    <Text
                        size={14}
                        weight={300}
                    >{weddingPlace.placeName}</Text>
                </Column>
            </Column>
            <CustomStyle as={'img'} src={template.titleImgUrl ?? '/EmptyImage.png'} css={css`
                display: flex;
                width: 100%;
                object-fit: cover;
            `}/>
        </Column>
    );
}

export default NatureBlissPreviewTemplate;
