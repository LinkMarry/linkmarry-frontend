import {type ComponentProps} from 'react';
import {css, cx} from "@linaria/core";
import {format} from "date-fns";
import PreviewTemplate from "~/components/WeddingComponent/component/preview/PreviewTemplate.tsx";
import {getBaseInfoByBrideMarkFirst} from "~/api/value/BaseInfo.ts";
import {getDetails} from "~/api/value/WeddingSchedule.ts";
import View from "~/components/core/View.tsx";
import Text from "~/components/core/Text.tsx";
import {fontFamilyStyle} from "~/components/core/text/TextType.ts";

const PureNaturalPreviewTemplate = (
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
                'override-font',
                fontFamilyStyle.Eulyoo1945,
                css`
                    gap: 28px;
                    justify-content: space-between;
                    padding-bottom: 40px;
                    background: white;
                `
            )}
        >
            <View ui={css`
                position: relative;
            `}>
                <View as={'img'} src={weddingDesign.titleImgUrl} ui={css`
                    object-fit: cover;
                `}/>
                <View ui={css`
                    position: absolute;
                    width: calc(100% - 14px * 2);
                    height: calc(100% - 14px);
                    margin-left: 14px;
                    margin-top: 14px;
                    border: 2px solid white;
                    border-bottom: none;
                `}/>
            </View>
            <Text size={24} weight={400} font={'Great Vibes'} ui={css`
                color: #F6DFC0;
                align-self: center;
            `}>“Wedding Day”</Text>
            <View ui={css`
                color: #333333;
                gap: 16px;
                align-items: center;
                font-size: 30px;
                font-weight: 400;
                letter-spacing: 16px;
            `}>
                <Text>{first.name}</Text>
                <Text>{second.name}</Text>
            </View>
            <View ui={css`
                gap: 8px;
                align-items: center;
            `}>
                {isValidDate && (
                    <span>{format(date, 'yyyy. MM. dd E HH:mm')}</span>
                )}
                <span>{weddingPlace.placeName} ({weddingPlace.floorHall})</span>
            </View>
        </View>
    );
};

export default PureNaturalPreviewTemplate;
