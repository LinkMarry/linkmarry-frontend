import {useEffect, useState} from 'react';
import {Column} from "@src/userinterface/core/FlexLayout";
import EditorHeader from "@src/feature/editor/component/EditorHeader";
import {css} from "styled-components";
import EditorNavigationBar from "@src/feature/editor/component/navigation-bar/EditorNavigationBar";
import {type EditorNavigationBarType} from "@src/feature/editor/component/navigation-bar/EditorNavigationBarType";
import {hideScrollBar} from "@src/userinterface/css.util";
import useEditor from "@src/feature/editor/useEditor";
import CreateWeddingDialog from "@src/feature/editor/component/dialog/CreateWeddingDialog";
import {useNavigate, useSearchParams} from "react-router-dom";
import RemoveWatermarkDialog from "@src/userinterface/specific/dialog/RemoveWatermarkDialog";
import weddingDesignApi from "@src/infrastructure/network/api/wedding-design-api";
import type WeddingDesignPreset from "@src/infrastructure/network/value/WeddingDesignPreset";
import {desktopStyle, notDesktopStyle, responsive} from "@src/hook/ResponsiveSwitch.tsx";
import EditorPreview from "@src/feature/editor/component/EditorPreview.tsx";
import {toDomain} from "@src/infrastructure/network/value/WeddingDto.ts";
import EditorInspector from "./component/EditorInspector";

const EditorPage = () => {
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
        <Column $alignItems={'stretch'} $ui={css`
            width: 100vw;
            height: 100dvh;
            overflow: hidden;
            background: var(--g-100);
            ${hideScrollBar};
        `}>
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
            <Column $alignItems={'stretch'} $flex={1} $ui={css`
                overflow: hidden;
                background: white;
                ${responsive.notDesktop(css`
                    max-width: 720px;
                    width: 100%;
                    margin: 0 auto;
                `)};
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
                            ui={css`
                                ${notDesktopStyle};
                            `}
                        />
                    )}
                    <EditorPreview wedding={toDomain(wedding, true)} ui={css`
                        ${desktopStyle};
                    `}/>
                </EditorNavigationBar>
            </Column>
        </Column>
    );
};

export default EditorPage;
