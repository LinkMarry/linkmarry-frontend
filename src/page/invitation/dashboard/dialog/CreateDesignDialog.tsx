import React, {useState} from 'react';
import {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled, {css} from "styled-components";
import {Column} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import weddingApi from "@remote/api/WeddingApi";
import {useNavigate} from "react-router-dom";
import makeText from "@designsystem/foundation/text/TextType";
import Dialog from "@designsystem/component/dialog/dialog";

interface CreateDesignDialogProps {
    dismiss: () => void;
}

function CreateDesignDialog(
    {
        dismiss
    }: CreateDesignDialogProps
) {
    const [url, setUrl] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const navigate = useNavigate();

    const createDesign = async () => {
        if (url === '') {
            alert('도메인 URL을 입력해 주세요');
            return;
        }

        setIsFetching(true);

        try {
            await weddingApi.checkUrlConflict(url);
            navigate(`/dashboard/design/${url}`);
        } catch (error) {
            console.error(error);
            alert('이미 사용 중인 URL 입니다.');
        } finally {
            setIsFetching(false);
        }
    };

    const onChange = (value: string) => {
        // 허용할 문자: 영어 대소문자, 숫자, '-', '_', '.' (공백 및 기타 문자는 제거)
        const sanitizedValue = value.replace(/[^a-zA-Z0-9-_.]/g, '');
        setUrl(sanitizedValue);
    };

    return (
        <Dialog 
            title={'새 디자인 만들기'}
            description={'청첩장에 사용할 링크를 입력해 주세요'}
            dismiss={dismiss} 
            dismissButtonProps={{
                text: '닫기'
            }} 
            confirmButtonProps={{
                text: '만들기',
                onClick: createDesign,
                enabled: !isFetching,
            }}
        >
            <Column gap={4}>
                <S.textField>
                    <Text type={'p5'} customStyle={css`
                        color: var(--g-400);
                        user-select: none;
                    `}>linkmarry.com/wedding/</Text>
                    <input type="text" value={url} onChange={event => onChange(event.target.value)}/>
                </S.textField>
                <Text type={'p5'} customStyle={css`
                    color: var(--g-600);
                    margin-left: 4px;
                `}>영어 대소문자, 숫자, '-', '_', '.'만 허용합니다</Text>
            </Column>
        </Dialog>
    );
}

const S = {
    container: styled.div`
        ${applyBaseDialogContent()};
        width: 520px;
        padding: 88px 116px;
        background: white;
        border-radius: 12px;
        justify-content: center;
    `,
    textField: styled.div`
        display: flex;
        min-height: 44px;
        align-items: center;
        border: 1px solid var(--g-200);
        background: white;
        border-radius: 8px;
        padding-left: 16px;
        padding-right: 16px;
        flex: 1;
        align-self: stretch;

        input {
            align-self: stretch;
            margin: 4px 0;
            outline: none;
            width: 80px;
            border: none;
            ${makeText('p5')};
        }
    `
}

export default CreateDesignDialog;