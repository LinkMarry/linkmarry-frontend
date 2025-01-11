import React, {HTMLAttributes} from 'react';
import styled from "styled-components";
import Text from "@designsystem/component/text";

interface OptionLabelProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
}

function OptionLabel(
    {
        label,
        ...props
    }: OptionLabelProps
) {
    return (
        <S.wrapper {...props}>
            <Text text={label} type={'p4'}/>
        </S.wrapper>
    );
}

const S = {
    wrapper: styled.div`
        display: flex;
        min-width: 72px;
        width: 72px;
        align-self: stretch;
        align-items: center;
    `,
}

export default OptionLabel;