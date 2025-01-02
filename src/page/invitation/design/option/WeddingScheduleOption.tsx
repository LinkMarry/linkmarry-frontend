import React, {RefObject} from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import Checkbox, {CheckboxRef} from "@designsystem/component/checkbox";
import OptionField from "@page/invitation/design/component/OptionField";
import {IconType} from "@designsystem/foundation/icon";

interface WeddingScheduleOptionProps {
    refs: {
        weddingDateRef: RefObject<HTMLInputElement>,
        weddingTimeRef: RefObject<HTMLInputElement>,
        calendarRef: RefObject<CheckboxRef>,
        dDayRef: RefObject<CheckboxRef>,
    }
}

function WeddingScheduleOption(
    {
        refs: {
            weddingDateRef,
            weddingTimeRef,
            calendarRef,
            dDayRef
        }
    }: WeddingScheduleOptionProps
) {

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
                        <Checkbox ref={calendarRef} label={'캘린더'}/>
                        <Checkbox ref={dDayRef} label={'디데이'}/>
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