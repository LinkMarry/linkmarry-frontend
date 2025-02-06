import React from 'react';
import {Column, Row} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import {css} from "styled-components";

function HomeSlide2() {
    return (
        <Column gap={32} $alignItems={'center'} $customStyle={css`
            padding: 124px 200px;
        `}>
            <Text type={'h2'}>청첩장 제작</Text>
            <Row gap={8} $alignSelf={'stretch'}>
                <Cell title={'완성까지'} subtitle={'15분'} description={'빠르고 쉽게, 템플릿으로\n15분 안에 완성되는 웨딩 초대'}/>
                <Cell title={'모든 옵션'} subtitle={'무료'} description={'청첩장 제작 옵션 무료,\n완성까지 걱정없는 초대장'}/>
                <Cell title={'템플릿 수'} subtitle={'100+'} description={'100개 이상의 템플릿,\n취향에 맞는 청첩장 제작'}/>
            </Row>
        </Column>
    );
}

function Cell(props: {
    title: string;
    subtitle: string;
    description: string;
}) {
    return (
        <Column flex={1} gap={16} $alignItems={'center'} $customStyle={css`
            padding: 32px 0;
            border: 1px solid var(--g-100);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.03);
        `}>
            <Column $alignItems={'center'}>
                <Text type={'p3'}>{props.title}</Text>
                <Text type={'h3'}>{props.subtitle}</Text>
            </Column>
            <Text type={'p5'} customStyle={css`
                white-space: pre-wrap;
                text-align: center;
                color: var(--g-500);
            `}>{props.description}</Text>
        </Column>
    );
}

export default HomeSlide2;