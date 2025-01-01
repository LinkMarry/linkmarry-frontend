import React, {RefObject, useState} from 'react';
import styled from "styled-components";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import HorizontalDivider from "../../../../designsystem/component/horizontalDivider";
import OptionLabel from "../component/OptionLabel";
import OptionTextField from "../component/OptionTextField";
import Checkbox, {CheckboxRef} from "../../../../designsystem/component/checkbox";
import colors from "../../../../designsystem/foundation/colors";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";

interface MoneyInfoOptionProps {
    refs: {
        infoTitleRef: RefObject<HTMLInputElement>
        infoContentRef: RefObject<HTMLInputElement>
        kakaoStatusRef: RefObject<CheckboxRef>
        groomNameMoneyInfoRef: RefObject<HTMLInputElement>
        groomBankNameRef: RefObject<HTMLInputElement>
        groomBankNumberRef: RefObject<HTMLInputElement>
        groomKakaoUrlRef: RefObject<HTMLInputElement>
        groomFatherNameMoneyInfoRef: RefObject<HTMLInputElement>
        groomFatherBankNameRef: RefObject<HTMLInputElement>
        groomFatherBankNumberRef: RefObject<HTMLInputElement>
        groomFatherKakaoUrlRef: RefObject<HTMLInputElement>
        groomMotherNameMoneyInfoRef: RefObject<HTMLInputElement>
        groomMotherBankNameRef: RefObject<HTMLInputElement>
        groomMotherBankNumberRef: RefObject<HTMLInputElement>
        groomMotherKakaoUrlRef: RefObject<HTMLInputElement>
        brideNameMoneyInfoRef: RefObject<HTMLInputElement>
        brideBankNameRef: RefObject<HTMLInputElement>
        brideBankNumberRef: RefObject<HTMLInputElement>
        brideKakaoUrlRef: RefObject<HTMLInputElement>
        brideFatherNameMoneyInfoRef: RefObject<HTMLInputElement>
        brideFatherBankNameRef: RefObject<HTMLInputElement>
        brideFatherBankNumberRef: RefObject<HTMLInputElement>
        brideFatherKakaoUrlRef: RefObject<HTMLInputElement>
        brideMotherNameMoneyInfoRef: RefObject<HTMLInputElement>
        brideMotherBankNameRef: RefObject<HTMLInputElement>
        brideMotherBankNumberRef: RefObject<HTMLInputElement>
        brideMotherKakaoUrlRef: RefObject<HTMLInputElement>
    }
}

function MoneyInfoOption(
    {
        refs: {
            infoTitleRef,
            infoContentRef,
            kakaoStatusRef,
            groomNameMoneyInfoRef,
            groomBankNameRef,
            groomBankNumberRef,
            groomKakaoUrlRef,
            groomFatherNameMoneyInfoRef,
            groomFatherBankNameRef,
            groomFatherBankNumberRef,
            groomFatherKakaoUrlRef,
            groomMotherNameMoneyInfoRef,
            groomMotherBankNameRef,
            groomMotherBankNumberRef,
            groomMotherKakaoUrlRef,
            brideNameMoneyInfoRef,
            brideBankNameRef,
            brideBankNumberRef,
            brideKakaoUrlRef,
            brideFatherNameMoneyInfoRef,
            brideFatherBankNameRef,
            brideFatherBankNumberRef,
            brideFatherKakaoUrlRef,
            brideMotherNameMoneyInfoRef,
            brideMotherBankNameRef,
            brideMotherBankNumberRef,
            brideMotherKakaoUrlRef,
        }
    }: MoneyInfoOptionProps
) {
    const [kakaoStatus, setKakaoStatus] = useState(false);

    return (
        <S.container>
            <Column gap={32} flex={1}>
                <Column gap={20}>
                    <Row gap={12}>
                        <OptionLabel label={'제목'}/>
                        <OptionTextField ref={infoTitleRef} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'설명'}/>
                        <OptionTextField ref={infoContentRef} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'계좌연동'} style={{alignSelf: 'flex-start'}}/>
                        <Column gap={8}>
                            <Checkbox
                                label={'카카오페이'}
                                ref={kakaoStatusRef}
                                checked={kakaoStatus}
                                onChange={() => {
                                    setKakaoStatus(i => !i);
                                }}
                            />
                            {kakaoStatus && <S.kakaoPayHelper>카카오페이 연동하는 법</S.kakaoPayHelper>}
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
                                    <OptionTextField ref={groomNameMoneyInfoRef} width={128} placeholder={'예금주'}/>
                                    <OptionTextField ref={groomBankNameRef} width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField ref={groomBankNumberRef} width={264} placeholder={'계좌번호'}/>
                                {kakaoStatus && (
                                    <OptionTextField
                                        ref={groomKakaoUrlRef}
                                        width={264}
                                        placeholder={'카카오페이 송금 링크'}
                                        leadingContent={
                                            <img
                                                width={20}
                                                height={20}
                                                src={'kakao.svg'}
                                                alt={'kakao logo'}
                                            />
                                        }
                                    />
                                )}
                            </Column>
                        </Row>
                        <Row gap={12}>
                            <OptionLabel label={'신랑\n아버지'} style={{alignSelf: 'flex-start', whiteSpace: 'pre-line'}}/>
                            <Column gap={16}>
                                <Row gap={8}>
                                    <OptionTextField ref={groomFatherNameMoneyInfoRef} width={128} placeholder={'예금주'}/>
                                    <OptionTextField ref={groomFatherBankNameRef} width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField ref={groomFatherBankNumberRef} width={264} placeholder={'계좌번호'}/>
                                {kakaoStatus && (
                                    <OptionTextField
                                        ref={groomFatherKakaoUrlRef}
                                        placeholder={'카카오페이 송금 링크'}
                                        width={264}
                                        leadingContent={
                                            <img
                                                width={20}
                                                height={20}
                                                src={'kakao.svg'}
                                                alt={'kakao logo'}
                                            />
                                        }
                                    />
                                )}
                            </Column>
                        </Row>
                        <Row gap={12}>
                            <OptionLabel label={'신랑\n어머니'} style={{alignSelf: 'flex-start', whiteSpace: 'pre-line'}}/>
                            <Column gap={16}>
                                <Row gap={8}>
                                    <OptionTextField ref={groomMotherNameMoneyInfoRef} width={128} placeholder={'예금주'}/>
                                    <OptionTextField ref={groomMotherBankNameRef} width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField ref={groomMotherBankNumberRef} width={264} placeholder={'계좌번호'}/>
                                {kakaoStatus && (
                                    <OptionTextField
                                        ref={groomMotherKakaoUrlRef}
                                        placeholder={'카카오페이 송금 링크'}
                                        width={264}
                                        leadingContent={
                                            <img
                                                width={20}
                                                height={20}
                                                src={'kakao.svg'}
                                                alt={'kakao logo'}
                                            />
                                        }
                                    />
                                )}
                            </Column>
                        </Row>
                    </Column>
                    <HorizontalDivider/>
                    <Column gap={40}>
                        <Row gap={12}>
                            <OptionLabel label={'신부'} style={{alignSelf: 'flex-start'}}/>
                            <Column gap={16}>
                                <Row gap={8}>
                                    <OptionTextField ref={brideNameMoneyInfoRef} width={128} placeholder={'예금주'}/>
                                    <OptionTextField ref={brideBankNameRef} width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField ref={brideBankNumberRef} width={264} placeholder={'계좌번호'}/>
                                {kakaoStatus && (
                                    <OptionTextField
                                        ref={brideKakaoUrlRef}
                                        placeholder={'카카오페이 송금 링크'}
                                        width={264}
                                        leadingContent={
                                            <img
                                                width={20}
                                                height={20}
                                                src={'kakao.svg'}
                                                alt={'kakao logo'}
                                            />
                                        }
                                    />
                                )}
                            </Column>
                        </Row>
                        <Row gap={12}>
                            <OptionLabel label={'신부\n아버지'} style={{alignSelf: 'flex-start', whiteSpace: 'pre-line'}}/>
                            <Column gap={16}>
                                <Row gap={8}>
                                    <OptionTextField ref={brideFatherNameMoneyInfoRef} width={128} placeholder={'예금주'}/>
                                    <OptionTextField ref={brideFatherBankNameRef} width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField ref={brideFatherBankNumberRef} width={264} placeholder={'계좌번호'}/>
                                {kakaoStatus && (
                                    <OptionTextField
                                        ref={brideFatherKakaoUrlRef}
                                        placeholder={'카카오페이 송금 링크'}
                                        width={264}
                                        leadingContent={
                                            <img
                                                width={20}
                                                height={20}
                                                src={'kakao.svg'}
                                                alt={'kakao logo'}
                                            />
                                        }
                                    />
                                )}
                            </Column>
                        </Row>
                        <Row gap={12}>
                            <OptionLabel label={'신부\n어머니'} style={{alignSelf: 'flex-start', whiteSpace: 'pre-line'}}/>
                            <Column gap={16}>
                                <Row gap={8}>
                                    <OptionTextField ref={brideMotherNameMoneyInfoRef} width={128} placeholder={'예금주'}/>
                                    <OptionTextField ref={brideMotherBankNameRef} width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField width={264} placeholder={'계좌번호'}/>
                                {kakaoStatus && (
                                    <OptionTextField
                                        ref={brideMotherKakaoUrlRef}
                                        placeholder={'카카오페이 송금 링크'}
                                        width={264}
                                        leadingContent={
                                            <img
                                                width={20}
                                                height={20}
                                                src={'kakao.svg'}
                                                alt={'kakao logo'}
                                            />
                                        }
                                    />
                                )}
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
        ${makeText(TextType.btn1)};
        color: ${colors.g300};
        text-decoration: underline;
        cursor: pointer;
    `
}

export default MoneyInfoOption;