import React from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import Checkbox from "@designsystem/component/checkbox";
import colors from "@designsystem/foundation/colors";
import makeText from "@designsystem/foundation/text/textType";
import MoneyInfo from "@remote/value/MoneyInfo";

interface MoneyInfoOptionProps {
    moneyInfo: MoneyInfo;
    onChange: (moneyInfo: MoneyInfo) => void;
}

function MoneyInfoOption(
    {
        moneyInfo,
        onChange
    }: MoneyInfoOptionProps
) {
    return (
        <S.container>
            <Column gap={32} flex={1}>
                <Column gap={20}>
                    <Row gap={12}>
                        <OptionLabel label={'제목'}/>
                        <OptionTextField fieldProps={{
                            value: moneyInfo.infoTitle,
                            onChange: event => onChange({...moneyInfo, infoTitle: event.target.value})
                        }} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'설명'}/>
                        <OptionTextField fieldProps={{
                            value: moneyInfo.infoContent,
                            onChange: event => onChange({...moneyInfo, infoContent: event.target.value})
                        }} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'계좌연동'} style={{alignSelf: 'flex-start'}}/>
                        <Column gap={8}>
                            <Checkbox
                                label={'카카오페이'}
                                checked={moneyInfo.kakaoStatus}
                                onChange={event => onChange({...moneyInfo, kakaoStatus: event})}
                            />
                            {moneyInfo.kakaoStatus && <S.kakaoPayHelper>카카오페이 연동하는 법</S.kakaoPayHelper>}
                        </Column>
                    </Row>
                </Column>
                <HorizontalDivider/>
                <Column gap={32}>
                    <Column gap={40}>
                        <Row gap={12}>
                            <OptionLabel label={'신랑'} style={{alignSelf: 'flex-start'}}/>
                            <Column gap={16}>
                                <Row gap={8}>
                                    <OptionTextField fieldProps={{
                                        value: moneyInfo.groomNameMoneyInfo,
                                        onChange: event => onChange({
                                            ...moneyInfo,
                                            groomNameMoneyInfo: event.target.value
                                        })
                                    }} width={128} placeholder={'예금주'}/>
                                    <OptionTextField fieldProps={{
                                        value: moneyInfo.groomBankName,
                                        onChange: event => onChange({...moneyInfo, groomBankName: event.target.value})
                                    }} width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField fieldProps={{
                                    value: moneyInfo.groomBankNumber,
                                    onChange: event => onChange({...moneyInfo, groomBankNumber: event.target.value})
                                }} width={264} placeholder={'계좌번호'}/>
                                <OptionTextField
                                    fieldProps={{
                                        value: moneyInfo.groomKakaoUrl,
                                        onChange: event => onChange({...moneyInfo, groomKakaoUrl: event.target.value})
                                    }}
                                    width={264}
                                    placeholder={'카카오페이 송금 링크'}
                                    leadingContent={
                                        <img
                                            width={20}
                                            height={20}
                                            src={'/kakao.svg'}
                                            alt={'kakao logo'}
                                        />
                                    }
                                    style={{display: moneyInfo.kakaoStatus ? undefined : 'none'}}
                                />
                            </Column>
                        </Row>
                        <Row gap={12}>
                            <OptionLabel label={'신랑\n아버지'} style={{alignSelf: 'flex-start', whiteSpace: 'pre-line'}}/>
                            <Column gap={16}>
                                <Row gap={8}>
                                    <OptionTextField fieldProps={{
                                        value: moneyInfo.groomFatherNameMoneyInfo,
                                        onChange: event => onChange({
                                            ...moneyInfo,
                                            groomFatherNameMoneyInfo: event.target.value
                                        })
                                    }} width={128} placeholder={'예금주'}/>
                                    <OptionTextField width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField fieldProps={{
                                    value: moneyInfo.groomFatherBankNumber,
                                    onChange: event => onChange({
                                        ...moneyInfo,
                                        groomFatherBankNumber: event.target.value
                                    })
                                }} width={264} placeholder={'계좌번호'}/>
                                <OptionTextField
                                    fieldProps={{
                                        value: moneyInfo.groomFatherKakaoUrl,
                                        onChange: event => onChange({
                                            ...moneyInfo,
                                            groomFatherKakaoUrl: event.target.value
                                        })
                                    }}
                                    placeholder={'카카오페이 송금 링크'}
                                    width={264}
                                    leadingContent={
                                        <img
                                            width={20}
                                            height={20}
                                            src={'/kakao.svg'}
                                            alt={'kakao logo'}
                                        />
                                    }
                                    style={{display: moneyInfo.kakaoStatus ? undefined : 'none'}}
                                />
                            </Column>
                        </Row>
                        <Row gap={12}>
                            <OptionLabel label={'신랑\n어머니'} style={{alignSelf: 'flex-start', whiteSpace: 'pre-line'}}/>
                            <Column gap={16}>
                                <Row gap={8}>
                                    <OptionTextField fieldProps={{
                                        value: moneyInfo.groomMotherNameMoneyInfo,
                                        onChange: event => onChange({
                                            ...moneyInfo,
                                            groomMotherNameMoneyInfo: event.target.value
                                        })
                                    }} width={128} placeholder={'예금주'}/>
                                    <OptionTextField fieldProps={{
                                        value: moneyInfo.groomMotherBankName,
                                        onChange: event => onChange({
                                            ...moneyInfo,
                                            groomMotherBankName: event.target.value
                                        })
                                    }} width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField fieldProps={{
                                    value: moneyInfo.groomMotherBankNumber,
                                    onChange: event => onChange({
                                        ...moneyInfo,
                                        groomMotherBankNumber: event.target.value
                                    })
                                }} width={264} placeholder={'계좌번호'}/>
                                <OptionTextField
                                    fieldProps={{
                                        value: moneyInfo.groomMotherKakaoUrl,
                                        onChange: event => onChange({
                                            ...moneyInfo,
                                            groomMotherKakaoUrl: event.target.value
                                        })
                                    }}
                                    placeholder={'카카오페이 송금 링크'}
                                    width={264}
                                    leadingContent={
                                        <img
                                            width={20}
                                            height={20}
                                            src={'/kakao.svg'}
                                            alt={'kakao logo'}
                                        />
                                    }
                                    style={{display: moneyInfo.kakaoStatus ? undefined : 'none'}}
                                />
                            </Column>
                        </Row>
                    </Column>
                    <HorizontalDivider/>
                    <Column gap={40}>
                        <Row gap={12}>
                            <OptionLabel label={'신부'} style={{alignSelf: 'flex-start'}}/>
                            <Column gap={16}>
                                <Row gap={8}>
                                    <OptionTextField fieldProps={{
                                        value: moneyInfo.brideNameMoneyInfo,
                                        onChange: event => onChange({
                                            ...moneyInfo,
                                            brideNameMoneyInfo: event.target.value
                                        })
                                    }} width={128} placeholder={'예금주'}/>
                                    <OptionTextField fieldProps={{
                                        value: moneyInfo.brideBankName,
                                        onChange: event => onChange({
                                            ...moneyInfo,
                                            brideBankName: event.target.value
                                        })
                                    }} width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField fieldProps={{
                                    value: moneyInfo.brideBankNumber,
                                    onChange: event => onChange({
                                        ...moneyInfo,
                                        brideBankNumber: event.target.value
                                    })
                                }} width={264} placeholder={'계좌번호'}/>
                                <OptionTextField
                                    fieldProps={{
                                        value: moneyInfo.brideKakaoUrl,
                                        onChange: event => onChange({...moneyInfo, brideKakaoUrl: event.target.value})
                                    }}
                                    placeholder={'카카오페이 송금 링크'}
                                    width={264}
                                    leadingContent={
                                        <img
                                            width={20}
                                            height={20}
                                            src={'/kakao.svg'}
                                            alt={'kakao logo'}
                                        />
                                    }
                                    style={{display: moneyInfo.kakaoStatus ? undefined : 'none'}}
                                />
                            </Column>
                        </Row>
                        <Row gap={12}>
                            <OptionLabel label={'신부\n아버지'} style={{alignSelf: 'flex-start', whiteSpace: 'pre-line'}}/>
                            <Column gap={16}>
                                <Row gap={8}>
                                    <OptionTextField fieldProps={{
                                        value: moneyInfo.brideFatherNameMoneyInfo,
                                        onChange: event => onChange({
                                            ...moneyInfo,
                                            brideFatherNameMoneyInfo: event.target.value
                                        })
                                    }} width={128} placeholder={'예금주'}/>
                                    <OptionTextField fieldProps={{
                                        value: moneyInfo.brideFatherBankName,
                                        onChange: event => onChange({
                                            ...moneyInfo,
                                            brideFatherBankName: event.target.value
                                        })
                                    }} width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField fieldProps={{
                                    value: moneyInfo.brideFatherBankNumber,
                                    onChange: event => onChange({
                                        ...moneyInfo,
                                        brideFatherBankNumber: event.target.value
                                    })
                                }} width={264} placeholder={'계좌번호'}/>
                                <OptionTextField
                                    fieldProps={{
                                        value: moneyInfo.brideFatherKakaoUrl,
                                        onChange: event => onChange({
                                            ...moneyInfo,
                                            brideFatherKakaoUrl: event.target.value
                                        })
                                    }}
                                    placeholder={'카카오페이 송금 링크'}
                                    width={264}
                                    leadingContent={
                                        <img
                                            width={20}
                                            height={20}
                                            src={'/kakao.svg'}
                                            alt={'kakao logo'}
                                        />
                                    }
                                    style={{display: moneyInfo.kakaoStatus ? undefined : 'none'}}
                                />
                            </Column>
                        </Row>
                        <Row gap={12}>
                            <OptionLabel label={'신부\n어머니'} style={{alignSelf: 'flex-start', whiteSpace: 'pre-line'}}/>
                            <Column gap={16}>
                                <Row gap={8}>
                                    <OptionTextField fieldProps={{
                                        value: moneyInfo.brideMotherNameMoneyInfo,
                                        onChange: event => onChange({
                                            ...moneyInfo,
                                            brideMotherNameMoneyInfo: event.target.value
                                        })
                                    }} width={128} placeholder={'예금주'}/>
                                    <OptionTextField fieldProps={{
                                        value: moneyInfo.brideMotherBankName,
                                        onChange: event => onChange({
                                            ...moneyInfo,
                                            brideMotherBankName: event.target.value
                                        })
                                    }} width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField fieldProps={{
                                    value: moneyInfo.brideMotherBankNumber,
                                    onChange: event => onChange({
                                        ...moneyInfo,
                                        brideMotherBankNumber: event.target.value
                                    })
                                }} width={264} placeholder={'계좌번호'}/>
                                <OptionTextField
                                    fieldProps={{
                                        value: moneyInfo.brideMotherKakaoUrl,
                                        onChange: event => onChange({...moneyInfo, brideMotherKakaoUrl: event.target.value})
                                    }}
                                    placeholder={'카카오페이 송금 링크'}
                                    width={264}
                                    leadingContent={
                                        <img
                                            width={20}
                                            height={20}
                                            src={'/kakao.svg'}
                                            alt={'kakao logo'}
                                        />
                                    }
                                    style={{display: moneyInfo.kakaoStatus ? undefined : 'none'}}
                                />
                            </Column>
                        </Row>
                    </Column>
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
    kakaoPayHelper: styled.span`
        ${makeText('btn1')};
        color: ${colors.g300};
        text-decoration: underline;
        cursor: pointer;
    `
}

export default MoneyInfoOption;