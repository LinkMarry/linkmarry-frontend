import {type ComponentProps} from 'react';
import {css, cx} from "@linaria/core";
import {format} from "date-fns";
import PreviewTemplate from "~/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import {getDetails} from "~/infrastructure/network/value/WeddingSchedule";
import View from "~/userinterface/core/View.tsx";
import Text from "~/userinterface/component/Text";
import {fontFamilyStyle} from "~/userinterface/foundation/text/TextType.ts";

const LovelyHighTeenPreviewTemplate = (
    {
        baseInfo,
        weddingDesign,
        weddingSchedule
    }: ComponentProps<typeof PreviewTemplate>
) => {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);

    return (
        <View ui={cx(
            'override-font',
            fontFamilyStyle.BR,
            css`
                padding: 44px 24px;
                gap: 44px;
                justify-content: space-between;
                background: #FBF2F2;
            `
        )}>
            <View as={'img'} src={'/lovelyhighteenheader.svg'} ui={css``}/>
            <View as={'img'} src={weddingDesign.titleImgUrl} ui={css`
                object-fit: cover;
                min-height: 320px;
            `}/>
            <View ui={css`
                align-items: center;
                gap: 12px;
                color: #5D4037;
            `}>
                <View ui={css`
                    flex-direction: row;
                    gap: 20px;
                    align-items: center;
                `}>
                    <Text size={36}>{first.lastName}</Text>
                    <Text size={36}>&</Text>
                    <Text size={36}>{second.lastName}</Text>
                </View>
                <Text size={20}>{isValidDate && format(date, 'yyyy-MM-dd E hh:mm a')}</Text>
            </View>
        </View>
    );
};

export default LovelyHighTeenPreviewTemplate;
