import {type ComponentProps} from 'react';
import PreviewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {css, cx} from "@linaria/core";
import Text from "~/userinterface/component/Text";
import View from "~/userinterface/core/View.tsx";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import {format} from "date-fns";
import {getDetails} from "~/infrastructure/network/value/WeddingSchedule";
import {fontFamilyStyle} from "~/userinterface/foundation/text/TextType.ts";

function ModernSimplePreviewTemplate(
    {
        weddingDesign,
        baseInfo,
        weddingSchedule
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {isValidDate, date} = getDetails(weddingSchedule);
    return (
        <View ui={cx(
            fontFamilyStyle.TheFaceShopInklipquid,
            'override-font',
            css`
                gap: 60px;
                align-items: center;
                padding: 92px 0;

                * {
                    color: #333333;
                }
            `
        )}>
            <Text size={44} weight={400}>Our Wedding Day</Text>
            <View as={'img'} src={weddingDesign.titleImgUrl} ui={css`
                align-self: stretch;
                max-height: 312px;
                object-fit: cover;
            `}/>
            <View ui={css`
                align-items: center;
                gap: 24px;
            `}>
                <Text size={40} weight={400}>
                    <View ui={css`
                        align-items: center;
                        gap: 16px;
                    `}>
                        <span>{first.name}</span>
                        <span>{second.name}</span>
                    </View>
                </Text>
                {isValidDate && (
                    <Text size={24} weight={400}>{format(date, 'yyyy. MM. dd E HH:mm')}</Text>
                )}
            </View>
        </View>
    )
        ;
}

export default ModernSimplePreviewTemplate;
