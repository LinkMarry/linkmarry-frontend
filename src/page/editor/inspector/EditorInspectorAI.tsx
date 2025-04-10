import React from 'react';
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Input from "@designsystem/component/Input";
import PhotoUploadBox from "@src/component/PhotoUploadBox";
import {css} from "styled-components";

const EditorInspectorAi = () => {
    return (
        <EditorInspectorWrapper type={'ai'} toggle={{
            checked: true,
            OnChange: checked => {}
        }}>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>디자인</Text>
                <Input/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>사진 첨부</Text>
                <PhotoUploadBox id={'EditorInspectorAi-photo'} value={0} onChange={newValue => {}}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>미리보기</Text>
                <Column $alignItems={'stretch'} $gap={12} $ui={css`
                    width: 300px;
                `}>

                </Column>
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorAi;
