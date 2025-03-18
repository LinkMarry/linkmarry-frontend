import React, {useRef, useState} from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/pattern/dialog/BaseDialog";
import {css} from "styled-components";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Spacer from "@designsystem/component/Spacer";
import Text from "@designsystem/component/Text";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import Button from "@designsystem/component/Button";
import weddingApi from "@remote/api/WeddingApi";
import GuestType, {guestTypeList, guestTypeMap} from "@remote/enumeration/GuestType";
import Rsvp from "@remote/value/Rsvp";
import Dialog from "@designsystem/pattern/dialog/Dialog";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import {makeInteractionEffect} from "@util/css.util";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";

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
    const [isBus, setIsBus] = useState(0);
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
            guestName.focus();
            alert('참석자 성함을 입력해 주세요');
            return;
        }

        if (rsvp.attendPhoneStatus && guestPhone.value === '') {
            guestPhone.focus();
            alert('연락처를 입력해 주세요');
            return;
        }

        if (rsvp.attendGuestCntStatus && guestCnt.value === '') {
            guestCnt.focus();
            alert('동행 인원을 입력해 주세요');
            return;
        }

        if (rsvp.attendEtcStatus && guestComment.value === '') {
            guestComment.focus();
            alert('추가로 전달할 내용을 입력해 주세요');
            return;
        }

        await weddingApi.createRsvp({
            url,
            guestType: guestType === 0 ? GuestType.GROOM : GuestType.BRIDE,
            isAttend: isAttend === 0,
            isMeal: isMeal === 0,
            guestName: guestName?.value ?? '',
            guestPhone: guestPhone?.value ?? '',
            bus: false,
            guestCnt: Number(guestCnt?.value) ?? '',
            guestComment: guestComment?.value ?? '',
        });
        dismiss();
    };

    return (
        <BaseDialog dismiss={dismiss}>
            <Column $alignItems={'stretch'} $ui={css`
                max-width: 436px;
                width: 100vw;
                max-height: 100vh;
                overflow-y: hidden;
                background: white;
                border-radius: 12px;
                ${applyBaseDialogContent()};
            `}>
                <Row $alignItems={'center'} $ui={css`
                    position: relative;
                    padding: 24px 0;
                `}>
                    <Spacer/>
                    <Text type={'p2'}>참석 의사 전달</Text>
                    <Spacer/>
                    <Icon
                        iconType={IconType.CrossLine}
                        size={20}
                        ui={css`
                            fill: var(--g-600);
                            cursor: pointer;
                            right: 32px;
                            position: absolute;
                        `}
                        onClick={dismiss}
                    />
                </Row>
                <Divider/>
                <Column $gap={36} $alignItems={'stretch'} $ui={css`
                    padding: 36px 40px;
                `}>
                    <Column $gap={24} $alignItems={'stretch'}>
                        <Column $gap={8} $alignItems={'stretch'}>
                            <Text type={'p3'}>어느 분의 하객인가요?</Text>
                            <SegmentedButton
                                selectedTab={guestType}
                                items={guestTypeList.map(i => guestTypeMap[i].korean)}
                                onChange={tab => {
                                    setGuestType(tab);
                                }}
                            />
                        </Column>
                        <Column $gap={8} $alignItems={'stretch'}>
                            <Text type={'p3'}>참석 여부를 선택해 주세요.</Text>
                            <SegmentedButton
                                selectedTab={isAttend}
                                items={['참석할게요', '참석이 어려워요']}
                                onChange={tab => {
                                    setIsAttend(tab);
                                }}
                            />
                        </Column>
                        {rsvp.attendMealStatus && (
                            <Column $gap={8} $alignItems={'stretch'}>
                                <Text type={'p3'}>식사 여부를 선택해 주세요.</Text>
                                <SegmentedButton
                                    selectedTab={isMeal}
                                    items={['식사함', '식사안함']}
                                    onChange={tab => {
                                        setIsMeal(tab);
                                    }}
                                />
                            </Column>
                        )}
                        {rsvp.attendBusStatus && (
                            <Column $gap={8} $alignItems={'stretch'}>
                                <Text type={'p3'}>버스 탑승 여부를 선택해 주세요.</Text>
                                <SegmentedButton
                                    selectedTab={isBus}
                                    items={['탑승함', '탑승안함']}
                                    onChange={tab => {
                                        setIsBus(tab);
                                    }}
                                />
                            </Column>
                        )}
                        <Column $gap={8} $alignItems={'stretch'}>
                            <Text type={'p3'}>참석자 성함</Text>
                            <Input ref={guestNameRef} placeholder={'참석자 본인 성함'} hasLabel={false}/>
                        </Column>
                        {rsvp.attendPhoneStatus && (
                            <Column $gap={8} $alignItems={'stretch'}>
                                <Text type={'p3'}>연락처</Text>
                                <Input ref={guestPhoneRef} placeholder={'- 없이 숫자만'}/>
                            </Column>
                        )}
                        {rsvp.attendGuestCntStatus && (
                            <Column $gap={8} $alignItems={'stretch'}>
                                <Text type={'p3'}>동행 인원</Text>
                                <Input ref={guestCntRef} placeholder={'본인 제외한 추가 참석 인원'} type={'number'}/>
                            </Column>
                        )}
                        {rsvp.attendEtcStatus && (
                            <Column $gap={8} $alignItems={'stretch'}>
                                <Text type={'p3'}>추가로 전달할 내용을 입력해 주세요.</Text>
                                <Input ref={guestCommentRef} placeholder={'내용 입력'}/>
                            </Column>
                        )}
                    </Column>
                    <Button text={'참석의사 전달하기'} onClick={() => setShowConfirmCreateRsvpDialog(true)}/>
                </Column>
            </Column>
            {showConfirmCreateRsvpDialog && (
                <Dialog
                    title={'참석의사 전달'}
                    description={'참석 의사 전달 시 수정이 불가능합니다.'}
                    dismiss={() => setShowConfirmCreateRsvpDialog(false)}
                    dismissButtonProps={{
                        text: '닫기'
                    }}
                    confirmButtonProps={{
                        text: '확인',
                        onClick: createRsvp
                    }}
                />
            )}
        </BaseDialog>
    );
}

export default CreateRsvpDialog;
