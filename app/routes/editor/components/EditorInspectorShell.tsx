import View from "~/components/core/View.tsx";
import {css, cx, type LinariaClassName} from "@linaria/core";
import {responsive} from "~/style/responsive";
import type {PropsWithChildren} from "react";

interface EditorInspectorProps extends PropsWithChildren {
    ui?: LinariaClassName;
}

const EditorInspectorShell = ({ui, children}: EditorInspectorProps) => {
    return (
        <View
            ui={cx(
                css`
                    min-width: 412px;
                    width: 412px;

                    ${responsive.notDesktop} {
                        min-width: 0;
                        width: auto;
                        flex: 1;
                        min-height: 0;
                    }
                `,
                ui,
            )}
        >
            {children}
        </View>
    );
};

export default EditorInspectorShell;
