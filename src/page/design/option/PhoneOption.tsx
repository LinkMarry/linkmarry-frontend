import React from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Divider from "@designsystem/component/Divider";
import OptionLabel from "@page/design/component/OptionLabel";
import OptionTextField from "@page/design/component/OptionTextField";
import Phone from "@remote/value/Phone";

interface PhoneOptionProps {
    phone: Phone;
    onChange: (phone: Phone) => void;
}

function PhoneOption(
    {
        phone,
        onChange
    }: PhoneOptionProps
) {
    return (
        <S.container>
            <Column gap={32} flex={1}>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'신랑'}/>
                        <OptionTextField fieldProps={{
                            value: phone.groomTel,
                            onChange: event => onChange({...phone, groomTel: event.target.value})
                        }} placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'신랑 부'}/>
                        <OptionTextField fieldProps={{
                            value: phone.groomFatherTel,
                            onChange: event => onChange({...phone, groomFatherTel: event.target.value})
                        }} placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'신랑 모'}/>
                        <OptionTextField fieldProps={{
                            value: phone.groomMotherTel,
                            onChange: event => onChange({...phone, groomMotherTel: event.target.value})
                        }} placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                </Column>
                <Divider/>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'신부'}/>
                        <OptionTextField fieldProps={{
                            value: phone.brideTel,
                            onChange: event => onChange({...phone, brideTel: event.target.value})
                        }} placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'신부 부'}/>
                        <OptionTextField fieldProps={{
                            value: phone.brideFatherTel,
                            onChange: event => onChange({...phone, brideFatherTel: event.target.value})
                        }} placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'신부 모'}/>
                        <OptionTextField fieldProps={{
                            value: phone.brideMotherTel,
                            onChange: event => onChange({...phone, brideMotherTel: event.target.value})
                        }} placeholder={'- 없이 입력'} width={264}/>
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

export default PhoneOption;
