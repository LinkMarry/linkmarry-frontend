import React, {ComponentProps} from 'react';
import {css} from "styled-components";
import {format} from "date-fns";
import PreviewTemplate from "@src/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {getBaseInfoByBrideMarkFirst} from "@src/infrastructure/network/value/BaseInfo";
import {getDetails} from "@src/infrastructure/network/value/WeddingSchedule";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import {implementText} from "@src/userinterface/foundation/text/TextProperties";
import View from "@src/userinterface/core/View";
import Text from "@src/userinterface/component/Text";

const VintageWeddingPreviewTemplate = (
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
            className={'override-font'}
            $alignItems={'stretch'}
            $justifyContent={'space-between'}
            $ui={css`
                ${implementText({fontFamily: 'KoPubWorldBatang'})};
                background: url("/paper/paper4.png");
                color: #5D4037;
            `}
        >
            <View as={'img'} src={weddingDesign.titleImgUrl} $ui={css`
                object-fit: cover;
            `}/>
            <Column $alignItems={'center'} $gap={20} $ui={css`
                padding: 36px 30px;
            `}>
                <Text size={24} weight={500}>Our Wedding Day</Text>
                <Column $alignItems={'stretch'} $ui={css`
                    padding: 6px;
                    border: 1px solid #5D4037;
                    align-self: stretch;
                `}>
                    <Column $gap={20} $alignItems={'center'} $ui={css`
                        border: 1px solid #5D4037;
                        padding: 40px 0;
                    `}>
                        <Row $gap={20} $ui={css`
                            ${implementText({
                                fontSize: 32,
                                fontWeight: 500
                            })};
                        `}>
                            <Text>{first.lastName}</Text>
                            <Text>&</Text>
                            <Text>{second.lastName}</Text>
                        </Row>
                        <Column $gap={6} $alignItems={'center'} $ui={css`
                            ${implementText({
                                fontSize: 18,
                                fontWeight: 500
                            })}
                        `}>
                            {isValidDate && (
                                <span>{format(date, 'yyyy. MM. dd E HH:mm')}</span>
                            )}
                            <span>{weddingPlace.placeName} ({weddingPlace.floorHall})</span>
                        </Column>
                    </Column>
                </Column>
            </Column>
        </Column>
    );
};

export default VintageWeddingPreviewTemplate;
