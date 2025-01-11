import React, {ChangeEvent, useRef} from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import OptionSegmentedButton from "@page/invitation/design/component/OptionSegmentedButton";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import colors from "@designsystem/foundation/colors";
import Icon, {IconType} from "@designsystem/foundation/icon";
import ImgDesign, {imgDesignRecord, imgDesigns} from "@remote/enumeration/ImgDesign";
import fileApi from "@remote/api/FileApi";
import Text from "@designsystem/component/text";

interface GalleryOptionProps {
    imgList: string[];
    imgDesign: ImgDesign;
    onChangeImgDesign: (img: ImgDesign) => void;
    onChangeImgList: (imgList: string[]) => void;
}

function GalleryOption(
    {
        imgList,
        imgDesign,
        onChangeImgDesign
    }: GalleryOptionProps
) {
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

        try {
            const {data} = await fileApi.upload(files[0]);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <S.container>
            <Column gap={20}>
                <Column gap={8}>
                    <Row gap={12}>
                        <OptionLabel label={'사진'} style={{alignSelf: 'flex-start'}}/>
                        <S.addImageContainer htmlFor={'choose-image'}>
                            <Icon type={IconType.AddLine} tint={colors.g600} size={24}/>
                        </S.addImageContainer>
                        <S.voidInput
                            id={'choose-image'}
                            ref={imageFieldRef}
                            onChange={uploadFiles}
                            type={'file'}
                            accept={'image/*'}
                            multiple={true}
                        />
                    </Row>
                    <Text style={{marginLeft: 84}} type={'caption1'} color={colors.g300}>사진은 최대 30장까지 업로드 가능합니다.</Text>
                </Column>
                <Row gap={12}>
                    <OptionLabel label={'제목'}/>
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
        width: 128px;
        height: 128px;
        border: 1px solid ${colors.g200};
        justify-content: center;
        align-items: center;
    `,
    voidInput: styled.input`
        display: none;
        width: 0;
        height: 0;
    `
}

export default GalleryOption;