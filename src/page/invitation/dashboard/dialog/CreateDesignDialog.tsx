import React from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled from "styled-components";
import {Column} from "@designsystem/component/flexLayout";
import Button from "@designsystem/component/button";
import colors from "@designsystem/foundation/colors";
import {TextField} from "@designsystem/component/textField";
import Text from "@designsystem/component/text";
import {TextType} from "@designsystem/foundation/text/textType";

interface CreateDesignDialogProps {
    dismiss: () => void;
}

function CreateDesignDialog(
    {
        dismiss
    }: CreateDesignDialogProps
) {
    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column gap={45} $alignItems={'center'}>
                    <Column gap={2}>
                        <Text text={'새로운 디자인을 생성해주세요.'} type={TextType.p1}/>
                        <Text text={'청첩장에 사용할 도메인을 입력해주세요.'} type={TextType.p5} color={colors.g400}/>
                    </Column>
                    <TextField label={''}/> {/* TODO: Fix it */}
                    <Button text={'생성하기'} role={'assistive'}/>
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