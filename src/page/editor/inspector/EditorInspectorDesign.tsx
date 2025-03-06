import React, {useEffect, useState} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import TabBar from "@designsystem/component/TabBar";
import PhotoUploadBox from "@src/component/PhotoUploadBox";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import {css} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import View from "@designsystem/core/View";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import {OpeningText, openingTextList} from "@remote/value/WeddingDesign";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";
import WeddingDesignPreset from "@remote/value/WeddingDesignPreset";
import {openingList, openingMap} from "@remote/enumeration/Opening";
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
    const [selectedCategory, setSelectedCategory] = useState<string>();
    const categories = groupedCategories?.map(i => i.category);
    const selectedWeddingDesigns = groupedCategories?.find(i => i.category === selectedCategory)?.items;

    useEffect(() => {
        setSelectedCategory(groupedCategories?.[0]?.category);
    }, [weddingDesigns]);

    return (
        <EditorInspectorWrapper type={'design'} hasDivider={false}>
            {/*디자인*/}
            <Column alignment={'stretch'} gap={12}>
                {categories ? (
                    <TabBar items={categories} selectedTab={categories.indexOf(selectedCategory!)} onChange={tab => {
                        setSelectedCategory(categories[tab]);
                    }}/>
                ) : null}
                <View ui={css`
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-row-gap: 32px;
                    grid-column-gap: 12px;
                `}>
                    {/*todo shimmer*/}
                    {selectedWeddingDesigns ? selectedWeddingDesigns.map((design, index) => (
                        <Item key={index} design={design} selected={index === 3}/>
                    )) : null}
                </View>
            </Column>

            {/*대표 사진*/}
            <Column alignment={'stretch'} gap={12}>
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
            <Column alignment={'stretch'} gap={12}>
                <Column alignment={'stretch'} gap={12}>
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
                <Column alignment={'stretch'} gap={12}>
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
        <Column alignment={'stretch'} gap={8}>
            <View
                as={'img'}
                src={design.img}
                ui={css`
                    aspect-ratio: 9 / 16;
                `}
            />
            <Row alignment={'center'}>
                <Text type={'p3'} ui={css`
                    ${selected && css`
                        color: var(--g-400);
                    `};
                `}>{design.name}</Text>
                {selected && (
                    <Icon iconType={IconType.CheckLine} width={18} height={18} ui={css`
                        fill: #22A2FC;
                    `}/>
                )}
            </Row>
        </Column>
    )
}

export default EditorInspectorDesign;
