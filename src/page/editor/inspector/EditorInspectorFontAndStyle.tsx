import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorFontAndStyle = (
    {
        value: {weddingDesign},
        update
    }: Props
) => {
    return (
        <EditorInspectorWrapper type={'fontAndStyle'} hasDivider={false}>

        </EditorInspectorWrapper>
    );
};

export default EditorInspectorFontAndStyle;
