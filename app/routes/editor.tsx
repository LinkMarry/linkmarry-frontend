import {useEffect, useState} from 'react';
import EditorHeader from "~/editor/component/EditorHeader.tsx";
import {css, cx} from "@linaria/core";
import EditorNavigationBar from "~/editor/component/navigation-bar/EditorNavigationBar.tsx";
import {type EditorNavigationBarType} from "~/editor/component/navigation-bar/EditorNavigationBarType.ts";
import {hideScrollBarStyle} from "~/userinterface/css.util.ts";
import useEditor from "~/editor/useEditor.ts";
import CreateWeddingDialog from "~/editor/component/dialog/CreateWeddingDialog.tsx";
import {useNavigate, useSearchParams} from "react-router";
import RemoveWatermarkDialog from "~/userinterface/specific/dialog/RemoveWatermarkDialog.tsx";
import weddingDesignApi from "~/infrastructure/network/api/wedding-design-api.ts";
import type WeddingDesignPreset from "~/infrastructure/network/value/WeddingDesignPreset.ts";
import {desktopStyle, responsive} from "~/hook/ResponsiveSwitch.tsx";
import EditorPreview from "~/editor/component/EditorPreview.tsx";
import {toDomain} from "~/infrastructure/network/value/WeddingDto.ts";
import EditorInspector from "~/editor/component/EditorInspector.tsx";
import View from "~/userinterface/core/View.tsx";

const Editor = () => {
    const [searchParams] = useSearchParams();
    const designId = searchParams.get('designId');
    const numericDesignId = designId ? parseInt(designId) : null;
    const [currentNavType, setCurrentNavType] = useState<EditorNavigationBarType>('design');
    const [openInspector, setOpenInspector] = useState(true);
    const {wedding, updateWedding, isSaving, musics} = useEditor();
    const [weddingDesigns, setWeddingDesigns] = useState<WeddingDesignPreset[]>();
    const [showRemoveWatermarkDialog, setShowRemoveWatermarkDialog] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const {data} = await weddingDesignApi.getWeddingDesignPresets();
            setWeddingDesigns(data);
        })();
    }, []);

    useEffect(() => {
        const weddingDesign = weddingDesigns?.find(i => i.id === numericDesignId);
        if (weddingDesign) {
            updateWedding(draft => {
                draft.weddingDesign.weddingDesignName = weddingDesign.name;
            });
        }
    }, [numericDesignId, updateWedding, weddingDesigns]);

    return (
        <View ui={cx(
            css`
                width: 100vw;
                height: 100dvh;
                overflow: hidden;
                background: var(--g-100);
            `,
            hideScrollBarStyle
        )}>
            {showRemoveWatermarkDialog && (
                <RemoveWatermarkDialog
                    url={wedding.url}
                    dismiss={() => setShowRemoveWatermarkDialog(false)}
                />
            )}
            <CreateWeddingDialog
                value={wedding}
                update={updateWedding}
            />
            <View ui={css`
                flex: 1;
                overflow: hidden;
                background: white;

                ${responsive.notDesktop} {
                    max-width: 720px;
                    width: 100%;
                    margin: 0 auto;
                }
            `}>
                <EditorHeader
                    onShowPreview={() => {
                        navigate(`/wedding/${wedding.url}`);
                    }}
                    onRemoveWatermark={() => {
                        setShowRemoveWatermarkDialog(true);
                    }}
                    isSaving={isSaving}
                />
                <EditorNavigationBar
                    currentNavType={currentNavType}
                    onChangeNavType={type => setCurrentNavType(type)}
                    openInspector={openInspector}
                    onToggleInspector={() => {
                        setOpenInspector(i => !i);
                    }}
                >
                    {openInspector && (
                        <EditorInspector
                            value={wedding}
                            update={updateWedding}
                            currentNavType={currentNavType}
                            weddingDesigns={weddingDesigns}
                            backgroundMusics={musics}
                        />
                    )}
                    <EditorPreview wedding={toDomain(wedding, true)} ui={desktopStyle}/>
                </EditorNavigationBar>
            </View>
        </View>
    );
};

export default Editor;
