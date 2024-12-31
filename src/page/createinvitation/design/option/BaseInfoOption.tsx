import React, {Ref, RefObject} from 'react';
import styled from "styled-components";
import {BaseFlex, Column, Row} from "../../../../designsystem/component/flexLayout";
import HorizontalDivider from "../../../../designsystem/component/horizontalDivider";
import OptionLabel from "../component/OptionLabel";
import OptionTextField from "../component/OptionTextField";
import Checkbox, {CheckboxRef} from "../../../../designsystem/component/checkbox";

interface BaseInfoOptionProps {
    refs: {
        groomNameRef: RefObject<HTMLInputElement>,
        groomFatherNameRef: RefObject<HTMLInputElement>,
        groomFatherStatusRef: RefObject<CheckboxRef>,
        groomMotherNameRef: RefObject<HTMLInputElement>,
        groomFamilyNameRef: RefObject<HTMLInputElement>,
        groomMotherStatusRef: RefObject<CheckboxRef>,
        brideNameRef: RefObject<HTMLInputElement>,
        brideFatherNameRef: RefObject<HTMLInputElement>,
        brideFatherStatusRef: RefObject<CheckboxRef>,
        brideMotherNameRef: RefObject<HTMLInputElement>,
        brideFamilyNameRef: RefObject<HTMLInputElement>,
        brideMotherStatusRef: RefObject<CheckboxRef>,
        statusFlowerRef: RefObject<CheckboxRef>,
        brideMarkFirstRef: RefObject<CheckboxRef>,
    }
}

function BaseInfoOption(
    {
        refs: {
            groomNameRef,
            groomFatherNameRef,
            groomFatherStatusRef,
            groomMotherNameRef,
            groomFamilyNameRef,
            groomMotherStatusRef,
            brideNameRef,
            brideFatherNameRef,
            brideFatherStatusRef,
            brideMotherNameRef,
            brideFamilyNameRef,
            brideMotherStatusRef,
            statusFlowerRef,
            brideMarkFirstRef,
        }
    }: BaseInfoOptionProps
) {
    return (
        <S.container>
            <Column flex={1} gap={32}>
                <Column gap={16} $alignItems={'stretch'}>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'신랑'}/>
                        <Row gap={12}>
                            <OptionTextField ref={groomNameRef} placeholder={'이름'} width={154}/>
                            <OptionTextField ref={groomFamilyNameRef} placeholder={'관계'} width={98}/>
                        </Row>
                    </Row>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'아버지'}/>
                        <OptionTextField ref={groomFatherNameRef} placeholder={'이름'} width={154}/>
                        <BaseFlex
                            style={{height: 44}}
                            $alignItems={'center'}
                            $justifyContent={'center'}
                            flex={1}
                        >
                            <Checkbox ref={groomFatherStatusRef} label={'故'}/>
                        </BaseFlex>
                    </Row>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'어머니'}/>
                        <OptionTextField ref={groomMotherNameRef} placeholder={'이름'} width={154}/>
                        <BaseFlex
                            style={{height: 44}}
                            $alignItems={'center'}
                            $justifyContent={'center'}
                            flex={1}
                        >
                            <Checkbox ref={groomMotherStatusRef} label={'故'}/>
                        </BaseFlex>
                    </Row>
                </Column>
                <HorizontalDivider/>
                <Column gap={16} $alignItems={'stretch'}>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'신부'}/>
                        <OptionTextField ref={brideNameRef} placeholder={'이름'} width={154}/>
                        <OptionTextField ref={brideFamilyNameRef} placeholder={'관계'} width={98}/>
                    </Row>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'아버지'}/>
                        <OptionTextField ref={brideFatherNameRef} placeholder={'이름'} width={154}/>
                        <BaseFlex
                            style={{height: 44}}
                            $alignItems={'center'}
                            $justifyContent={'center'}
                            flex={1}
                        >
                            <Checkbox ref={brideFatherStatusRef} label={'故'}/>
                        </BaseFlex>
                    </Row>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'어머니'}/>
                        <OptionTextField ref={brideMotherNameRef} placeholder={'이름'} width={154}/>
                        <BaseFlex
                            style={{height: 44}}
                            $alignItems={'center'}
                            $justifyContent={'center'}
                            flex={1}
                        >
                            <Checkbox ref={brideMotherStatusRef} label={'故'}/>
                        </BaseFlex>
                    </Row>
                </Column>
                <HorizontalDivider/>
                <Column gap={12}>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'故人 표기'}/>
                        <Checkbox ref={statusFlowerRef} label={'국화 꽃으로 표기'}/>
                    </Row>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'표시 순서'}/>
                        <Checkbox ref={brideMarkFirstRef} label={'신부 먼저 표시'}/>
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