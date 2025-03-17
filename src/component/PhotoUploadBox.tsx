import React, {ChangeEvent, useRef, useState} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import {css} from "styled-components";
import VoidInput from "@src/component/VoidInput";
import fileApi from "@remote/api/FileApi";
import View from "@designsystem/core/View";
import AddRemoveButton from "@src/component/AddDismissButton";
import {hideScrollBar} from "@util/css.util";
import useUpload from "@hook/useUpload";
import LoadingOverlay from "@src/component/LoadingOverlay";

interface Props<V = string | string[]> {
    id: string;
    value: V;
    onChange: (newValue: V) => void;
}

const PhotoUploadBox = <V = string | string[]>({id, value, onChange}: Props<V>) => {
    const isEmpty = (() => {
        if (typeof value === 'string') {
            return value.length === 0;
        } else if (Array.isArray(value)) {
            return value.length === 0;
        } else {
            throw Error('Type error');
        }
    })();
    const [isFetching, setIsFetching] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const {uploadFile, uploadFiles} = useUpload();
    const handleInput = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return;

        setIsFetching(true);

        try {
            if (typeof value === 'string') {
                if (files.length !== 1) return;
                const {url} = await uploadFile(files[0]);
                onChange(url as V);
            } else if (Array.isArray(value)) {
                const uploads = await uploadFiles(files);
                onChange([...value, ...uploads.map(i => i.url)] as V);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsFetching(false);
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    };

    const handleRemove = (index: number) => {
        if (Array.isArray(value)) {
            const copiedValue = [...value];
            copiedValue.splice(index, 1);
            onChange(copiedValue as V);
        }
    };

    return (
        <Column
            as={isEmpty ? 'label' : undefined}
            htmlFor={isEmpty ? id : undefined}
            $gap={12}
            $alignItems={'center'}
            $justifyContent={'center'}
            $ui={css`
                position: relative;
                border-radius: 8px;
                background: var(--g-50);
                height: 172px;
                padding: 20px;
                ${isEmpty && css`
                    cursor: pointer;
                `};
                overflow: hidden;
            `}
        >
            <VoidInput
                ref={inputRef}
                id={id}
                type={'file'}
                accept={'image/*'}
                multiple={Array.isArray(value)}
                onChange={handleInput}
            />
            {isEmpty ? (
                <Row $gap={8} $alignItems={'center'}>
                    <Icon iconType={IconType.AddPhoto}/>
                    <Text type={'p2'} ui={css`
                        color: var(--g-900);
                    `}>사진을 첨부해 주세요</Text>
                </Row>
            ) : (
                <Row $gap={6} $ui={css`
                    align-self: stretch;
                    overflow-x: scroll;
                    min-height: 106px;
                    ${hideScrollBar};
                `}>
                    {typeof value === 'string' && (
                        <View $ui={css`
                            margin: 0 auto;
                        `}>
                            <Image src={value} dismiss={() => onChange('' as V)}/>
                        </View>
                    )}
                    {Array.isArray(value) && (
                        <>
                            <Column
                                as={'label'}
                                $gap={2}
                                htmlFor={id}
                                $alignItems={'center'}
                                $justifyContent={'center'}
                                $ui={css`
                                    min-width: 106px;
                                    min-height: 106px;
                                    background: var(--g-100);
                                    cursor: pointer;
                                `}>
                                <Icon iconType={IconType.AddPhoto} width={24} height={24} ui={css`
                                    fill: var(--g-500);
                                `}/>
                                <Text type={'caption2'} ui={css`
                                    color: var(--g-500);
                                `}>사진 첨부</Text>
                            </Column>
                            {value.map((value, index) => (
                                <Image key={index} dismiss={() => handleRemove(index)} src={value}/>
                            ))}
                        </>
                    )}
                </Row>
            )}
            <Text type={'caption1'} ui={css`
                color: var(--g-400);
            `}>업로드한 사진은 대표 이미지로 등록됩니다.</Text>
            {isFetching && (
                <LoadingOverlay/>
            )}
        </Column>
    );
};

interface ImageProps {
    dismiss: () => void;
    src: string;
}

const Image = ({dismiss, src}: ImageProps) => {
    return (
        <AddRemoveButton dismiss={dismiss}>
            <View as={'img'} src={src} $ui={css`
                min-width: 106px;
                width: 106px;
                min-height: 106px;
                height: 106px;
                object-fit: cover;
            `}/>
        </AddRemoveButton>
    )
};

export default PhotoUploadBox;
