import React, {useState} from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import OptionSegmentedButton from "@page/invitation/design/component/OptionSegmentedButton";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import colors from "@designsystem/foundation/colors";
import Icon, {IconType} from "@designsystem/foundation/icon";
import LinkShare from "@remote/value/LinkShare";

type LinkShareMode = 'kakaotalk' | 'url';
const linkShareModeRecord: Record<LinkShareMode, string> = {
    kakaotalk: '카카오톡',
    url: 'URL'
}
const linkShareModes: LinkShareMode[] = ['kakaotalk', 'url'];
const linkShareModesTitle = linkShareModes.map(mode => linkShareModeRecord[mode]);

interface LinkShareOptionProps {
    linkShare: LinkShare;
    onChange: (linkShare: LinkShare) => void;
}

function LinkShareOption(
    {
        linkShare,
        onChange
    }: LinkShareOptionProps
) {
    const [selectedShareModeIndex, setSelectedShareModeIndex] = useState(0);
    const selectedShareMode = linkShareModes[selectedShareModeIndex];

    return (
        <S.container>
            <Column gap={32}>
                <OptionSegmentedButton
                    style={{width: 264}}
                    selectedIndex={selectedShareModeIndex}
                    items={linkShareModesTitle}
                    onClickItem={mode => {
                        setSelectedShareModeIndex(mode);
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
                        <OptionTextField fieldProps={{
                            value: selectedShareMode === 'kakaotalk' ? linkShare.kakaoTitle : linkShare.urlTitle,
                            onChange: event => onChange(selectedShareMode === 'kakaotalk' ? {
                                ...linkShare,
                                kakaoTitle: event.target.value
                            } : {
                                ...linkShare,
                                urlTitle: event.target.value
                            })
                        }} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'내용'}/>
                        <OptionTextField fieldProps={{
                            value: selectedShareMode === 'kakaotalk' ? linkShare.kakaoContent : linkShare.urlContent,
                            onChange: event => onChange(selectedShareMode === 'kakaotalk' ? {
                                ...linkShare,
                                kakaoContent: event.target.value
                            } : {
                                ...linkShare,
                                urlContent: event.target.value
                            })
                        }} width={264}/>
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