import {type ComponentProps} from 'react';
import PreviewTemplate from "~/components/WeddingComponent/component/preview/PreviewTemplate.tsx";
import {css} from "@linaria/core";
import Text from "~/components/core/Text.tsx";
import {differenceInDays, format} from "date-fns";
import {getDetails} from "~/api/value/WeddingSchedule.ts";
import View from "~/components/core/View.tsx";
import {getBaseInfoByBrideMarkFirst} from "~/api/value/BaseInfo.ts";

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
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    height: 248px;
                    background: linear-gradient(180deg, rgba(61, 61, 61, 0.60) 0%, rgba(61, 61, 61, 0.00) 100%);
                `}/>
                <View ui={css`
                    position: absolute;
                    top: 44px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                `}>
                    <Text font={'BlackHanSans'} size={61} ui={css`
                        color: white;
                    `}>
                        Forever,
                    </Text>
                    <img src={'/classicelegancepreviewtemplate/ourlove.svg'} alt={'our love'} className={css`
                        margin-top: -24px;
                    `}/>
                </View>
            </View>
        </View>
    );
}

export default ClassicElegancePreviewTemplate;
