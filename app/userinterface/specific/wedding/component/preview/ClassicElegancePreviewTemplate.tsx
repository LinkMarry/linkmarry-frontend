import {type ComponentProps} from 'react';
import PreviewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {css} from "@linaria/core";
import Text from "~/userinterface/component/Text";
import {differenceInDays, format} from "date-fns";
import {getDetails} from "~/infrastructure/network/value/WeddingSchedule";
import View from "~/userinterface/core/View.tsx";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";

function ClassicElegancePreviewTemplate(
    {
        weddingDesign,
        baseInfo,
        weddingSchedule,
        weddingPlace,
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);

    return (
        <View ui={'override-font'}>
            <View ui={css`
                position: relative;
            `}>
                <View as={'img'} src={weddingDesign.titleImgUrl} ui={css`
                    width: 100%;
                    object-fit: cover;
                    height: 100dvh;
                    max-height: 810px;
                `}/>
                <View ui={css`
                    align-items: center;
                    gap: 20px;
                    position: absolute;
                    top: 72px;
                    left: 50%;
                    transform: translateX(-50%);
                `}>
                    <View ui={css`
                        padding: 0 12px;
                        background: white;
                        border-radius: 100px;
                    `}>
                        <Text size={18} weight={400}>D-{differenceInDays(date, new Date())}</Text>
                    </View>
                    <Text size={44} font={'iceJaram'} weight={400} ui={css`
                        color: white;
                    `}>
                        <View ui={css`
                            align-items: center;
                            gap: 8px;
                        `}>
                            <span>{first.name}</span>
                            <span>{second.name}</span>
                        </View>
                    </Text>
                </View>
            </View>
            <Text size={20} font={'LINESeedKR'} weight={400}>
                <View ui={css`
                    align-items: center;
                    gap: 8px;
                    padding: 32px 8px;
                `}>
                    {isValidDate && (
                        <span>{format(date, 'yyyy. MM. dd E HH:mm')}</span>
                    )}
                    <span>{weddingPlace.placeName} ({weddingPlace.floorHall})</span>
                </View>
            </Text>
        </View>
    );
}

export default ClassicElegancePreviewTemplate;
