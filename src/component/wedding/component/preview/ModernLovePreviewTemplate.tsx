import React, {ComponentProps} from 'react';
import PreviewTemplate from "@src/component/wedding/component/preview/PreviewTemplate";
import {Column, Row} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import View from "@designsystem/core/View";
import Text from "@designsystem/component/Text";
import Spacer from "@designsystem/component/Spacer";
import {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import {implementText} from "@designsystem/foundation/text/TextProperties";

function ModernLovePreviewTemplate(
    {
        weddingDesign,
        baseInfo
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    return (
        <Column className={'override-font'} $gap={36} $alignItems={'stretch'} $ui={css`
            padding: 108px 32px 40px 32px;
            position: relative;
            ${implementText({fontFamily: 'UnrealScienceMedicine'})};
        `}>
            <View as={'img'} src={weddingDesign.titleImgUrl} $ui={css`
                min-height: 580px;
                border-radius: 500px;
                object-fit: cover;
            `}/>
            <Text size={60} weight={400} ui={css`
                position: absolute;
                white-space: nowrap;
                color: #556B2F;
                text-align: center;
                top: 68px;
                left: 50%;
                transform: translateX(-50%);
            `}>Together Forever</Text>
            <Text size={40} weight={400} ui={css`
                color: #556B2F;
            `}>
                <Row $gap={36} $alignItems={'center'}>
                    <Spacer/>
                    <span>{first.englishName}</span>
                    <span>&</span>
                    <span>{second.englishName}</span>
                    <Spacer/>
                </Row>
            </Text>
        </Column>
    );
}

export default ModernLovePreviewTemplate;
