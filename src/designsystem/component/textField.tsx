import React, {
    ChangeEvent,
    ChangeEventHandler,
    CSSProperties, ForwardedRef, forwardRef,
    HTMLAttributes,
    InputHTMLAttributes,
    useRef,
    useState
} from 'react';
import styled, {css} from "styled-components";
import makeText from "@designsystem/foundation/text/textType";
import Icon, {IconType} from "@designsystem/foundation/icon";
import colors from "@designsystem/foundation/colors";

interface TextFieldProps extends HTMLAttributes<HTMLDivElement> {
    fieldProps?: InputHTMLAttributes<HTMLInputElement>;
    label?: string;
    supportingText?: string;
    placeholder?: string;
    isError?: boolean;
    enabled?: boolean;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

function TextField(
    {
        fieldProps,
        label,
        supportingText,
        placeholder,
        isError = false,
        enabled = true,
        value,
        onChange,
        ...props
    }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
) {
    const localRef = useRef<HTMLInputElement>(null);
    const [focused, setFocused] = useState(false);

    let labelColor: CSSProperties['color'],
        borderColor: CSSProperties['borderColor'],
        inputBackground: CSSProperties['color'];
    if (isError) {
        labelColor = '#FF4242';
        borderColor = '#FF4242';
        inputBackground = 'rgba(229, 34, 34, 0.03)';
    } else if (focused) {
        labelColor = '#0083F0';
        borderColor = '#0083F0'
        inputBackground = 'rgba(0, 139, 255, 0.03)';
    } else {
        labelColor = colors.g500;
        borderColor = colors.g200;
        inputBackground = colors.white;
    }

    return (
        <S.textField $enabled={enabled} {...props}>
            <S.label style={{
                color: labelColor
            }}>{label}</S.label>
            <S.inputContainer style={{
                background: inputBackground,
                border: `1px solid ${borderColor}`
            }}>
                <input
                    placeholder={placeholder}
                    ref={ref ?? localRef}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    disabled={!enabled}
                    {...fieldProps}
                />
                {isError ? (
                    <Icon type={IconType.ExclamationFill} tint={'#FF4242'}/>
                ) : enabled ? (
                    <Icon type={IconType.CrossFill} tint={'rgba(0,0,0,0.5)'} style={{cursor: 'pointer'}}
                          onClick={() => {
                              const event = {
                                  target: {value: ''}, // 빈 문자열로 설정
                              } as ChangeEvent<HTMLInputElement>;
                              onChange?.(event);
                              if (localRef && localRef.current) {
                                  localRef.current.value = '';
                              }
                          }}
                    />
                ) : (
                    <></>
                )}
            </S.inputContainer>
            <S.supportingText style={{
                color: isError ? '#FF4242' : colors.g500
            }}>{supportingText}</S.supportingText>
        </S.textField>
    );
};

const S = {
    textField: styled.div<{
        $enabled: boolean,
    }>`
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;

        ${({$enabled}) => !$enabled && css`
            opacity: 0.65;
        `}
    `,
    label: styled.span`
        font-feature-settings: 'ss10' on;
        ${makeText('btn1')};
    `,
    supportingText: styled.span`
        position: absolute;
        bottom: -20px;
        white-space: nowrap;

        font-feature-settings: 'ss10' on;
        ${makeText('btn1')};
    `,
    inputContainer: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;

        width: 100%;
        height: 56px;
        padding: 4px 12px 4px 16px;

        border-radius: 12px;

        input {
            ${makeText('p2')};
            background: transparent;
            width: 90%;
            height: 100%;
            border: none;

            &:focus {
                outline: none;
            }
        }
    `
};

export default forwardRef(TextField);