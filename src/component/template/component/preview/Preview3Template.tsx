import React, {ComponentProps} from 'react';
import {css} from "styled-components";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import {format} from "date-fns";
import Spacer from "@designsystem/component/Spacer";
import PreviewTemplate from "@src/component/template/component/preview/PreviewTemplate";
import {getDetails} from "@remote/value/WeddingSchedule";
import {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import CustomStyle from "@designsystem/component/CustomStyle";

function Preview3Template(
    {
        template,
        baseInfo,
        weddingSchedule
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);
    
    return (
        <Row $alignItems={'stretch'} $justifyContent={'stretch'} $customStyle={css`
            position: relative;
            background: white;
        `}>
            <Column $alignItems={'stretch'} $customStyle={css`
                padding: 32px 28px;
            `}
                    style={{width: '100%', height: '100%', position: 'absolute'}}>
                <Text size={18} weight={100} customStyle={css`
                    color: white;
                    align-self: center;
                `}>
                    {isValidDate && format(date, 'yyyy.MM.dd EEE')}
                </Text>
                <Spacer/>
                <Row>
                    <Text size={16} weight={100} customStyle={css`
                        color: white;
                    `}>{first.korean} {first.name}</Text>
                    <Spacer/>
                    <Text size={16} weight={100} customStyle={css`
                        color: white;
                    `}>{second.korean} {second.name}</Text>
                </Row>
            </Column>
            <CustomStyle as={'img'} src={template.titleImgUrl ?? '/EmptyImage.png'} $customStyle={css`
                display: flex;
                width: 100%;
                object-fit: cover;
            `}/>
        </Row>
    );
}

export default Preview3Template;