import React, {useEffect, useState} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import EditorHeader from "@page/editor/EditorHeader";
import {css} from "styled-components";
import EditorNavigationBar from "@page/editor/EditorNavigationBar";
import EditorNavType from "@page/editor/EditorNavType";
import EditorPreview from "@page/editor/EditorPreview";
import EditorInspector from "@page/editor/inspector/EditorInspector";
import useResponsive from "@hook/useResponsive";
import {hideScrollBar} from "@util/css.util";
import useWeddingDesigns from "@hook/useWeddingDesigns";
import useBackgroundMusics from "@hook/useBackgroundMusics";
import useWedding from "@hook/useWedding";
import {toDomain} from "@remote/value/WeddingDto";
import CreateWeddingDialog from "@page/editor/dialog/CreateWeddingDialog";
import {useNavigate, useSearchParams} from "react-router-dom";
import RemoveWatermarkDialog from "@src/component/dialog/RemoveWatermarkDialog";
import useAuth from "@hook/useAuth";

const EditorPage = () => {
    const [searchParams] = useSearchParams();
    const designId = searchParams.get('designId');
    const numericDesignId = designId ? parseInt(designId) : null;
    const [currentNavType, setCurrentNavType] = useState<EditorNavType>('design');
    const {deviceSize} = useResponsive();
    const [openInspector, setOpenInspector] = useState(true);
    const {wedding, updateWedding, isSaveing} = useWedding();
    const {weddingDesigns} = useWeddingDesigns();
    const {musics} = useBackgroundMusics();
    const [showRemoveWatermarkDialog, setShowRemoveWatermarkDialog] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const weddingDesign = weddingDesigns?.find(i => i.id === numericDesignId);
        if (weddingDesign) {
            updateWedding(draft => {
                draft.weddingDesign.weddingDesignName = weddingDesign.name;
            });
        }
    }, [numericDesignId, weddingDesigns]);

    return (
        <Column $alignItems={'stretch'} $ui={css`
            width: 100vw;
            height: 100vh;
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
                    isSaving={isSaveing}
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
