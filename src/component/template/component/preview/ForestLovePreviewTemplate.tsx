import React, {ComponentProps} from 'react';
import {css} from "styled-components";
import {Column, Row} from "@designsystem/component/core/FlexLayout";
import Text from "@designsystem/component/Text";
import {format} from "date-fns";
import {ko} from "date-fns/locale";
import previewTemplate from "@src/component/template/component/preview/PreviewTemplate";
import {getDetails} from "@remote/value/WeddingSchedule";
import {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import CustomStyle from "@designsystem/component/core/CustomStyle";

function ForestLovePreviewTemplate(
    {
        template,
        baseInfo,
        weddingPlace,
        weddingSchedule
    }: ComponentProps<typeof previewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);
    return (
        <Column $alignItems={'stretch'} $customStyle={css`
            background: white;
        `}>
            <Column $alignItems={'center'} gap={8} style={{padding: '72px 0'}}>
                <Text size={28} weight={300}>{isValidDate && format(date, 'yyyy/MM/dd', {locale: ko})}</Text>
                <Text size={18} weight={300}>{weddingPlace.placeName}({weddingPlace.floorHall})</Text>
            </Column>
            <CustomStyle as={'img'} src={template.titleImgUrl ?? '/EmptyImage.png'} $customStyle={css`
                display: flex;
                padding: 0 32px;
                object-fit: cover;
            `}/>
            <Row gap={12} $alignItems={'center'} $justifyContent={'center'} $customStyle={css`
                padding: 72px 0;
            `}>
                <Text size={20} weight={300}>{first.name}</Text>
                <Text size={20} weight={300}>&</Text>
                <Text size={20} weight={300}>{second.name}</Text>
            </Row>
        </Column>
    );
}

export default ForestLovePreviewTemplate;
