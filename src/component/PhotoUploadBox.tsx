import React, {ChangeEvent, useRef, useState} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import {css} from "styled-components";
import VoidInput from "@src/component/VoidInput";
import fileApi from "@remote/api/FileApi";

interface Props {
    id: string;
    multiple?: boolean;
    onChange: (images: string[]) => void;
}

const PhotoUploadBox = ({id, multiple = false}: Props) => {
    const [isFetching, setIsFetching] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const uploadImages = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || !inputRef.current) return;

        setIsFetching(true);

        const uploadPromises = Array.from(files).map(file => fileApi.upload(file));
        const results = await Promise.allSettled(uploadPromises);
        // const fulfilledResults: string[] = results
        //     .map(result => result.status === 'fulfilled' ? result.value.data.url : null)
        //     .filter((result): result is string => result !== null);
        // onChangeImgList([...fulfilledResults, ...imgList]);
        setIsFetching(false);
        inputRef.current.value = '';
    };

    return (
        <Column as={'label'} gap={12} $alignItems={'center'} htmlFor={id} $customStyle={css`
            padding: 56px 0;
            border-radius: 8px;
            background: var(--g-50);
            cursor: pointer;
        `}>
            <VoidInput
                ref={inputRef}
                id={id}
                type={'file'}
                accept={'image/*'}
                multiple={multiple}
                onChange={uploadImages}
            />
            <Row gap={8} $alignItems={'center'}>
                <Icon iconType={IconType.AddPhoto}/>
                <Text type={'p2'} customStyle={css`
                    color: var(--g-900);
                `}>사진을 첨부해 주세요</Text>
            </Row>
            <Text type={'caption1'} customStyle={css`
                color: var(--g-400);
            `}>업로드한 사진은 대표 이미지로 등록됩니다.</Text>
        </Column>
    );
};

export default PhotoUploadBox;
