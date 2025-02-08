import React, {
    ForwardedRef,
    forwardRef, useEffect,
    useImperativeHandle,
    useRef,
    useState
} from 'react';
import {css, RuleSet} from "styled-components";
import {Row} from "@designsystem/component/FlexLayout";
import CustomStyle from "@designsystem/component/CustomStyle";

interface Props {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
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
        onChange,
        customStyle
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
                onChange?.(checkboxRef.current.checked);
            }
        }
    }));

    return (
        <Row $customStyle={css`
            position: relative;
            width: fit-content;
            ${customStyle};
        `}>
            <Row
                as={'input'}
                ref={checkboxRef}
                type={'checkbox'}
                checked={localChecked}
                onChange={(e) => {
                    onChange?.(e.target.checked);
                    setLocalChecked(e.target.checked);
                }}
                $customStyle={css`
                    display: flex;
                    width: 80px;
                    height: 40px;
                    appearance: none;
                    cursor: pointer;
                    ${localChecked ? css`
                        background: var(--p-300);
                    ` : css`
                        background: var(--g-200);
                    `};
                    border-radius: 100px;
                `}
            />
            <CustomStyle as={'span'} $customStyle={css`
                position: absolute;
                width: 32px;
                height: 32px;
                background-color: white;
                border-radius: 100px;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
                top: 4px;
                ${localChecked ? css`
                    right: 6px;
                ` : css`
                    left: 6px;
                `};
                pointer-events: none;
            `}></CustomStyle>
        </Row>
    );
}

export default forwardRef(Toggle);