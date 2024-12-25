import React, {useState} from 'react';
import styled from "styled-components";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import HorizontalDivider from "../../../../designsystem/component/horizontalDivider";
import OptionLabel from "../component/OptionLabel";
import OptionTextField from "../component/OptionTextField";
import Checkbox from "../../../../designsystem/component/checkbox";
import colors from "../../../../designsystem/foundation/colors";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";

function MoneyInfoOption() {
    const [clickedKakaoPay, setClickedKakaoPay] = useState(false);

    return (
        <S.container>
            <Column gap={32} flex={1}>
                <Column gap={20}>
                    <Row gap={12}>
                        <OptionLabel label={'제목'}/>
                        <OptionTextField width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'설명'}/>
                        <OptionTextField width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'계좌연동'} style={{alignSelf: 'flex-start'}}/>
                        <Column gap={8}>
                            <Checkbox label={'카카오페이'} checked={clickedKakaoPay} onChange={() => {
                                setClickedKakaoPay(i => !i);
                            }}/>
                            {clickedKakaoPay && (
                                <S.kakaoPayHelper>카카오페이 연동하는 법</S.kakaoPayHelper>
                            )}
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
                                    <OptionTextField width={128} placeholder={'예금주'}/>
                                    <OptionTextField width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField width={264} placeholder={'계좌번호'}/>
                                {clickedKakaoPay && (
                                    <OptionTextField width={264} placeholder={'카카오페이 송금 링크'} leadingContent={<img width={20} height={20} src={'kakao.svg'} alt={'kakao logo'}/>}/>
                                )}
                            </Column>
                        </Row>
                        <Row gap={12}>
                            <OptionLabel label={'신랑\n아버지'} style={{alignSelf: 'flex-start', whiteSpace: 'pre-line'}}/>
                            <Column gap={16}>
                                <Row gap={8}>
                                    <OptionTextField width={128} placeholder={'예금주'}/>
                                    <OptionTextField width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField width={264} placeholder={'계좌번호'}/>
                                {clickedKakaoPay && (
                                    <OptionTextField width={264} placeholder={'카카오페이 송금 링크'} leadingContent={<img width={20} height={20} src={'kakao.svg'} alt={'kakao logo'}/>}/>
                                )}
                            </Column>
                        </Row>
                        <Row gap={12}>
                            <OptionLabel label={'신랑\n어머니'} style={{alignSelf: 'flex-start', whiteSpace: 'pre-line'}}/>
                            <Column gap={16}>
                                <Row gap={8}>
                                    <OptionTextField width={128} placeholder={'예금주'}/>
                                    <OptionTextField width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField width={264} placeholder={'계좌번호'}/>
                                {clickedKakaoPay && (
                                    <OptionTextField width={264} placeholder={'카카오페이 송금 링크'} leadingContent={<img width={20} height={20} src={'kakao.svg'} alt={'kakao logo'}/>}/>
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
                                    <OptionTextField width={128} placeholder={'예금주'}/>
                                    <OptionTextField width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField width={264} placeholder={'계좌번호'}/>
                                {clickedKakaoPay && (
                                    <OptionTextField width={264} placeholder={'카카오페이 송금 링크'} leadingContent={<img width={20} height={20} src={'kakao.svg'} alt={'kakao logo'}/>}/>
                                )}
                            </Column>
                        </Row>
                        <Row gap={12}>
                            <OptionLabel label={'신부\n아버지'} style={{alignSelf: 'flex-start', whiteSpace: 'pre-line'}}/>
                            <Column gap={16}>
                                <Row gap={8}>
                                    <OptionTextField width={128} placeholder={'예금주'}/>
                                    <OptionTextField width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField width={264} placeholder={'계좌번호'}/>
                                {clickedKakaoPay && (
                                    <OptionTextField width={264} placeholder={'카카오페이 송금 링크'} leadingContent={<img width={20} height={20} src={'kakao.svg'} alt={'kakao logo'}/>}/>
                                )}
                            </Column>
                        </Row>
                        <Row gap={12}>
                            <OptionLabel label={'신부\n어머니'} style={{alignSelf: 'flex-start', whiteSpace: 'pre-line'}}/>
                            <Column gap={16}>
                                <Row gap={8}>
                                    <OptionTextField width={128} placeholder={'예금주'}/>
                                    <OptionTextField width={128} placeholder={'은행'}/>
                                </Row>
                                <OptionTextField width={264} placeholder={'계좌번호'}/>
                                {clickedKakaoPay && (
                                    <OptionTextField width={264} placeholder={'카카오페이 송금 링크'} leadingContent={<img width={20} height={20} src={'kakao.svg'} alt={'kakao logo'}/>}/>
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