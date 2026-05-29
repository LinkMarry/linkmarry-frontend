import {View} from "~/components";
import {type ComponentPropsWithoutRef} from "react";

import type {LinariaClassName} from "@linaria/core";

interface Props extends ComponentPropsWithoutRef<"div"> {
    ui?: LinariaClassName;
}

export const Logo = ({ui, ...props}: Props) => {
    return <View as={"img"} src={"/logo.svg"} width={103} alt={"logo"} ui={ui} {...props} />;
};
