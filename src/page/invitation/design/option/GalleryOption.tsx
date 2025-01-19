import React, {ChangeEvent, Dispatch, SetStateAction, useRef, useState} from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import OptionSegmentedButton from "@page/invitation/design/component/OptionSegmentedButton";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import colors from "@designsystem/foundation/colors";
import Icon, {IconType} from "@designsystem/foundation/icon";
import ImgDesign, {imgDesignRecord, imgDesigns} from "@remote/enumeration/ImgDesign";
import fileApi from "@remote/api/FileApi";
import Text from "@designsystem/component/text";
import LoadingOverlay from "@src/component/LoadingOverlay";
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";
import VoidInput from "@src/component/VoidInput";

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
    const uploadFiles = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return;
        if (files.length > 30) {
            alert('사진은 최대 30장까지 업로드 가능합니다.');
            if (imageFieldRef.current) {
                imageFieldRef.current.value = '';
            }
            return;
        }
        setIsFetching(true);
        const uploadPromises = Array.from(files).map(file => fileApi.upload(file));
        const results = await Promise.allSettled(uploadPromises);
        const fulfilledResults: string[] = results
            .map(result => result.status === 'fulfilled' ? result.value.data.url : null)
            .filter((result): result is string => result !== null);
        onChangeImgList([...fulfilledResults, ...imgList]);
        setIsFetching(false);
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
                                            <S.addImageContainer htmlFor={'choose-image'}>
                                                <Icon type={IconType.AddLine} tint={colors.g600} size={24}/>
                                            </S.addImageContainer>
                                            <VoidInput
                                                id={'choose-image'}
                                                ref={imageFieldRef}
                                                onChange={uploadFiles}
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
                                                    <S.imageWrapper key={index}
                                                         {...provided.draggableProps}
                                                         {...provided.dragHandleProps}
                                                         ref={provided.innerRef}>
                                                        <div style={{
                                                            display: "flex",
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 0,
                                                            background: colors.g100,
                                                            borderRadius: 20,
                                                            padding: 6,
                                                            cursor: 'pointer',
                                                            opacity: 0.8
                                                        }}>
                                                            <Icon
                                                                type={IconType.CrossLine}
                                                                size={16}
                                                                tint={colors.g600}
                                                                onClick={() => {
                                                                    const copiedImgList = [...imgList];
                                                                    copiedImgList.splice(index, 1);
                                                                    onChangeImgList(copiedImgList);
                                                                }}
                                                            />
                                                        </div>
                                                        <S.image src={img}/>
                                                    </S.imageWrapper>
                                                )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </Row>
                                    )}
                                </Droppable>
                            </DragDropContext>
                            {isFetching && (
                                <LoadingOverlay/>
                            )}
                        </div>
                    </Row>
                    <Text style={{marginLeft: 84}} type={'caption1'} color={colors.g300}>사진은 최대 30장까지 업로드 가능합니다.</Text>
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
    )
        ;
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
        border: 1px solid ${colors.g200};
        justify-content: center;
        align-items: center;
    `,
    image: styled.img`
        display: flex;
        width: 128px;
        height: 128px;
    `,
    imageWrapper: styled.div`
        position: relative;
    `
}

export default GalleryOption;