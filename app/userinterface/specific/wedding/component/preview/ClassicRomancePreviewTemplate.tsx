import {type ComponentProps} from 'react';
import PreviewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import {css, cx} from "@linaria/core";
import View from "~/userinterface/core/View.tsx";
import Text from "~/userinterface/component/Text";
import {getDetails} from "~/infrastructure/network/value/WeddingSchedule";
import {format} from "date-fns";
import {fontFamilyStyle} from "~/userinterface/foundation/text/TextType.ts";

function ClassicRomancePreviewTemplate(
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
            fontFamilyStyle.GyeonggiBatang,
            'override-font',
            css`
                gap: 28px;
                padding: 96px 36px;

                * {
                    color: #989796;
                }
            `,
        )}>
            <View as={'img'} src={weddingDesign.titleImgUrl} ui={css`
                min-height: 516px;
                object-fit: cover;
            `}/>
            <View ui={css`
                gap: 12px;
                align-items: center;
            `}>
                <Text size={36} weight={400}>
                    <View ui={css`
                        flex-direction: row !important;
                        gap: 20px;
                        align-items: center;
                    `}>
                        <span>{first.englishName}</span>
                        <span>&</span>
                        <span>{second.englishName}</span>
                    </View>
                </Text>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 364 2" fill="none">
                    <path d="M0 1H364" stroke="#C8C6C5" strokeOpacity="0.4"/>
                </svg>
                {isValidDate && (
                    <Text size={20} weight={400}>{format(date, 'yyyy. MM. dd E HH:mm')}</Text>
                )}
            </View>
        </View>
    );
}

export default ClassicRomancePreviewTemplate;
