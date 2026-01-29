import {useState} from 'react';
import Text from "~/userinterface/component/Text.tsx";
import Input from "~/userinterface/component/Input.tsx";
import Textarea from "~/userinterface/component/Textarea.tsx";
import {css} from "@linaria/core";
import FormToggle from "~/userinterface/component/FormToggle.tsx";
import Checkbox from "~/userinterface/component/Checkbox.tsx";
import EditorInspectorWrapper from "~/routes/editor/component/EditorInspectorWrapper.tsx";
import type Binding from "~/shared/Binding.ts";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import Dialog from "~/userinterface/pattern/dialog/Dialog.tsx";
import View from "~/userinterface/core/View.tsx";


const EditorInspectorMoney = (
    {
        value: {moneyInfo},
        update
    }: Binding<WeddingDto>
) => {
    const [showHelperDialog, setShowHelperDialog] = useState(false);

    return (
        <EditorInspectorWrapper type={'money'}>
            {showHelperDialog && (
                <Dialog
                    title={'카카오페이 링크 연동 방법'}
                    dismiss={() => setShowHelperDialog(false)}
                    confirmButtonProps={{
                        text: '닫기',
                        onClick: () => setShowHelperDialog(false)
                    }}
                >
                    <View ui={css`
                        flex-direction: row !important;
                        gap: 16px;
                        align-items: flex-start;
                    `}>
                        <View ui={css`
                            gap: 20px;
                            align-items: center;
                            flex: 1;
                        `}>
                            <View as={'img'} src={'/kakaopayhelper/step1.png'} ui={css`

                            `}/>
                            <Text type={'caption1'} bold={true} ui={css`
                                color: var(--g-800);
                            `}>내 프로필 우측 상단의<br/>
                                송금코드를 클릭합니다.</Text>
                        </View>
                        <View ui={css`
                            align-items: center;
                            gap: 20px;
                            flex: 1;
                        `}>
                            <View as={'img'} src={'/kakaopayhelper/step2.png'}/>
                            <Text type={'caption1'} bold={true} ui={css`
                                color: var(--g-800);
                            `}>링크 아이콘을 클릭하여<br/>
                                송금코드를 복사합니다.</Text>
                        </View>
                    </View>
                </Dialog>
            )}
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={moneyInfo.infoTitle} onChange={event => update(draft => {
                    draft.moneyInfo.infoTitle = event.target.value;
                })}/>
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>설명</Text>
                <Textarea hasLabel={false} value={moneyInfo.infoContent} onChange={event => update(draft => {
                    draft.moneyInfo.infoContent = event.target.value;
                })} ui={css`
                    height: 194px;
                `}/>
            </View>
            <View ui={css`
                gap: 8px;
            `}>
                <FormToggle checked={moneyInfo.kakaoStatus} OnChange={checked => update(draft => {
                    draft.moneyInfo.kakaoStatus = checked;
                })} label={'카카오페이 계좌 연동'}/>
                {moneyInfo.kakaoStatus && (
                    <Text type={'caption1'} onClick={() => setShowHelperDialog(true)} ui={css`
                        color: var(--g-400);
                        text-decoration: underline;
                        align-self: flex-end;
                        cursor: pointer;
                    `}>카카오페이 연동하는 방법</Text>
                )}
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Checkbox checked={moneyInfo.groomToggle} OnChange={checked => update(draft => {
                    draft.moneyInfo.groomToggle = checked;
                })} label={'신랑'}/>
                {moneyInfo.groomToggle && (
                    <>
                        <View ui={css`
                            flex-direction: row !important;
                            gap: 12px;
                            align-items: flex-start;
                        `}>
                            <Input placeholder={'예금주'} value={moneyInfo.groomNameMoneyInfo}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.groomNameMoneyInfo = event.target.value;
                                   })} ui={css`
                                flex: 1;
                            `}/>
                            <Input placeholder={'은행'} value={moneyInfo.groomBankName}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.groomBankName = event.target.value;
                                   })} ui={css`
                                flex: 1;
                            `}/>
                        </View>
                        <Input placeholder={'계좌번호'} value={moneyInfo.groomBankNumber}
                               onChange={event => update(draft => {
                                   draft.moneyInfo.groomBankNumber = event.target.value;
                               })}/>
                        {moneyInfo.kakaoStatus && (
                            <Input placeholder={'카카오페이 송금 링크'} value={moneyInfo.groomKakaoUrl}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.groomKakaoUrl = event.target.value;
                                   })}/>
                        )}
                    </>
                )}
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Checkbox checked={moneyInfo.brideToggle} OnChange={checked => update(draft => {
                    draft.moneyInfo.brideToggle = checked;
                })} label={'신부'}/>
                {moneyInfo.brideToggle && (
                    <>
                        <View ui={css`
                            flex-direction: row !important;
                            gap: 12px;
                        `}>
                            <Input placeholder={'예금주'} value={moneyInfo.brideNameMoneyInfo}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.brideNameMoneyInfo = event.target.value;
                                   })} ui={css`
                                flex: 1;
                            `}/>
                            <Input placeholder={'은행'} value={moneyInfo.brideBankName}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.brideBankName = event.target.value;
                                   })} ui={css`
                                flex: 1;
                            `}/>
                        </View>
                        <Input placeholder={'계좌번호'} value={moneyInfo.brideBankNumber}
                               onChange={event => update(draft => {
                                   draft.moneyInfo.brideBankNumber = event.target.value;
                               })}/>
                        {moneyInfo.kakaoStatus && (
                            <Input placeholder={'카카오페이 송금 링크'} value={moneyInfo.brideKakaoUrl}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.brideKakaoUrl = event.target.value;
                                   })}/>
                        )}
                    </>
                )}
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Checkbox checked={moneyInfo.groomFatherToggle} OnChange={checked => update(draft => {
                    draft.moneyInfo.groomFatherToggle = checked;
                })} label={'신랑 아버지'}/>
                {moneyInfo.groomFatherToggle && (
                    <>
                        <View ui={css`
                            gap: 12px;
                            align-items: flex-start;
                            flex-direction: row !important;
                        `}>
                            <Input placeholder={'예금주'} value={moneyInfo.groomFatherNameMoneyInfo}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.groomFatherNameMoneyInfo = event.target.value;
                                   })} ui={css`
                                flex: 1;
                            `}/>
                            <Input placeholder={'은행'} value={moneyInfo.groomFatherBankName}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.groomFatherBankName = event.target.value;
                                   })} ui={css`
                                flex: 1;
                            `}/>
                        </View>
                        <Input placeholder={'계좌번호'} value={moneyInfo.groomFatherBankNumber}
                               onChange={event => update(draft => {
                                   draft.moneyInfo.groomFatherBankNumber = event.target.value;
                               })}/>
                        {moneyInfo.kakaoStatus && (
                            <Input placeholder={'카카오페이 송금 링크'} value={moneyInfo.groomFatherKakaoUrl}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.groomFatherKakaoUrl = event.target.value;
                                   })}/>
                        )}
                    </>
                )}
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Checkbox checked={moneyInfo.groomMotherToggle} OnChange={checked => update(draft => {
                    draft.moneyInfo.groomMotherToggle = checked;
                })} label={'신랑 어머니'}/>
                {moneyInfo.groomMotherToggle && (
                    <>
                        <View ui={css`
                            flex-direction: row !important;
                            align-items: flex-start;
                            gap: 12px;
                        `}>
                            <Input placeholder={'예금주'} value={moneyInfo.groomMotherNameMoneyInfo}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.groomMotherNameMoneyInfo = event.target.value;
                                   })} ui={css`
                                flex: 1;
                            `}/>
                            <Input placeholder={'은행'} value={moneyInfo.groomMotherBankName}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.groomMotherBankName = event.target.value;
                                   })} ui={css`
                                flex: 1;
                            `}/>
                        </View>
                        <Input placeholder={'계좌번호'} value={moneyInfo.groomMotherBankNumber}
                               onChange={event => update(draft => {
                                   draft.moneyInfo.groomMotherBankNumber = event.target.value;
                               })}/>
                        {moneyInfo.kakaoStatus && (
                            <Input placeholder={'카카오페이 송금 링크'} value={moneyInfo.groomMotherKakaoUrl}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.groomMotherKakaoUrl = event.target.value;
                                   })}/>
                        )}
                    </>
                )}
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Checkbox checked={moneyInfo.brideFatherToggle} OnChange={checked => update(draft => {
                    draft.moneyInfo.brideFatherToggle = checked;
                })} label={'신부 아버지'}/>
                {moneyInfo.brideFatherToggle && (
                    <>
                        <View ui={css`
                            flex-direction: row !important;
                            gap: 12px;
                        `}>
                            <Input placeholder={'예금주'} value={moneyInfo.brideFatherNameMoneyInfo}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.brideFatherNameMoneyInfo = event.target.value;
                                   })} ui={css`
                                flex: 1;
                            `}/>
                            <Input placeholder={'은행'} value={moneyInfo.brideFatherBankName}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.brideFatherBankName = event.target.value;
                                   })} ui={css`
                                flex: 1;
                            `}/>
                        </View>
                        <Input placeholder={'계좌번호'} value={moneyInfo.brideFatherBankNumber}
                               onChange={event => update(draft => {
                                   draft.moneyInfo.brideFatherBankNumber = event.target.value;
                               })}/>
                        {moneyInfo.kakaoStatus && (
                            <Input placeholder={'카카오페이 송금 링크'} value={moneyInfo.brideFatherKakaoUrl}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.brideFatherKakaoUrl = event.target.value;
                                   })}/>
                        )}
                    </>
                )}
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Checkbox checked={moneyInfo.brideMotherToggle} OnChange={checked => update(draft => {
                    draft.moneyInfo.brideMotherToggle = checked;
                })} label={'신부 어머니'}/>
                {moneyInfo.brideMotherToggle && (
                    <>
                        <View ui={css`
                            flex-direction: row !important;
                            gap: 12px;
                            align-items: flex-start;
                        `}>
                            <Input placeholder={'예금주'} value={moneyInfo.brideMotherNameMoneyInfo}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.brideMotherNameMoneyInfo = event.target.value;
                                   })} ui={css`
                                flex: 1;
                            `}/>
                            <Input placeholder={'은행'} value={moneyInfo.brideMotherBankName}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.brideMotherBankName = event.target.value;
                                   })} ui={css`
                                flex: 1;
                            `}/>
                        </View>
                        <Input placeholder={'계좌번호'} value={moneyInfo.brideMotherBankNumber}
                               onChange={event => update(draft => {
                                   draft.moneyInfo.brideMotherBankNumber = event.target.value;
                               })}/>
                        {moneyInfo.kakaoStatus && (
                            <Input placeholder={'카카오페이 송금 링크'} value={moneyInfo.brideMotherKakaoUrl}
                                   onChange={event => update(draft => {
                                       draft.moneyInfo.brideMotherKakaoUrl = event.target.value;
                                   })}/>
                        )}
                    </>
                )}
            </View>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorMoney;
