import React, {useEffect, useRef} from "react";
import fadeInAnimationStyle from "~/components/core/animation/fadeInAnimationStyle.ts";
import View from "~/components/core/View.tsx";
import {css, cx, type LinariaClassName} from "@linaria/core";

interface BaseDialogProps {
    show: boolean;
    ui?: LinariaClassName;
    dismiss: () => void;
    children?: React.ReactNode;
}

export default function BaseDialog({show, ui, dismiss, children}: BaseDialogProps) {
    if (!show) return null;

    return (
        <InnerDialog ui={ui} dismiss={dismiss}>
            {children}
        </InnerDialog>
    );
}

function InnerDialog({ui, dismiss, children}: Omit<BaseDialogProps, "show">) {
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
}

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
