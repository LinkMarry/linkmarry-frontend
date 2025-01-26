import React from 'react';
import {Column, Row} from "@designsystem/component/flexLayout";
import colors from "@designsystem/foundation/colors";
import Text from "@designsystem/component/text";
import styled from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/icon";

function HomeSlide4() {
    return (
        <Row gap={98} $alignItems={'center'} padding={'200px 154px 0 154px'}>
            <div style={{width: 273, height: 558, background: colors.g100}}></div>
            <Column gap={52} flex={1} $alignItems={'stretch'}>
                <Column gap={20}>
                    <Text type={'h2'}>통계 확인</Text>
                    <Text type={'p5'} color={colors.g500}>청첩장의 통계 확인을 통해
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
        <Column gap={12} $alignItems={'center'} padding={'32px 0'} style={{
            border: `1px solid ${colors.g100}`,
            borderRadius: 8,
            boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.03)'
        }}>
            <Icon type={props.iconType} tint={colors.g500} size={52}/>
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