import React, {useState} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import TabBar from "@designsystem/component/TabBar";
import PhotoUploadBox from "@src/component/PhotoUploadBox";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import {css} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import CustomStyle from "@designsystem/core/CustomStyle";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import {OpeningText, openingTextList} from "@remote/value/WeddingDesign";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";
import WeddingDesignPreset from "@remote/value/WeddingDesignPreset";
import Opening, {openingList, openingMap} from "@remote/enumeration/Opening";
import Select from "@designsystem/component/Select";
import {groupByCategory} from "@remote/value/GroupedCategory";

interface Props extends Binding<WeddingDto> {
}

export interface WeddingDesignProps {
    weddingDesigns?: WeddingDesignPreset[];
}

const EditorInspectorDesign = (
    {
        value: {weddingDesign},
        update,
        weddingDesigns
    }: Props & WeddingDesignProps
) => {
    const groupedCategories = weddingDesigns ? groupByCategory(weddingDesigns) : undefined;
    const [selectedCategory, setSelectedCategory] = useState(groupedCategories?.[0]?.category);
    const categories = groupedCategories?.map(i => i.category);
    const selectedWeddingDesigns = groupedCategories?.find(i => i.category === selectedCategory)?.items;

    return (
        <EditorInspectorWrapper type={'design'} hasDivider={false}>
            {/*디자인*/}
            <Column $alignItems={'stretch'} gap={12}>
                {categories ? (
                    <TabBar items={categories} selectedTab={categories.indexOf(selectedCategory!)} onChange={tab => {
                        setSelectedCategory(categories[tab]);
                    }}/>
                ) : null}
                <CustomStyle $customStyle={css`
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-row-gap: 32px;
                    grid-column-gap: 12px;
                `}>
                    {/*todo shimmer*/}
                    {selectedWeddingDesigns ? selectedWeddingDesigns.map((design, index) => (
                        <Item key={index} design={design} selected={index === 3}/>
                    )) : null}
                </CustomStyle>
            </Column>

            {/*대표 사진*/}
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>대표 사진</Text>
                <PhotoUploadBox
                    id={'EditorInspectorDesign-titleImgUrl'}
                    value={weddingDesign.titleImgUrl}
                    onChange={value => update(draft => {
                        draft.weddingDesign.titleImgUrl = value;
                    })}
                />
            </Column>

            {/*오프닝*/}
            <Column $alignItems={'stretch'} gap={12}>
                <Column $alignItems={'stretch'} gap={12}>
                    <Text type={'p3'} bold={true}>오프닝 애니메이션</Text>
                    <SegmentedButton
                        items={openingList.map(i => openingMap[i].korean)}
                        selectedTab={openingList.indexOf(weddingDesign.opening)}
                        onChange={tab => {
                            update(draft => {
                                draft.weddingDesign.opening = openingList[tab];
                            })
                        }}
                    />
                </Column>
                <Column $alignItems={'stretch'} gap={12}>
                    <Text type={'p3'} bold={true}>문구</Text>
                    <Select
                        selected={openingTextList.indexOf(weddingDesign.openingText)} items={openingTextList}
                        OnChange={index => {
                            update(draft => {
                                draft.weddingDesign.openingText = openingTextList[index] as OpeningText;
                            })
                        }}
                    />
                </Column>
            </Column>
        </EditorInspectorWrapper>
    );
};

interface ItemProps {
    design: WeddingDesignPreset;
    selected: boolean;
}

const Item = ({design, selected}: ItemProps) => {
    return (
        <Column $alignItems={'stretch'} gap={8}>
            <CustomStyle
                as={'img'}
                src={design.img}
                $customStyle={css`
                    aspect-ratio: 9 / 16;
                `}
            />
            <Row $alignItems={'center'}>
                <Text type={'p3'} customStyle={css`
                    ${selected && css`
                        color: var(--g-400);
                    `};
                `}>{design.name}</Text>
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
