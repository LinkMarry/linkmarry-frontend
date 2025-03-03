import React, {useState} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import EditorHeader from "@page/editor/EditorHeader";
import {css} from "styled-components";
import EditorNavigationBar from "@page/editor/EditorNavigationBar";
import EditorNavType from "@page/editor/EditorNavType";
import EditorPreview from "@page/editor/EditorPreview";

const EditorPage = () => {
    const [currentNavType, setCurrentNavType] = useState<EditorNavType>('design');

    return (
        <Column $alignItems={'stretch'} $customStyle={css`
            width: 100vw;
            height: 100vh;
        `}>
            <EditorHeader/>
            <Row $alignItems={'stretch'} flex={1} $customStyle={css`
                min-height: 0;
            `}>
                <EditorNavigationBar currentNavType={currentNavType} onChangeNavType={type => setCurrentNavType(type)}/>
                <EditorPreview/>
            </Row>
        </Column>
    );
};

export default EditorPage;
