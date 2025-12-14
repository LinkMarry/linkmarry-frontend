import {type ComponentProps} from 'react';
import {css, cx} from "@linaria/core";
import Text from "~/userinterface/component/Text";
import {format} from "date-fns";
import {ko} from "date-fns/locale";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import {getDetails} from "~/infrastructure/network/value/WeddingSchedule";
import PreviewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import View from "~/userinterface/core/View.tsx";
import {fontFamilyStyle} from "~/userinterface/foundation/text/TextType.ts";


function NatureBlissPreviewTemplate(
    {
        baseInfo,
        weddingDesign,
        weddingPlace,
        weddingSchedule,
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);
    return (
        <View ui={cx(
            'override-font',
            fontFamilyStyle.SCoreDream,
            css`
                background: white;
            `
        )}>
            <View ui={css`
                align-items: center;
                gap: 16px;
                padding: 52px 0;
            `}>
                <Text size={24} weight={100}>{first.lastName} & {second.lastName}</Text>
                <View ui={css`
                    gap: 4px;
                    align-items: center;
                `}>
                    <Text size={14}
                          weight={300}>{isValidDate && format(date, 'yyyy.MM.dd a h시', {locale: ko})}</Text>
                    <Text
                        size={14}
                        weight={300}
                    >{weddingPlace.placeName}</Text>
                </View>
            </View>
            <View as={'img'} src={weddingDesign.titleImgUrl ?? '/EmptyImage.png'} ui={css`
                display: flex;
                width: 100%;
                object-fit: cover;
            `}/>
        </View>
    );
}

export default NatureBlissPreviewTemplate;
