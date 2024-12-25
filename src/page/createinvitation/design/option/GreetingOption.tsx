import React from 'react';
import styled from "styled-components";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import OptionLabel from "../component/OptionLabel";
import OptionTextField from "../component/OptionTextField";
import OptionTextarea from "../component/OptionTextarea";

function GreetingOption() {
    return (
        <S.container>
            <Column gap={16} flex={1}>
                <Row>
                    <OptionLabel label={'제목'}/>
                    <OptionTextField width={264}/>
                </Row>
                <Row>
                    <OptionLabel label={'내용'} style={{ alignSelf: 'flex-start' }}/>
                    <OptionTextarea width={264}/>
                </Row>
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

export default GreetingOption;