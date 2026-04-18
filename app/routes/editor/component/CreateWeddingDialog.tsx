import { useState } from 'react';
import Dialog from "~/components/core/dialog/Dialog.tsx";
import Input from "~/components/core/Input.tsx";
import { useNavigate, useParams } from "react-router";
import weddingApi from "~/api/wedding-api.ts";
import Text from "~/components/core/Text.tsx";
import { css } from "@linaria/core";
import type Binding from "~/lib/Binding.ts";
import Icon from "~/components/core/icon";
import View from "~/components/core/View.tsx";
import type Wedding from "~/api/value/Wedding.ts";


const CreateWeddingDialog = ({ value, update }: Binding<Wedding>) => {
    const { url } = useParams();
    const [showCreateWeddingDialog, setShowCreateWeddingDialog] = useState(url === undefined);
    const navigate = useNavigate();
    const [isFetching, setIsFetching] = useState(false);
    const [isError, setIsError] = useState(false);
    const [urlFormatError, setUrlFormatError] = useState('');

    const createWedding = async () => {
        setIsFetching(true);
        setIsError(false);

        try {
            await weddingApi.checkUrlConflict(value.url);
        } catch (error) {
            console.error(error);
            setIsError(true);
            return;
        } finally {
            setIsFetching(false);
        }

        try {
            await weddingApi.createWedding(value);
            setShowCreateWeddingDialog(false);
            navigate(`/editor/${value.url}`);
        } finally {
            setIsFetching(false);
        }
    };

    return (
        <>
            {showCreateWeddingDialog && (
                <Dialog
                    title={'새 디자인 만들기'}
                    description={'청첩장에 사용할\n이름과 링크를 입력해 주세요.'}
                    dismiss={() => {
                    }}
                    confirmButtonProps={{
                        text: '만들기',
                        enabled: value.url.length > 0 && value.name.length > 0 && !isFetching,
                        onClick: async () => await createWedding()
                    }}
                    ui={css`
                        position: relative;
                    `}
                >
                    <Icon size={20} iconType={'CrossLine'} onClick={() => navigate('/')} ui={css`
                        fill: var(--g-600);
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        cursor: pointer;
                    `} />
                    <View ui={css`
                        gap: 12px;
                    `}>
                        <Input
                            value={value.name}
                            onChange={event => update(draft => {
                                draft.name = event.target.value;
                            })}
                            placeholder={'청첩장 이름'}
                        />
                        <View ui={css`
                            gap: 4px;
                        `}>
                            <Input
                                hasLabel={false}
                                prefix={'wedding/'}
                                type={'text'}
                                maxLength={20}
                                value={value.url}
                                onChange={event => update(draft => {
                                    const rawValue = event.target.value;
                                    if (/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\-_]/.test(rawValue)) {
                                        setUrlFormatError('띄어쓰기, 특수기호, 이모지는 입력할 수 없어요.');
                                    } else {
                                        setUrlFormatError('');
                                    }
                                    draft.url = rawValue
                                        // 영문, 숫자, 한글, 붙임표(-, _)만 허용 (공백표, 이모지, 특수문자 등 모든 불안정한 문자 제거)
                                        .replace(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\-_]/g, '') 
                                        .toLowerCase();
                                    setIsError(false);
                                })}
                                placeholder={'영문입력'}
                            />
                            {urlFormatError && (
                                <Text type={'p3'} ui={css`
                                    color: var(--r-500, red);
                                `}>{urlFormatError}</Text>
                            )}
                            {isError && !urlFormatError && (
                                <Text type={'p3'} ui={css`
                                    color: var(--r-500, red);
                                `}>이미 사용 중인 링크입니다.</Text>
                            )}
                        </View>
                    </View>
                </Dialog>
            )}
        </>
    );
};

export default CreateWeddingDialog;
