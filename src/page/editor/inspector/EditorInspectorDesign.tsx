import React, {useState} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import TabBar, {dummyTabBarItems} from "@designsystem/component/TabBar";
import PhotoUploadBox from "@src/component/PhotoUploadBox";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import Input from "@designsystem/component/Input";
import {css} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import CustomStyle from "@designsystem/core/CustomStyle";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import WeddingDesign from "@remote/value/WeddingDesign";
import Binding from "@src/interface/Binding";

interface Props extends Binding<WeddingDesign> {
}

const EditorInspectorDesign = ({value, onChange}: Props) => {
    const [selectedOpeningAnimationTab, setSelectedOpeningAnimationTab] = useState(0);

    return (
        <EditorInspectorWrapper title={'디자인'}>
            {/*디자인*/}
            <Column $alignItems={'stretch'} gap={12}>
                <TabBar items={dummyTabBarItems} selectedTab={0} onChange={tab => {
                }}/>
                <CustomStyle $customStyle={css`
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-row-gap: 32px;
                    grid-column-gap: 12px;
                `}>
                    {Array.from({length: 5}).map((_, index) => (
                        <Item key={index} text={`item ${index}`} selected={index === 3}/>
                    ))}
                </CustomStyle>
            </Column>

            {/*대표 사진*/}
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>대표 사진</Text>
                <PhotoUploadBox title={'사진을 첨부해 주세요'} content={'업로드한 사진은 대표 이미지로 등록됩니다.'}/>
            </Column>

            {/*오프닝*/}
            <Column $alignItems={'stretch'} gap={12}>
                <Column $alignItems={'stretch'} gap={12}>
                    <Text type={'p3'} bold={true}>오프닝 애니메이션</Text>
                    <SegmentedButton
                        items={[
                            '선택안함',
                            '레터링',
                            '타이핑'
                        ]}
                        selectedTab={selectedOpeningAnimationTab}
                        onChange={tab => setSelectedOpeningAnimationTab(tab)}
                    />
                </Column>
                <Column $alignItems={'stretch'} gap={12}>
                    <Text type={'p3'} bold={true}>문구</Text>
                    <Input hasLabel={false}/>
                </Column>
            </Column>
        </EditorInspectorWrapper>
    );
};

interface ItemProps {
    text: string;
    selected: boolean;
}

const Item = ({text, selected}: ItemProps) => {
    return (
        <Column $alignItems={'stretch'} gap={8}>
            <div style={{
                aspectRatio: '9 / 16',
                background: 'gray'
            }}></div>
            <Row $alignItems={'center'}>
                <Text type={'p3'} customStyle={css`
                    ${selected && css`
                        color: var(--g-400);
                    `};
                `}>{text}</Text>
                {selected && (
                    <Icon iconType={IconType.CheckLine} width={18} height={18} customStyle={css`
                        fill: #22A2FC;
                    `}/>
                )}
            </Row>
        </Column>
    )
}

export default EditorInspectorDesign;
