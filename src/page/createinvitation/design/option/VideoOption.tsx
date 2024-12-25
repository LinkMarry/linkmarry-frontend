import React from 'react';
import styled from "styled-components";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import OptionLabel from "../component/OptionLabel";
import OptionTextField from "../component/OptionTextField";
import Button from "../../../../designsystem/component/button";
import {IconType} from "../../../../designsystem/foundation/icon";

function VideoOption() {
    return (
        <S.container>
            <Column gap={16}>
                <Row gap={12}>
                    <OptionLabel label={'제목'}/>
                    <OptionTextField placeholder={'최대 20자'} maxLength={20} width={264}/>
                </Row>
                <Row gap={12}>
                    <OptionLabel label={'URL'}/>
                    <OptionTextField placeholder={'유튜브 링크'} width={264}/>
                </Row>
                <Row gap={12}>
                    <OptionLabel label={'파일'}/>
                    <Button text={'파일 업로드'} leadingIcon={IconType.AddLine} role={'assistive'} style={{ width: 264 }}/>
                </Row>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        padding: 36px;
    `
}

export default VideoOption;