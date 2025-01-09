import React, {RefObject} from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import Checkbox, {CheckboxRef} from "@designsystem/component/checkbox";
import {TextType} from "@designsystem/foundation/text/textType";
import colors from "@designsystem/foundation/colors";
import Textarea from "@designsystem/component/textarea";
import Text from "@designsystem/component/text";
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
                <HorizontalDivider/>
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
                    <Row gap={12}>
                        <OptionLabel label={'팝업 안내'} style={{alignSelf: 'flex-start'}}/>
                        <Column gap={15}>
                            <Row gap={16}>
                                <Checkbox
                                    checked={rsvp.startPopupStatus}
                                    onChange={checked => onChange({...rsvp, startPopupStatus: checked})}
                                />
                                <Text text={'청첩장 열 때 팝업 안내'} type={TextType.caption1} color={colors.g300}/>
                            </Row>
                            <Textarea
                                value={rsvp.startPopupMessage}
                                onChange={event => onChange({...rsvp, startPopupMessage: event.target.value})}
                                style={{width: 264}}
                            />
                        </Column>
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