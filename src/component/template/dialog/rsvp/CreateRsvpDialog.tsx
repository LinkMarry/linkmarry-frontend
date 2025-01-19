import React, {useRef, useState} from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import {Column, Row} from "@designsystem/component/flexLayout";
import Spacer from "@designsystem/component/spacer";
import Text from "@designsystem/component/text";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Button from "@designsystem/component/button";
import OptionSegmentedButton from "@page/invitation/design/component/OptionSegmentedButton";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import weddingApi from "@remote/api/WeddingApi";
import GuestType from "@remote/enumeration/GuestType";
import Rsvp from "@remote/value/Rsvp";
import ConfirmCreateRsvpDialog from "@src/component/template/dialog/rsvp/ConfirmCreateRsvpDialog";

interface CreateRsvpDialogProps {
    url: string;
    rsvp: Rsvp;
    dismiss: () => void;
}

function CreateRsvpDialog(
    {
        url,
        rsvp,
        dismiss
    }: CreateRsvpDialogProps
) {
    const [guestType, setGuestType] = useState(0);
    const [isAttend, setIsAttend] = useState(0);
    const [isMeal, setIsMeal] = useState(0);
    const [showConfirmCreateRsvpDialog, setShowConfirmCreateRsvpDialog] = useState(false);

    const guestNameRef = useRef<HTMLInputElement>(null);
    const guestPhoneRef = useRef<HTMLInputElement>(null);
    const guestCntRef = useRef<HTMLInputElement>(null);
    const guestCommentRef = useRef<HTMLInputElement>(null);

    const createRsvp = async () => {
        const guestName = guestNameRef.current!!;
        const guestPhone = guestPhoneRef.current!!;
        const guestCnt = guestCntRef.current!!;
        const guestComment = guestCommentRef.current!!;

        if (guestName.value === '') {
            alert('참석자 성함을 입력해 주세요');
            return;
        }

        if (guestPhone.value === '' && rsvp.attendPhoneStatus) {
            alert('연락처를 입력해 주세요');
            return;
        }

        if (guestCnt.value === '' && rsvp.attendGuestCntStatus) {
            alert('동행 인원을 입력해 주세요');
            return;
        }

        await weddingApi.createRsvp({
            url,
            guestType: guestType === 0 ? GuestType.GROOM : GuestType.BRIDE,
            isAttend: isAttend === 0,
            isMeal: isMeal === 0,
            guestName: guestName.value,
            guestPhone: guestPhone.value,
            guestCnt: Number(guestCnt.value),
            guestComment: guestComment.value,
        });
        dismiss();
    };

    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Row $alignItems={'center'} padding={'24px 0'} style={{position: 'relative'}}>
                    <Spacer/>
                    <Text type={'p2'}>참석 의사 전달</Text>
                    <Spacer/>
                    <Icon
                        type={IconType.CrossLine}
                        tint={colors.g600}
                        size={20}
                        style={{
                            cursor: 'pointer',
                            right: 32,
                            position: 'absolute'
                        }}
                        onClick={dismiss}
                    />
                </Row>
                <Column gap={36} padding={'36px 40px 0 40px'} $alignItems={'stretch'}>
                    <Column gap={28} $alignItems={'stretch'}>
                        <Column gap={4} $alignItems={'stretch'}>
                            <Text type={'p5'}>어느 분의 하객인가요?</Text>
                            <OptionSegmentedButton selectedIndex={guestType} items={['신랑', '신부']}
                                                   onClickItem={index => {
                                                       setGuestType(index);
                                                   }}/>
                        </Column>
                        <Column gap={4} $alignItems={'stretch'}>
                            <Text type={'p5'}>참석 여부를 선택해 주세요.</Text>
                            <OptionSegmentedButton selectedIndex={isAttend} items={['참석할게요', '참석이 어려워요']}
                                                   onClickItem={index => {
                                                       setIsAttend(index);
                                                   }}/>
                        </Column>
                        {rsvp.attendMealStatus && (
                            <Column gap={4} $alignItems={'stretch'}>
                                <Text type={'p5'}>식사 여부를 선택해 주세요.</Text>
                                <OptionSegmentedButton
                                    selectedIndex={isMeal} items={['식사함', '식사안함']}
                                    onClickItem={index => {
                                        setIsMeal(index);
                                    }}
                                />
                            </Column>
                        )}
                        <Row gap={18} $alignItems={'center'}>
                            <Text type={'p5'} style={{width: 75}}>참석자 성함</Text>
                            <OptionTextField ref={guestNameRef} placeholder={'참석자 본인 성함'} style={{flex: 1}}/>
                        </Row>
                        {rsvp.attendPhoneStatus && (
                            <Row gap={18} $alignItems={'center'}>
                                <Text type={'p5'} style={{width: 75}}>연락처</Text>
                                <OptionTextField ref={guestPhoneRef} placeholder={'- 없이 입력'} style={{flex: 1}}/>
                            </Row>
                        )}
                        {rsvp.attendGuestCntStatus && (
                            <Row gap={18} $alignItems={'center'}>
                                <Text type={'p5'} style={{width: 75}}>동행 인원</Text>
                                <OptionTextField ref={guestCntRef} placeholder={'본인 제외한 추가 참석 인원'} fieldProps={{
                                    defaultValue: 0,
                                    type: 'number'
                                }} style={{flex: 1}}/>
                            </Row>
                        )}
                        {rsvp.attendEtcStatus && (
                            <Column gap={4} $alignItems={'stretch'}>
                                <Text type={'p5'}>추가로 전달할 내용을 입력해 주세요.</Text>
                                <OptionTextField ref={guestCommentRef} autoWidth={false} placeholder={'내용 입력'}/>
                            </Column>
                        )}
                    </Column>
                    <Button text={'참석의사 전달하기'} onClick={() => setShowConfirmCreateRsvpDialog(true)}/>
                </Column>
            </S.container>
            {showConfirmCreateRsvpDialog && (
                <ConfirmCreateRsvpDialog
                    dismiss={() => setShowConfirmCreateRsvpDialog(false)}
                    onConfirm={createRsvp}
                />
            )}
        </BaseDialog>
    );
}

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        max-width: 436px;
        width: 100vw;
        max-height: 100vh;
        overflow-y: hidden;
        align-items: stretch;
        background: ${colors.white};
        padding-bottom: 36px;
        border-radius: 4px;
        ${applyBaseDialogContent()};
    `
}

export default CreateRsvpDialog;