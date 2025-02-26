import React from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/pattern/dialog/BaseDialog";
import {css} from "styled-components";
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
            <Column gap={32} $alignItems={'stretch'} $customStyle={css`
                width: 90vw;
                max-width: 380px;
                padding: 48px 36px 36px 36px;
                border-radius: 28px;
                box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.03);
                background: white;
                ${applyBaseDialogContent()};
            `}>
                <Column gap={4} $alignItems={'stretch'}>
                    <Text type={'h5'} bold={true} customStyle={css`
                        text-align: center;
                        white-space: pre-wrap;
                    `}>{title}</Text>
                    <Text type={'p2'} customStyle={css`
                        color: var(--g-500);
                        text-align: center;
                    `}>{description}</Text>
                </Column>
                {children}
                <Row gap={12} $customStyle={css`
                    & > * {
                        flex: 1;
                    }
                `}>
                    <Button {...{
                        buttonType: 'tonal',
                        onClick: dismiss,
                        ...dismissButtonProps
                    }}/>
                    <Button {...confirmButtonProps}/>
                </Row>
            </Column>
        </BaseDialog>
    );
}

export default Dialog;