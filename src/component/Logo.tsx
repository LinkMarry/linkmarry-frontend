import React, {ComponentPropsWithoutRef} from 'react';
import {css, RuleSet} from "styled-components";
import Style from "@designsystem/core/Style";

interface Props extends ComponentPropsWithoutRef<'div'> {
    customStyle?: RuleSet;
}

const Logo = ({customStyle, ...props}: Props) => {
    return (
        <Style as={'img'} src={'/logo.svg'} width={103} alt={'logo'} css={css`
            ${customStyle};
        `} {...props}/>
    );
};

export default Logo;
