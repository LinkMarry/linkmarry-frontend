import {type ChangeEvent, useRef, useState} from 'react';
import Text from "~/userinterface/component/Text";
import Icon from "~/userinterface/foundation/Icon";
import {css, cx} from "@linaria/core";
import VoidInput from "~/userinterface/specific/VoidInput";
import View from "~/userinterface/core/View.tsx";
import useUpload from "~/hook/useUpload";
import Spacer from "~/userinterface/component/Spacer";
import type Upload from "~/infrastructure/network/value/Upload";
import {interactionEffectStyles} from "~/userinterface/css.util.ts";

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
        <View
            as={isEmpty ? 'label' : undefined}
            htmlFor={isEmpty ? id : undefined}
            ui={cx(
                css`
                    gap: 10px;
                    justify-content: center;
                    border-radius: 8px;
                    background: var(--g-50);
                    height: 172px;
                    padding: 20px;
                `,
                isEmpty ? css`
                    cursor: pointer;
                ` : undefined
            )}
        >
            <View ui={css`
                gap: 12px;
                align-items: center;
            `}>
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
            </View>
            {!isEmpty && (
                <View ui={css`
                    flex-direction: row;
                    gap: 6px;
                    height: 40px;
                `}>
                    <View ui={css`
                        flex-direction: row;
                        align-items: center;
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
                    </View>
                    <View ui={cx(
                        css`
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 8px;
                            cursor: pointer;
                            border-radius: 6px;
                        `,
                        interactionEffectStyles.strong
                    )} onClick={() => onChange({
                        name: '',
                        url: '',
                        byte: 0
                    })}>
                        <Icon iconType={'Trash'} width={24} height={24} ui={css`
                            fill: var(--g-600);
                        `}/>
                    </View>
                </View>
            )}
        </View>
    );
};

export default FileUploadBox;
