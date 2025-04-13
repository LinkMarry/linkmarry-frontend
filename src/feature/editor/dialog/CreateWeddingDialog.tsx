import React, {useState} from 'react';
import Dialog from "@src/userinterface/pattern/dialog/Dialog";
import Input from "@src/userinterface/component/Input";
import {useNavigate, useParams} from "react-router-dom";
import weddingApi from "@src/infrastructure/network/api/WeddingApi";
import WeddingDto from "@src/infrastructure/network/value/WeddingDto";
import {Column} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import {css} from "styled-components";
import Binding from "@src/shared/Binding";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";

interface Props extends Binding<WeddingDto> {
}

const CreateWeddingDialog = ({value, update}: Props) => {
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
                    <Icon size={20} iconType={IconType.CrossLine} onClick={() => navigate('/')} ui={css`
                        fill: var(--g-600);
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        cursor: pointer;
                    `}/>
                    <Column $alignItems={'stretch'} $gap={12}>
                        <Input
                            value={value.name}
                            onChange={event => update(draft => {
                                draft.name = event.target.value;
                            })}
                            placeholder={'청첩장 이름'}
                        />
                        <Column $alignItems={'stretch'} $gap={4}>
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
                        </Column>
                    </Column>
                </Dialog>
            )}
        </>
    );
};

export default CreateWeddingDialog;
