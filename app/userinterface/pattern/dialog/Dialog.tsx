import {type ComponentProps, type ReactNode} from 'react';
import BaseDialog from "~/userinterface/pattern/dialog/BaseDialog";
import Button from "~/userinterface/component/Button";
import Text from "~/userinterface/component/Text";
import {baseDialogContentStyle} from "~/userinterface/pattern/dialog/baseDialogContentStyle.ts";
import {css, cx, type LinariaClassName} from "@linaria/core";
import View from "~/userinterface/core/View.tsx";

interface DialogProps {
    title: string;
    description?: string;
    dismiss: () => void;
    dismissButtonProps?: ComponentProps<typeof Button>;
    confirmButtonProps: ComponentProps<typeof Button>;
    ui?: LinariaClassName;
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
            <View ui={cx(
                css`
                    width: 90vw;
                    max-width: 380px;
                    padding: 48px 36px 36px 36px;
                    gap: 32px;
                    border-radius: 28px;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.03);
                    background: white;
                `,
                baseDialogContentStyle
            )}>
                <View ui={css`
                    gap: 4px;
                `}>
                    <Text type={'h5'} bold={true} ui={css`
                        text-align: center;
                        white-space: pre-wrap;
                    `}>{title}</Text>
                    <Text type={'p2'} ui={css`
                        color: var(--g-500);
                        text-align: center;
                    `}>{description}</Text>
                </View>
                {children}
                <View ui={css`
                    flex-direction: row !important;
                    gap: 12px;
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
                </View>
            </View>
        </BaseDialog>
    );
}

export default Dialog;
