import React, {RefObject} from 'react';
import styled from "styled-components";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import HorizontalDivider from "../../../../designsystem/component/horizontalDivider";
import OptionLabel from "../component/OptionLabel";
import OptionTextField from "../component/OptionTextField";
import Checkbox, {CheckboxRef} from "../../../../designsystem/component/checkbox";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";
import colors from "../../../../designsystem/foundation/colors";
import OptionTextarea from "../component/OptionTextarea";

interface RsvpOptionProps {
    refs: {
        rsvpTitleRef: RefObject<HTMLInputElement>
        rsvpContentRef: RefObject<HTMLInputElement>
        attendStatusRef: RefObject<CheckboxRef>
        attendMealStatusRef: RefObject<CheckboxRef>
        attendGuestCntStatusRef: RefObject<CheckboxRef>
        attendPhoneStatusRef: RefObject<CheckboxRef>
        attendEtcStatusRef: RefObject<CheckboxRef>
        startPopupStatusRef: RefObject<CheckboxRef>
        startPopupMessageRef: RefObject<HTMLTextAreaElement>
    }
}

function RsvpOption(
    {
        refs: {
            rsvpTitleRef,
            rsvpContentRef,
            attendStatusRef,
            attendMealStatusRef,
            attendGuestCntStatusRef,
            attendPhoneStatusRef,
            attendEtcStatusRef,
            startPopupStatusRef,
            startPopupMessageRef,
        }
    }: RsvpOptionProps
) {
    return (
        <S.container>
            <Column gap={32} flex={1}>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'제목'}/>
                        <OptionTextField ref={rsvpTitleRef} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'설명'}/>
                        <OptionTextField ref={rsvpContentRef} width={264}/>
                    </Row>
                </Column>
                <HorizontalDivider/>
                <Column gap={32}>
                    <Row gap={12}>
                        <OptionLabel label={'항목'} style={{alignSelf: 'flex-start'}}/>
                        <Column gap={12}>
                            <Checkbox ref={attendMealStatusRef} label={'식사 여부'}/>
                            <Checkbox ref={attendGuestCntStatusRef} label={'참석 인원'}/>
                            <Checkbox ref={attendPhoneStatusRef} label={'연락처'}/>
                            <Checkbox ref={attendEtcStatusRef} label={'추가 전달사항'}/>
                        </Column>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'팝업 안내'} style={{alignSelf: 'flex-start'}}/>
                        <Column gap={15}>
                            <Row gap={16}>
                                <Checkbox ref={startPopupStatusRef}/>
                                <S.popUpInfoCheckboxLabel>청첩장 열 때 팝업 안내</S.popUpInfoCheckboxLabel>
                            </Row>
                            <OptionTextarea ref={startPopupMessageRef} width={264}/>
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
    popUpInfoCheckboxLabel: styled.span`
        ${makeText(TextType.caption1)};
        color: ${colors.g300};
    `
}

export default RsvpOption;