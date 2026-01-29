import {useState} from 'react';
import Dialog from "~/userinterface/pattern/dialog/Dialog.tsx";
import Input from "~/userinterface/component/Input.tsx";
import {useNavigate, useParams} from "react-router";
import weddingApi from "~/infrastructure/network/api/wedding-api.ts";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import Text from "~/userinterface/component/Text.tsx";
import {css} from "@linaria/core";
import type Binding from "~/shared/Binding.ts";
import Icon from "~/userinterface/foundation/Icon.tsx";
import View from "~/userinterface/core/View.tsx";


const CreateWeddingDialog = ({value, update}: Binding<WeddingDto>) => {
    const {url} = useParams();
    const [showCreateWeddingDialog, setShowCreateWeddingDialog] = useState(url === undefined);
    const navigate = useNavigate();
    const [isFetching, setIsFetching] = useState(false);
    const [isError, setIsError] = useState(false);

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
                    description={'청첩장에 사용할 링크를 입력해 주세요.'}
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
                    `}/>
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
                                value={`wedding/${value.url}`}
                                onChange={event => {
                                    const value = event.target.value;
                                    if (value.startsWith('wedding/')) {
                                        update(draft => {
                                            draft.url = value.slice(8);
                                        });
                                    }
                                }}
                                placeholder={'링크'}
                            />
                            {isError && (
                                <Text type={'p3'} ui={css`
                                    color: red;
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
