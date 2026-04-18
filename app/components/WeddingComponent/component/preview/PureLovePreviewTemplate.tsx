import {type ComponentProps} from 'react';
import PreviewTemplate from "~/components/WeddingComponent/component/preview/PreviewTemplate.tsx";
import View from "~/components/core/View.tsx";
import {css, cx} from "@linaria/core";
import Text from "~/components/core/Text.tsx";
import {getBaseInfoByBrideMarkFirst} from "~/api/value/BaseInfo.ts";
import {format} from "date-fns";
import {getDetails} from "~/api/value/WeddingSchedule.ts";
import {fontFamilyStyle} from "~/components/core/text/TextType.ts";


function PureLovePreviewTemplate(
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
            'override-font',
            fontFamilyStyle.KoPubWorldBatang,
            css`
                position: relative;
            `
        )}>
            <View as={'img'} src={weddingDesign.titleImgUrl} ui={css`
                height: 100dvh;
                max-height: 800px;
                object-fit: cover;
            `}/>
            <View ui={css`
                position: absolute;
                top: 0;
                width: 100%;
                height: 247px;
                background: linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.60) 55.5%, rgba(255, 255, 255, 0.00) 100%);
            `}/>
            <Text size={24} weight={500} ui={css`
                color: #002147;
                position: absolute;
                top: 92px;
                left: 20px;
                right: 20px;
            `}>
                <View ui={css`
                    gap: 12px;
                    text-align: center;
                `}>
                    <span style={{whiteSpace: 'wrap', wordBreak: 'break-all'}}>{first.englishName || first.name}</span>
                    <span style={{whiteSpace: 'wrap', wordBreak: 'break-all'}}>{second.englishName || second.name}</span>
                </View>
            </Text>
            <View ui={css`
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 247px;
                background: linear-gradient(0deg, rgba(0, 33, 71, 0.40) 0%, rgba(0, 33, 71, 0.40) 55.5%, rgba(0, 33, 71, 0.00) 100%);
            `}/>
            <View ui={css`
                position: absolute;
                bottom: 44px;
                left: 50%;
                transform: translateX(-50%);
            `}>
                {isValidDate && (
                    <Text size={20} weight={500} ui={css`
                        color: white;
                    `}>{format(date, 'yyyy. MM. dd E HH:mm')}</Text>
                )}
            </View>
        </View>
    );
}

export default PureLovePreviewTemplate;
