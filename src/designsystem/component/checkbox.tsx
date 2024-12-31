import React, {
    CSSProperties,
    ForwardedRef,
    forwardRef,
    useImperativeHandle,
    useRef,
    useState
} from 'react';
import styled from "styled-components";
import Icon, {IconType} from "../foundation/icon";
import colors from "../foundation/colors";
import makeText, {TextType} from "../foundation/text/textType";

interface CheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    rounded?: boolean;
    style?: CSSProperties;
}

export interface CheckboxRef {
    value: boolean;
    focus: () => void;
    toggle: () => void;
}

function Checkbox(
    {
        checked = false,
        onChange,
        label,
        rounded = false,
        style
    }: CheckboxProps,
    ref: ForwardedRef<CheckboxRef>
) {
    const [localChecked, setLocalChecked] = useState(checked);
    const checkboxRef = useRef<HTMLInputElement>(null);

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
        <S.container style={style}>
            <S.checkbox>
                <input
                    ref={checkboxRef}
                    type={'checkbox'}
                    checked={localChecked}
                    onChange={(e) => {
                        onChange?.(e.target.checked);
                        setLocalChecked(e.target.checked);
                    }}
                    style={{
                        borderRadius: rounded ? 10 : 4,
                        width: 20,
                        height: 20,
                        appearance: 'none',
                        cursor: 'pointer',
                        background: localChecked ? colors.g600 : colors.transparent,
                        border: localChecked ? 'none' : `1px solid ${colors.g300}`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                />
                {localChecked && <Icon
                    type={IconType.CheckLine} 
                    tint={colors.white}
                    size={18}
                    style={{
                        position: 'absolute',
                        pointerEvents: 'none',
                    }}
                />}
            </S.checkbox>
            {label && <S.title>{label}</S.title>}
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: inline-flex;
        align-items: center;
        width: fit-content;
        gap: 8px;
    `,
    checkbox: styled.div`
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
    `,
    title: styled.span`
        display: inline-flex;

        ${makeText(TextType.p4)};
        color: ${colors.black};
    `
}

export default forwardRef(Checkbox);
