import React, {
    CSSProperties,
    ForwardedRef,
    forwardRef, useEffect,
    useImperativeHandle,
    useRef,
    useState
} from 'react';
import styled, {css} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import View from "@designsystem/core/View";

interface Props {
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
    }: Props,
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
            <View $ui={css`
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
            `}>
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
                    iconType={localSelected ? IconType.RadioFill : IconType.RadioLine}
                    size={24}
                    ui={css`
                        position: absolute;
                        pointer-events: none;
                        ${localSelected ? css`
                            fill: var(--g-600);
                        ` : css`
                            fill: var(--g-300);
                        `}
                    `}
                />
            </View>
            {/*todo*/}
            {/*{label && (*/}
            {/*    <Text*/}
            {/*        type={'p4'}*/}
            {/*        customStyle={css`*/}
            {/*            cursor: pointer;*/}
            {/*        `}*/}
            {/*        onClick={() => onChange?.(!selected)}*/}
            {/*    >{label}</Text>*/}
            {/*)}*/}
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
    title: styled.span`
        display: inline-flex;
    `
}

export default forwardRef(Radio);
