import React, {useEffect, useRef, useState} from 'react';
import {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import TextField from "@designsystem/component/textField";
import weddingApi from "@remote/api/WeddingApi";
import {useNavigate} from "react-router-dom";
import Dialog from "@designsystem/component/dialog/dialog";
import makeText from "@designsystem/foundation/text/textType";
import {Column} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";

interface EditDesignDialogProps {
    originUrl: string;
    dismiss: () => void;
}

function EditDesignDialog(
    {
        originUrl,
        dismiss
    }: EditDesignDialogProps
) {
    const navigate = useNavigate();
    const [url, setUrl] = useState(originUrl);
    const [isFetching, setIsFetching] = useState(false);

    const onClickSave = async () => {
        if (url === '') {
            alert('도메인 URL을 입력해 주세요');
            return;
        }

        setIsFetching(true);
        try {
            await weddingApi.checkUrlConflict(url);
        } catch (error) {
            alert('이미 사용 중인 URL 입니다.');
            console.error(error);
            setIsFetching(false);
            return;
        }

        try {
            await weddingApi.changeWeddingUrl(originUrl, url);
            alert('도메인 URL이 변경되었습니다');
            navigate(0);
        } catch (error) {
            console.error(error);
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
            title={'청첩장 링크 수정'}
            dismiss={dismiss}
            dismissButtonProps={{
                text: '취소'
            }}
            confirmButtonProps={{
                text: '수정',
                onClick: onClickSave,
                enabled: !isFetching,
            }}
        >
            <Column gap={4}>
                <S.textField>
                    <Text type={'p5'} color={colors.g400} style={{userSelect: 'none'}}>
                        linkmarry.com/wedding/
                    </Text>
                    <input type="text" value={url} onChange={event => onChange(event.target.value)}/>
                </S.textField>
                <Text type={'p5'} color={colors.g600} style={{marginLeft: 4}}>
                    영어 대소문자, 숫자, '-', '_', '.'만 허용합니다
                </Text>
            </Column>
        </Dialog>
    );
}

const S = {
    textField: styled.div`
        display: flex;
        min-height: 44px;
        align-items: center;
        border: 1px solid ${colors.g200};
        background: ${colors.white};
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

export default EditDesignDialog;