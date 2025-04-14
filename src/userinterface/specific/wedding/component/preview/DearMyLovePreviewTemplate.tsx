import React, {ComponentProps} from 'react';
import {css} from "styled-components";
import PreviewTemplate from "@src/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {getBaseInfoByBrideMarkFirst} from "@src/infrastructure/network/value/BaseInfo";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import {implementText} from "@src/userinterface/foundation/text/TextProperties";
import View from "@src/userinterface/core/View";
import Text from "@src/userinterface/component/Text";

const DearMyLovePreviewTemplate = (
    {
        baseInfo,
        weddingDesign,
    }: ComponentProps<typeof PreviewTemplate>
) => {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <Column
            className={'override-font'}
            $gap={38}
            $alignItems={'stretch'}
            $ui={css`
                position: relative;
                ${implementText({fontFamily: 'KoPubWorldBatang'})};
                color: #5D4037;
            `}
        >
            <View as={'img'} src={weddingDesign.titleImgUrl} $ui={css`
                object-fit: cover;
                min-height: 640px;
            `}/>
            <Column $gap={38} $alignItems={'stretch'} $ui={css`
                position: absolute;
                width: 100%;
                height: 100%;
                padding: 36px 16px;
            `}>
                <Text size={80} weight={700} font={'tvN'} ui={css`
                    color: white;
                    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.36);
                    align-self: center;
                `}>Dear my love</Text>
                <Column $flex={1} $ui={css`
                    position: relative;
                `}>
                    <View as={'img'} src={'/dearmylovepreviewtemplate/image1.png'} $ui={css`
                        left: 32px;
                        position: absolute;
                    `}/>
                    <View as={'img'} src={'/dearmylovepreviewtemplate/image2.png'} $ui={css`
                        right: 0;
                        top: 132px;
                        position: absolute;
                    `}/>
                    <View as={'img'} src={'/dearmylovepreviewtemplate/image3.png'} $ui={css`
                        left: 0;
                        top: 246px;
                        position: absolute;
                    `}/>
                    <View as={'img'} src={'/dearmylovepreviewtemplate/image4.png'} $ui={css`
                        right: 8px;
                        bottom: 36px;
                        position: absolute;
                    `}/>
                    <View as={'img'} src={'/dearmylovepreviewtemplate/image5.png'} $ui={css`
                        left: 18px;
                        bottom: 0;
                        position: absolute;
                    `}/>
                </Column>
                <Row $gap={48} $ui={css`
                    ${implementText({
                        fontFamily: 'Eulyoo1945',
                        fontSize: 20,
                        fontWeight: 400,
                    })};
                    color: white;
                    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
                    align-self: center;
                `}>
                    <Text>{first.korean} {first.name}</Text>
                    <Text>{second.korean} {second.name}</Text>
                </Row>
            </Column>
        </Column>
    );
};

export default DearMyLovePreviewTemplate;
