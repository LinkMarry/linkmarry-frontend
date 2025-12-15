import {type ComponentProps} from 'react';
import {css, cx} from "@linaria/core";
import Text from "~/userinterface/component/Text";
import {format} from "date-fns";
import previewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {getDetails} from "~/infrastructure/network/value/WeddingSchedule";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import View from "~/userinterface/core/View.tsx";
import {fontFamilyStyle} from "~/userinterface/foundation/text/TextType.ts";

function ForestLovePreviewTemplate(
    {
        weddingDesign,
        baseInfo,
        weddingSchedule
    }: ComponentProps<typeof previewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);
    return (
        <View ui={cx(
            'override-font',
            css`
                position: relative;
            `,
            fontFamilyStyle.BlackHanSans
        )}>
            <View as={'img'} src={weddingDesign.titleImgUrl ?? '/EmptyImage.png'} ui={css`
                height: 100dvh;
                max-height: 810px;
                object-fit: cover;
            `}/>
            {isValidDate && (
                <View ui={cx(
                    css`
                        flex-direction: row !important;
                        justify-content: space-between;
                        position: absolute;
                        bottom: 28px;
                        left: 20px;
                        right: 20px;
                        text-shadow: 0 4px 28px rgba(0, 0, 0, 0.40);
                    `,
                    fontFamilyStyle.BlackHanSans
                )}>
                    <Text size={84} ui={css`
                        color: white;
                    `}>
                        {format(date, 'yy')}
                    </Text>
                    <Text size={84} ui={css`
                        color: white;
                    `}>
                        {format(date, 'MM')}
                    </Text>
                    <Text size={84} ui={css`
                        color: white;
                    `}>
                        {format(date, 'dd')}
                    </Text>
                </View>
            )}
            <View ui={cx(
                css`
                    flex-direction: row !important;
                    position: absolute;
                    top: 32px;
                    left: 20px;
                    right: 20px;
                    justify-content: space-between;
                    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 16px rgba(0, 0, 0, 0.16);
                `,
                fontFamilyStyle.BlackHanSans
            )}>
                <Text size={24} ui={css`
                    color: white;
                `}>{first.name}</Text>
                <Text size={24} ui={css`
                    color: white;
                `}>{second.name}</Text>
            </View>
        </View>
    );
}

export default ForestLovePreviewTemplate;
