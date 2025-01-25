import React from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import colors from "@designsystem/foundation/colors";
import Button from "@designsystem/component/button";
import Text from "@designsystem/component/text";

interface RemoveWaterMarkDialogProps {
    invitation: number;
    dismiss: () => void;
    onConfirm: () => void;
}

function RemoveWaterMarkDialog(
    {
        invitation,
        dismiss,
        onConfirm
    }: RemoveWaterMarkDialogProps
) {
    return (
        <BaseDialog dismiss={dismiss}>
            <S.container $alignItems={'center'} gap={46} padding={'88px 116px'}>
                <Column gap={4} $alignItems={'center'}>
                    <Text type={'p1'}>워터마크를 제거하시겠습니까?</Text>
                    <Text type={'p3'}>남은 제거 가능 횟수: {invitation}</Text>
                </Column>
                <Row gap={16}>
                    <Button text={'취소'} role={'assistive'} onClick={dismiss}/>
                    <Button text={'삭제'} role={'assistive'} onClick={onConfirm}/>
                </Row>
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled(Column)`
        ${applyBaseDialogContent()};
        border-radius: 12px;
        background-color: ${colors.white};
    `
}

export default RemoveWaterMarkDialog;