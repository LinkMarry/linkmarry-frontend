import React, {ChangeEvent, useRef, useState} from 'react';
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";
import {css} from "styled-components";
import VoidInput from "@src/userinterface/specific/VoidInput";
import View from "@src/userinterface/core/View";
import useUpload from "@hook/useUpload";
import {makeInteractionEffect} from "@src/shared/css.util";
import Spacer from "@src/userinterface/component/Spacer";
import Upload from "@src/infrastructure/network/value/Upload";

interface Props {
    id: string;
    value: string;
    label: string;
    onChange: (newValue: Upload) => void;
}

const FileUploadBox = ({id, value, label, onChange}: Props) => {
    const isEmpty = value.length === 0;
    const [, setIsFetching] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const {uploadFile} = useUpload();
    const handleInput = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || !inputRef.current) return;
        if (files.length !== 1) return;

        setIsFetching(true);

        const data = await uploadFile(files[0]);
        onChange(data);

        setIsFetching(false);
        inputRef.current.value = '';
    };

    return (
        <Column
            as={isEmpty ? 'label' : undefined}
            htmlFor={isEmpty ? id : undefined}
            $gap={10}
            $alignItems={'stretch'}
            $justifyContent={'center'}
            $ui={css`
                border-radius: 8px;
                background: var(--g-50);
                height: 172px;
                padding: 20px;
                ${isEmpty && css`
                    cursor: pointer;
                `};
            `}
        >
            <Column $gap={12} $alignItems={'center'}>
                <VoidInput
                    ref={inputRef}
                    id={id}
                    type={'file'}
                    accept={'video/*'}
                    multiple={Array.isArray(value)}
                    onChange={handleInput}
                />
                <Text type={'p2'} ui={css`
                    color: var(--g-900);
                `}>파일을 첨부해 주세요</Text>
                <Text type={'caption1'} ui={css`
                    color: var(--g-400);
                `}>업로드한 사진은 대표 이미지로 등록됩니다.</Text>
            </Column>
            {!isEmpty && (
                <Row $gap={6} $alignItems={'stretch'} $ui={css`
                    height: 40px;
                `}>
                    <Row $alignItems={'center'} $ui={css`
                        padding: 0 12px;
                        background: var(--g-100);
                        flex: 1;
                        min-width: 0;
                        border-radius: 8px;
                    `}>
                        <Text type={'caption1'} ui={css`
                            color: var(--g-800);
                        `}>{label}</Text>
                        <Spacer/>
                    </Row>
                    <View $ui={css`
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 8px;
                        cursor: pointer;
                        border-radius: 6px;
                        ${makeInteractionEffect('strong')};
                    `} onClick={() => onChange({
                        name: '',
                        url: '',
                        byte: 0
                    })}>
                        <Icon iconType={IconType.Trash} width={24} height={24} ui={css`
                            fill: var(--g-600);
                        `}/>
                    </View>
                </Row>
            )}
        </Column>
    );
};

export default FileUploadBox;
