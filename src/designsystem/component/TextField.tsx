import React, {
    ChangeEvent,
    ChangeEventHandler, ComponentPropsWithRef,
    CSSProperties, ForwardedRef, forwardRef,
    HTMLAttributes,
    InputHTMLAttributes,
    useRef,
    useState
} from 'react';
import styled, {css} from "styled-components";
import makeText from "@designsystem/foundation/text/TextType";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Text from "@designsystem/component/Text";

interface Props extends ComponentPropsWithRef<'div'> {
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
    }: Props,
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
        labelColor = 'var(--g-500)';
        borderColor = 'var(--g-200)';
        inputBackground = 'white';
    }

    return (
        <TextFieldStyle $enabled={enabled} {...props}>
            {label && (
                <Text type={'btn1'} style={{
                    color: labelColor
                }}>
                    {label}
                </Text>
            )}
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
                    <Icon iconType={IconType.ExclamationFill} customStyle={css`
                        fill: #FF4242;
                    `}/>
                ) : enabled ? (
                    <Icon iconType={IconType.CrossFill} customStyle={css`
                        fill: rgba(0, 0, 0, 0.5);
                        cursor: pointer;
                    `} onClick={() => {
                        const event = {
                            target: {value: ''}, // 빈 문자열로 설정
                        } as ChangeEvent<HTMLInputElement>;
                        onChange?.(event);
                        if (localRef && localRef.current) {
                            localRef.current.value = '';
                        }
                    }}/>
                ) : (
                    <></>
                )}
            </S.inputContainer>
            <Text type={'btn1'} customStyle={css`
                position: absolute;
                bottom: -20px;
                white-space: nowrap;
                ${isError ? css`
                    color: #FF4242;
                ` : css`
                    color: var(--g-500);
                `}
            `}>{supportingText}</Text>
        </TextFieldStyle>
    );
}

const TextFieldStyle = styled.div<{
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
`;

const S = {
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