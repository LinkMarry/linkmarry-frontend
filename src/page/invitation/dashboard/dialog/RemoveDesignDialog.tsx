import React from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import Button from "@designsystem/component/button";
import colors from "@designsystem/foundation/colors";
import Text from "@designsystem/component/text";
import {TextType} from "@designsystem/foundation/text/textType";

interface RemoveDesignDialogProps {
    dismiss: () => void;
    confirm: () => void;
}

function RemoveDesignDialog(
    {
        dismiss,
        confirm
    }: RemoveDesignDialogProps
) {
    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column gap={46} $alignItems={'center'}>
                    <Text text={'정말 삭제하시겠습니까?'} type={TextType.p1} color={colors.black}/>
                    <Row gap={16}>
                        <Button text={'취소'} role={'assistive'} onClick={dismiss}/>
                        <Button text={'삭제'} role={'assistive'} onClick={confirm}/>
                    </Row>
                </Column>
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled.div`
        ${applyBaseDialogContent()};
        width: 520px;
        padding: 88px 116px;
        justify-content: center;
        background: ${colors.white};
        border-radius: 12px;
    `
}

export default RemoveDesignDialog;