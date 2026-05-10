import React, {type ComponentPropsWithoutRef, type ReactNode} from "react";
import View from "~/components/core/View.tsx";
import {css, cx} from "@linaria/core";
import Icon, {type IconType} from "~/components/core/icon";
import Text from "~/components/core/Text.tsx";
import {desktopStyle, notDesktopStyle} from "~/style/responsive";
import useResponsive from "~/hook/useResponsive.ts";
import {hideScrollBarStyle, interactionEffectStyles} from "~/style/common.ts";

export interface EditorNavigationItem<Id> {
    id: Id;
    label: string;
    icon: IconType;
}

interface EditorNavigationBarProps<Id> {
    items: readonly EditorNavigationItem<Id>[];
    currentId: Id;
    onChange: (id: Id) => void;
    openInspector?: boolean;
    onToggleInspector?: () => void;
    children?: ReactNode;
}

function EditorNavigationBar<Id extends string>({
    items,
    currentId,
    onChange,
    openInspector,
    onToggleInspector,
    children,
}: EditorNavigationBarProps<Id>) {
    const {deviceSize} = useResponsive();

    const isNotDesktop = deviceSize === "mobile" || deviceSize === "tablet";

    if (isNotDesktop) {
        return (
            <View
                ui={css`
                    min-height: 0;
                `}
            >
                {children}
                <NotDesktopNav items={items} currentId={currentId} onChange={onChange} />
            </View>
        );
    }

    return (
        <View
            flexDirection={"row"}
            ui={css`
                min-height: 0;
            `}
        >
            <DesktopNav
                items={items}
                currentId={currentId}
                onChange={onChange}
                openInspector={openInspector}
                onToggleInspector={onToggleInspector}
            />
            {children}
        </View>
    );
}

function NotDesktopNav<T extends string>({
    items,
    currentId,
    onChange,
}: Pick<EditorNavigationBarProps<T>, "items" | "currentId" | "onChange">) {
    return (
        <View
            flexDirection={"row"}
            ui={cx(
                css`
                    gap: 12px;
                    align-items: flex-start;
                    overflow-x: scroll;
                    padding: 8px 32px;
                    border-top: 1px solid var(--g-100);
                    min-height: 72px;
                    height: 72px;
                `,
                hideScrollBarStyle,
                notDesktopStyle,
            )}
        >
            {items.map(item => (
                <NavItem key={item.id} item={item} selected={currentId === item.id} onClick={() => onChange(item.id)} />
            ))}
        </View>
    );
}

function DesktopNav<T extends string>({
    items,
    currentId,
    onChange,
    openInspector,
    onToggleInspector,
}: Pick<EditorNavigationBarProps<T>, "items" | "currentId" | "onChange" | "openInspector" | "onToggleInspector">) {
    return (
        <View
            ui={cx(
                css`
                    align-items: flex-start;
                    border-right: 1px solid var(--g-100);
                    width: 72px;
                `,
                desktopStyle,
            )}
        >
            <View
                ui={cx(
                    css`
                        align-items: flex-start;
                        flex: 1;
                        gap: 10px;
                        padding: 8px;
                        overflow-y: scroll;
                    `,
                    hideScrollBarStyle,
                )}
            >
                {items.map(item => (
                    <NavItem
                        key={item.id}
                        item={item}
                        selected={currentId === item.id}
                        onClick={() => onChange(item.id)}
                    />
                ))}
            </View>
            {onToggleInspector && (
                <View
                    ui={cx(
                        css`
                            align-items: center;
                            justify-content: center;
                            width: 72px;
                            height: 72px;
                            rotate: 180deg;
                            cursor: pointer;
                        `,
                        openInspector
                            ? css`
                                  rotate: none;
                              `
                            : undefined,
                    )}
                    onClick={onToggleInspector}
                >
                    <Icon
                        iconType={"DoubleArrowLeft"}
                        width={24}
                        height={24}
                        ui={cx(
                            css`
                                padding: 12px;
                                fill: var(--g-500);
                                border-radius: 12px;
                            `,
                            interactionEffectStyles.strong,
                        )}
                    />
                </View>
            )}
        </View>
    );
}
interface NavItemProps<Id> extends ComponentPropsWithoutRef<"div"> {
    item: EditorNavigationItem<Id>;
    selected: boolean;
}

function NavItem<Id>({item, selected, ...props}: NavItemProps<Id>) {
    return (
        <View
            ui={cx(
                css`
                    align-items: center;
                    justify-content: center;
                    gap: 2px;
                    min-width: 56px;
                    width: 56px;
                    min-height: 56px;
                    height: 56px;
                    border-radius: 12px;
                    cursor: pointer;
                `,
                interactionEffectStyles.strong,
            )}
            {...props}
        >
            <Icon
                iconType={item.icon}
                width={24}
                height={24}
                ui={
                    selected
                        ? css`
                              fill: var(--g-700);
                          `
                        : css`
                              fill: var(--g-400);
                          `
                }
            />
            <Text
                type={"caption2"}
                ui={
                    selected
                        ? css`
                              color: var(--g-700);
                          `
                        : css`
                              color: var(--g-400);
                          `
                }
            >
                {item.label}
            </Text>
        </View>
    );
}

export default EditorNavigationBar;
