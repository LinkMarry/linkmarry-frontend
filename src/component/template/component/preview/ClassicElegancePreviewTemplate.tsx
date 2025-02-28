import React, {ComponentProps} from 'react';
import PreviewTemplate from "@src/component/template/component/preview/PreviewTemplate";
import {Column} from "@designsystem/component/FlexLayout";
import {css} from "styled-components";
import Text from "@designsystem/component/Text";
import {differenceInDays, format} from "date-fns";
import {getDetails} from "@remote/value/WeddingSchedule";
import CustomStyle from "@designsystem/component/CustomStyle";
import {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";

function ClassicElegancePreviewTemplate(
    {
        template,
        baseInfo,
        weddingSchedule,
        weddingPlace,
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);

    return (
        <Column $alignItems={'stretch'}>
            <CustomStyle $customStyle={css`
                position: relative;
            `}>
                <CustomStyle as={'img'} src={template.titleImgUrl} $customStyle={css`
                    width: 100%;
                    object-fit: cover;
                    height: 100vh;
                    max-height: 810px;
                `}/>
                <Column $alignItems={'center'} gap={20} $customStyle={css`
                    position: absolute;
                    top: 72px;
                    left: 50%;
                    transform: translateX(-50%);
                `}>
                    <CustomStyle $customStyle={css`
                        padding: 0 12px;
                        background: white;
                        border-radius: 100px;
                    `}>
                        <Text size={18} weight={400}>D-{differenceInDays(date, new Date())}</Text>
                    </CustomStyle>
                    <Text className={'override-font'} size={44} font={'iceJaram'} weight={400} customStyle={css`
                        color: white;
                    `}>
                        <Column $alignItems={'center'} gap={8}>
                            <span>{first.name}</span>
                            <span>{second.name}</span>
                        </Column>
                    </Text>
                </Column>
            </CustomStyle>
            <Text size={20} weight={400}>
                <Column gap={8} $alignItems={'center'} $customStyle={css`
                    padding: 32px 8px;
                `}>
                    {isValidDate && (
                        <span>{format(date, 'yyyy. MM. dd E HH:mm')}</span>
                    )}
                    <span>{weddingPlace.placeName} ({weddingPlace.floorHall})</span>
                </Column>
            </Text>
        </Column>
    );
}

export default ClassicElegancePreviewTemplate;