import React, {useRef, useState} from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled from "styled-components";
import {Column} from "@designsystem/component/flexLayout";
import Button from "@designsystem/component/button";
import colors from "@designsystem/foundation/colors";
import TextField from "@designsystem/component/textField";
import Text from "@designsystem/component/text";
import weddingApi from "@remote/api/WeddingApi";
import {useNavigate} from "react-router-dom";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import makeText from "@designsystem/foundation/text/textType";

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
            navigate(`/dashboard/design?url=${url}`);
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
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column gap={45} $alignItems={'center'}>
                    <Column gap={2}>
                        <Text type={'p1'}>새로운 디자인을 생성해주세요.</Text>
                        <Text type={'p5'} color={colors.g400}>청첩장에 사용할 도메인을 입력해주세요.</Text>
                    </Column>
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
                    <Button text={'생성하기'} role={'assistive'} onClick={createDesign} enabled={!isFetching}/>
                </Column>
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled.div`
        ${applyBaseDialogContent()};
        width: 520px;
        padding: 88px 116px;
        background: ${colors.white};
        border-radius: 12px;
        justify-content: center;
    `,
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

export default CreateDesignDialog;