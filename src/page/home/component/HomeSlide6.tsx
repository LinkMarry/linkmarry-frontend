import React from 'react';
import {Column, Row} from "@designsystem/component/flexLayout";
import colors from "@designsystem/foundation/colors";
import Text from "@designsystem/component/text";
import Spacer from "@designsystem/component/spacer";
import styled from "styled-components";
import {hideScrollBar} from "@util/css.util";

const dummyContent = `완전 만족합니다 ㅎㅎ 사진 많이 넣을 수 있는 곳 찾다가 알게되었는데 제맘대로 커스텀할 수 있는 저 덕분에 완전 제 취향의 청첩장이 만들어졌어요..🤍  아직 얼마 못줬지만 벌써 너무 설레구 좋네용 수정을 계속 할 수 있디는 점도 좋아서 평생소장권 사버렸습미다!!!`

function HomeSlide6() {
    return (
        <Column gap={72} $alignItems={'center'} padding={'140px 0'} background={colors.g100}>
            <Text type={'h2'}>링크메리와 함께 해주신 분들의 리뷰</Text>
            <S.cells gap={40} $alignSelf={'stretch'}>
                {Array.from({length: 10}).map((_, index) => (
                    <Cell key={index} author={'hellop***'} star={4} content={dummyContent}/>
                ))}
            </S.cells>
        </Column>
    );
}

const S = {
    cells: styled(Row)`
        overflow-x: scroll;
        ${hideScrollBar};
        padding: 0 100px;
    `
};

function Cell(props: {
    author: string;
    star: number;
    content: string;
}) {
    return (
        <Column gap={20} padding={'36px 29px'} background={colors.white} style={{
            minWidth: 365,
            height: 462,
            borderRadius: 12,
        }}>
            <div style={{width: '100%', height: 167, background: colors.g100}}></div>
            <Column gap={8} $alignItems={'stretch'}>
                <Row $alignItems={'center'}>
                    <Text type={'p2'}>{props.author}</Text>
                    <Spacer/>
                    {Array.from({length: props.star}).map((_, index) => (
                        <img key={index} src="/StarFill.svg" alt=""/>
                    ))}
                    {Array.from({length: 5 - props.star}).map((_, index) => (
                        <img key={index} src="/StarLine.svg" alt=""/>
                    ))}
                </Row>
                <Text type={'caption1'} color={colors.g600}>{props.content}</Text>
            </Column>
        </Column>
    );
}

export default HomeSlide6;