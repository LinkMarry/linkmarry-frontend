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
import Dialog from "@designsystem/pattern/dialog/Dialog";
import Input from "@designsystem/component/Input";
import {toDomain} from "@remote/value/WeddingDto";

const EditorPage = () => {
    const [currentNavType, setCurrentNavType] = useState<EditorNavType>('design');
    const {deviceSize} = useResponsive();
    const [openInspector, setOpenInspector] = useState(true);
    const {wedding, updateWedding, saveWedding, isCreateMode} = useWedding();
    const {weddingDesigns} = useWeddingDesigns();
    const {musics} = useBackgroundMusics();
    const [showCreateWeddingDialog, setShowCreateWeddingDialog] = useState(isCreateMode);

    return (
        <Column $alignItems={'stretch'} $ui={css`
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            ${hideScrollBar};
            background: var(--g-100);
        `}>
            {showCreateWeddingDialog && (
                <Dialog
                    title={'새 디자인 만들기'}
                    description={'청첩장에 사용할 링크를 입력해 주세요.'}
                    dismiss={() => {
                    }}
                    confirmButtonProps={{
                        text: '만들기',
                        enabled: wedding.url.length > 0,
                        onClick: () => setShowCreateWeddingDialog(false)
                    }}
                >
                    <Input value={`wedding/${wedding.url}`} onChange={event => updateWedding(draft => {
                        draft.url = event.target.value.slice(8);
                    })} placeholder={'링크'}/>
                </Dialog>
            )}
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
                        // todo:
                    }}
                    onSave={saveWedding}
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
