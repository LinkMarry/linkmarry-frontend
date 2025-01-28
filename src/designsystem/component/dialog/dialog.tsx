import React from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import Button, {ButtonProps} from "@designsystem/component/button";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";

interface DialogProps {
    title: string;
    description?: string;
    dismiss: () => void;
    dismissButtonProps: ButtonProps;
    confirmButtonProps: ButtonProps;
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
                    <Text type={'h4'} style={{textAlign: 'center', whiteSpace: 'pre-wrap'}}>{title}</Text>
                    <Text type={'p3'} color={colors.g500} style={{textAlign: 'center'}}>{description}</Text>
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
        background-color: ${colors.white};
        ${applyBaseDialogContent()};
    `,
    buttonWrapper: styled(Row)`
        & > * {
            flex: 1;
        }
    `
}

export default Dialog;