import React, {useState} from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import EditorHeader from "@page/editor/EditorHeader";
import {css} from "styled-components";
import EditorNavigationBar from "@page/editor/EditorNavigationBar";
import EditorNavType from "@page/editor/EditorNavType";
import EditorPreview from "@page/editor/EditorPreview";
import EditorInspector from "@page/editor/EditorInspector";
import useResponsive from "@hook/useResponsive";
import {hideScrollBar} from "@util/css.util";

const EditorPage = () => {
    const [currentNavType, setCurrentNavType] = useState<EditorNavType>('design');
    const {deviceSize} = useResponsive();
    const [openInspector, setOpenInspector] = useState(true);

    return (
        <Column $alignItems={'stretch'} $customStyle={css`
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            ${hideScrollBar};
            background: var(--g-100);
        `}>
            <Column $alignItems={'stretch'} flex={1} $customStyle={css`
                overflow: hidden;
                background: white;
                ${(deviceSize === 'mobile' || deviceSize === 'tablet') && css`
                    max-width: 720px;
                    width: 100%;
                    margin: 0 auto;
                `};
            `}>
                <EditorHeader/>
                <EditorNavigationBar
                    currentNavType={currentNavType}
                    onChangeNavType={type => setCurrentNavType(type)}
                    onToggleInspector={() => {
                        setOpenInspector(i => !i);
                    }}
                >
                    {(openInspector || deviceSize !== 'desktop') && (
                        <EditorInspector currentNavType={currentNavType}/>
                    )}
                    {deviceSize === 'desktop' && (
                        <EditorPreview/>
                    )}
                </EditorNavigationBar>
            </Column>
        </Column>
    );
};

export default EditorPage;
