import React from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled, {css} from "styled-components";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Button, {Props} from "@designsystem/component/Button";
import Text from "@designsystem/component/Text";

interface DialogProps {
    title: string;
    description?: string;
    dismiss: () => void;
    dismissButtonProps: Props;
    confirmButtonProps: Props;
    children?: React.ReactNode;
}

function Dialog(
    {
        title,
        description,
        dismiss,
        dismissButtonProps,
        confirmButtonProps,
        children
    }: DialogProps
) {
    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column gap={4} $alignItems={'stretch'}>
                    <Text type={'h4'} customStyle={css`
                        text-align: center;
                        white-space: pre-wrap;
                    `}>{title}</Text>
                    <Text type={'p3'} customStyle={css`
                        color: var(--g-500);
                        text-align: center;
                    `}>{description}</Text>
                </Column>
                {children}
                <S.buttonWrapper gap={12}>
                    <Button {...{
                        role: 'secondary',
                        onClick: dismiss,
                        ...dismissButtonProps
                    }}/>
                    <Button {...confirmButtonProps}/>
                </S.buttonWrapper>
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        width: 90vw;
        max-width: 380px;
        gap: 32px;
        align-items: stretch;
        padding: 48px 36px 36px 36px;
        border-radius: 28px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.03);
        background: white;
        ${applyBaseDialogContent()};
    `,
    buttonWrapper: styled(Row)`
        & > * {
            flex: 1;
        }
    `
}

export default Dialog;