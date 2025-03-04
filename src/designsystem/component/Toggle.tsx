import React, {
    ComponentPropsWithRef,
    ForwardedRef,
    forwardRef, useEffect,
    useImperativeHandle,
    useRef,
    useState
} from 'react';
import {css, RuleSet} from "styled-components";
import {Row} from "@designsystem/core/FlexLayout";
import CustomStyle from "@designsystem/core/CustomStyle";

interface Props extends ComponentPropsWithRef<'div'> {
    checked: boolean;
    OnChange: (checked: boolean) => void;
    customStyle?: RuleSet;
}

export interface ToggleRef {
    value: boolean;
    focus: () => void;
    toggle: () => void;
}

function Toggle(
    {
        checked = false,
        OnChange,
        customStyle,
        ...props
    }: Props,
    ref: ForwardedRef<ToggleRef>
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
                OnChange(checkboxRef.current.checked);
            }
        }
    }));

    return (
        <Row $customStyle={css`
            position: relative;
            width: fit-content;
            ${customStyle};
        `} {...props}>
            <Row
                as={'input'}
                ref={checkboxRef}
                type={'checkbox'}
                checked={localChecked}
                onChange={(e) => {
                    OnChange(e.target.checked);
                    setLocalChecked(e.target.checked);
                }}
                $customStyle={css`
                    display: flex;
                    width: 60px;
                    height: 32px;
                    appearance: none;
                    cursor: pointer;
                    ${localChecked ? css`
                        background: var(--g-900);
                    ` : css`
                        background: var(--g-200);
                    `};
                    border-radius: 100px;
                    outline: none;
                    transition: 0.2s background ease-out;
                `}
            />
            <CustomStyle as={'span'} $customStyle={css`
                position: absolute;
                width: 26px;
                height: 26px;
                background-color: white;
                border-radius: 100px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
                top: 3px;
                ${localChecked ? css`
                    left: 30px;
                ` : css`
                    left: 3px;
                `};
                transition: 0.2s left ease-out;
                pointer-events: none;
            `}></CustomStyle>
        </Row>
    );
}

export default forwardRef(Toggle);
