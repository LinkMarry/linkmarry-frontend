import {type ReactNode, useEffect, useRef} from 'react';
import View from "~/userinterface/core/View.tsx";
import fadeInAnimationStyle from "~/userinterface/animation/fadeInAnimationStyle";
import {css, cx, type LinariaClassName} from "@linaria/core";

interface BasePopoverProps {
    ui?: LinariaClassName;
    dismiss: () => void;
    children?: ReactNode;
}

const BasePopover = (
    {
        ui,
        dismiss,
        children
    }: BasePopoverProps
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
    }, [dismiss]);

    return (
        <View ref={rootRef} ui={cx(
            css`
                ${fadeInAnimationStyle};
            `,
            ui
        )}>
            {children}
        </View>
    );
};

export default BasePopover;
