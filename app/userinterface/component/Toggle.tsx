import {
    type ChangeEvent,
    type ComponentPropsWithRef,
    type ForwardedRef,
    forwardRef
} from 'react';
import View from "~/userinterface/core/View.tsx";
import {css, cx, type LinariaClassName} from "@linaria/core";

interface Props extends ComponentPropsWithRef<'div'> {
    checked: boolean;
    OnChange: (checked: boolean) => void;
    ui?: LinariaClassName;
}


function Toggle(
    {
        checked = false,
        OnChange,
        ui,
        ...props
    }: Props,
    ref?: ForwardedRef<HTMLInputElement>
) {
    return (
        <View ui={cx(
            css`
                flex-direction: row;
                position: relative;
                width: fit-content;
            `,
            ui
        )} {...props}>
            <View
                as={'input'}
                ref={ref}
                type={'checkbox'}
                checked={checked}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    OnChange(event.target.checked);
                }}
                ui={cx(
                    css`
                        flex-direction: row;
                        width: 60px;
                        height: 32px;
                        appearance: none;
                        cursor: pointer;
                        border-radius: 100px;
                        outline: none;
                        transition: 0.2s background ease-out;
                    `,
                    checked ? css`
                        background: var(--g-900);
                    ` : css`
                        background: var(--g-200);
                    `
                )}
            />
            <View as={'span'} ui={cx(
                css`
                    position: absolute;
                    width: 26px;
                    height: 26px;
                    background-color: white;
                    border-radius: 100px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
                    top: 3px;
                    transition: 0.2s left ease-out;
                    pointer-events: none;
                `,
                checked ? css`
                    left: 30px;
                ` : css`
                    left: 3px;
                `
            )}/>
        </View>
    );
}

export default forwardRef(Toggle);
