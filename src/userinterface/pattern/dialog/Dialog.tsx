import React, {ReactNode} from 'react';
import BaseDialog, {applyBaseDialogContent} from "@src/userinterface/pattern/dialog/BaseDialog";
import {css, RuleSet} from "styled-components";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Button, {Props} from "@src/userinterface/component/Button";
import Text from "@src/userinterface/component/Text";

interface DialogProps {
    title: string;
    description?: string;
    dismiss: () => void;
    dismissButtonProps?: Props;
    confirmButtonProps: Props;
    ui?: RuleSet;
    children?: ReactNode;
}

function Dialog(
    {
        title,
        description,
        dismiss,
        dismissButtonProps,
        confirmButtonProps,
        ui,
        children
    }: DialogProps
) {
    return (
        <BaseDialog dismiss={dismiss} ui={ui}>
            <Column $gap={32} $alignItems={'stretch'} $ui={css`
                width: 90vw;
                max-width: 380px;
                padding: 48px 36px 36px 36px;
                border-radius: 28px;
                box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.03);
                background: white;
                ${applyBaseDialogContent()};
            `}>
                <Column $gap={4} $alignItems={'stretch'}>
                    <Text type={'h5'} bold={true} ui={css`
                        text-align: center;
                        white-space: pre-wrap;
                    `}>{title}</Text>
                    <Text type={'p2'} ui={css`
                        color: var(--g-500);
                        text-align: center;
                    `}>{description}</Text>
                </Column>
                {children}
                <Row $gap={12} $ui={css`
                    & > * {
                        flex: 1;
                    }
                `}>
                    {dismissButtonProps && (
                        <Button {...{
                            buttonType: 'tonal',
                            onClick: dismiss,
                            ...dismissButtonProps
                        }}/>
                    )}
                    <Button {...confirmButtonProps}/>
                </Row>
            </Column>
        </BaseDialog>
    );
}

export default Dialog;
