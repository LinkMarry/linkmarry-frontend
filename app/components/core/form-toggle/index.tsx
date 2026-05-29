import {Text} from "~/components/core/text";
import {Toggle} from "~/components/core/toggle";
import {View} from "~/components/core/view";
import {type ComponentPropsWithoutRef} from "react";
import {css} from "@linaria/core";

interface Props extends ComponentPropsWithoutRef<"div"> {
    checked: boolean;
    OnChange: (checked: boolean) => void;
    label: string;
}

export const FormToggle = ({checked, OnChange, label}: Props) => {
    return (
        <View
            flexDirection={"row"}
            ui={css`
                gap: 4px;
                align-items: center;
                padding: 0 16px;
                min-height: 52px;
                border-radius: 8px;
                border: 1px solid var(--g-300);
            `}
        >
            <Text
                type={"p2"}
                ui={css`
                    flex: 1;
                    color: var(--g-800);
                `}
            >
                {label}
            </Text>
            <Toggle checked={checked} OnChange={OnChange} />
        </View>
    );
};
