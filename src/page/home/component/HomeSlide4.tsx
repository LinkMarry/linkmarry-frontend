import React from 'react';
import {Column, Row} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import styled, {css} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/icon";

function HomeSlide4() {
    return (
        <Row gap={98} $alignItems={'center'} $customStyle={css`
            padding: 200px 154px 0 154px;
        `}>
            <img src={'/home/home-phone-3.webp'} alt={''} style={{
                width: 273
            }}/>
            <Column gap={52} flex={1} $alignItems={'stretch'}>
                <Column gap={20}>
                    <Text type={'h2'}>통계 확인</Text>
                    <Text type={'p5'} customStyle={css`
                        color: var(--g-500);
                    `}>청첩장의 통계 확인을 통해
                        <br/>더 완벽한 결혼식을 준비할 수 있습니다.</Text>
                </Column>
                <S.cells>
                    <Cell iconType={IconType.Statistics} title={'방문자 트래킹'}/>
                    <Cell iconType={IconType.Person} title={'RSVP 확인'}/>
                    <Cell iconType={IconType.Book} title={'방명록 확인'}/>
                    <Cell iconType={IconType.Crown} title={'축의금 확인'}/>
                    <Cell iconType={IconType.Utensils} title={'식사 인원 확인'}/>
                    <Cell iconType={IconType.CheckFill} title={'플랫폼 여부'}/>
                </S.cells>
            </Column>
        </Row>
    );
}

function Cell(props: {
    iconType: IconType;
    title: string;
}) {
    return (
        <Column gap={12} $alignItems={'center'} $customStyle={css`
            padding: 32px 0;
            border: 1px solid var(--g-100);
            border-radius: 8px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.03);
        `}>
            <Icon iconType={props.iconType} size={52} customStyle={css`
                fill: var(--g-500);
            `}/>
            <Text type={'h6'}>{props.title}</Text>
        </Column>
    );
}

const S = {
    cells: styled.div`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(3, 1fr); /* 3열 구성 */
        align-items: stretch;
        justify-content: stretch;
    `
}

export default HomeSlide4;