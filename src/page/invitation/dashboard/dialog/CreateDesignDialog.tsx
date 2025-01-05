import React, {useRef, useState} from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled from "styled-components";
import {Column} from "@designsystem/component/flexLayout";
import Button from "@designsystem/component/button";
import colors from "@designsystem/foundation/colors";
import TextField from "@designsystem/component/textField";
import Text from "@designsystem/component/text";
import {TextType} from "@designsystem/foundation/text/textType";
import weddingApi from "@remote/api/WeddingApi";
import {useNavigate} from "react-router-dom";

interface CreateDesignDialogProps {
    dismiss: () => void;
}

function CreateDesignDialog(
    {
        dismiss
    }: CreateDesignDialogProps
) {
    const [isError, setIsError] = useState(false);
    const domainFieldRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const createDesign = async () => {
        if (!domainFieldRef.current) return;
        const url = domainFieldRef.current.value;
        
        if (url === '') {
            alert('도메인 URL을 입력해 주세요');
            return;
        }
        
        try {
            await weddingApi.checkUrlConflict(url);
            navigate(`/invitation/design?url=${url}`);
        } catch (error) {
            console.error(error);
            setIsError(true);
        }
    };

    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column gap={45} $alignItems={'center'}>
                    <Column gap={2}>
                        <Text text={'새로운 디자인을 생성해주세요.'} type={TextType.p1}/>
                        <Text text={'청첩장에 사용할 도메인을 입력해주세요.'} type={TextType.p5} color={colors.g400}/>
                    </Column>
                    <TextField ref={domainFieldRef} label={''} isError={isError} supportingText={isError ? '이미 사용 중인 URL 입니다. 다른 URL을 입력해 주세요' : undefined}/>
                    <Button text={'생성하기'} role={'assistive'} onClick={createDesign}/>
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
    `
}

export default CreateDesignDialog;