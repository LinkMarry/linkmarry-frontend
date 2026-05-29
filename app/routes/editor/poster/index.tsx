import {View, Button, Text, Input} from "~/components";
import React from "react";
import EditorShell from "~/routes/editor/components/EditorShell.tsx";
import EditorHeader from "~/routes/editor/components/EditorHeader.tsx";
import EditorNavigationBar from "~/routes/editor/components/EditorNavigationBar.tsx";
import EditorInspectorShell from "~/routes/editor/components/EditorInspectorShell.tsx";

import {css, cx} from "@linaria/core";

import {desktopStyle} from "~/style/responsive";
import {useWeddingPosterEditor} from "./hook.ts";

import EditorInspectorWrapper from "~/routes/editor/invitation/[url]/components/EditorInspectorWrapper.tsx";
import type Binding from "~/lib/Binding.ts";
import type {Poster, PosterPreset} from "~/domain";
import {
    WeddingPosterEditorNavigationBarTypeList,
    weddingPosterEditorNavigationBarTypeRecord,
} from "~/routes/editor/domain.ts";

const navItems = WeddingPosterEditorNavigationBarTypeList.map(type => ({
    id: type,
    label: weddingPosterEditorNavigationBarTypeRecord[type].navigationBarText,
    icon: weddingPosterEditorNavigationBarTypeRecord[type].icon,
}));

const WeddingPosterEditorScreen = () => {
    const {selectedNav, setSelectedNav, poster, updatePoster, openInspector, toggleInspector} =
        useWeddingPosterEditor();

    return (
        <EditorShell
            header={
                <EditorHeader
                    actions={
                        <View
                            flexDirection={"row"}
                            ui={cx(
                                css`
                                    align-items: flex-start;
                                    gap: 8px;
                                `,
                                desktopStyle,
                            )}
                        >
                            <Button text={"구매하기"} size={"small"} buttonType={"tonal"} />
                            <Button text={"저장하기"} size={"small"} />
                        </View>
                    }
                />
            }
            navigationBar={
                <EditorNavigationBar
                    items={navItems}
                    currentId={selectedNav}
                    onChange={id => setSelectedNav(id)}
                    openInspector={openInspector}
                    onToggleInspector={toggleInspector}
                />
            }
            inspector={
                <EditorInspectorShell>
                    <EditorInspectorContent value={poster} update={updatePoster} />
                </EditorInspectorShell>
            }
            preview={
                null
                // <EditorPreview
                //     wedding={undefined}
                // />
            }
        />
    );
};

interface EditorInspectorContentProps extends Binding<Poster> {
    posterPresets?: PosterPreset[];
}

const EditorInspectorContent = ({update}: EditorInspectorContentProps) => {
    return (
        <EditorInspectorWrapper type={"bride"}>
            <View
                ui={css`
                    gap: 12px;
                `}
            >
                <Text type={"p3"} bold={true}>
                    신부 성함
                </Text>
                <View
                    ui={css`
                        gap: 8px;
                    `}
                >
                    <View
                        flexDirection={"row"}
                        ui={css`
                            gap: 8px;
                        `}
                    >
                        <Input
                            placeholder={"성"}
                            value={"baseInfo.brideFirstName"}
                            onChange={event =>
                                update(draft => {
                                    // draft.baseInfo.brideFirstName = event.target.value;
                                })
                            }
                        />
                        <Input
                            placeholder={"성"}
                            value={"baseInfo.brideFirstName"}
                            onChange={event =>
                                update(draft => {
                                    // draft.baseInfo.brideFirstName = event.target.value;
                                })
                            }
                        />
                    </View>
                </View>
            </View>
        </EditorInspectorWrapper>
    );
};

export default WeddingPosterEditorScreen;
