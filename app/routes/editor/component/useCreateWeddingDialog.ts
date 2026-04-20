import { useState } from 'react';
import { useNavigate, useParams } from "react-router";
import weddingApi from "~/api/wedding-api.ts";
import type Wedding from "~/api/value/Wedding.ts";
import type Binding from "~/lib/Binding.ts";

export function useCreateWeddingDialog({ value, update }: Binding<Wedding>) {

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

    const handleNameChange = (newName: string) => {
        update(draft => {
            draft.name = newName;
        });
    };

    const handleUrlChange = (newUrl: string) => {
        // 공백을 미리 하이픈(-)으로 치환합니다.
        const spaceHandledValue = newUrl.replace(/\s+/g, '-');
        
        // 공백이 하이픈으로 바뀐 후, 여전히 유효하지 않은 특수기호나 이모지가 있는지 검사합니다.
        if (/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\-_]/.test(spaceHandledValue)) {
            setUrlFormatError('특수기호, 이모지는 입력할 수 없어요.');
        } else {
            setUrlFormatError('');
        }
        
        update(draft => {
            draft.url = spaceHandledValue
                // 영문, 숫자, 한글, 붙임표(-, _)만 허용
                .replace(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\-_]/g, '')
                .toLowerCase();
        });
        setIsError(false);
    };

    return {
        showCreateWeddingDialog,
        setShowCreateWeddingDialog,
        isFetching,
        isError,
        urlFormatError,
        createWedding,
        handleNameChange,
        handleUrlChange,
        navigate
    };
}
