import React, {ComponentPropsWithoutRef} from 'react';
import {Row} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import Text from "@designsystem/component/Text";
import Toggle from "@designsystem/component/Toggle";

interface Props extends ComponentPropsWithoutRef<'div'> {
    checked: boolean;
    OnChange: (checked: boolean) => void;
    label: string;
}

const FormToggle = ({checked, OnChange, label}: Props) => {
    return (
        <Row $gap={4} $alignItems={'center'} $ui={css`
            padding: 0 16px;
            height: 52px;
            border-radius: 8px;
            border: 1px solid var(--g-300);
        `}>
            <Text type={'p2'} ui={css`
                flex: 1;
                color: var(--g-800);
            `}>{label}</Text>
            <Toggle checked={checked} OnChange={OnChange}/>
        </Row>
    );
};

export default FormToggle;
