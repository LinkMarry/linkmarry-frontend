import React, {RefObject} from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import Textarea from "@designsystem/component/textarea";

interface GreetingOptionProps {
    refs: {
        greetingTitleRef: RefObject<HTMLInputElement>,
        greetingContentRef: RefObject<HTMLTextAreaElement>
    }
}

function GreetingOption(
    {
        refs: {
            greetingTitleRef,
            greetingContentRef,
        }
    }: GreetingOptionProps
) {
    return (
        <S.container>
            <Column gap={16} flex={1}>
                <Row>
                    <OptionLabel label={'제목'}/>
                    <OptionTextField ref={greetingTitleRef} width={264}/>
                </Row>
                <Row>
                    <OptionLabel label={'내용'} style={{alignSelf: 'flex-start'}}/>
                    <Textarea ref={greetingContentRef} style={{width: 264}}/>
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