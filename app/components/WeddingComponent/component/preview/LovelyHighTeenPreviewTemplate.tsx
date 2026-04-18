import {type ComponentProps} from 'react';
import {css, cx} from "@linaria/core";
import {format} from "date-fns";
import PreviewTemplate from "~/components/WeddingComponent/component/preview/PreviewTemplate.tsx";
import {getBaseInfoByBrideMarkFirst} from "~/api/value/BaseInfo.ts";
import {getDetails} from "~/api/value/WeddingSchedule.ts";
import View from "~/components/core/View.tsx";
import Text from "~/components/core/Text.tsx";
import {fontFamilyStyle} from "~/components/core/text/TextType.ts";

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
                gap: 60px;
                justify-content: space-between;
                background: #FBF2F2;
            `
        )}>
            <View as={'img'} src={'/lovelyhighteenheader.svg'} ui={css``}/>
            <View as={'img'} src={weddingDesign.titleImgUrl} ui={css`
                object-fit: cover;
                min-height: 320px;
                aspect-ratio: 1;
            `}/>
            <View ui={css`
                align-items: center;
                gap: 12px;
                color: #5D4037;
            `}>
                <View ui={css`
                    flex-direction: row !important;
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
