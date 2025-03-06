import React, {ComponentProps, ForwardedRef, forwardRef} from 'react';
import Icon, {IconType} from "@designsystem/foundation/Icon";
import {css} from "styled-components";
import Style from "@designsystem/core/Style";

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
        <Style ref={ref} css={css`
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
        </Style>
    );
}

export default forwardRef(AddRemoveButton);
