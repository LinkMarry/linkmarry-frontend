import React, {Children, isValidElement, ReactElement, ReactNode} from "react";
import {css, RuleSet} from "styled-components";
import {Column} from "@src/userinterface/core/FlexLayout";
import FormToggle from "@src/userinterface/component/FormToggle";

interface Props {
    ui?: RuleSet;
    children?: ReactNode;
}

const FormToggleSet = ({ui, children}: Props) => {
    const filteredChildren = Children.toArray(children).filter((child) =>
        isValidElement(child) && child.type === FormToggle
    ) as ReactElement<typeof FormToggle>[];
    return (
        <Column $alignItems={'stretch'} $ui={css`
            border: 1px solid var(--g-300);
            border-radius: 8px;

            & > * {
                border: none !important;
                border-radius: 0 !important;
            }
            
            & > *:not(:last-child) {
                border-bottom: 1px solid var(--g-300) !important;
            }

            ${ui};
        `}>
            {filteredChildren}
        </Column>
    );
};

export default FormToggleSet;
