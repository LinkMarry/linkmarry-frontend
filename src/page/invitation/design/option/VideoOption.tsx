import React, {RefObject} from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import Button from "@designsystem/component/button";
import {IconType} from "@designsystem/foundation/icon";

interface VideoOptionProps {
    refs: {
        videoTitleRef: RefObject<HTMLInputElement>;
        videoUrlRef: RefObject<HTMLInputElement>;
    }
}

function VideoOption(
    {
        refs: {
            videoTitleRef,
            videoUrlRef,
        }
    }: VideoOptionProps
) {
    return (
        <S.container>
            <Column gap={16}>
                <Row gap={12}>
                    <OptionLabel label={'제목'}/>
                    <OptionTextField ref={videoTitleRef} placeholder={'최대 20자'} width={264} fieldProps={{maxLength: 20}}/>
                </Row>
                <Row gap={12}>
                    <OptionLabel label={'URL'}/>
                    <OptionTextField ref={videoUrlRef} placeholder={'유튜브 링크'} width={264}/>
                </Row>
                <Row gap={12}>
                    <OptionLabel label={'파일'}/>
                    <Button text={'파일 업로드'} leadingIcon={IconType.AddLine} role={'assistive'} style={{width: 264}}/>
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