import {View} from "~/components";
import {type ReactNode, useEffect, useRef} from "react";

import {fadeInAnimationStyle} from "~/style/animation";
import {css, cx, type LinariaClassName} from "@linaria/core";

interface BasePopoverProps {
    ui?: LinariaClassName;
    dismiss: () => void;
    children?: ReactNode;
}

export const BasePopover = ({ui, dismiss, children}: BasePopoverProps) => {
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
        };
    }, [dismiss]);

    return (
        <View
            ref={rootRef}
            ui={cx(
                css`
                    ${fadeInAnimationStyle};
                `,
                ui,
            )}
        >
            {children}
        </View>
    );
};
