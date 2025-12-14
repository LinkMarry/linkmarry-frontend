import {type ComponentProps} from 'react';
import PreviewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {css, cx} from "@linaria/core";
import View from "~/userinterface/core/View.tsx";
import {format} from "date-fns";
import {getDetails} from "~/infrastructure/network/value/WeddingSchedule";
import Text from "~/userinterface/component/Text";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import {fontFamilyStyle} from "~/userinterface/foundation/text/TextType.ts";

function DreamWeddingPreviewTemplate(
    {
        baseInfo,
        weddingDesign,
        weddingSchedule
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {isValidDate, date} = getDetails(weddingSchedule);
    return (
        <View ui={cx(
            'override-font',
            css`
                padding: 78px 28px 72px 28px;
                position: relative;
                gap: 64px;
            `,
            fontFamilyStyle.GangwonEduAll
        )}>
            <View as={'img'} src={weddingDesign.titleImgUrl} ui={css`
                object-fit: cover;
                min-height: 517px;

                * {
                    color: #4A3F35;
                }
            `}/>
            <Text size={88} font={'iceJaram'} ui={cx(
                'override-font',
                css`
                    position: absolute;
                    top: 36px;
                    left: 28px;
                    color: #AAAD99;
                `,
            )}>love</Text>
            <View ui={css`
                gap: 32px;
                align-items: center;
            `}>
                <View ui={css`
                    flex-direction: row;
                    gap: 24px;
                    align-items: flex-end;
                `}>
                    <Text size={28} weight={700}>{first.name}</Text>
                    <Text size={24} weight={700}>그리고</Text>
                    <Text size={28} weight={700}>{second.name}</Text>
                </View>
                {isValidDate && (
                    <Text size={20} weight={700}>{format(date, 'yyyy. MM. dd E HH:mm')}</Text>
                )}
            </View>
        </View>
    );
}

export default DreamWeddingPreviewTemplate;
