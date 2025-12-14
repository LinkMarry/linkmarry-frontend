import {type ComponentPropsWithoutRef} from 'react';
import {css} from "@linaria/core";
import Text from "~/userinterface/component/Text";
import Toggle from "~/userinterface/component/Toggle";
import View from "~/userinterface/core/View.tsx";

interface Props extends ComponentPropsWithoutRef<'div'> {
    checked: boolean;
    OnChange: (checked: boolean) => void;
    label: string;
}

const FormToggle = ({checked, OnChange, label}: Props) => {
    return (
        <View ui={css`
            flex-direction: row !important;
            gap: 4px;
            align-items: center;
            padding: 0 16px;
            min-height: 52px;
            border-radius: 8px;
            border: 1px solid var(--g-300);
        `}>
            <Text type={'p2'} ui={css`
                flex: 1;
                color: var(--g-800);
            `}>{label}</Text>
            <Toggle checked={checked} OnChange={OnChange}/>
        </View>
    );
};

export default FormToggle;
