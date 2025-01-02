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
}

function RemoveDesignDialog(
    {
        dismiss
    }: RemoveDesignDialogProps
) {
    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column gap={46} $alignItems={'center'}>
                    <Text text={'정말 삭제하시겠습니까?'} type={TextType.p1} color={colors.black}/>
                    <Row gap={16}>
                        <Button text={'취소'} role={'assistive'}/>
                        <Button text={'삭제'} role={'assistive'}/>
                    </Row>
                </Column>
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled.div`
        width: 520px;
        padding: 88px 116px;
        background: ${colors.white};
        border-radius: 12px;
        ${applyBaseDialogContent()};
    `
}

export default RemoveDesignDialog;