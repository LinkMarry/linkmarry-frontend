import React, {type ComponentProps, type ForwardedRef, forwardRef} from 'react';
import Icon from "~/userinterface/foundation/Icon";
import {css} from "@linaria/core";
import View from "~/userinterface/core/View.tsx";

interface Props extends ComponentProps<'div'> {
    dismiss: () => void;
    children?: React.ReactNode;
}

function AddRemoveButton(
    {
        dismiss,
        children,
        ...props
    }: Props,
    ref?: ForwardedRef<HTMLDivElement>
) {
    return (
        <View ref={ref} ui={css`
            display: flex;
            flex-direction: column;
            position: relative;
        `} {...props}>
            <Icon
                iconType={'CrossLine'}
                size={20}
                ui={css`
                    fill: white;
                    display: flex;
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: rgba(0, 0, 0, 0.2);
                    cursor: pointer;
                `}
                onClick={dismiss}
            />
            {children}
        </View>
    );
}

export default forwardRef(AddRemoveButton);
