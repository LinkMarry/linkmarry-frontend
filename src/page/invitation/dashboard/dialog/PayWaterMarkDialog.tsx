import React from 'react';
import styled from "styled-components";
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import {Column} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import TextField from "@designsystem/component/textField";
import Button from "@designsystem/component/button";
import colors from "@designsystem/foundation/colors";
import makeText from "@designsystem/foundation/text/textType";

interface PayWaterMarkDialogProps {
    dismiss: () => void;
}

function PayWaterMarkDialog(
    {
        dismiss
    }: PayWaterMarkDialogProps
) {

    return (
        <BaseDialog dismiss={dismiss}>
            <S.container gap={48} padding={'88px 116px'} $alignItems={'stretch'}>
                <Column $alignItems={'center'}>
                    <Text type={'h6'}>워터마크 제거 횟수 충전하기</Text>
                    <Text type={'p5'} color={colors.g400} style={{textAlign: 'center'}}>구매한 횟수만큼 청첩장 워터마크 제거 횟수가
                        충전됩니다.</Text>
                </Column>
                <Column $alignItems={'stretch'} gap={20}>
                    <Column gap={8} $alignItems={'stretch'}>
                        <Text type={'caption1'}>먼저 구매를 진행해주세요.</Text>
                        <S.naverButton>구매하러 가기</S.naverButton>
                    </Column>
                    <Column gap={8} $alignItems={'stretch'}>
                        <Text type={'caption1'}>구매자의 휴대전화 번호를 입력해주세요.</Text>
                        <TextField placeholder={'- 업이 입력'}/>
                    </Column>
                </Column>
                <Text type={'p5'} style={{wordBreak: 'break-all', textAlign: 'center'}}>워터마크 제거시 링크메리 이용약관에<br/>
                    동의하신걸로 처리됩니다.</Text>
                <Button text={'워터마크 제거'} style={{alignSelf: 'stretch'}}/>
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
        border-radius: 8px;
        color: ${colors.white};
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `
}

export default PayWaterMarkDialog;