import {type ComponentProps} from 'react';
import {css, cx} from "@linaria/core";
import PreviewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import Text from "~/userinterface/component/Text";
import View from "~/userinterface/core/View.tsx";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import {fontFamilyStyle} from "~/userinterface/foundation/text/TextType.ts";

const VintageMomentPreviewTemplate = (
    {
        baseInfo,
        weddingDesign,
    }: ComponentProps<typeof PreviewTemplate>
) => {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <View ui={cx(
            'override-font',
            css`
                gap: 60px;
                padding: 40px 38px;
                background: url("/paper/paper3.png");
            `
        )}>
            <Text size={28} ui={cx(
                fontFamilyStyle["Great Vibes"],
                css`
                    color: #989796;
                    align-self: center;
                `,
            )}>A new beginning</Text>
            <View ui={css`
                padding: 20px 20px 80px 20px;
                background: white;
                box-shadow: -4px 4px 20px 0 rgba(0, 0, 0, 0.08);
            `}>
                <View as={'img'} src={weddingDesign.titleImgUrl} ui={css`
                    width: 100%;
                    object-fit: cover;
                    aspect-ratio: 1;
                `}/>
            </View>
            <View ui={cx(
                fontFamilyStyle.Eulyoo1945,
                css`
                    gap: 16px;
                    align-items: center;
                    font-weight: 400;
                    color: #1C232B;
                `
            )}>
                <Text size={24}>{first.korean} {first.name} • {second.korean} {second.name}</Text>
                <Text size={20}>소중한 분들을 초대합니다.</Text>
            </View>
        </View>
    );
};

export default VintageMomentPreviewTemplate;
