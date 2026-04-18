import {type ComponentProps} from 'react';
import PreviewTemplate from "~/components/WeddingComponent/component/preview/PreviewTemplate.tsx";
import {css, cx} from "@linaria/core";
import Text from "~/components/core/Text.tsx";
import View from "~/components/core/View.tsx";
import {getBaseInfoByBrideMarkFirst} from "~/api/value/BaseInfo.ts";
import {format} from "date-fns";
import {getDetails} from "~/api/value/WeddingSchedule.ts";
import {fontFamilyStyle} from "~/components/core/text/TextType.ts";

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
