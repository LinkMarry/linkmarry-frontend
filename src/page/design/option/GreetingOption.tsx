import React, {RefObject} from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/FlexLayout";
import OptionLabel from "@page/design/component/OptionLabel";
import OptionTextField from "@page/design/component/OptionTextField";
import Textarea from "@designsystem/component/Textarea";
import Greeting from "@remote/value/Greeting";

interface GreetingOptionProps {
    greeting: Greeting;
    onChange: (greeting: Greeting) => void;
}

function GreetingOption(
    {
        greeting,
        onChange
    }: GreetingOptionProps
) {
    return (
        <S.container>
            <Column gap={16} flex={1}>
                <Row>
                    <OptionLabel label={'제목'}/>
                    <OptionTextField fieldProps={{
                        value: greeting.greetingTitle,
                        onChange: event => onChange({...greeting, greetingTitle: event.target.value})
                    }} width={264}/>
                </Row>
                <Row>
                    <OptionLabel label={'내용'} style={{alignSelf: 'flex-start'}}/>
                    <Textarea
                        value={greeting.greetingContent}
                        onChange={event => onChange({...greeting, greetingContent: event.target.value})}
                        style={{width: 264}}
                    />
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