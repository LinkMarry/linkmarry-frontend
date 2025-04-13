import React, {useEffect, useState} from 'react';
import {Column} from "@src/userinterface/core/FlexLayout";
import EditorHeader from "@src/feature/editor/component/EditorHeader";
import {css} from "styled-components";
import EditorNavigationBar from "@src/feature/editor/component/navigation-bar/EditorNavigationBar";
import EditorNavigationBarType from "@src/feature/editor/component/navigation-bar/EditorNavigationBarType";
import EditorPreview from "@src/feature/editor/component/EditorPreview";
import EditorInspector from "@src/feature/editor/component/EditorInspector";
import useResponsive from "@src/hook/useResponsive";
import {hideScrollBar} from "@src/userinterface/css.util";
import useEditor from "@src/feature/editor/useEditor";
import {toDomain} from "@src/infrastructure/network/value/WeddingDto";
import CreateWeddingDialog from "@src/feature/editor/component/dialog/CreateWeddingDialog";
import {useNavigate, useSearchParams} from "react-router-dom";
import RemoveWatermarkDialog from "@src/userinterface/specific/dialog/RemoveWatermarkDialog";
import weddingDesignApi from "@src/infrastructure/network/api/wedding-design-api";
import WeddingDesignPreset from "@src/infrastructure/network/value/WeddingDesignPreset";

const EditorPage = () => {
    const [searchParams] = useSearchParams();
    const designId = searchParams.get('designId');
    const numericDesignId = designId ? parseInt(designId) : null;
    const [currentNavType, setCurrentNavType] = useState<EditorNavigationBarType>('design');
    const {deviceSize} = useResponsive();
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
                ${(deviceSize === 'mobile' || deviceSize === 'tablet') && css`
                    max-width: 720px;
                    width: 100%;
                    margin: 0 auto;
                `};
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
                    {(openInspector || deviceSize !== 'desktop') && (
                        <EditorInspector
                            value={wedding}
                            update={updateWedding}
                            currentNavType={currentNavType}
                            weddingDesigns={weddingDesigns}
                            backgroundMusics={musics}
                        />
                    )}
                    {deviceSize === 'desktop' && (
                        <EditorPreview wedding={toDomain(wedding, true)}/>
                    )}
                </EditorNavigationBar>
            </Column>
        </Column>
    );
};

export default EditorPage;
