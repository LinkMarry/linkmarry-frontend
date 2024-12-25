import React, {useState} from 'react';
import styled from "styled-components";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import HorizontalDivider from "../../../../designsystem/component/horizontalDivider";
import OptionLabel from "../component/OptionLabel";
import Checkbox from "../../../../designsystem/component/checkbox";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";
import colors from "../../../../designsystem/foundation/colors";
import Icon, {IconType} from "../../../../designsystem/foundation/icon";
import OptionSegmentedButton from "../component/OptionSegmentedButton";

type SelectMode = 'select' | 'direct';
const selectModeRecord: Record<SelectMode, string> = {
    select: '선택',
    direct: '직접 등록'
}
const selectModes: SelectMode[] = ['select', 'direct'];
const selectModesTitle = selectModes.map(mode => selectModeRecord[mode]);

function BaseMusicOption() {
    const [selectedSelectMode, setSelectedSelectMode] = useState(0);

    const selectModeContent = () => {
        switch (selectModes[selectedSelectMode]) {
            case 'select':
                return <Column gap={16}>
                    {['Wedding opening', 'Wow', 'Hello World'].map(music => (
                        <Row gap={16} $alignItems={'center'}>
                            <Checkbox rounded={true} label={music} checked={false} onChange={() => {
                            }}/>
                            <Icon style={{
                                cursor: 'pointer',
                            }} type={IconType.LoudSpeaker} size={20} tint={colors.g400}/>
                        </Row>
                    ))}
                </Column>
            case 'direct':
                return <S.addAudioFileContainer $alignSelf={'stretch'} gap={20} $alignItems={'center'}>
                    <Icon type={IconType.AddLine} size={24} tint={colors.g600}/>
                    <Column gap={4} $alignItems={'center'}>
                        <S.addAudioFileLabel>음원 파일 추가</S.addAudioFileLabel>
                        <S.addAudioFileLabel>최대 4.5MB MP3 파일만 가능</S.addAudioFileLabel>
                    </Column>
                </S.addAudioFileContainer>;
        }
    }

    return (
        <S.container>
            <Column gap={32} flex={1} $alignItems={'stretch'}>
                <Column gap={20}>
                    <OptionSegmentedButton
                        style={{width: 264}}
                        selectedIndex={selectedSelectMode}
                        items={selectModesTitle}
                        onClickItem={mode => {
                            setSelectedSelectMode(mode);
                        }}
                    />
                    {selectModeContent()}
                </Column>
                <HorizontalDivider/>
                <Row gap={12} $alignItems={'center'}>
                    <OptionLabel label={'효과'}/>
                    <Row gap={12} $alignItems={'center'}>
                        <Checkbox label={'자동 재생'} checked={false} onChange={() => {
                        }}/>
                        <S.effectAutoPlayLabel>브라우저</S.effectAutoPlayLabel> {/* TODO: Fix dummy text */}
                    </Row>
                </Row>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        padding: 36px;
    `,
    effectAutoPlayLabel: styled.span`
        ${makeText(TextType.caption1)};
        color: ${colors.g300};
    `,
    addAudioFileContainer: styled(Column)`
        background: ${colors.g100};
        border-radius: 8px;
        padding: 30px 0;
        cursor: pointer;
    `,
    addAudioFileLabel: styled.span`
        ${makeText(TextType.caption1)};
        color: ${colors.g400};
    `
}

export default BaseMusicOption;