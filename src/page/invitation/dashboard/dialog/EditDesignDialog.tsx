import React from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled from "styled-components";
import {Column} from "@designsystem/component/flexLayout";
import Button from "@designsystem/component/button";
import colors from "@designsystem/foundation/colors";
import {TextField} from "@designsystem/component/textField";
import Text from "@designsystem/component/text";
import {TextType} from "@designsystem/foundation/text/textType";

interface EditDesignDialogProps {
    dismiss: () => void;
}

function EditDesignDialog(
    {
        dismiss
    }: EditDesignDialogProps
) {
    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column gap={45} $alignItems={'center'}>
                    <Column gap={2}>
                        <Text text={'청첩장 주소를 변경해주세요.'} type={TextType.p1}/>
                        <Text text={'청첩장에 사용할 도메인을 입력해주세요.'} type={TextType.p5} color={colors.g400}/>
                    </Column>
                    <TextField label={''}/> {/* TODO: Fix it */}
                    <Button text={'저장하기'} role={'assistive'}/>
                </Column>
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled.div`
        ${applyBaseDialogContent()};
        justify-content: center;
        width: 520px;
        padding: 88px 116px;
        background: ${colors.white};
        border-radius: 12px;
    `
}

export default EditDesignDialog;