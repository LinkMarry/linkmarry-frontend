import React, {
    ComponentPropsWithoutRef,
    CSSProperties,
    ForwardedRef,
    forwardRef, useEffect,
    useImperativeHandle,
    useRef,
    useState
} from 'react';
import styled, {css, RuleSet} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/icon";
import makeText from "@designsystem/foundation/text/TextType";
import Text from "@designsystem/component/Text";
import {Row} from "@designsystem/component/FlexLayout";
import CustomStyle from "@designsystem/component/CustomStyle";

interface Props extends ComponentPropsWithoutRef<'div'> {
    Checked?: boolean;
    OnChange?: (checked: boolean) => void;
    label?: string;
}

export interface CheckboxRef {
    value: boolean;
    focus: () => void;
    toggle: () => void;
}

function Checkbox(
    {
        Checked = false,
        OnChange,
        label,
        ...props
    }: Props,
    ref: ForwardedRef<CheckboxRef>
) {
    const [localChecked, setLocalChecked] = useState(Checked);
    const checkboxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setLocalChecked(Checked);
    }, [Checked]);

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
        <Row $alignItems={'center'} $customStyle={css`
            width: fit-content;
        `} {...props}>
            <Row $justifyContent={'center'} $alignItems={'center'} $customStyle={css`
                position: relative;
                width: 40px;
                height: 40px;
            `}>
                <CustomStyle $customStyle={css`
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 20px;
                    height: 20px;
                    border-radius: 4px;
                    ${localChecked ? css`
                        background: var(--g-800);
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
                        OnChange?.(e.target.checked);
                        setLocalChecked(e.target.checked);
                    }}
                />
                {localChecked && <Icon
                    iconType={IconType.CheckLine}
                    size={18}
                    customStyle={css`
                        fill: white;
                        position: absolute;
                        pointer-events: none;
                    `}
                />}
            </Row>
            {label && (
                <Text
                    type={'p3'}
                    customStyle={css`
                        cursor: pointer;
                    `}
                    onClick={() => OnChange?.(!Checked)}
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
