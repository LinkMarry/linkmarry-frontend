import React from 'react';
import styled from "styled-components";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import HorizontalDivider from "../../../../designsystem/component/horizontalDivider";
import OptionLabel from "../component/OptionLabel";
import OptionTextField from "../component/OptionTextField";

function PhoneOption() {
    return (
        <S.container>
            <Column gap={32} flex={1}>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'신랑'}/>
                        <OptionTextField placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'신랑 부'}/>
                        <OptionTextField placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'신랑 모'}/>
                        <OptionTextField placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                </Column>
                <HorizontalDivider/>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'신부'}/>
                        <OptionTextField placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'신부 부'}/>
                        <OptionTextField placeholder={'- 없이 입력'} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'신부 모'}/>
                        <OptionTextField placeholder={'- 없이 입력'} width={264}/>
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