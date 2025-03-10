import React, {useState} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Input from "@designsystem/component/Input";
import Textarea from "@designsystem/component/Textarea";
import {css} from "styled-components";
import FormToggle from "@designsystem/component/FormToggle";
import Checkbox from "@designsystem/component/Checkbox";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";
import Dialog from "@designsystem/pattern/dialog/Dialog";
import View from "@designsystem/core/View";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorMoney = (
    {
        value: {moneyInfo},
        update
    }: Props
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
                    <Row $gap={16}>
                        <Column $alignItems={'center'} $gap={20} $ui={css`
                            flex: 1;
                        `}>
                            <View as={'img'} src={'/kakaopayhelper/step1.png'} $ui={css`

                            `}/>
                            <Text type={'caption1'} bold={true} ui={css`
                                color: var(--g-800);
                            `}>내 프로필 우측 상단의<br/>
                                송금코드를 클릭합니다.</Text>
                        </Column>
                        <Column $alignItems={'center'} $gap={20} $ui={css`
                            flex: 1;
                        `}>
                            <View as={'img'} src={'/kakaopayhelper/step2.png'} $ui={css`

                            `}/>
                            <Text type={'caption1'} bold={true} ui={css`
                                color: var(--g-800);
                            `}>링크 아이콘을 클릭하여<br/>
                                송금코드를 복사합니다.</Text>
                        </Column>
                    </Row>
                </Dialog>
            )}
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={moneyInfo.infoTitle} onChange={event => update(draft => {
                    draft.moneyInfo.infoTitle = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>설명</Text>
                <Textarea hasLabel={false} value={moneyInfo.infoContent} onChange={event => update(draft => {
                    draft.moneyInfo.infoContent = event.target.value;
                })} $ui={css`
                    height: 194px;
                `}/>
            </Column>
            <Column $gap={8} $alignItems={'stretch'}>
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
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Checkbox checked={moneyInfo.groomToggle} OnChange={checked => update(draft => {
                    draft.moneyInfo.groomToggle = checked;
                })} label={'신랑'}/>
                {moneyInfo.groomToggle && (
                    <>
                        <Row $gap={12}>
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
                        </Row>
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
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Checkbox checked={moneyInfo.brideToggle} OnChange={checked => update(draft => {
                    draft.moneyInfo.brideToggle = checked;
                })} label={'신부'}/>
                {moneyInfo.brideToggle && (
                    <>
                        <Row $gap={12}>
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
                        </Row>
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
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Checkbox checked={moneyInfo.groomFatherToggle} OnChange={checked => update(draft => {
                    draft.moneyInfo.groomFatherToggle = checked;
                })} label={'신랑 아버지'}/>
                {moneyInfo.groomFatherToggle && (
                    <>
                        <Row $gap={12}>
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
                        </Row>
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
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Checkbox checked={moneyInfo.groomMotherToggle} OnChange={checked => update(draft => {
                    draft.moneyInfo.groomMotherToggle = checked;
                })} label={'신랑 어머니'}/>
                {moneyInfo.groomMotherToggle && (
                    <>
                        <Row $gap={12}>
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
                        </Row>
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
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Checkbox checked={moneyInfo.brideFatherToggle} OnChange={checked => update(draft => {
                    draft.moneyInfo.brideFatherToggle = checked;
                })} label={'신부 아버지'}/>
                {moneyInfo.brideFatherToggle && (
                    <>
                        <Row $gap={12}>
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
                        </Row>
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
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Checkbox checked={moneyInfo.brideMotherToggle} OnChange={checked => update(draft => {
                    draft.moneyInfo.brideMotherToggle = checked;
                })} label={'신부 어머니'}/>
                {moneyInfo.brideMotherToggle && (
                    <>
                        <Row $gap={12}>
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
                        </Row>
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
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorMoney;
