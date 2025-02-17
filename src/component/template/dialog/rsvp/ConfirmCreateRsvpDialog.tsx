import React from 'react';
import {css} from "styled-components";
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import Button from "@designsystem/component/Button";

interface ConfirmRsvpDialogProps {
    dismiss: () => void;
    onConfirm: () => void;
}

function ConfirmCreateRsvpDialog(
    {
        dismiss,
        onConfirm
    }: ConfirmRsvpDialogProps
) {
    return (
        <BaseDialog dismiss={dismiss}>
            <Column gap={48} $alignItems={'center'} $customStyle={css`
                ${applyBaseDialogContent()};
                border-radius: 12px;
                padding: 44px 36px;
                background: white;
                max-width: 388px;
                width: 90vw;
            `}>
                <Column gap={4} $alignItems={'center'}>
                    {/*<Text type={'h6'}>참석의사 전달</Text>*/}
                    <Text type={'caption1'}>참석의사 전달시 수정이 불가능합니다</Text>
                </Column>
                <Row gap={12} $alignSelf={'stretch'}>
                    <Button text={'취소'} buttonType={'outlined'} onClick={dismiss} style={{flex: 1}}/>
                    <Button text={'확인'} onClick={onConfirm} style={{flex: 1}}/>
                </Row>
            </Column>
        </BaseDialog>
    );
}

export default ConfirmCreateRsvpDialog;