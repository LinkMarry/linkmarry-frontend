import {Children, isValidElement, type ReactElement, type ReactNode} from "react";
import FormToggle from "~/userinterface/component/FormToggle";
import {css, cx, type LinariaClassName} from "@linaria/core";
import View from "~/userinterface/core/View.tsx";

interface Props {
    ui?: LinariaClassName;
    children?: ReactNode;
}

const FormToggleSet = ({ui, children}: Props) => {
    const filteredChildren = Children.toArray(children).filter((child) =>
        isValidElement(child) && child.type === FormToggle
    ) as ReactElement<typeof FormToggle>[];
    return (
        <View ui={cx(
            css`
                border: 1px solid var(--g-300);
                border-radius: 8px;

                & > * {
                    border: none !important;
                    border-radius: 0 !important;
                }

                & > *:not(:last-child) {
                    border-bottom: 1px solid var(--g-300) !important;
                }
            `,
            ui
        )}>
            {filteredChildren}
        </View>
    );
};

export default FormToggleSet;
