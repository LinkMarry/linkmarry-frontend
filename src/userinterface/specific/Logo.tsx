import React, {ComponentPropsWithoutRef} from 'react';
import {css, RuleSet} from "styled-components";
import View from "@src/userinterface/core/View";

interface Props extends ComponentPropsWithoutRef<'div'> {
    ui?: RuleSet;
}

const Logo = ({ui, ...props}: Props) => {
    return (
        <View as={'img'} src={'/logo.svg'} width={103} alt={'logo'} $ui={css`
            ${ui};
        `} {...props}/>
    );
};

export default Logo;
