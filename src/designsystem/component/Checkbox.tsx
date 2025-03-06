import React, {
    ComponentPropsWithoutRef,
    ForwardedRef,
    forwardRef, useEffect,
    useImperativeHandle,
    useRef,
    useState
} from 'react';
import styled, {css, RuleSet} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import Text from "@designsystem/component/Text";
import {Row} from "@designsystem/core/FlexLayout";
import View from "@designsystem/core/View";

interface Props extends ComponentPropsWithoutRef<'div'> {
    checked: boolean;
    OnChange: (checked: boolean) => void;
    label?: string;
    ui?: RuleSet;
}

export interface CheckboxRef {
    value: boolean;
    focus: () => void;
    toggle: () => void;
}

function Checkbox(
    {
        checked = false,
        OnChange,
        label,
        ui,
        ...props
    }: Props,
    ref: ForwardedRef<CheckboxRef>
) {
    const [localChecked, setLocalChecked] = useState(checked);
    const checkboxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setLocalChecked(checked);
    }, [checked]);

    useImperativeHandle(ref, () => ({
        value: localChecked,
        focus: () => {
            checkboxRef.current?.focus();
        },
        toggle: () => {
            if (checkboxRef.current) {
                checkboxRef.current.checked = !checkboxRef.current.checked;
                OnChange?.(checkboxRef.current.checked);
            }
        }
    }));

    return (
        <Row alignment={'center'} ui={css`
            width: fit-content;
            ${ui};
        `} {...props}>
            <Row arrangement={'center'} alignment={'center'} ui={css`
                position: relative;
                width: 40px;
                height: 40px;
            `}>
                <View ui={css`
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 20px;
                    height: 20px;
                    border-radius: 4px;
                    ${localChecked ? css`
                        background: var(--g-900);
                        border: none;
                    ` : css`
                        background: transparent;
                        border: 1px solid var(--g-300);
                    `};
                `}/>
                <CheckboxInputStyle
                    ref={checkboxRef}
                    type={'checkbox'}
                    checked={localChecked}
                    onChange={(e) => {
                        OnChange(e.target.checked);
                        setLocalChecked(e.target.checked);
                    }}
                />
                {localChecked && <Icon
                    iconType={IconType.CheckLine}
                    size={18}
                    ui={css`
                        fill: white;
                        position: absolute;
                        pointer-events: none;
                    `}
                />}
            </Row>
            {label && (
                <Text
                    type={'p3'}
                    ui={css`
                        cursor: pointer;
                    `}
                    onClick={() => OnChange?.(!checked)}
                >{label}</Text>
            )}
        </Row>
    );
}

const CheckboxInputStyle = styled.input`
    position: absolute;
    width: 40px;
    height: 40px;
    appearance: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
`;

export default forwardRef(Checkbox);
