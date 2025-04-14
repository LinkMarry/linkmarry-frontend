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

const LovelyHighTeenPreviewTemplate = (
    {
        baseInfo,
        weddingDesign,
        weddingSchedule
    }: ComponentProps<typeof PreviewTemplate>
) => {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);

    return (
        <Column className={'override-font'} $alignItems={'stretch'} $justifyContent={'space-between'} $gap={44}
                $ui={css`
                    padding: 44px 24px;
                    ${implementText({fontFamily: 'BR'})};
                    background: #FBF2F2;
                `}>
            <View as={'img'} src={'/lovelyhighteenheader.svg'} $ui={css``}/>
            <View as={'img'} src={weddingDesign.titleImgUrl} $ui={css`
                object-fit: cover;
                min-height: 320px;
            `}/>
            <Column $alignItems={'center'} $gap={12} $ui={css`
                color: #5D4037;
            `}>
                <Row $gap={20} $alignItems={'center'}>
                    <Text size={36}>{first.lastName}</Text>
                    <Text size={36}>&</Text>
                    <Text size={36}>{second.lastName}</Text>
                </Row>
                <Text size={20}>{isValidDate && format(date, 'yyyy-MM-dd E hh:mm a')}</Text>
            </Column>
        </Column>
    );
};

export default LovelyHighTeenPreviewTemplate;
