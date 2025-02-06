import React from 'react';
import styled, {css} from "styled-components";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Divider from "@designsystem/component/Divider";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import Checkbox from "@designsystem/component/Checkbox";
import Text from "@designsystem/component/Text";
import Rsvp from "@remote/value/Rsvp";

interface RsvpOptionProps {
    rsvp: Rsvp;
    onChange: (rsvp: Rsvp) => void;
}

function RsvpOption(
    {
        rsvp,
        onChange
    }: RsvpOptionProps
) {
    return (
        <S.container>
            <Column gap={32} flex={1}>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'제목'}/>
                        <OptionTextField fieldProps={{
                            value: rsvp.rsvpTitle,
                            onChange: event => onChange({...rsvp, rsvpTitle: event.target.value})
                        }} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'설명'}/>
                        <OptionTextField fieldProps={{
                            value: rsvp.rsvpContent,
                            onChange: event => onChange({...rsvp, rsvpContent: event.target.value})
                        }} width={264}/>
                    </Row>
                </Column>
                <Divider/>
                <Column gap={32}>
                    <Row gap={12}>
                        <OptionLabel label={'항목'} style={{alignSelf: 'flex-start'}}/>
                        <Column gap={12}>
                            <Checkbox
                                checked={rsvp.attendMealStatus}
                                onChange={checked => onChange({...rsvp, attendMealStatus: checked})}
                                label={'식사 여부'}
                            />
                            <Checkbox
                                checked={rsvp.attendGuestCntStatus}
                                onChange={checked => onChange({...rsvp, attendGuestCntStatus: checked})}
                                label={'참석 인원'}/>
                            <Checkbox
                                checked={rsvp.attendPhoneStatus}
                                onChange={checked => onChange({...rsvp, attendPhoneStatus: checked})}
                                label={'연락처'}/>
                            <Checkbox
                                checked={rsvp.attendEtcStatus}
                                onChange={checked => onChange({...rsvp, attendEtcStatus: checked})}
                                label={'추가 전달사항'}
                            />
                        </Column>
                    </Row>
                    <Row gap={12} $alignItems={'center'}>
                        <OptionLabel label={'팝업 안내'} style={{alignSelf: 'flex-start'}}/>
                        <Row gap={16}>
                            <Checkbox
                                checked={rsvp.startPopupStatus}
                                onChange={checked => onChange({...rsvp, startPopupStatus: checked})}
                            />
                            <Text type={'caption1'} customStyle={css`
                                color: var(--g-300);
                            `}>청첩장 열 때 팝업 안내</Text>
                        </Row>
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
    `,
}

export default RsvpOption;