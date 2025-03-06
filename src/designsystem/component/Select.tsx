import React, {ComponentPropsWithoutRef, useEffect, useRef, useState} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import {css, RuleSet} from "styled-components";
import Text from "@designsystem/component/Text";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import Style from "@designsystem/core/Style";

interface Props extends ComponentPropsWithoutRef<'div'> {
    items: string[];
    selected?: number;
    OnChange: (index: number) => void;
    placeholder?: string;
    ui?: RuleSet;
}

const Select = ({items, selected, OnChange, placeholder, ui, ...props}: Props) => {
    const [openOptions, setOpenOptions] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (selectRef.current && !(event.target instanceof Node && selectRef.current.contains(event.target))) {
                setOpenOptions(false);
            }
        };
        document.addEventListener("mouseup", handleOutsideClick);
        return () => {
            document.removeEventListener("mouseup", handleOutsideClick);
        }
    }, []);
    return (
        <Style ref={selectRef} css={css`
            display: flex;
            position: relative;
            ${ui};
        `} onClick={() => {
            setOpenOptions(i => !i);
        }} {...props}>
            <Row $alignItems={'center'} gap={4} css={css`
                padding: 12px 16px;
                width: 100%;
                border: 1px solid var(--g-300);
                border-radius: 8px;
                cursor: pointer;
                &:hover {
                    border: 1px solid var(--g-400);
                }
            `}>
                <Text type={'p2'} ui={css`
                    flex: 1;
                    ${selected === undefined ? css`
                        color: var(--g-400);
                    ` : css`
                        color: var(--g-800);
                    `}
                `}>{selected !== undefined ? items[selected] : placeholder}</Text>
                <Icon iconType={IconType.ExpandArrow} width={20} height={20} ui={css`
                    fill: var(--g-400);
                    rotate: -90deg;
                `}/>
            </Row>
            {openOptions && (
                <Column $alignItems={'stretch'} css={css`
                    position: absolute;
                    top: 52px;
                    left: 0;
                    width: 216px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 10px 32px -4px rgba(24, 39, 75, 0.10);
                    overflow: hidden;
                    z-index: 100;
                `}>
                    {items.map((item, index) => (
                        <Row key={index} $alignItems={'center'} css={css`
                            padding: 12px 16px;
                            cursor: pointer;
                            
                            &:hover {
                                background: var(--g-100);
                            }
                        `} onClick={() => {
                            OnChange(index);
                        }}>
                            <Text type={'p3'} ui={css`
                                flex: 1;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                color: var(--g-800);
                                min-width: 0;
                                overflow: hidden;
                            `}>{item}</Text>
                            {selected === index && (
                                <Icon iconType={IconType.CheckLine} width={20} height={20} ui={css`
                                    fill: var(--g-700);
                                `}/>
                            )}
                        </Row>
                    ))}
                </Column>
            )}
        </Style>
    );
};

export default Select;
