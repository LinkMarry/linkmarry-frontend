import React, {useRef, useState} from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/pattern/dialog/BaseDialog";
import {css} from "styled-components";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Spacer from "@designsystem/component/Spacer";
import Text from "@designsystem/component/Text";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import Button from "@designsystem/component/Button";
import weddingApi from "@remote/api/WeddingApi";
import GuestType from "@remote/enumeration/GuestType";
import Rsvp from "@remote/value/Rsvp";
import ConfirmCreateRsvpDialog from "@src/component/wedding/dialog/rsvp/ConfirmCreateRsvpDialog";
import Dialog from "@designsystem/pattern/dialog/Dialog";

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

        if (rsvp.attendPhoneStatus && guestPhone.value === '') {
            alert('연락처를 입력해 주세요');
            return;
        }

        if (rsvp.attendGuestCntStatus && guestCnt.value === '') {
            alert('동행 인원을 입력해 주세요');
            return;
        }

        if (rsvp.attendEtcStatus && guestComment.value === '') {
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
                padding-bottom: 36px;
                border-radius: 4px;
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
                <Column $gap={36} $alignItems={'stretch'} $ui={css`
                    padding: 36px 40px 0 40px;
                `}>
                    <Column $gap={28} $alignItems={'stretch'}>
                        {/*todo*/}
                        {/*<Column gap={4} $alignItems={'stretch'}>*/}
                        {/*    <Text type={'p5'}>어느 분의 하객인가요?</Text>*/}
                        {/*    <OptionSegmentedButton*/}
                        {/*        selectedIndex={guestType}*/}
                        {/*        items={['신랑', '신부']}*/}
                        {/*        onClickItem={index => {*/}
                        {/*            setGuestType(index);*/}
                        {/*        }}*/}
                        {/*    />*/}
                        {/*</Column>*/}
                        {/*<Column gap={4} $alignItems={'stretch'}>*/}
                        {/*    <Text type={'p5'}>참석 여부를 선택해 주세요.</Text>*/}
                        {/*    <OptionSegmentedButton*/}
                        {/*        selectedIndex={isAttend}*/}
                        {/*        items={['참석할게요', '참석이 어려워요']}*/}
                        {/*        onClickItem={index => {*/}
                        {/*            setIsAttend(index);*/}
                        {/*        }}*/}
                        {/*    />*/}
                        {/*</Column>*/}
                        {/*{rsvp.attendMealStatus && (*/}
                        {/*    <Column gap={4} $alignItems={'stretch'}>*/}
                        {/*        <Text type={'p5'}>식사 여부를 선택해 주세요.</Text>*/}
                        {/*        <OptionSegmentedButton*/}
                        {/*            selectedIndex={isMeal} items={['식사함', '식사안함']}*/}
                        {/*            onClickItem={index => {*/}
                        {/*                setIsMeal(index);*/}
                        {/*            }}*/}
                        {/*        />*/}
                        {/*    </Column>*/}
                        {/*)}*/}
                        {/*<Row gap={18} $alignItems={'center'}>*/}
                        {/*    <Text type={'p5'} style={{width: 75}}>참석자 성함</Text>*/}
                        {/*    <OptionTextField ref={guestNameRef} placeholder={'참석자 본인 성함'} style={{flex: 1}}/>*/}
                        {/*</Row>*/}
                        {/*{rsvp.attendPhoneStatus && (*/}
                        {/*    <Row gap={18} $alignItems={'center'}>*/}
                        {/*        <Text type={'p5'} style={{width: 75}}>연락처</Text>*/}
                        {/*        <OptionTextField ref={guestPhoneRef} placeholder={'- 없이 입력'} style={{flex: 1}}/>*/}
                        {/*    </Row>*/}
                        {/*)}*/}
                        {/*{rsvp.attendGuestCntStatus && (*/}
                        {/*    <Row gap={18} $alignItems={'center'}>*/}
                        {/*        <Text type={'p5'} style={{width: 75}}>동행 인원</Text>*/}
                        {/*        <OptionTextField ref={guestCntRef} placeholder={'본인 제외한 추가 참석 인원'} fieldProps={{*/}
                        {/*            defaultValue: 0,*/}
                        {/*            type: 'number'*/}
                        {/*        }} style={{flex: 1}}/>*/}
                        {/*    </Row>*/}
                        {/*)}*/}
                        {rsvp.attendEtcStatus && (
                            <Column $gap={4} $alignItems={'stretch'}>
                                <Text type={'p3'}>추가로 전달할 내용을 입력해 주세요.</Text>
                                {/*<OptionTextField ref={guestCommentRef} autoWidth={false} placeholder={'내용 입력'}/>*/}
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
