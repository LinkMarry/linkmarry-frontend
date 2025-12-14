import React, {useEffect, useRef} from "react";
import fadeInAnimationStyle from "~/userinterface/animation/fadeInAnimationStyle";
import View from "~/userinterface/core/View.tsx";
import {css, cx, type LinariaClassName} from "@linaria/core";

interface BaseDialogProps {
    ui?: LinariaClassName;
    dismiss: () => void;
    children?: React.ReactNode;
}

export default function BaseDialog({ui, dismiss, children}: BaseDialogProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    return (
        <View as={'dialog'} ref={dialogRef}
              ui={cx(
                  css`
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                      width: 100vw;
                      min-width: 100vw;
                      height: 100dvh;
                      min-height: 100dvh;
                      border: none;
                      outline: none;
                      background: none;
                  `,
                  'override-font',
                  fadeInAnimationStyle,
                  ui
              )}
        >
            {children}
            <View ui={css`
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                position: fixed;
                background: black;
                opacity: 0.5;
            `} onClick={() => {
                dismiss();
            }}/>
        </View>
    );
}