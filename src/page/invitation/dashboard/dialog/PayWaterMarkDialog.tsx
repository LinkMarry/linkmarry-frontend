import React, {useRef} from 'react';
import styled, {css} from "styled-components";
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import {Column} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import TextField from "@designsystem/component/TextField";
import Button from "@designsystem/component/Button";
import makeText from "@designsystem/foundation/text/TextType";
import Spacer from "@designsystem/component/Spacer";
import Icon, {IconType} from "@designsystem/foundation/icon";
import naverApi from "@remote/api/NaverApi";
import {useNavigate} from "react-router-dom";
import {isAxiosError} from "axios";

interface PayWaterMarkDialogProps {
    dismiss: () => void;
}

function PayWaterMarkDialog(
    {
        dismiss
    }: PayWaterMarkDialogProps
) {
    const telRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const removeWaterMark = async () => {
        const tel = telRef.current;
        if (!tel || !tel.value) return;

        try {
            await naverApi.order(tel.value);
            alert('충전 완료');
            navigate(0);
        } catch (error) {
            console.error(error);
            if (isAxiosError(error) && error.response && error.status === 404) {
                alert(`충전 실패 - ${error.response.data.message}`);
            } else {
                alert('충전 실패 - 고객센터에 문의하세요');
            }
        }
    };

    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column $alignItems={'stretch'} $customStyle={css`
                    padding: 88px 116px;
                `}>
                    <Column $alignItems={'center'}>
                        <Text type={'h6'}>워터마크 제거 횟수 충전하기</Text>
                        <Text type={'p5'} customStyle={css`
                            color: var(--g-400);
                            text-align: center;
                        `}>
                            구매한 횟수만큼 청첩장 워터마크 제거 횟수가 충전됩니다.
                        </Text>
                    </Column>
                    <Spacer h={46}/>
                    <Column $alignItems={'stretch'} gap={20}>
                        <Column gap={8} $alignItems={'stretch'}>
                            <Text type={'caption1'}>먼저 구매를 진행해주세요.</Text>
                            <S.naverButton
                                onClick={() => window.open('https://smartstore.naver.com/linkmarry/products/11252570872')}>
                                <img src="/naver.svg" alt=""/>
                                구매하러 가기
                            </S.naverButton>
                        </Column>
                        <Column gap={8} $alignItems={'stretch'}>
                            <Text type={'caption1'}>구매한 네이버 계정의 휴대전화 번호를 입력해주세요.</Text>
                            <TextField ref={telRef} placeholder={'- 없이 입력'}/>
                        </Column>
                    </Column>
                    <Spacer h={113}/>
                    <Column gap={20} $alignItems={'stretch'}>
                        <Text type={'p5'} customStyle={css`
                            color: var(--g-300);
                            word-break: break-all;
                            text-align: center;
                        `}>워터마크
                            제거시
                            링크메리 이용약관에<br/>
                            동의하신걸로 처리됩니다.</Text>
                        <Button text={'워터마크 제거'} customStyle={css`
                            align-self: stretch;
                        `} onClick={removeWaterMark}/>
                    </Column>
                </Column>
                <Icon
                    iconType={IconType.CrossLine} size={20}
                    customStyle={css`
                        position: absolute;
                        right: 24px;
                        top: 24px;
                        cursor: pointer;
                        fill: var(--g-300);
                    `}
                    onClick={dismiss}
                />
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled(Column)`
        ${applyBaseDialogContent()};
        background: white;
        border-radius: 12px;
        max-width: 520px;
        width: 80vw;
    `,
    naverButton: styled.div`
        display: flex;
        ${makeText('p4')};
        background-color: #3FC911;
        height: 44px;
        gap: 15px;
        border-radius: 8px;
        color: white;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `
}

export default PayWaterMarkDialog;