import React, {ComponentProps} from 'react';
import {css} from "styled-components";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import {format} from "date-fns";
import {ko} from "date-fns/locale";
import previewTemplate from "@src/component/wedding/component/preview/PreviewTemplate";
import {getDetails} from "@remote/value/WeddingSchedule";
import {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import View from "@designsystem/core/View";

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
        <Column alignment={'stretch'} ui={css`
            background: white;
        `}>
            <Column alignment={'center'} gap={8} style={{padding: '72px 0'}}>
                <Text size={28} weight={300}>{isValidDate && format(date, 'yyyy/MM/dd', {locale: ko})}</Text>
                <Text size={18} weight={300}>{weddingPlace.placeName}({weddingPlace.floorHall})</Text>
            </Column>
            <View as={'img'} src={template.titleImgUrl ?? '/EmptyImage.png'} ui={css`
                display: flex;
                padding: 0 32px;
                object-fit: cover;
            `}/>
            <Row gap={12} alignment={'center'} arrangement={'center'} ui={css`
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
