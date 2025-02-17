import React from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Divider from "@designsystem/component/Divider";
import OptionLabel from "@page/design/component/OptionLabel";
import Checkbox from "@designsystem/component/Checkbox";
import OptionField from "@page/design/component/OptionField";
import {IconType} from "@designsystem/foundation/icon";
import WeddingSchedule from "@remote/value/WeddingSchedule";

interface WeddingScheduleOptionProps {
    weddingSchedule: WeddingSchedule;
    onChange: (weddingSchedule: WeddingSchedule) => void;
}

function WeddingScheduleOption(
    {
        weddingSchedule,
        onChange
    }: WeddingScheduleOptionProps
) {
    return (
        <S.container>
            <Column flex={1} gap={32}>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'예식일'}/>
                        <OptionField fieldProps={{
                            value: weddingSchedule.weddingDate,
                            onChange: event => onChange({...weddingSchedule, weddingDate: event.target.value})
                        }} leadingIcon={IconType.Calendar} type={'date'}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'예식 시간'}/>
                        <OptionField fieldProps={{
                            value: weddingSchedule.weddingTime,
                            onChange: event => {
                                onChange({...weddingSchedule, weddingTime: event.target.value});
                            }
                        }} leadingIcon={IconType.Clock} type={'time'}/>
                    </Row>
                </Column>
                <Divider/>
                <Row gap={12}>
                    <OptionLabel style={{alignSelf: 'flex-start'}} label={'표시'}/>
                    <Column gap={12}>
                        <Checkbox
                            checked={weddingSchedule.calendar}
                            onChange={checked => onChange({...weddingSchedule, calendar: checked})}
                            label={'캘린더'}
                        />
                        <Checkbox
                            checked={weddingSchedule.dday}
                            onChange={checked => onChange({...weddingSchedule, dday: checked})}
                            label={'디데이'}
                        />
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