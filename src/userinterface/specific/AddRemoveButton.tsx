import React, {ComponentProps, ForwardedRef, forwardRef} from 'react';
import Icon, {IconType} from "@src/userinterface/foundation/Icon";
import {css} from "styled-components";
import View from "@src/userinterface/core/View";

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
        <View ref={ref} $ui={css`
            display: flex;
            flex-direction: column;
            position: relative;
        `} {...props}>
            <Icon
                iconType={IconType.CrossLine}
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
