import {useState} from 'react';
import BaseDialog from "~/userinterface/pattern/dialog/BaseDialog";
import {css, cx} from "@linaria/core";
import Spacer from "~/userinterface/component/Spacer";
import Text from "~/userinterface/component/Text";
import Icon from "~/userinterface/foundation/Icon";
import Button from "~/userinterface/component/Button";
import weddingApi from "~/infrastructure/network/api/wedding-api";
import {GuestTypeList, guestTypeMap} from "~/infrastructure/network/enumeration/GuestType";
import type Rsvp from "~/infrastructure/network/value/Rsvp";
import Dialog from "~/userinterface/pattern/dialog/Dialog";
import SegmentedButton from "~/userinterface/component/SegmentedButton";
import Divider from "~/userinterface/component/Divider";
import Input from "~/userinterface/component/Input";
import {formatPhone} from "~/shared/format-util";
import {baseDialogContentStyle} from "~/userinterface/pattern/dialog/baseDialogContentStyle.ts";
import View from "~/userinterface/core/View.tsx";

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

    const [guestName, setGuestName] = useState('');
    const [guestPhone, setGuestPhone] = useState('');
    const [guestCnt, setGuestCnt] = useState(0);
    const [guestComment, setGuestComment] = useState('');

    const createRsvp = async () => {
        await weddingApi.createRsvp({
            url,
            guestType: guestType === 0 ? 'BRIDE' : 'GROOM',
            isAttend: isAttend === 0,
            isMeal: isMeal === 0,
            guestName: guestName,
            guestPhone: guestPhone,
            bus: isBus === 0,
            guestCnt: guestCnt,
            guestComment: guestComment,
        });
        alert('참석 의사를 전달했습니다.');
        dismiss();
    }

    return (
        <BaseDialog dismiss={dismiss}>
            <View ui={cx(
                css`
                    max-width: 436px;
                    width: 100vw;
                    max-height: 100dvh;
                    overflow-y: hidden;
                    background: white;
                    border-radius: 12px;
                `,
                baseDialogContentStyle
            )}>
                <View ui={css`
                    align-items: center;
                    flex-direction: row !important;
                    position: relative;
                    padding: 24px 0;
                `}>
                    <Spacer/>
                    <Text type={'p2'}>참석 의사 전달</Text>
                    <Spacer/>
                    <Icon
                        iconType={'CrossLine'}
                        size={20}
                        ui={css`
                            fill: var(--g-600);
                            cursor: pointer;
                            right: 32px;
                            position: absolute;
                        `}
                        onClick={dismiss}
                    />
                </View>
                <Divider/>
                <View ui={css`
                    gap: 36px;
                    padding: 36px 40px;
                `}>
                    <View ui={css`
                        gap: 24px;
                    `}>
                        <View ui={css`
                            gap: 8px;
                        `}>
                            <Text type={'p3'}>어느 분의 하객인가요?</Text>
                            <SegmentedButton
                                selectedTab={guestType}
                                items={GuestTypeList.map(i => guestTypeMap[i].korean)}
                                onChange={tab => {
                                    setGuestType(tab);
                                }}
                            />
                        </View>
                        <View ui={css`
                            gap: 8px;
                        `}>
                            <Text type={'p3'}>참석 여부를 선택해 주세요.</Text>
                            <SegmentedButton
                                selectedTab={isAttend}
                                items={['참석할게요', '참석이 어려워요']}
                                onChange={tab => {
                                    setIsAttend(tab);
                                }}
                            />
                        </View>
                        {rsvp.attendMealStatus && (
                            <View ui={css`
                                gap: 8px;
                            `}>
                                <Text type={'p3'}>식사 여부를 선택해 주세요.</Text>
                                <SegmentedButton
                                    selectedTab={isMeal}
                                    items={['식사함', '식사 안 함']}
                                    onChange={tab => {
                                        setIsMeal(tab);
                                    }}
                                />
                            </View>
                        )}
                        {rsvp.attendBusStatus && (
                            <View ui={css`
                                gap: 8px;
                            `}>
                                <Text type={'p3'}>버스 탑승 여부를 선택해 주세요.</Text>
                                <SegmentedButton
                                    selectedTab={isBus}
                                    items={['탑승함', '탑승안함']}
                                    onChange={tab => {
                                        setIsBus(tab);
                                    }}
                                />
                            </View>
                        )}
                        <View ui={css`
                            gap: 8px;
                        `}>
                            <Text type={'p3'}>참석자 성함</Text>
                            <Input
                                value={guestName}
                                onChange={event => setGuestName(event.target.value)}
                                hasLabel={false}
                            />
                        </View>
                        {rsvp.attendPhoneStatus && (
                            <View ui={css`
                                gap: 8px;
                            `}>
                                <Text type={'p3'}>연락처</Text>
                                <Input
                                    value={guestPhone}
                                    onChange={event => {
                                        const value = event.target.value;
                                        const formatedPhone = formatPhone(value);
                                        setGuestPhone(formatedPhone);
                                    }}
                                    hasLabel={false}
                                />
                            </View>
                        )}
                        {rsvp.attendGuestCntStatus && (
                            <View ui={css`
                                gap: 8px;
                            `}>
                                <View ui={css`
                                    flex-direction: row !important;
                                    align-items: center;
                                    gap: 8px;
                                `}>
                                    <Text type={'p3'}>동행 인원</Text>
                                    <Text type={'caption1'} ui={css`
                                        color: var(--g-400);
                                    `}>본인 제외 동행 인원</Text>
                                </View>
                                <Input
                                    value={guestCnt}
                                    onChange={event => setGuestCnt(Number(event.target.value))}
                                    type={'number'}
                                    min={0}
                                    hasLabel={false}
                                />
                            </View>
                        )}
                        {rsvp.attendEtcStatus && (
                            <View ui={css`
                                gap: 8px;
                            `}>
                                <Text type={'p3'}>추가로 전달할 내용을 입력해 주세요.</Text>
                                <Input
                                    value={guestComment}
                                    onChange={event => setGuestComment(event.target.value)}
                                    hasLabel={false}
                                />
                            </View>
                        )}
                    </View>
                    <Button text={'참석의사 전달하기'} onClick={() => setShowConfirmCreateRsvpDialog(true)}/>
                </View>
            </View>
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
