import React, {ForwardedRef, forwardRef, HTMLAttributes} from 'react';
import colors from "@designsystem/foundation/colors";
import Icon, {IconType} from "@designsystem/foundation/icon";
import styled from "styled-components";

interface AddDismissButtonProps extends HTMLAttributes<HTMLDivElement> {
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
            <div style={{
                display: "flex",
                position: 'absolute',
                top: 0,
                right: 0,
                background: colors.g100,
                borderRadius: 20,
                padding: 6,
                cursor: 'pointer',
                opacity: 0.8
            }}>
                <Icon
                    type={IconType.CrossLine}
                    size={16}
                    tint={colors.g600}
                    onClick={dismiss}
                />
            </div>
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