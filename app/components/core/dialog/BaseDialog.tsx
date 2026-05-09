import React, {useEffect, useRef} from "react";
import {fadeInAnimationStyle} from "~/style/animation";
import View from "~/components/core/View.tsx";
import {css, cx, type LinariaClassName} from "@linaria/core";

interface BaseDialogProps {
    show: boolean;
    ui?: LinariaClassName;
    dismiss: () => void;
    children?: React.ReactNode;
}

const BaseDialog = ({show, ui, dismiss, children}: BaseDialogProps) => {
    if (!show) return null;

    return (
        <InnerDialog ui={ui} dismiss={dismiss}>
            {children}
        </InnerDialog>
    );
};

const InnerDialog = ({ui, dismiss, children}: Omit<BaseDialogProps, "show">) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog) {
            dialog.showModal();
        }
    }, []);

    return (
        <View
            as={"dialog"}
            ref={dialogRef}
            flexDirection={"row"}
            ui={cx(baseDialogStyle, "override-font", fadeInAnimationStyle, ui)}
            onClose={dismiss}
        >
            {children}
        </View>
    );
};

const baseDialogStyle = css`
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background: none;
    padding: 0;
    margin: auto;

    &::backdrop {
        background: rgba(0, 0, 0, 0.5);
    }
`;

export default BaseDialog;
