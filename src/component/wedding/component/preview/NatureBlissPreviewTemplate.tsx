import React, {ComponentProps} from 'react';
import {css} from "styled-components";
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import {format} from "date-fns";
import {ko} from "date-fns/locale";
import {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import {getDetails} from "@remote/value/WeddingSchedule";
import PreviewTemplate from "@src/component/wedding/component/preview/PreviewTemplate";
import View from "@designsystem/core/View";

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
        <Column alignment={'stretch'} ui={css`
            background: white;
        `}>
            <Column gap={16} alignment={'center'} ui={css`
                padding: 52px 0;
            `}>
                <Text size={24} weight={100}>{first.name} & {second.name}</Text>
                <Column gap={4} alignment={'center'}>
                    <Text size={14}
                          weight={300}>{isValidDate && format(date, 'yyyy.MM.dd a h시', {locale: ko})}</Text>
                    <Text
                        size={14}
                        weight={300}
                    >{weddingPlace.placeName}</Text>
                </Column>
            </Column>
            <View as={'img'} src={template.titleImgUrl ?? '/EmptyImage.png'} ui={css`
                display: flex;
                width: 100%;
                object-fit: cover;
            `}/>
        </Column>
    );
}

export default NatureBlissPreviewTemplate;
