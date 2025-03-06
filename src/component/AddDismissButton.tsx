import React, {ComponentProps, ForwardedRef, forwardRef} from 'react';
import Icon, {IconType} from "@designsystem/foundation/Icon";
import {css} from "styled-components";
import CustomStyle from "@designsystem/core/CustomStyle";

interface AddDismissButtonProps extends ComponentProps<'div'> {
    dismiss: () => void;
    children?: React.ReactNode;
}

function AddDismissButton(
    {
        dismiss,
        children,
        ...props
    }: AddDismissButtonProps,
    ref: ForwardedRef<HTMLDivElement>
) {
    return (
        <CustomStyle ref={ref} css={css`
            position: relative;
        `} {...props}>
            <Icon
                iconType={IconType.CrossLine}
                size={16}
                customStyle={css`
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
        </CustomStyle>
    );
}

export default forwardRef(AddDismissButton);
