import React, {Children, isValidElement, ReactElement, ReactNode} from "react";
import {css, RuleSet} from "styled-components";
import {Column} from "@designsystem/core/FlexLayout";
import FormToggle from "@designsystem/component/FormToggle";

interface Props {
    customStyle?: RuleSet;
    children?: ReactNode;
}

const FormToggleSet = ({customStyle, children}: Props) => {
    const filteredChildren = Children.toArray(children).filter((child) =>
        isValidElement(child) && child.type === FormToggle
    ) as ReactElement<typeof FormToggle>[];
    return (
        <Column $alignItems={'stretch'} css={css`
            border: 1px solid var(--g-300);
            border-radius: 8px;

            & > * {
                border: none !important;
                border-radius: 0 !important;
            }
            
            & > *:not(:last-child) {
                border-bottom: 1px solid var(--g-300) !important;
            }

            ${customStyle};
        `}>
            {filteredChildren}
        </Column>
    );
};

export default FormToggleSet;
