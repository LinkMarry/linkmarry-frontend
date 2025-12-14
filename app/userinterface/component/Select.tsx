import {type ComponentPropsWithoutRef, useEffect, useRef, useState} from 'react';
import Text from "~/userinterface/component/Text";
import Icon from "~/userinterface/foundation/Icon";
import View from "~/userinterface/core/View.tsx";
import {css, cx, type LinariaClassName} from "@linaria/core";

interface Props extends ComponentPropsWithoutRef<'div'> {
    items: string[];
    selected?: number;
    OnChange: (index: number) => void;
    placeholder?: string;
    ui?: LinariaClassName;
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
        <View ref={selectRef} ui={cx(
            css`
                position: relative;
            `,
            ui
        )} onClick={() => {
            setOpenOptions(i => !i);
        }} {...props}>
            <View ui={css`
                align-items: center;
                gap: 4px;
                flex-direction: row !important;
                padding: 12px 16px;
                width: 100%;
                border: 1px solid var(--g-300);
                border-radius: 8px;
                cursor: pointer;

                &:hover {
                    border: 1px solid var(--g-400);
                }
            `}>
                <Text type={'p2'} ui={cx(
                    css`
                        flex: 1;
                    `,
                    selected === undefined ? css`
                        color: var(--g-400);
                    ` : css`
                        color: var(--g-800);
                    `
                )}>{selected !== undefined ? items[selected] : placeholder}</Text>
                <Icon iconType={'ExpandArrow'} width={20} height={20} ui={css`
                    fill: var(--g-400);
                    rotate: -90deg;
                `}/>
            </View>
            {openOptions && (
                <View ui={css`
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
                        <View key={index} ui={css`
                            align-items: center;
                            flex-direction: row !important;
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
                                <Icon iconType={'CheckLine'} width={20} height={20} ui={css`
                                    fill: var(--g-700);
                                `}/>
                            )}
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
};

export default Select;
