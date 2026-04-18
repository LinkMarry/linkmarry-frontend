import {type ComponentProps} from 'react';
import {css, cx} from "@linaria/core";
import Text from "~/components/core/Text.tsx";
import {format} from "date-fns";
import PreviewTemplate from "~/components/WeddingComponent/component/preview/PreviewTemplate.tsx";
import {getBaseInfoByBrideMarkFirst} from "~/api/value/BaseInfo.ts";
import {getDetails} from "~/api/value/WeddingSchedule.ts";
import View from "~/components/core/View.tsx";
import {backgroundStyle} from "~/api/value/WeddingDesign.ts";
import {fontFamilyStyle} from "~/components/core/text/TextType.ts";

function SoulmatePreviewTemplate(
    {
        baseInfo,
        weddingDesign,
        weddingSchedule,
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);

    return (
        <View ui={cx(
            'override-font',
            css`
                position: relative;
            `
        )}>
            <View as={'img'} src={weddingDesign.titleImgUrl ?? '/EmptyImage.png'} ui={css`
                height: 100dvh;
                max-height: 810px;
                object-fit: cover;
            `}/>
            <View ui={css`
                background: linear-gradient(0, rgba(61, 61, 61, 0.80) 0%, rgba(61, 61, 61, 0.00) 100%);
                height: 400px;
                position: absolute;
                bottom: 0;
                width: 100%;
            `}/>
            <View ui={css`
                position: absolute;
                bottom: 16px;
                left: 28px;
                right: 28px;
                align-items: center;
                justify-content: space-between;
                color: #D9C4B0;
                flex-direction: row !important;
            `}>
                <Text font={'MuseumCulturalFoundationClassic'} size={20} weight={200}>
                    {first.korean}
                </Text>
                <Text font={'MuseumCulturalFoundationClassic'} size={20} weight={200}>
                    {isValidDate && format(date, 'yy.MM.dd')}
                </Text>
                <Text font={'MuseumCulturalFoundationClassic'} size={20} weight={200}>
                    {second.korean}
                </Text>
            </View>
            <Text font={'Cafe24LovingU'} size={140} weight={400} lineHeight={'130%'} ui={css`
                position: absolute;
                left: 27px;
                bottom: 109px;
                color: white;
            `}>Getting</Text>
            <Text font={'Cafe24LovingU'} size={140} weight={400} lineHeight={'130%'} ui={css`
                position: absolute;
                right: 27px;
                bottom: 16px;
                color: white;
            `}>married!</Text>
        </View>
    );
}

export default SoulmatePreviewTemplate;
