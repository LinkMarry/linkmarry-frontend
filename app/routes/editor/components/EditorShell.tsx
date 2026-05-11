import {View} from "~/components";
import React, {type ReactNode} from "react";
import {css, cx} from "@linaria/core";

import {responsive} from "~/style/responsive";
import {hideScrollBarStyle} from "~/style/common.ts";

interface EditorShellProps {
    header: ReactNode;
    navigationBar: ReactNode;
    inspector: ReactNode;
    preview: ReactNode;
    dialogs?: ReactNode;
}

const EditorShell = ({header, navigationBar, inspector, preview, dialogs}: EditorShellProps) => {
    return (
        <View
            ui={cx(
                css`
                    width: 100vw;
                    height: 100dvh;
                    overflow: hidden;
                    background: var(--g-100);
                `,
                hideScrollBarStyle,
            )}
        >
            {dialogs}
            <View
                ui={css`
                    flex: 1;
                    overflow: hidden;
                    background: white;

                    ${responsive.notDesktop} {
                        max-width: 720px;
                        width: 100%;
                        margin: 0 auto;
                    }
                `}
            >
                {header}
                <View
                    flexDirection={"row"}
                    ui={css`
                        flex: 1;
                        min-height: 0;

                        ${responsive.notDesktop} {
                            flex-direction: column-reverse !important;
                        }
                    `}
                >
                    {navigationBar}
                    <View
                        flexDirection={"row"}
                        ui={css`
                            flex: 1;
                            min-height: 0;
                        `}
                    >
                        {inspector}
                        {preview}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default EditorShell;
