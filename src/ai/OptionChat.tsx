import React, {ComponentProps} from 'react';
import BaseChat from "@src/ai/BaseChat";
import {Column} from "@designsystem/core/FlexLayout";
import Button from "@designsystem/component/Button";
import Loading from "@src/component/Loading";
import {css} from "styled-components";
import Text from "@designsystem/component/Text";

type Option = (string | undefined) | string[];

interface Props<T = Option> extends Omit<ComponentProps<typeof BaseChat>, 'type'> {
    title: string;
    options?: string[];
    selectedOption: T;
    onChange: (newValue: T) => void;
    onConfirm: () => void;
    answer: boolean;
}

const OptionChat = <T = Option>({title, options, selectedOption, onChange, onConfirm, answer, ...props}: Props<T>) => {
    return (
        <BaseChat type={'ai'} {...props}>
            {options ? (
                <Column $gap={24} $alignItems={'stretch'}>
                    <Text type={'p2'}>{title}</Text>
                    {!answer && (
                        <>
                            <Column $gap={10} $alignItems={'stretch'}>
                                {options.map((item, index) => (
                                    <Button key={index} text={item} buttonType={'outlined'} ui={css`
                                        ${(item === selectedOption || (Array.isArray(selectedOption) && selectedOption.includes(item))) && css`
                                            outline: 1px solid black;
                                        `};
                                        color: var(--g-900);
                                    `} onClick={() => {
                                        if (Array.isArray(selectedOption)) {
                                            if (selectedOption.includes(item)) {
                                                const copiedSelectedOption: string[] = [...selectedOption];
                                                copiedSelectedOption.splice(copiedSelectedOption.indexOf(item), 1);
                                                onChange(copiedSelectedOption as T);
                                            } else {
                                                onChange([...selectedOption, item] as T);
                                            }
                                        } else {
                                            onChange(item as T);
                                        }
                                    }}/>
                                ))}
                            </Column>
                            <Button
                                text={'다음'}
                                enabled={Array.isArray(selectedOption) ? selectedOption.length > 0 : selectedOption !== undefined}
                                onClick={onConfirm}
                            />
                        </>
                    )}
                </Column>
            ) : (
                <Loading ui={css`
                    margin: 20px 0;
                `}/>
            )}
        </BaseChat>
    );
};

export default OptionChat;
