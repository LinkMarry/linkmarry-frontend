import React, {
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

interface Props {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
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
        style
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
                onChange?.(checkboxRef.current.checked);
            }
        }
    }));

    return (
        <S.container style={style}>
            <Row $justifyContent={'center'} $alignItems={'center'} $customStyle={css`
                position: relative;
            `}>
                <S.Input
                    ref={checkboxRef}
                    type={'checkbox'}
                    checked={localChecked}
                    onChange={(e) => {
                        onChange?.(e.target.checked);
                        setLocalChecked(e.target.checked);
                    }}
                    $customStyle={localChecked ? css`
                        background: var(--g-600);
                        border: none;
                    ` : css`
                        background: transparent;
                        border: 1px solid var(--g-300);
                    `}
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
            {/*{label && (*/}
            {/*    <Text*/}
            {/*        type={'p4'}*/}
            {/*        customStyle={css`*/}
            {/*            cursor: pointer;*/}
            {/*        `}*/}
            {/*        onClick={() => onChange?.(!checked)}*/}
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
        gap: 8px;
    `,
    Input: styled.input<{
        $customStyle?: RuleSet;
    }>`
        border-radius: 4px;
        width: 20px;
        height: 20px;
        appearance: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        ${({$customStyle}) => $customStyle};
    `
}

export default forwardRef(Checkbox);
