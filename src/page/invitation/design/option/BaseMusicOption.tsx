import React, {useState} from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import Checkbox from "@designsystem/component/checkbox";
import colors from "@designsystem/foundation/colors";
import Icon, {IconType} from "@designsystem/foundation/icon";
import OptionSegmentedButton from "@page/invitation/design/component/OptionSegmentedButton";
import Text from "@designsystem/component/text";
import BaseMusic from "@remote/value/BaseMusic";

type SelectMode = 'select' | 'direct';
const selectModeRecord: Record<SelectMode, string> = {
    select: '선택',
    direct: '직접 등록'
}
const selectModes: SelectMode[] = ['select', 'direct'];
const selectModesTitle = selectModes.map(mode => selectModeRecord[mode]);

interface BaseMusicOptionProps {
    baseMusic: BaseMusic;
    onChange: (baseMusic: BaseMusic) => void;
}

function BaseMusicOption(
    {
        baseMusic,
        onChange
    }: BaseMusicOptionProps
) {
    const [selectedSelectMode, setSelectedSelectMode] = useState(0);

    const selectModeContent = () => {
        switch (selectModes[selectedSelectMode]) {
            case 'select':
                return <Column gap={16}>
                    {/* TODO: DUMMY */}
                    {['Wedding opening', 'Wow', 'Hello World'].map((music, index) => (
                        <Row key={index} gap={16} $alignItems={'center'}>
                            <Checkbox rounded={true} label={music}/>
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
                        <Text text={'음원 파일 추가'} type={'caption1'} color={colors.g400}/>
                        <Text text={'최대 4.5MB MP3 파일만 가능'} type={'caption1'} color={colors.g400}/>
                    </Column>
                </S.addAudioFileContainer>;
        }
    };

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
                        <Checkbox
                            checked={baseMusic.effect}
                            onChange={checked => onChange({...baseMusic, effect: checked})}
                            label={'자동 재생'}
                        />
                        <Text text={'브라우저'} type={'caption1'} color={colors.g300}/> {/* TODO: Fix dummy text */}
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
    addAudioFileContainer: styled(Column)`
        background: ${colors.g100};
        border-radius: 8px;
        padding: 30px 0;
        cursor: pointer;
    `,
}

export default BaseMusicOption;