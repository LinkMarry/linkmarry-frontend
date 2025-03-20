import styled, {css, RuleSet} from "styled-components";
import React, {useEffect, useRef} from "react";
import fadeInAnimationStyle from "@designsystem/animation/fadeInAnimationStyle";
import popupAnimationStyle from "@designsystem/animation/popupAnimationStyle";
import {hideScrollBar} from "@util/css.util";
import {Row} from "@designsystem/core/FlexLayout";

interface BaseDialogProps {
    children?: React.ReactNode;
    ui?: RuleSet;
    dismiss: () => void;
}

export default function BaseDialog(
    {
        children,
        ui,
        dismiss
    }: BaseDialogProps
) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    return (
        <Row as={'dialog'} className={'override-font'} $justifyContent={'center'} $alignItems={'center'} ref={dialogRef} $ui={css`
            width: 100vw;
            min-width: 100vw;
            height: 100dvh;
            min-height: 100dvh;
            border: none;
            outline: none;
            background: none;
            ${fadeInAnimationStyle};
            ${ui};
        `}>
            {children}
            <S.backdrop onClick={() => {
                dismiss();
            }}/>
        </Row>
    );
}

const S = {
    backdrop: styled.div`
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: fixed;
        background: black;
        opacity: 0.5;
    `,
}

export const applyBaseDialogContent = () => css`
    display: flex;
    position: fixed;
    z-index: 3;
    ${popupAnimationStyle};
    overflow: auto;
    ${hideScrollBar};
`;
