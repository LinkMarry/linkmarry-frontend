import React, {ReactNode, useEffect, useRef} from 'react';
import View from "@designsystem/core/View";
import fadeInAnimationStyle from "@designsystem/animation/fadeInAnimationStyle";
import {css, RuleSet} from "styled-components";

interface Props {
    ui?: RuleSet;
    dismiss: () => void;
    children?: ReactNode;
}

const BasePopover = (
    {
        ui,
        dismiss,
        children
    }: Props
) => {
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (rootRef.current && !(event.target instanceof Node && rootRef.current.contains(event.target))) {
                dismiss();
            }
        };
        document.addEventListener("mouseup", handleOutsideClick);
        return () => {
            document.removeEventListener("mouseup", handleOutsideClick);
        }
    }, []);

    return (
        <View ref={rootRef} $ui={css`
            ${fadeInAnimationStyle};
            ${ui};
        `}>
            {children}
        </View>
    );
};

export default BasePopover;
