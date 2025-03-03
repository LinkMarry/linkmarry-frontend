import React, {ComponentPropsWithoutRef} from 'react';
import {css, RuleSet} from "styled-components";
import CustomStyle from "@designsystem/core/CustomStyle";

interface Props extends ComponentPropsWithoutRef<'div'> {
    customStyle?: RuleSet;
}

const Logo = ({customStyle, ...props}: Props) => {
    return (
        <CustomStyle as={'img'} src={'/logo.svg'} width={103} alt={'logo'} $customStyle={css`
            ${customStyle};
        `} {...props}/>
    );
};

export default Logo;
