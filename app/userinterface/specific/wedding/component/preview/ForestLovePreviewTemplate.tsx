import {type ComponentProps} from 'react';
import {css, cx} from "@linaria/core";
import Text from "~/userinterface/component/Text";
import {format} from "date-fns";
import {ko} from "date-fns/locale";
import previewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {getDetails} from "~/infrastructure/network/value/WeddingSchedule";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import View from "~/userinterface/core/View.tsx";
import {fontFamilyStyle} from "~/userinterface/foundation/text/TextType.ts";

function ForestLovePreviewTemplate(
    {
        weddingDesign,
        baseInfo,
        weddingPlace,
        weddingSchedule
    }: ComponentProps<typeof previewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);
    return (
        <View ui={cx(
            'override-font',
            css`
                background: white;
            `,
            fontFamilyStyle.Aleo
        )}>
            <View ui={css`
                align-items: center;
                gap: 8px;
                padding: 72px 0;
            `}>
                <Text size={28} weight={300}>{isValidDate && format(date, 'yyyy/MM/dd', {locale: ko})}</Text>
                <Text size={18} weight={300}>{weddingPlace.placeName}({weddingPlace.floorHall})</Text>
            </View>
            <View as={'img'} src={weddingDesign.titleImgUrl ?? '/EmptyImage.png'} ui={css`
                display: flex;
                padding: 0 32px;
                object-fit: cover;
            `}/>
            <View ui={css`
                flex-direction: row !important;
                gap: 12px;
                align-items: center;
                justify-content: center;
                padding: 72px 0;
            `}>
                <Text size={20} weight={300}>{first.lastName}</Text>
                <Text size={20} weight={300}>&</Text>
                <Text size={20} weight={300}>{second.lastName}</Text>
            </View>
        </View>
    );
}

export default ForestLovePreviewTemplate;
