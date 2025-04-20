import {css, RuleSet} from "styled-components";
import React, {useEffect, useRef} from "react";
import fadeInAnimationStyle from "@src/userinterface/animation/fadeInAnimationStyle";
import popupAnimationStyle from "@src/userinterface/animation/popupAnimationStyle";
import {hideScrollBar} from "@src/userinterface/css.util";
import {Row} from "@src/userinterface/core/FlexLayout";
import View from "@src/userinterface/core/View";

interface BaseDialogProps {
    ui?: RuleSet;
    dismiss: () => void;
    children?: React.ReactNode;
}

export default function BaseDialog({ui, dismiss, children}: BaseDialogProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    return (
        <Row as={'dialog'} className={'override-font'} $justifyContent={'center'} $alignItems={'center'} ref={dialogRef}
             $ui={css`
                 width: 100vw;
                 min-width: 100vw;
                 height: 100dvh;
                 min-height: 100dvh;
                 border: none;
                 outline: none;
                 background: none;
                 ${fadeInAnimationStyle};
                 ${ui};
             `}
        >
            {children}
            <View $ui={css`
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
        </Row>
    );
}

export const applyBaseDialogContent = () => css`
    display: flex;
    position: fixed;
    z-index: 3;
    ${popupAnimationStyle};
    overflow: auto;
    ${hideScrollBar};
`;
