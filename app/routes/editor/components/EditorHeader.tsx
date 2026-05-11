import {Logo, Spacer, Text, View} from "~/components";
import {css} from "@linaria/core";

import {useNavigate} from "react-router";

import {responsive} from "~/style/responsive";

import React, {type ReactNode} from "react";

interface EditorHeaderProps {
    logo?: ReactNode;
    statusText?: string;
    actions?: ReactNode;
}

const EditorHeader = ({logo, statusText, actions}: EditorHeaderProps) => {
    const navigate = useNavigate();

    return (
        <View
            as={"header"}
            flexDirection={"row"}
            ui={css`
                align-items: center;
                min-height: 72px;
                padding: 0 24px;
                border-bottom: 1px solid var(--g-100);

                ${responsive.notDesktop} {
                    min-height: 60px;
                    padding: 12px 16px;
                }
            `}
        >
            {logo || (
                <Logo
                    ui={css`
                        cursor: pointer;
                    `}
                    onClick={() => navigate("/")}
                />
            )}
            <Spacer />
            <View
                flexDirection={"row"}
                ui={css`
                    gap: 20px;
                    align-items: center;
                `}
            >
                {statusText && (
                    <Text
                        type={"p3"}
                        bold={true}
                        ui={css`
                            color: var(--g-700);
                        `}
                    >
                        {statusText}
                    </Text>
                )}
                {actions}
            </View>
        </View>
    );
};

export default EditorHeader;
