import React, {ComponentProps} from 'react';
import {css} from "styled-components";
import PreviewTemplate from "@src/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {Column} from "@src/userinterface/core/FlexLayout";
import {implementText} from "@src/userinterface/foundation/text/TextProperties";
import Text from "@src/userinterface/component/Text";
import View from "@src/userinterface/core/View";
import {getBaseInfoByBrideMarkFirst} from "@src/infrastructure/network/value/BaseInfo";

const VintageMomentPreviewTemplate = (
    {
        baseInfo,
        weddingDesign,
    }: ComponentProps<typeof PreviewTemplate>
) => {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <Column className={'override-font'} $alignItems={'stretch'} $gap={60} $ui={css`
            padding: 40px 38px;
            background: url("/paper/paper3.png");
        `}>
            <Text ui={css`
                ${implementText({
                    fontFamily: 'Great Vibes',
                    fontSize: 28
                })};
                color: #989796;
                align-self: center;
            `}>A new beginning</Text>
            <Column $ui={css`
                padding: 20px 20px 80px 20px;
                background: white;
                box-shadow: -4px 4px 20px 0 rgba(0, 0, 0, 0.08);
            `}>
                <View as={'img'} src={weddingDesign.titleImgUrl} $ui={css`
                    width: 320px;
                    object-fit: cover;
                    aspect-ratio: 1;
                `}/>
            </Column>
            <Column $gap={16} $alignItems={'center'} $ui={css`
                ${implementText({
                    fontFamily: 'Eulyoo1945',
                    fontWeight: 400
                })};
                color: #1C232B;
            `}>
                <Text size={24}>{first.korean} {first.name} • {second.korean} {second.name}</Text>
                <Text size={20}>소중한 분들을 초대합니다.</Text>
            </Column>
        </Column>
    );
};

export default VintageMomentPreviewTemplate;
