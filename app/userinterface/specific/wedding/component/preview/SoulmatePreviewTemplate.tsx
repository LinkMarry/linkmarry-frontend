import {type ComponentProps} from 'react';
import {css, cx} from "@linaria/core";
import Text from "~/userinterface/component/Text";
import {format} from "date-fns";
import PreviewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import {getDetails} from "~/infrastructure/network/value/WeddingSchedule";
import View from "~/userinterface/core/View.tsx";
import {backgroundStyle} from "~/infrastructure/network/value/WeddingDesign";
import {fontFamilyStyle} from "~/userinterface/foundation/text/TextType.ts";

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
            fontFamilyStyle.Pretendard,
        )} style={{
            background: backgroundStyle(weddingDesign.weddingDesignColor)
        }}>
            <View ui={css`
                align-items: center;
                gap: 12px;
                margin: 40px 0;
            `}>
                <Text size={40} weight={100} ui={css`
                    letter-spacing: 8px;
                `}>{isValidDate && format(date, 'MM / dd')}</Text>
                <Text size={20} weight={300} ui={css`
                    color: var(--g-600);
                `}>
                    <View ui={css`
                        flex-direction: row !important;
                        gap: 24px;
                        align-items: center;
                    `}>
                        <span>{first.lastName}</span>
                        <span>그리고</span>
                        <span>{second.lastName}</span>
                    </View>
                </Text>
            </View>
            <View as={'img'} src={weddingDesign.titleImgUrl ?? '/EmptyImage.png'} ui={css`
                display: flex;
                width: 100%;
                object-fit: cover;
            `}/>
        </View>
    );
}

export default SoulmatePreviewTemplate;
