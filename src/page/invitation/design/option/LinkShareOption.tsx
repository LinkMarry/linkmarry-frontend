import React, {useState} from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import OptionSegmentedButton from "@page/invitation/design/component/OptionSegmentedButton";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import colors from "@designsystem/foundation/colors";
import Icon, {IconType} from "@designsystem/foundation/icon";

type LinkShareMode = 'kakaotalk' | 'url';
const linkShareModeRecord: Record<LinkShareMode, string> = {
    kakaotalk: '카카오톡',
    url: 'URL'
}
const linkShareModes: LinkShareMode[] = ['kakaotalk', 'url'];
const linkShareModesTitle = linkShareModes.map(mode => linkShareModeRecord[mode]);

function LinkShareOption() {
    const [selectedShareMode, setSelectedShareMode] = useState(0);

    return (
        <S.container>
            <Column gap={32}>
                <OptionSegmentedButton
                    style={{width: 264}}
                    selectedIndex={selectedShareMode}
                    items={linkShareModesTitle}
                    onClickItem={mode => {
                        setSelectedShareMode(mode);
                    }}
                />
                <Column gap={20}>
                    <Row gap={12}>
                        <OptionLabel label={'사진'} style={{alignSelf: 'flex-start'}}/>
                        <S.addImageContainer>
                            <Icon type={IconType.AddLine} tint={colors.g600} size={24}/>
                        </S.addImageContainer>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'제목'}/>
                        <OptionTextField width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'내용'}/>
                        <OptionTextField width={264}/>
                    </Row>
                </Column>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        padding: 36px;
    `,
    addImageContainer: styled.div`
        display: flex;
        width: 128px;
        height: 128px;
        border: 1px solid ${colors.g200};
        justify-content: center;
        align-items: center;
    `
}

export default LinkShareOption;