import {Text, TabBar, SegmentedButton, Icon, Select, Loading, View} from "~/components";
import {type ComponentPropsWithoutRef, useEffect, useState} from "react";

import PhotoUploadBox from "~/routes/editor/components/PhotoUploadBox.tsx";

import EditorInspectorWrapper from "~/routes/editor/wedding-invitation/components/EditorInspectorWrapper.tsx";
import {type OpeningText, openingTextList, type WeddingDesignPreset, type Wedding} from "~/domain";
import type Binding from "~/lib/Binding.ts";
import {openingList, openingMap} from "~/api/enumeration/Opening.ts";

import {groupedByCategory} from "~/domain";

import {css, cx} from "@linaria/core";

export interface WeddingDesignProps extends Binding<Wedding> {
    weddingDesigns?: WeddingDesignPreset[];
}

const EditorInspectorDesign = ({value: {url, weddingDesign}, update, weddingDesigns}: WeddingDesignProps) => {
    const groupedCategories = weddingDesigns && groupedByCategory(weddingDesigns);
    const [selectedCategory, setSelectedCategory] = useState<string>();
    const categories = groupedCategories?.map(i => i.category);
    const selectedWeddingDesigns = groupedCategories?.find(i => i.category === selectedCategory)?.items;

    useEffect(() => {
        if (groupedCategories && selectedCategory === undefined) {
            setSelectedCategory(groupedCategories[0].category);
        }
    }, [groupedCategories]);

    return (
        <EditorInspectorWrapper type={"design"} hasDivider={false}>
            {/*디자인*/}
            <View
                ui={css`
                    gap: 12px;
                `}
            >
                {categories ? (
                    <TabBar
                        items={categories}
                        selectedTab={categories.indexOf(selectedCategory!)}
                        onChange={tab => {
                            setSelectedCategory(categories[tab]);
                        }}
                    />
                ) : (
                    <Loading
                        ui={css`
                            margin: 40px 0;
                        `}
                    />
                )}
                <View
                    ui={css`
                        display: grid !important;
                        grid-template-columns: repeat(3, 1fr);
                        grid-row-gap: 32px;
                        grid-column-gap: 12px;
                    `}
                >
                    {selectedWeddingDesigns &&
                        selectedWeddingDesigns.map((design, index) => (
                            <Item
                                key={index}
                                design={design}
                                selected={design.name === weddingDesign.weddingDesignName}
                                onClick={() =>
                                    update(draft => {
                                        draft.weddingDesign.weddingDesignName = design.name;
                                    })
                                }
                            />
                        ))}
                </View>
            </View>

            {/*대표 사진*/}
            <View
                ui={cx(
                    css`
                        display: flex;
                        flex-direction: column;
                        align-items: stretch;
                    `,
                    css`
                        gap: 12px;
                    `,
                )}
            >
                <Text type={"p3"} bold={true}>
                    대표 사진
                </Text>
                <PhotoUploadBox
                    id={"EditorInspectorDesign-titleImgUrl"}
                    value={weddingDesign.titleImgUrl}
                    weddingUrl={url}
                    onChange={value =>
                        update(draft => {
                            draft.weddingDesign.titleImgUrl = value;
                        })
                    }
                />
            </View>

            {/*오프닝*/}
            <View
                ui={cx(
                    css`
                        display: flex;
                        flex-direction: column;
                        align-items: stretch;
                    `,
                    css`
                        gap: 12px;
                    `,
                )}
            >
                <View
                    ui={cx(
                        css`
                            display: flex;
                            flex-direction: column;
                            align-items: stretch;
                        `,
                        css`
                            gap: 12px;
                        `,
                    )}
                >
                    <Text type={"p3"} bold={true}>
                        오프닝 애니메이션
                    </Text>
                    <SegmentedButton
                        items={openingList.map(i => openingMap[i].korean)}
                        selectedTab={openingList.indexOf(weddingDesign.opening)}
                        onChange={tab => {
                            update(draft => {
                                draft.weddingDesign.opening = openingList[tab];
                            });
                        }}
                    />
                </View>
                <View
                    ui={css`
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                        align-items: stretch;
                    `}
                >
                    <Text type={"p3"} bold={true}>
                        문구
                    </Text>
                    <Select
                        selected={openingTextList.indexOf(weddingDesign.openingText)}
                        items={[...openingTextList]}
                        OnChange={index => {
                            update(draft => {
                                draft.weddingDesign.openingText = openingTextList[index] as OpeningText;
                            });
                        }}
                    />
                </View>
            </View>
        </EditorInspectorWrapper>
    );
};

interface ItemProps extends ComponentPropsWithoutRef<"div"> {
    design: WeddingDesignPreset;
    selected: boolean;
}

const Item = ({design, selected, ...props}: ItemProps) => {
    return (
        <View ui={itemContainerStyle} {...props}>
            <View
                as={"img"}
                src={design.img}
                ui={css`
                    aspect-ratio: 9 / 16;
                    object-fit: cover;
                    border-radius: 8px;
                `}
            />
            <View
                flexDirection={"row"}
                ui={css`
                    display: flex;
                    align-items: center;
                `}
            >
                <Text type={"p3"} ui={cx(itemTextStyle, selected ? itemTextSelectedStyle : itemTextUnselectedStyle)}>
                    {design.name}
                </Text>
                {selected && (
                    <Icon
                        iconType={"CheckLine"}
                        width={18}
                        height={18}
                        ui={css`
                            fill: #22a2fc;
                        `}
                    />
                )}
            </View>
        </View>
    );
};

export default EditorInspectorDesign;

const itemContainerStyle = css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: stretch;
    cursor: pointer;
    min-width: 0;
`;

const itemTextStyle = css`
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const itemTextSelectedStyle = css``;

const itemTextUnselectedStyle = css`
    color: var(--g-400);
`;
