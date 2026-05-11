import {View} from "~/components";
import {type ComponentPropsWithoutRef} from "react";
import {css, cx, type LinariaClassName} from "@linaria/core";

interface Props extends ComponentPropsWithoutRef<"div"> {
    w?: number;
    h?: number;
    ui?: LinariaClassName;
}

export const Spacer = ({w, h, ...props}: Props) => {
    return (
        <View
            ui={cx(
                w === undefined && h === undefined
                    ? css`
                          flex: 1;
                      `
                    : undefined,
            )}
            style={{
                minWidth: w,
                minHeight: h,
            }}
            {...props}
        />
    );
};
