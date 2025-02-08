import React, {ComponentProps, ForwardedRef, forwardRef} from 'react';
import Icon, {IconType} from "@designsystem/foundation/icon";
import styled, {css} from "styled-components";
import CustomStyle from "@designsystem/component/CustomStyle";

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
        <S.wrapper ref={ref} {...props}>
            <CustomStyle $customStyle={css`
                display: flex;
                position: absolute;
                top: 0;
                right: 0;
                background: var(--g-100);
                border-radius: 20px;
                padding: 6px;
                cursor: pointer;
                opacity: 0.8;
            `}>
                <Icon
                    iconType={IconType.CrossLine}
                    size={16}
                    customStyle={css`
                        fill: var(--g-600);
                    `}
                    onClick={dismiss}
                />
            </CustomStyle>
            {children}
        </S.wrapper>
    );
}

const S = {
    wrapper: styled.div`
        position: relative;
    `
}

export default forwardRef(AddDismissButton);