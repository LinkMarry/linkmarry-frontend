import {type ComponentProps} from 'react';
import {css, cx} from "@linaria/core";
import Text from "~/userinterface/component/Text";
import Divider from "~/userinterface/component/Divider";
import {format} from "date-fns";
import {ko} from "date-fns/locale";
import Icon from "~/userinterface/foundation/Icon";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import PreviewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import View from "~/userinterface/core/View.tsx";
import {getDetails} from "~/infrastructure/network/value/WeddingSchedule";
import {backgroundStyle} from "~/infrastructure/network/value/WeddingDesign";
import {fontFamilyStyle} from "~/userinterface/foundation/text/TextType.ts";

function WhiteMomentPreviewTemplate(
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
            css`
                padding: 44px 30px;
            `,
            fontFamilyStyle.LINESeedKR
        )} style={{
            background: backgroundStyle(weddingDesign.weddingDesignColor)
        }}>
            <View ui={css`
                gap: 36px;
                align-items: center;
                margin: 0 23px 44px 23px;
            `}>
                <Text size={24} weight={100}>{first.lastName} & {second.lastName}</Text>
                <Divider ui={css`
                    background: black;
                `}/>
                <View ui={css`
                    gap: 12px;
                    align-items: center;
                `}>
                    <Text size={18}
                          weight={300}>{isValidDate && format(date, 'yyyy년 M월 d일 EEEE a h시', {locale: ko})}</Text>
                    <Text size={18} weight={300}>{weddingPlace.placeName}({weddingPlace.floorHall})</Text>
                </View>
            </View>
            <View ui={css`
                align-items: center;
                gap: 44px;
            `}>
                <View as={'img'} src={weddingDesign.titleImgUrl ?? '/EmptyImage.png'} ui={css`
                    display: flex;
                    width: 100%;
                    height: 512px;
                    object-fit: cover;
                    border-radius: 1000px 1000px 0 0;
                    border: none;
                    outline: none;
                `}/>
                <View ui={css`
                    flex-direction: row;
                    gap: 8px;
                    align-items: center;
                `}>
                    <Text size={16} weight={300}>{first.korean} {first.lastName}</Text>
                    <Icon iconType={'HeartFill'} size={16} ui={css`
                        fill: black;
                    `}/>
                    <Text size={16} weight={300}>{second.korean} {second.lastName}</Text>
                </View>
            </View>
        </View>
    );
}

export default WhiteMomentPreviewTemplate;
