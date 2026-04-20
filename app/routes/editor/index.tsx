import { css } from "@linaria/core";
import useWeddingInvitationEditorScreen from "~/routes/editor/useWeddingInvitationEditorScreen.ts";
import CreateWeddingDialog from "~/routes/editor/component/CreateWeddingDialog.tsx";
import RemoveWatermarkDialog from "~/components/RemoveWatermarkDialog.tsx";
import { desktopStyle } from "~/components/responsive.tsx";
import EditorPreview from "~/routes/editor/component/EditorPreview.tsx";
import EditorInspector from "~/routes/editor/component/EditorInspector.tsx";
import EditorShell from "~/components/EditorShell.tsx";
import EditorHeader from "~/components/EditorHeader.tsx";
import EditorNavigationBar from "~/components/EditorNavigationBar.tsx";
import Button from "~/components/core/Button.tsx";
import { editorNavigationBarTypeList, editorNavigationBarTypeMap } from "~/routes/editor/component/EditorNavigationBarType.ts";
import View from "~/components/core/View.tsx";


const WeddingInvitationEditorScreen = () => {
    const {
        wedding,
        updateWedding,
        isSaving,
        musics,
        selectedNav,
        setSelectedNav,
        openInspector,
        toggleInspector,
        weddingDesigns,
        showRemoveWatermarkDialog,
        setShowRemoveWatermarkDialog,
        handleShowPreview,
        handleRemoveWatermark
    } = useWeddingInvitationEditorScreen();

    const navItems = editorNavigationBarTypeList.map(type => ({
        id: type,
        label: editorNavigationBarTypeMap[type].navigationBarText,
        icon: editorNavigationBarTypeMap[type].icon
    }));

    return (
        <EditorShell
            dialogs={(
                <>
                    <RemoveWatermarkDialog
                        show={showRemoveWatermarkDialog}
                        url={wedding.url}
                        dismiss={() => setShowRemoveWatermarkDialog(false)}
                    />
                    <CreateWeddingDialog
                        value={wedding}
                        update={updateWedding}
                    />
                </>
            )}

            header={(
                <EditorHeader
                    statusText={isSaving ? '저장 중...' : undefined}
                    actions={(
                        <>
                            <View flexDirection={"row"} ui={css`
                                align-items: flex-start;
                                gap: 8px;
                                
                                @media (min-width: 1025px) {
                                    display: none;
                                }
                            `}>
                                <Button text={'미리보기'} size={'small'} buttonType={'tonal'} onClick={handleShowPreview} />
                                <Button text={'워터마크 제거'} size={'small'} onClick={handleRemoveWatermark} />
                            </View>
                            <Button text={'워터마크 제거'} size={'medium'} onClick={handleRemoveWatermark} ui={desktopStyle} />
                        </>
                    )}
                />
            )}
            navigationBar={(
                <EditorNavigationBar
                    items={navItems}
                    currentId={selectedNav}
                    onChange={id => setSelectedNav(id as any)}
                    openInspector={openInspector}
                    onToggleInspector={toggleInspector}
                />
            )}
            inspector={openInspector && (
                <EditorInspector
                    value={wedding}
                    update={updateWedding}
                    currentNavType={selectedNav}
                    weddingDesigns={weddingDesigns}
                    backgroundMusics={musics}
                />
            )}
            preview={(
                <EditorPreview wedding={wedding} ui={desktopStyle} />
            )}
        />
    );
};


export default WeddingInvitationEditorScreen;

