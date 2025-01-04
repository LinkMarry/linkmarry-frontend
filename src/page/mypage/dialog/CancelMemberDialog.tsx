import React from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import {TextType} from "@designsystem/foundation/text/textType";
import Button from "@designsystem/component/button";

interface CancelMemberDialogProps {
    dismiss: () => void;
}

function CancelMemberDialog(
    {
        dismiss
    }: CancelMemberDialogProps
) {
    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column gap={46} $alignItems={'center'}>
                    <Text text={'정말 탈퇴하시겠습니까?'} type={TextType.p1}/>
                    <Row gap={16}>
                        <Button text={'취소'} role={'assistive'} onClick={dismiss}/>
                        <Button text={'확인'} role={'assistive'} onClick={() => {
                            // TODO: 회원탈퇴 로직
                        }}/>
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

export default CancelMemberDialog;