import React, {ComponentProps} from 'react';
import PreviewTemplate from "@src/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {Column} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import Text from "@src/userinterface/component/Text";
import {differenceInDays, format} from "date-fns";
import {getDetails} from "@src/infrastructure/network/value/WeddingSchedule";
import View from "@src/userinterface/core/View";
import {getBaseInfoByBrideMarkFirst} from "@src/infrastructure/network/value/BaseInfo";

function ClassicElegancePreviewTemplate(
    {
        weddingDesign,
        baseInfo,
        weddingSchedule,
        weddingPlace,
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);

    return (
        <Column className={'override-font'} $alignItems={'stretch'}>
            <View $ui={css`
                position: relative;
            `}>
                <View as={'img'} src={weddingDesign.titleImgUrl} $ui={css`
                    width: 100%;
                    object-fit: cover;
                    height: 100dvh;
                    max-height: 810px;
                `}/>
                <Column $alignItems={'center'} $gap={20} $ui={css`
                    position: absolute;
                    top: 72px;
                    left: 50%;
                    transform: translateX(-50%);
                `}>
                    <View $ui={css`
                        padding: 0 12px;
                        background: white;
                        border-radius: 100px;
                    `}>
                        <Text size={18} weight={400}>D-{differenceInDays(date, new Date())}</Text>
                    </View>
                    <Text size={44} font={'iceJaram'} weight={400} ui={css`
                        color: white;
                    `}>
                        <Column $alignItems={'center'} $gap={8}>
                            <span>{first.name}</span>
                            <span>{second.name}</span>
                        </Column>
                    </Text>
                </Column>
            </View>
            <Text size={20} font={'LINESeedKR'} weight={400}>
                <Column $gap={8} $alignItems={'center'} $ui={css`
                    padding: 32px 8px;
                `}>
                    {isValidDate && (
                        <span>{format(date, 'yyyy. MM. dd E HH:mm')}</span>
                    )}
                    <span>{weddingPlace.placeName} ({weddingPlace.floorHall})</span>
                </Column>
            </Text>
        </Column>
    );
}

export default ClassicElegancePreviewTemplate;
