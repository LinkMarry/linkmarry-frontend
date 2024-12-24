import React, {useRef} from 'react';
import styled from "styled-components";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import HorizontalDivider from "../../../../designsystem/component/horizontalDivider";
import OptionLabel from "./OptionLabel";
import OptionTextField from "./OptionTextField";
import Checkbox from "../../../../designsystem/component/checkbox";
import OptionField from "./OptionField";
import {IconType} from "../../../../designsystem/foundation/icon";

function WeddingScheduleOption() {
    const weddingDateRef = useRef<HTMLInputElement>(null);
    const weddingTimeRef = useRef<HTMLInputElement>(null);

    return (
        <S.container>
            <Column flex={1} gap={32}>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'예식일'}/>
                        <OptionField ref={weddingDateRef} leadingIcon={IconType.Calendar} type={'date'}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'예식 시간'}/>
                        <OptionField ref={weddingTimeRef} leadingIcon={IconType.Clock} type={'time'}/>
                    </Row>
                </Column>
                <HorizontalDivider/>
                <Row gap={12}>
                    <OptionLabel style={{alignSelf: 'flex-start'}} label={'표시'}/>
                    <Column gap={12}>
                        <Checkbox label={'캘린더'} checked={false} onChange={() => {
                        }}/>
                        <Checkbox label={'디데이'} checked={false} onChange={() => {
                        }}/>
                    </Column>
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

export default WeddingScheduleOption;