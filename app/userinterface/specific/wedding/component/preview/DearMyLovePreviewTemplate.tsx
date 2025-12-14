import {type ComponentProps} from 'react';
import {css, cx} from "@linaria/core";
import PreviewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import View from "~/userinterface/core/View.tsx";
import Text from "~/userinterface/component/Text";
import {fontFamilyStyle} from "~/userinterface/foundation/text/TextType.ts";

const DearMyLovePreviewTemplate = (
    {
        baseInfo,
        weddingDesign,
    }: ComponentProps<typeof PreviewTemplate>
) => {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <View
            ui={cx(
                css`
                    gap: 38px;
                    position: relative;
                    color: #5D4037;
                `,
                'override-font',
                fontFamilyStyle.KoPubWorldBatang
            )}
        >
            <View as={'img'} src={weddingDesign.titleImgUrl} ui={css`
                object-fit: cover;
                min-height: 640px;
            `}/>
            <View ui={css`
                gap: 38px;
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
                <View ui={css`
                    align-items: flex-start;
                    flex: 1;
                    position: relative;
                `}>
                    <View as={'img'} src={'/dearmylovepreviewtemplate/image1.png'} ui={css`
                        left: 32px;
                        position: absolute;
                    `}/>
                    <View as={'img'} src={'/dearmylovepreviewtemplate/image2.png'} ui={css`
                        right: 0;
                        top: 132px;
                        position: absolute;
                    `}/>
                    <View as={'img'} src={'/dearmylovepreviewtemplate/image3.png'} ui={css`
                        left: 0;
                        top: 246px;
                        position: absolute;
                    `}/>
                    <View as={'img'} src={'/dearmylovepreviewtemplate/image4.png'} ui={css`
                        right: 8px;
                        bottom: 36px;
                        position: absolute;
                    `}/>
                    <View as={'img'} src={'/dearmylovepreviewtemplate/image5.png'} ui={css`
                        left: 18px;
                        bottom: 0;
                        position: absolute;
                    `}/>
                </View>
                <View ui={cx(
                    css`
                        flex-direction: row;
                        gap: 48px;
                        font-size: 20px;
                        font-weight: 400;
                        color: white;
                        text-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
                        align-self: center;
                    `,
                    fontFamilyStyle.Eulyoo1945
                )}>
                    <Text>{first.korean} {first.name}</Text>
                    <Text>{second.korean} {second.name}</Text>
                </View>
            </View>
        </View>
    );
};

export default DearMyLovePreviewTemplate;
