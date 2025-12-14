import {type ComponentProps} from 'react';
import {css, cx} from "@linaria/core";
import {format} from "date-fns";
import PreviewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import {getDetails} from "~/infrastructure/network/value/WeddingSchedule";
import View from "~/userinterface/core/View.tsx";
import Text from "~/userinterface/component/Text";
import {fontFamilyStyle} from "~/userinterface/foundation/text/TextType.ts";

const VintageWeddingPreviewTemplate = (
    {
        baseInfo,
        weddingDesign,
        weddingSchedule,
        weddingPlace
    }: ComponentProps<typeof PreviewTemplate>
) => {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);

    return (
        <View
            ui={cx(
                fontFamilyStyle.KoPubWorldBatang,
                'override-font',
                css`
                    justify-content: space-between;
                    background: url("/paper/paper4.png");
                    color: #5D4037;
                `
            )}
        >
            <View as={'img'} src={weddingDesign.titleImgUrl} ui={css`
                object-fit: cover;
            `}/>
            <View ui={css`
                align-items: center;
                gap: 20px;
                padding: 36px 30px;
            `}>
                <Text size={24} weight={500}>Our Wedding Day</Text>
                <View ui={css`
                    align-items: flex-start;
                    padding: 6px;
                    border: 1px solid #5D4037;
                    align-self: stretch;
                `}>
                    <View ui={css`
                        gap: 20px;
                        align-items: center;
                        border: 1px solid #5D4037;
                        padding: 40px 0;
                    `}>
                        <View ui={css`
                            flex-direction: row !important;
                            gap: 20px;
                            font-size: 32px;
                            font-weight: 500;
                        `}>
                            <Text>{first.lastName}</Text>
                            <Text>&</Text>
                            <Text>{second.lastName}</Text>
                        </View>
                        <View ui={css`
                            gap: 6px;
                            align-items: center;
                            font-size: 18px;
                            font-weight: 500;
                        `}>
                            {isValidDate && (
                                <span>{format(date, 'yyyy. MM. dd E HH:mm')}</span>
                            )}
                            <span>{weddingPlace.placeName} ({weddingPlace.floorHall})</span>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default VintageWeddingPreviewTemplate;
