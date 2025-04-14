import React, {ComponentProps} from 'react';
import {css} from "styled-components";
import {format} from "date-fns";
import PreviewTemplate from "@src/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {getBaseInfoByBrideMarkFirst} from "@src/infrastructure/network/value/BaseInfo";
import {getDetails} from "@src/infrastructure/network/value/WeddingSchedule";
import {Column} from "@src/userinterface/core/FlexLayout";
import {implementText} from "@src/userinterface/foundation/text/TextProperties";
import View from "@src/userinterface/core/View";
import Text from "@src/userinterface/component/Text";

const PureNaturalPreviewTemplate = (
    {
        baseInfo,
        weddingDesign,
        weddingSchedule,
        weddingPlace
    }: ComponentProps<typeof PreviewTemplate>
) => {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);

    return (
        <Column
            $gap={28}
            className={'override-font'}
            $alignItems={'stretch'}
            $justifyContent={'space-between'}
            $ui={css`
                padding-bottom: 40px;
                ${implementText({fontFamily: 'Eulyoo1945'})};
                background: white;
            `}
        >
            <Column $alignItems={'stretch'} $ui={css`
                position: relative;
            `}>
                <View as={'img'} src={weddingDesign.titleImgUrl} $ui={css`
                    object-fit: cover;
                `}/>
                <View $ui={css`
                    position: absolute;
                    width: calc(100% - 14px * 2);
                    height: calc(100% - 14px);
                    margin-left: 14px;
                    margin-top: 14px;
                    border: 2px solid white;
                    border-bottom: none;
                `}/>
            </Column>
            <Text size={24} weight={400} font={'Great Vibes'} ui={css`
                color: #F6DFC0;
                align-self: center;
            `}>“Wedding Day”</Text>
            <Column $gap={16} $alignItems={'center'} $ui={css`
                color: #333333;
                ${implementText({
                    fontSize: 30,
                    fontWeight: 400
                })};
                letter-spacing: 16px;
            `}>
                <Text>{first.name}</Text>
                <Text>{second.name}</Text>
            </Column>
            <Column $gap={8} $alignItems={'center'}>
                {isValidDate && (
                    <span>{format(date, 'yyyy. MM. dd E HH:mm')}</span>
                )}
                <span>{weddingPlace.placeName} ({weddingPlace.floorHall})</span>
            </Column>
        </Column>
    );
};

export default PureNaturalPreviewTemplate;
