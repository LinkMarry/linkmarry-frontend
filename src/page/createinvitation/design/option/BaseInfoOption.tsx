import React from 'react';
import styled from "styled-components";
import {BaseFlex, Column, Row} from "../../../../designsystem/component/flexLayout";
import HorizontalDivider from "../../../../designsystem/component/horizontalDivider";
import OptionLabel from "../component/OptionLabel";
import OptionTextField from "../component/OptionTextField";
import Checkbox from "../../../../designsystem/component/checkbox";

function BaseInfoOption() {
    return (
        <S.container>
            <Column flex={1} gap={32}>
                <Column gap={16} $alignItems={'stretch'}>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'신랑'}/>
                        <OptionTextField placeholder={'성'} width={82}/>
                        <OptionTextField placeholder={'이름'} width={98}/>
                        <OptionTextField placeholder={'관계'} width={98}/>
                    </Row>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'아버지'}/>
                        <OptionTextField placeholder={'성'} width={82}/>
                        <OptionTextField placeholder={'이름'} width={98}/>
                        <BaseFlex
                            style={{height: 44}}
                            $alignItems={'center'}
                            $justifyContent={'center'}
                            flex={1}
                        >
                            <Checkbox checked={false} onChange={() => {
                            }} label={'故'}/>
                        </BaseFlex>
                    </Row>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'어머니'}/>
                        <OptionTextField placeholder={'성'} width={82}/>
                        <OptionTextField placeholder={'이름'} width={98}/>
                        <BaseFlex
                            style={{height: 44}}
                            $alignItems={'center'}
                            $justifyContent={'center'}
                            flex={1}
                        >
                            <Checkbox checked={false} onChange={() => {
                            }} label={'故'}/>
                        </BaseFlex>
                    </Row>
                </Column>
                <HorizontalDivider/>
                <Column gap={16} $alignItems={'stretch'}>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'신부'}/>
                        <OptionTextField placeholder={'성'} width={82}/>
                        <OptionTextField placeholder={'이름'} width={98}/>
                        <OptionTextField placeholder={'관계'} width={98}/>
                    </Row>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'아버지'}/>
                        <OptionTextField placeholder={'성'} width={82}/>
                        <OptionTextField placeholder={'이름'} width={98}/>
                        <BaseFlex
                            style={{height: 44}}
                            $alignItems={'center'}
                            $justifyContent={'center'}
                            flex={1}
                        >
                            <Checkbox checked={false} onChange={() => {
                            }} label={'故'}/>
                        </BaseFlex>
                    </Row>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'어머니'}/>
                        <OptionTextField placeholder={'성'} width={82}/>
                        <OptionTextField placeholder={'이름'} width={98}/>
                        <BaseFlex
                            style={{height: 44}}
                            $alignItems={'center'}
                            $justifyContent={'center'}
                            flex={1}
                        >
                            <Checkbox checked={false} onChange={() => {
                            }} label={'故'}/>
                        </BaseFlex>
                    </Row>
                </Column>
                <HorizontalDivider/>
                <Column gap={12}>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'故人 표기'}/>
                        <Checkbox label={'국화 꽃으로 표기'} checked={false} onChange={() => {
                        }}/>
                    </Row>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'표시 순서'}/>
                        <Checkbox label={'신부 먼저 표시'} checked={false} onChange={() => {
                        }}/>
                    </Row>
                </Column>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        padding: 36px;
    `
}

export default BaseInfoOption;