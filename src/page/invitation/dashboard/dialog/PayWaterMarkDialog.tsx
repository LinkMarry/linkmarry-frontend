import React from 'react';
import styled from "styled-components";
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import {Column} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import TextField from "@designsystem/component/textField";
import Button from "@designsystem/component/button";
import colors from "@designsystem/foundation/colors";
import makeText from "@designsystem/foundation/text/textType";
import Spacer from "@designsystem/component/spacer";
import Icon, {IconType} from "@designsystem/foundation/icon";

interface PayWaterMarkDialogProps {
    url: string;
    dismiss: () => void;
}

function PayWaterMarkDialog(
    {
        url,
        dismiss
    }: PayWaterMarkDialogProps
) {
    const removeWaterMark = async () => {
        // await weddingApi.removeWatermark()
    };

    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column padding={'88px 116px'} $alignItems={'stretch'}>
                    <Column $alignItems={'center'}>
                        <Text type={'h6'}>워터마크 제거 횟수 충전하기</Text>
                        <Text type={'p5'} color={colors.g400} style={{textAlign: 'center'}}>
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
                            <TextField placeholder={'- 없이 입력'}/>
                        </Column>
                    </Column>
                    <Spacer h={113}/>
                    <Column gap={20} $alignItems={'stretch'}>
                        <Text type={'p5'} color={colors.g300} style={{wordBreak: 'break-all', textAlign: 'center'}}>워터마크
                            제거시
                            링크메리 이용약관에<br/>
                            동의하신걸로 처리됩니다.</Text>
                        <Button text={'워터마크 제거'} style={{alignSelf: 'stretch'}} onClick={removeWaterMark}/>
                    </Column>
                </Column>
                <Icon
                    tint={colors.g300} size={20} type={IconType.CrossLine}
                    style={{
                        position: 'absolute', right: 24, top: 24, cursor: 'pointer'
                    }}
                    onClick={dismiss}
                />
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled(Column)`
        ${applyBaseDialogContent()};
        background-color: ${colors.white};
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
        color: ${colors.white};
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `
}

export default PayWaterMarkDialog;