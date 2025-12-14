import {type ChangeEvent, useRef, useState} from 'react';
import Text from "~/userinterface/component/Text";
import Icon from "~/userinterface/foundation/Icon";
import {css, cx} from "@linaria/core";
import VoidInput from "~/userinterface/specific/VoidInput";
import View from "~/userinterface/core/View.tsx";
import AddRemoveButton from "~/userinterface/specific/AddRemoveButton";
import {hideScrollBarStyle} from "~/userinterface/css.util";
import useUpload from "~/hook/useUpload";
import LoadingOverlay from "~/userinterface/specific/LoadingOverlay";

interface Props<V = string | string[]> {
    id: string;
    value: V;
    weddingUrl: string;
    onChange: (newValue: V) => void;
}

const PhotoUploadBox = <V = string | string[]>({id, value, weddingUrl, onChange}: Props<V>) => {
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
                const {url} = await uploadFile(files[0], weddingUrl);
                onChange(url as V);
            } else if (Array.isArray(value)) {
                const uploads = await uploadFiles(files, weddingUrl);
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
        <View
            as={isEmpty ? 'label' : undefined}
            htmlFor={isEmpty ? id : undefined}
            ui={cx(
                css`
                    gap: 12px;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    border-radius: 8px;
                    background: var(--g-50);
                    height: 172px;
                    padding: 20px;
                    overflow: hidden;
                `,
                isEmpty ? css`
                    cursor: pointer;
                ` : undefined
            )}
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
                <View ui={css`
                    flex-direction: row;
                    gap: 8px;
                    align-items: center;
                `}>
                    <Icon iconType={'AddPhoto'}/>
                    <Text type={'p2'} ui={css`
                        color: var(--g-900);
                    `}>사진을 첨부해 주세요</Text>
                </View>
            ) : (
                <View ui={cx(
                    css`
                        flex-direction: row;
                        gap: 6px;
                        align-self: stretch;
                        overflow-x: scroll;
                        min-height: 106px;
                    `,
                    hideScrollBarStyle
                )}>
                    {typeof value === 'string' && (
                        <View ui={css`
                            margin: 0 auto;
                        `}>
                            <Image src={value} dismiss={() => onChange('' as V)}/>
                        </View>
                    )}
                    {Array.isArray(value) && (
                        <>
                            <View
                                as={'label'}
                                htmlFor={id}
                                ui={css`
                                    gap: 2px;
                                    align-items: center;
                                    justify-content: center;
                                    min-width: 106px;
                                    min-height: 106px;
                                    background: var(--g-100);
                                    cursor: pointer;
                                `}>
                                <Icon iconType={'AddPhoto'} width={24} height={24} ui={css`
                                    fill: var(--g-500);
                                `}/>
                                <Text type={'caption2'} ui={css`
                                    color: var(--g-500);
                                `}>사진 첨부</Text>
                            </View>
                            {value.map((value, index) => (
                                <Image key={index} dismiss={() => handleRemove(index)} src={value}/>
                            ))}
                        </>
                    )}
                </View>
            )}
            <Text type={'caption1'} ui={css`
                color: var(--g-400);
            `}>업로드한 사진은 대표 이미지로 등록됩니다.</Text>
            {isFetching && (
                <LoadingOverlay/>
            )}
        </View>
    );
};

interface ImageProps {
    dismiss: () => void;
    src: string;
}

const Image = ({dismiss, src}: ImageProps) => {
    return (
        <AddRemoveButton dismiss={dismiss}>
            <View as={'img'} src={src} ui={css`
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
