import React from 'react';
import Text from "@designsystem/component/text";
import {Column, Row} from "@designsystem/component/flexLayout";
import Icon, {IconType} from "@designsystem/foundation/icon";
import colors from "@designsystem/foundation/colors";
import styled from "styled-components";
import WeddingSchedule from "@remote/value/WeddingSchedule";
import WeddingPlace from "@remote/value/WeddingPlace";
import BaseInfo from "@remote/value/BaseInfo";

interface PreviewTemplateProps {
    templateColor: string;
    baseInfo: BaseInfo;
    weddingPlace: WeddingPlace;
    weddingSchedule: WeddingSchedule;
    imgList: string[];
}

function PreviewTemplate(
    {
        templateColor,
        baseInfo,
        weddingPlace,
        weddingSchedule,
        imgList
    }: PreviewTemplateProps
) {
    return (
        <S.root background={templateColor}>
            <S.titleWrapper>
                {/*<Text text={'MIN라인LINE Seed*@ HYOLYN & TAFYANG'} font={'LINESeedKR'} weight={400}/>*/}
                {/*<HorizontalDivider color={colors.black}/>*/}
                <S.descriptionWrapper>
                    <Text size={18} weight={300}>
                        {weddingSchedule.weddingDate}
                    </Text>
                    <Text size={18} weight={300}>
                        {weddingPlace.placeName}
                    </Text>
                </S.descriptionWrapper>
            </S.titleWrapper>
            <Column gap={44} $alignItems={'center'}>
                <S.img src={imgList[0]}/>
                <Row gap={8} $alignItems={'center'}>
                    <Text size={16} weight={300}>
                        신랑 {baseInfo.groomName}
                    </Text>
                    <Icon type={IconType.HeartFill} size={16} color={colors.white}/>
                    <Text size={16} weight={300}>
                        신부 {baseInfo.brideName}
                    </Text>
                </Row>
            </Column>
        </S.root>
    );
}

const S = {
    root: styled.div<{ background: string }>`
        display: flex;
        flex-direction: column;
        padding: 44px 30px;
        background: ${({background}) => background};
        align-items: stretch;
    `,
    titleWrapper: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 23px 44px 23px;
        gap: 36px;
    `,
    title: styled.span`
        color: ${colors.black};
        font-family: LINESeedKR-Bd, serif !important;
        font-size: 20px;
    `,
    descriptionWrapper: styled.span`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        color: ${colors.black};
    `,
    img: styled.img`
        display: flex;
        width: 100%;
        height: 512px;
        object-fit: cover;
        border-radius: 1000px 1000px 0 0;
        border: none;
        outline: none;
    `
};

export default PreviewTemplate;