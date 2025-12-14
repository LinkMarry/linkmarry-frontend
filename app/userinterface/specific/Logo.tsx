import {type ComponentPropsWithoutRef} from 'react';
import View from "~/userinterface/core/View.tsx";
import type {LinariaClassName} from "@linaria/core";

interface Props extends ComponentPropsWithoutRef<'div'> {
    ui?: LinariaClassName;
}

const Logo = ({ui, ...props}: Props) => {
    return (
        <View as={'img'} src={'/logo.svg'} width={103} alt={'logo'} ui={ui} {...props}/>
    );
};

export default Logo;
