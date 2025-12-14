import {type ComponentProps} from 'react';
import PreviewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {css, cx} from "@linaria/core";
import View from "~/userinterface/core/View.tsx";
import Text from "~/userinterface/component/Text";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import {format} from "date-fns";
import {getDetails} from "~/infrastructure/network/value/WeddingSchedule";
import {fontFamilyStyle} from "~/userinterface/foundation/text/TextType.ts";

function NaturalGardenPreviewTemplate(
    {
        weddingDesign,
        baseInfo,
        weddingPlace,
        weddingSchedule
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {isValidDate, date} = getDetails(weddingSchedule);

    return (
        <View ui={cx(
            'override-font',
            fontFamilyStyle.KyoboHandwriting2020,
            css`
                gap: 44px;
                padding: 64px 0;

                * {
                    color: #5D4037;
                }
            `
        )}>
            <img src={'/NaturalGardenDeco.svg'} alt="" width={'100%'}/>
            <View ui={css`
                gap: 40px;
                padding: 0 32px;
            `}>
                <View as={'img'} src={weddingDesign.titleImgUrl} ui={css`
                    height: 512px;
                    border-radius: 500px 500px 0 0;
                    object-fit: cover;
                `}/>
                <View ui={css`
                    gap: 20px;
                `}>
                    <Text weight={400} size={28}>
                        <View ui={css`
                            flex-direction: row !important;
                            align-items: center;
                            justify-content: center;
                            gap: 32px;
                        `}>
                            <span>{first.name}</span>
                            <span>&</span>
                            <span>{second.name}</span>
                        </View>
                    </Text>
                    <Text size={20} weight={300}>
                        <View ui={css`
                            gap: 6px;
                            align-items: center;
                        `}>
                            {isValidDate && (
                                <span>{format(date, 'yyyy. MM. dd E HH:mm')}</span>
                            )}
                            <span>{weddingPlace.placeName} ({weddingPlace.floorHall})</span>
                        </View>
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default NaturalGardenPreviewTemplate;
