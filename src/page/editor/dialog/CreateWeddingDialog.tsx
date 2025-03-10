import React, {useState} from 'react';
import Dialog from "@designsystem/pattern/dialog/Dialog";
import Input from "@designsystem/component/Input";
import {useNavigate, useParams} from "react-router-dom";
import weddingApi from "@remote/api/WeddingApi";
import WeddingDto from "@remote/value/WeddingDto";
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import {css} from "styled-components";

interface Props {
    wedding: WeddingDto;
    onChange: (url: string) => void;
}

const CreateWeddingDialog = ({wedding, onChange}: Props) => {
    const {url} = useParams();
    const [showCreateWeddingDialog, setShowCreateWeddingDialog] = useState(url === undefined);
    const navigate = useNavigate();
    const [isFetching, setIsFetching] = useState(false);
    const [isError, setIsError] = useState(false);

    const createWedding = async () => {
        setIsFetching(true);
        setIsError(false);

        try {
            await weddingApi.checkUrlConflict(wedding.url);
        } catch (error) {
            console.error(error);
            setIsError(true);
            return;
        } finally {
            setIsFetching(false);
        }

        try {
            await weddingApi.createWedding(wedding);
            setShowCreateWeddingDialog(false);
            navigate(`/editor/${wedding.url}`);
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
                        enabled: wedding.url.length > 0 || !isFetching,
                        onClick: async () => await createWedding()
                    }}
                >
                    <Column $alignItems={'stretch'} $gap={4}>
                        <Input
                            value={`wedding/${wedding.url}`}
                            onChange={event => onChange(event.target.value.slice(8))}
                            placeholder={'링크'}
                        />
                        {isError && (
                            <Text type={'p3'} ui={css`
                                color: red;
                            `}>이미 사용 중인 링크입니다.</Text>
                        )}
                    </Column>
                </Dialog>
            )}
        </>
    );
};

export default CreateWeddingDialog;
