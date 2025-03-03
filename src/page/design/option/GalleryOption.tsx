import React, {ChangeEvent, useRef, useState} from 'react';
import styled, {css} from "styled-components";
import {Column, Row} from "@designsystem/core/FlexLayout";
import OptionSegmentedButton from "@page/design/component/OptionSegmentedButton";
import OptionLabel from "@page/design/component/OptionLabel";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import ImgDesign, {imgDesignRecord, imgDesigns} from "@remote/enumeration/ImgDesign";
import fileApi from "@remote/api/FileApi";
import Text from "@designsystem/component/Text";
import LoadingOverlay from "@src/component/LoadingOverlay";
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";
import VoidInput from "@src/component/VoidInput";
import AddDismissButton from "@src/component/AddDismissButton";

interface GalleryOptionProps {
    imgList: string[];
    imgDesign: ImgDesign;
    onChangeImgDesign: (imgDesign: ImgDesign) => void;
    onChangeImgList: (imgList: string[]) => void;
}

function GalleryOption(
    {
        imgList,
        imgDesign,
        onChangeImgDesign,
        onChangeImgList
    }: GalleryOptionProps
) {
    const [isFetching, setIsFetching] = useState(false);
    const imageFieldRef = useRef<HTMLInputElement>(null);
    const uploadImages = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) {
            console.log('files is null');
            return;
        }
        if (files.length > 30) {
            alert('사진은 최대 30장까지 업로드 가능합니다.');
            if (imageFieldRef.current) {
                imageFieldRef.current.value = '';
            }
            return;
        }
        console.log('uploadImages');
        setIsFetching(true);
        const uploadPromises = Array.from(files).map(file => fileApi.upload(file));
        const results = await Promise.allSettled(uploadPromises);
        const fulfilledResults: string[] = results
            .map(result => result.status === 'fulfilled' ? result.value.data.url : null)
            .filter((result): result is string => result !== null);
        onChangeImgList([...fulfilledResults, ...imgList]);
        setIsFetching(false);
        if (imageFieldRef.current) {
            imageFieldRef.current.value = '';
        }
    };

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const reorderedItems = Array.from(imgList);
        const [removed] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, removed);

        onChangeImgList(reorderedItems);
    };

    return (
        <S.container>
            <Column gap={20} style={{overflow: 'hidden'}} $alignItems={'stretch'} flex={1}>
                <Column gap={8} style={{overflow: 'hidden'}} $alignItems={'stretch'}>
                    <Row gap={12} style={{overflow: 'hidden'}}>
                        <OptionLabel label={'사진'} style={{alignSelf: 'flex-start'}}/>
                        <div style={{display: 'flex', position: 'relative', overflowX: 'scroll', flex: 1}}>
                            <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable droppableId={'gallery-droppable'} direction={'horizontal'}>
                                    {(provided) => (
                                        <Row gap={4} {...provided.droppableProps} ref={provided.innerRef}>
                                            <S.addImageContainer htmlFor={'choose-gallery-image'}>
                                                <Icon iconType={IconType.AddLine} size={24} customStyle={css`
                                                    fill: var(--g-600);
                                                `}/>
                                            </S.addImageContainer>
                                            <VoidInput
                                                id={'choose-gallery-image'}
                                                ref={imageFieldRef}
                                                onChange={uploadImages}
                                                type={'file'}
                                                accept={'image/*'}
                                                multiple={true}
                                            />
                                            {imgList.map((img, index) => (
                                                <Draggable
                                                    key={`${index}`}
                                                    draggableId={`${index}`}
                                                    index={index}
                                                >{provided => (
                                                    <AddDismissButton
                                                        key={index}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        ref={provided.innerRef}
                                                        dismiss={() => {
                                                            const copiedImgList = [...imgList];
                                                            copiedImgList.splice(index, 1);
                                                            onChangeImgList(copiedImgList);
                                                        }}>
                                                        <S.image src={img}/>
                                                    </AddDismissButton>
                                                )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </Row>
                                    )}
                                </Droppable>
                            </DragDropContext>
                            {isFetching && <LoadingOverlay/>}
                        </div>
                    </Row>
                    <Text type={'caption1'} customStyle={css`
                        margin-left: 84px;
                        color: var(--g-300);
                    `}>사진은 최대 30장까지 업로드 가능합니다.</Text>
                </Column>
                <Row gap={12}>
                    <OptionLabel label={'디자인'}/>
                    <OptionSegmentedButton
                        style={{width: 264}}
                        selectedIndex={imgDesignRecord[imgDesign].index}
                        items={imgDesigns.map(e => imgDesignRecord[e].korean)}
                        onClickItem={imgDesign => {
                            onChangeImgDesign(imgDesigns[imgDesign]);
                        }}
                    />
                </Row>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        padding: 36px;
    `,
    addImageContainer: styled.label`
        display: flex;
        min-width: 128px;
        height: 128px;
        border: 1px solid var(--g-200);
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `,
    image: styled.img`
        display: flex;
        width: 128px;
        object-fit: cover;
        height: 128px;
    `,
}

export default GalleryOption;
