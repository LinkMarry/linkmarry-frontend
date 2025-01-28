import React from 'react';
import Text from "@designsystem/component/text";
import {Column, Row} from "@designsystem/component/flexLayout";
import Icon, {IconType} from "@designsystem/foundation/icon";
import colors from "@designsystem/foundation/colors";
import styled from "styled-components";
import WeddingSchedule from "@remote/value/WeddingSchedule";
import WeddingPlace from "@remote/value/WeddingPlace";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import Template from "@remote/value/Template";
import Spacer from "@designsystem/component/spacer";
import {format, parse} from "date-fns";
import {ko} from "date-fns/locale";
import HorizontalDivider from "@designsystem/component/horizontalDivider";

interface PreviewTemplateProps {
    template: Template;
    baseInfo: BaseInfo;
    weddingPlace: WeddingPlace;
    weddingSchedule: WeddingSchedule;
}

function PreviewTemplate(
    {
        template,
        baseInfo,
        weddingPlace,
        weddingSchedule,
    }: PreviewTemplateProps
) {
    const dateString = `${weddingSchedule.weddingDate} ${weddingSchedule.weddingTime}`;
    const date = parse(dateString, 'yyyy-MM-dd HH:mm', new Date());
    const isValidDate = !isNaN(date.getTime());
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    switch (template.templateName) {
        case '템플릿1':
            return (
                <S1.Root background={template.templateColor}>
                    <Column gap={36} $alignItems={'center'} margin={'0 23px 44px 23px'}>
                        <Text size={24} weight={100}>{first.name} & {second.name}</Text>
                        <HorizontalDivider color={colors.black}/>
                        <Column $alignItems={'center'} gap={12}>
                            <Text size={18}
                                  weight={300}>{isValidDate && format(date, 'yyyy년 M월 d일 EEEE a h시', {locale: ko})}</Text>
                            <Text size={18} weight={300}>{weddingPlace.placeName}({weddingPlace.floorHall})</Text>
                        </Column>
                    </Column>
                    <Column gap={44} $alignItems={'center'}>
                        <S1.Img src={template.titleImgUrl ?? '/EmptyImage.png'}/>
                        <Row gap={8} $alignItems={'center'}>
                            <Text size={16} weight={300}>{first.korean} {first.name}</Text>
                            <Icon type={IconType.HeartFill} size={16} color={colors.white}/>
                            <Text size={16} weight={300}>{second.korean} {second.name}</Text>
                        </Row>
                    </Column>
                </S1.Root>
            );
        case '템플릿2':
            return (
                <Column $alignItems={'stretch'} background={colors.white}>
                    <Column $alignItems={'center'} gap={8} style={{padding: '72px 0'}}>
                        <Text size={28} weight={300}>{isValidDate && format(date, 'yyyy/MM/dd', {locale: ko})}</Text>
                        <Text size={18} weight={300}>{weddingPlace.placeName}({weddingPlace.floorHall})</Text>
                    </Column>
                    <S2.Img src={template.titleImgUrl ?? '/EmptyImage.png'}/>
                    <Row gap={12} $alignItems={'center'} $justifyContent={'center'} padding={'72px 0'}>
                        <Text size={20} weight={300}>{first.name}</Text>
                        <Text size={20} weight={300}>&</Text>
                        <Text size={20} weight={300}>{second.name}</Text>
                    </Row>
                </Column>
            );
        case '템플릿3':
            return (
                <S3.Root>
                    <Column $alignItems={'stretch'} padding={'32px 28px'}
                            style={{width: '100%', height: '100%', position: 'absolute'}}>
                        <Text size={18} weight={100} color={colors.white} style={{alignSelf: 'center'}}>
                            {isValidDate && format(date, 'yyyy.MM.dd EEE')}
                        </Text>
                        <Spacer/>
                        <Row>
                            <Text size={16} weight={100} color={colors.white}>{first.korean} {first.name}</Text>
                            <Spacer/>
                            <Text size={16} weight={100} color={colors.white}>{second.korean} {second.name}</Text>
                        </Row>
                    </Column>
                    <S3.Img src={template.titleImgUrl ?? '/EmptyImage.png'}/>
                </S3.Root>
            );
        case '템플릿4':
            return (
                <Column $alignItems={'stretch'} background={colors.white}>
                    <Column gap={16} $alignItems={'center'} padding={'52px 0'}>
                        <Text size={24} weight={100}>{first.name} & {second.name}</Text>
                        <Column gap={4} $alignItems={'center'}>
                            <Text size={14}
                                  weight={300}>{isValidDate && format(date, 'yyyy.MM.dd a h시', {locale: ko})}</Text>
                            <Text
                                size={14}
                                weight={300}
                            >{weddingPlace.placeName}</Text>
                        </Column>
                    </Column>
                    <S4.Img src={template.titleImgUrl ?? '/EmptyImage.png'}/>
                </Column>
            );
        case '템플릿5':
            return (
                <Column $alignItems={'stretch'} background={colors.white}>
                    <S5.Img src={template.titleImgUrl ?? '/EmptyImage.png'}/>
                    <Row $alignItems={'center'} gap={20} $justifyContent={'center'} padding={'0 0 48px 0'}>
                        <Text size={24} weight={300}>{first.name}</Text>
                        <Text size={16} weight={300} color={colors.g300}>and</Text>
                        <Text size={24} weight={300}>{second.name}</Text>
                    </Row>
                </Column>
            );
        case '템플릿6':
            return (
                <Column background={template.templateColor} $alignItems={'stretch'}>
                    <Column gap={12} $alignItems={'center'} margin={'40px 0'}>
                        <Text size={40} weight={100}>{isValidDate && format(date, 'MM / dd')}</Text>
                        <Row gap={24} $alignItems={'center'}>
                            <Text size={20} weight={300} color={colors.g600}>{first.name}</Text>
                            <Text size={20} weight={300} color={colors.g600}>그리고</Text>
                            <Text size={20} weight={300} color={colors.g600}>{second.name}</Text>
                        </Row>
                    </Column>
                    <S6.Img src={template.titleImgUrl ?? '/EmptyImage.png'}/>
                </Column>
            );
    }
}

const S1 = {
    Root: styled.div<{ background: string }>`
        display: flex;
        flex-direction: column;
        padding: 44px 30px;
        background: ${({background}) => background};
        align-items: stretch;
    `,
    Img: styled.img`
        display: flex;
        width: 100%;
        height: 512px;
        object-fit: cover;
        border-radius: 1000px 1000px 0 0;
        border: none;
        outline: none;
    `
};
const S2 = {
    Img: styled.img`
        display: flex;
        padding: 0 32px;
        object-fit: cover;
    `
};
const S3 = {
    Root: styled.div`
        display: flex;
        position: relative;
        align-items: stretch;
        justify-content: stretch;
        background: ${colors.white};
    `,
    Img: styled.img`
        display: flex;
        width: 100%;
        object-fit: cover;
    `
};
const S4 = {
    Img: styled.img`
        display: flex;
        width: 100%;
        object-fit: cover;
    `
};
const S5 = {
    Img: styled.img`
        display: flex;
        object-fit: cover;
        margin: 48px 28px;
    `
};
const S6 = {
    Img: styled.img`
        display: flex;
        width: 100%;
        object-fit: cover;
    `
}

export default PreviewTemplate;