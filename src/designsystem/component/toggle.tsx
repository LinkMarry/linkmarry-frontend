import React, {
    CSSProperties,
    ForwardedRef,
    forwardRef, useEffect,
    useImperativeHandle,
    useRef,
    useState
} from 'react';
import styled, {css} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/icon";
import colors from "@designsystem/foundation/colors";

interface ToggleProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    style?: CSSProperties;
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
        style
    }: ToggleProps,
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
        <S.container style={style}>
            <S.input
                ref={checkboxRef}
                type={'checkbox'}
                checked={localChecked}
                onChange={(e) => {
                    onChange?.(e.target.checked);
                    setLocalChecked(e.target.checked);
                }}
            />
            <S.indicator checked={localChecked}></S.indicator>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        position: relative;
        width: fit-content;
    `,
    input: styled.input<{
        checked: boolean;
    }>`
        display: flex;
        width: 80px;
        height: 40px;
        appearance: none;
        cursor: pointer;
        background: ${({checked}) => checked ? colors.p300 : colors.g200};
        border-radius: 100px;
    `,
    indicator: styled.span<{
        checked: boolean;
    }>`
        position: absolute;
        width: 32px;
        height: 32px;
        background-color: white;
        border-radius: 100px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
        top: 4px;
        ${({checked}) => checked ? css`
            right: 6px;
        ` : css`
            left: 6px;
        `};
        pointer-events: none;
    `
}

export default forwardRef(Toggle);
