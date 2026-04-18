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
                                    // 공백을 미리 하이픈(-)으로 치환합니다.
                                    const spaceHandledValue = rawValue.replace(/\s+/g, '-');
                                    
                                    // 공백이 하이픈으로 바뀐 후, 여전히 유효하지 않은 특수기호나 이모지가 있는지 검사합니다.
                                    if (/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\-_]/.test(spaceHandledValue)) {
                                        setUrlFormatError('특수기호, 이모지는 입력할 수 없어요.');
                                    } else {
                                        setUrlFormatError('');
                                    }
                                    
                                    draft.url = spaceHandledValue
                                        // 영문, 숫자, 한글, 붙임표(-, _)만 허용
                                        .replace(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\-_]/g, '')
                                        .toLowerCase();
                                    setIsError(false);
                                })}
                                placeholder={'나만의 특별한 도메인'}
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
