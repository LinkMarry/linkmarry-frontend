import React, {ComponentProps} from 'react';
import PreviewTemplate from "@src/component/template/component/preview/PreviewTemplate";
import {Column, Row} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import CustomStyle from "@designsystem/core/CustomStyle";
import Text from "@designsystem/component/Text";
import {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import {format} from "date-fns";
import {getDetails} from "@remote/value/WeddingSchedule";

function NaturalGardenPreviewTemplate(
    {
        template,
        baseInfo,
        weddingPlace,
        weddingSchedule
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {isValidDate, date} = getDetails(weddingSchedule);

    return (
        <Column gap={44} $alignItems={'stretch'} css={css`
            padding: 64px 0;

            * {
                color: #5D4037;
            }
        `}>
            <img src={'/NaturalGardenDeco.svg'} alt="" width={'100%'}/>
            <Column $alignItems={'stretch'} gap={40} css={css`
                padding: 0 32px;
            `}>
                <CustomStyle as={'img'} src={template.titleImgUrl} css={css`
                    height: 512px;
                    border-radius: 500px 500px 0 0;
                    object-fit: cover;
                `}/>
                <Column $alignItems={'stretch'} gap={20}>
                    <Text weight={400} size={28}>
                        <Row gap={32} $alignItems={'center'} $justifyContent={'center'}>
                            <span>{first.name}</span>
                            <span>&</span>
                            <span>{second.name}</span>
                        </Row>
                    </Text>
                    <Text size={20} weight={300}>
                        <Column gap={6} $alignItems={'center'}>
                            {isValidDate && (
                                <span>{format(date, 'yyyy. MM. dd E HH:mm')}</span>
                            )}
                            <span>{weddingPlace.placeName} ({weddingPlace.floorHall})</span>
                        </Column>
                    </Text>
                </Column>
            </Column>
        </Column>
    );
}

export default NaturalGardenPreviewTemplate;
