import React, {RefObject} from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import OptionTextField from "@page/invitation/design/component/OptionTextField";

interface PhoneOptionProps {
    refs: {
        groomTelRef: RefObject<HTMLInputElement>,
        groomFatherTelRef: RefObject<HTMLInputElement>,
        groomMotherTelRef: RefObject<HTMLInputElement>,
        brideTelRef: RefObject<HTMLInputElement>,
        brideFatherTelRef: RefObject<HTMLInputElement>,
        brideMotherTelRef: RefObject<HTMLInputElement>,
    }
}

function PhoneOption(
    {
        refs: {
            groomTelRef,
            groomFatherTelRef,
            groomMotherTelRef,
            brideTelRef,
            brideFatherTelRef,
            brideMotherTelRef,
        }
    }: PhoneOptionProps
) {
    return (
        <S.container>
            <Column gap={32} flex={1}>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'신랑'}/>
                        <OptionTextField ref={groomTelRef} placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'신랑 부'}/>
                        <OptionTextField ref={groomFatherTelRef} placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'신랑 모'}/>
                        <OptionTextField ref={groomMotherTelRef} placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                </Column>
                <HorizontalDivider/>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'신부'}/>
                        <OptionTextField ref={brideTelRef} placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'신부 부'}/>
                        <OptionTextField ref={brideFatherTelRef} placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'신부 모'}/>
                        <OptionTextField ref={brideMotherTelRef} placeholder={'- 없이 입력'} width={264}/>
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