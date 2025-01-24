import React from 'react';
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";

function HomeSlide2() {
    return (
        <Column gap={32} $alignItems={'center'} padding={'124px 200px'}>
            <Text type={'h2'}>청첩장 제작</Text>
            <Row gap={8} $alignSelf={'stretch'}>
                <Cell title={'완성까지'} subtitle={'15분'} description={'dd'}/>
                <Cell title={'완성까지'} subtitle={'15분'} description={'dd'}/>
                <Cell title={'완성까지'} subtitle={'15분'} description={'dd'}/>
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
        <Column padding={'32px 0'} flex={1} gap={16} $alignItems={'center'} style={{
            border: `1px solid ${colors.g100}`,
            boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.03)'
        }}>
            <Column $alignItems={'center'}>
                <Text type={'p3'}>{props.title}</Text>
                <Text type={'h3'}>{props.subtitle}</Text>
            </Column>
            <Text type={'p5'} color={colors.g500}>{props.description}</Text>
        </Column>
    );
}

export default HomeSlide2;