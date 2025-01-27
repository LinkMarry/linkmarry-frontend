import React, {
    CSSProperties,
    ForwardedRef,
    forwardRef, useEffect,
    useImperativeHandle,
    useRef,
    useState
} from 'react';
import styled from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/icon";
import colors from "@designsystem/foundation/colors";
import makeText from "@designsystem/foundation/text/textType";

interface RadioProps {
    selected?: boolean;
    onChange?: (selected: boolean) => void;
    label?: string;
    style?: CSSProperties;
}

export interface CheckboxRef {
    value: boolean;
    focus: () => void;
    toggle: () => void;
}

function Radio(
    {
        selected = false,
        onChange,
        label,
        style
    }: RadioProps,
    ref: ForwardedRef<CheckboxRef>
) {
    const [localSelected, setLocalSelected] = useState(selected);
    const radioRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setLocalSelected(selected);
    }, [selected]);

    useImperativeHandle(ref, () => ({
        value: localSelected,
        focus: () => {
            radioRef.current?.focus();
        },
        toggle: () => {
            if (radioRef.current) {
                radioRef.current.checked = !radioRef.current.checked;
                onChange?.(radioRef.current.checked);
            }
        }
    }));

    return (
        <S.container style={style}>
            <S.checkbox>
                <input
                    ref={radioRef}
                    type={'checkbox'}
                    checked={localSelected}
                    onChange={(e) => {
                        onChange?.(e.target.checked);
                        setLocalSelected(e.target.checked);
                    }}
                    style={{
                        borderRadius: 10,
                        width: 24,
                        height: 24,
                        appearance: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                />
                <Icon
                    type={localSelected ? IconType.RadioFill : IconType.RadioLine}
                    tint={localSelected ? colors.g600 : colors.g300}
                    size={24}
                    style={{
                        position: 'absolute',
                        pointerEvents: 'none',
                    }}
                />
            </S.checkbox>
            {label && <S.title style={{cursor: 'pointer'}} onClick={() => onChange?.(!selected)}>{label}</S.title>}
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: inline-flex;
        align-items: center;
        width: fit-content;
        gap: 6px;
    `,
    checkbox: styled.div`
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
    `,
    title: styled.span`
        display: inline-flex;

        ${makeText('p4')};
        color: ${colors.black};
    `
}

export default forwardRef(Radio);
