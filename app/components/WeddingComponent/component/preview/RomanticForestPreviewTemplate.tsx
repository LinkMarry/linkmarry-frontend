import {type ComponentProps} from 'react';
import PreviewTemplate from "~/components/WeddingComponent/component/preview/PreviewTemplate.tsx";
import View from "~/components/core/View.tsx";
import {css, cx} from "@linaria/core";
import {getDetails} from "~/api/value/WeddingSchedule.ts";
import Text from "~/components/core/Text.tsx";
import {format} from "date-fns";
import Spacer from "~/components/core/Spacer.tsx";
import {getBaseInfoByBrideMarkFirst} from "~/api/value/BaseInfo.ts";
import {fontFamilyStyle} from "~/components/core/text/TextType.ts";

function RomanticForestPreviewTemplate(
    {
        weddingDesign,
        baseInfo,
        weddingSchedule
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {isValidDate, date} = getDetails(weddingSchedule);
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    return (
        <View ui={cx(
            'override-font',
            fontFamilyStyle.GangwonEduAll,
            css`
                position: relative;
            `
        )}>
            <View as={'img'} src={weddingDesign.titleImgUrl} ui={css`
                height: 100dvh;
                max-height: 810px;
                object-fit: cover;
            `}/>
            <View ui={css`
                background: linear-gradient(180deg, rgba(61, 61, 61, 0.80) 0%, rgba(61, 61, 61, 0.00) 100%);
                height: 200px;
                position: absolute;
                top: 0;
                width: 100%;
            `}/>
            {isValidDate && (
                <Text size={24} weight={700} ui={css`
                    position: absolute;
                    color: white;
                    top: 60px;
                    left: 50%;
                    white-space: nowrap;
                    transform: translateX(-50%);
                `}>{format(date, 'yyyy. MM. dd E HH:mm')}</Text>
            )}
            <View ui={css`
                background: linear-gradient(0, rgba(61, 61, 61, 0.80) 0%, rgba(61, 61, 61, 0.00) 100%);
                height: 200px;
                position: absolute;
                bottom: 0;
                width: 100%;
            `}/>
            <Text size={24} weight={700} ui={css`
                color: white;
                bottom: 32px;
                margin: 0 32px;
                width: calc(100% - 32px * 2);
                position: absolute;
            `}>
                <View ui={css`
                    flex-direction: row !important;
                    align-items: flex-start;
                `}>
                    <span>{first.korean} {first.name}</span>
                    <Spacer/>
                    <span>{second.korean} {second.name}</span>
                </View>
            </Text>
        </View>
    );
}

export default RomanticForestPreviewTemplate;
