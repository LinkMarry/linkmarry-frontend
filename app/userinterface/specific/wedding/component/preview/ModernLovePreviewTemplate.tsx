import {type ComponentProps} from 'react';
import PreviewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {css, cx} from "@linaria/core";
import View from "~/userinterface/core/View.tsx";
import Text from "~/userinterface/component/Text";
import Spacer from "~/userinterface/component/Spacer";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import {fontFamilyStyle} from "~/userinterface/foundation/text/TextType.ts";

function ModernLovePreviewTemplate(
    {
        weddingDesign,
        baseInfo
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    return (
        <View ui={cx(
            'override-font',
            fontFamilyStyle.UnrealScienceMedicine,
            css`
                padding: 108px 32px 40px 32px;
                position: relative;
                gap: 36px;
            `
        )}>
            <View as={'img'} src={weddingDesign.titleImgUrl} ui={css`
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
                <View ui={css`
                    flex-direction: row;
                    align-items: center;
                    gap: 36px;
                `}>
                    <Spacer/>
                    <span>{first.englishName}</span>
                    <span>&</span>
                    <span>{second.englishName}</span>
                    <Spacer/>
                </View>
            </Text>
        </View>
    );
}

export default ModernLovePreviewTemplate;
