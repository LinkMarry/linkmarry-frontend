import React from 'react';
import styled from "styled-components";
import {BaseFlex, Column, Row} from "@designsystem/component/FlexLayout";
import Divider from "@designsystem/component/Divider";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import Checkbox from "@designsystem/component/Checkbox";
import BaseInfo from "@remote/value/BaseInfo";

interface BaseInfoOptionProps {
    baseInfo: BaseInfo;
    onChange: (baseInfo: BaseInfo) => void;
}

function BaseInfoOption(
    {
        baseInfo,
        onChange
    }: BaseInfoOptionProps
) {
    return (
        <S.container>
            <Column flex={1} gap={32}>
                <Column gap={16} $alignItems={'stretch'}>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'신랑'}/>
                        <Row gap={12}>
                            <OptionTextField fieldProps={{
                                value: baseInfo.groomName,
                                onChange: event => onChange({...baseInfo, groomName: event.target.value}),
                            }} placeholder={'이름'} width={154}/>
                            <OptionTextField fieldProps={{
                                value: baseInfo.groomFamilyName,
                                onChange: event => onChange({...baseInfo, groomFamilyName: event.target.value}),
                            }} placeholder={'관계'} width={98}/>
                        </Row>
                    </Row>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'아버지'}/>
                        <OptionTextField fieldProps={{
                            value: baseInfo.groomFatherName,
                            onChange: event => onChange({...baseInfo, groomFatherName: event.target.value}),
                        }} placeholder={'이름'} width={154}/>
                        <BaseFlex
                            style={{height: 44}}
                            $alignItems={'center'}
                            $justifyContent={'center'}
                            flex={1}
                        >
                            <Checkbox
                                checked={baseInfo.groomFatherStatus}
                                onChange={checked => onChange({...baseInfo, groomFatherStatus: checked})}
                                label={'故'}
                            />
                        </BaseFlex>
                    </Row>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'어머니'}/>
                        <OptionTextField fieldProps={{
                            value: baseInfo.groomMotherName,
                            onChange: event => onChange({...baseInfo, groomMotherName: event.target.value}),
                        }} placeholder={'이름'} width={154}/>
                        <BaseFlex
                            style={{height: 44}}
                            $alignItems={'center'}
                            $justifyContent={'center'}
                            flex={1}
                        >
                            <Checkbox
                                checked={baseInfo.groomMotherStatus}
                                onChange={checked => onChange({...baseInfo, groomMotherStatus: checked})}
                                label={'故'}
                            />
                        </BaseFlex>
                    </Row>
                </Column>
                <Divider/>
                <Column gap={16} $alignItems={'stretch'}>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'신부'}/>
                        <OptionTextField fieldProps={
                            {
                                value: baseInfo.brideName,
                                onChange: event => onChange({...baseInfo, brideName: event.target.value}),
                            }} placeholder={'이름'} width={154}/>
                        <OptionTextField fieldProps={{
                            value: baseInfo.brideFamilyName,
                            onChange: event => onChange({...baseInfo, brideFamilyName: event.target.value}),
                        }} placeholder={'관계'} width={98}/>
                    </Row>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'아버지'}/>
                        <OptionTextField fieldProps={{
                            value: baseInfo.brideFatherName,
                            onChange: event => onChange({...baseInfo, brideFatherName: event.target.value}),
                        }} placeholder={'이름'} width={154}/>
                        <BaseFlex
                            style={{height: 44}}
                            $alignItems={'center'}
                            $justifyContent={'center'}
                            flex={1}
                        >
                            <Checkbox
                                checked={baseInfo.brideFatherStatus}
                                onChange={checked => onChange({...baseInfo, brideFatherStatus: checked})}
                                label={'故'}
                            />
                        </BaseFlex>
                    </Row>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'어머니'}/>
                        <OptionTextField fieldProps={{
                            value: baseInfo.brideMotherName,
                            onChange: event => onChange({...baseInfo, brideMotherName: event.target.value}),
                        }} placeholder={'이름'} width={154}/>
                        <BaseFlex
                            style={{height: 44}}
                            $alignItems={'center'}
                            $justifyContent={'center'}
                            flex={1}
                        >
                            <Checkbox
                                checked={baseInfo.brideMotherStatus}
                                onChange={checked => onChange({...baseInfo, brideMotherStatus: checked})}
                                label={'故'}
                            />
                        </BaseFlex>
                    </Row>
                </Column>
                <Divider/>
                <Column gap={12}>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'故人 표기'}/>
                        <Checkbox
                            checked={baseInfo.statusFlower}
                            onChange={checked => onChange({...baseInfo, statusFlower: checked})}
                            label={'국화 꽃으로 표기'}
                        />
                    </Row>
                    <Row $alignItems={'center'} gap={12}>
                        <OptionLabel label={'표시 순서'}/>
                        <Checkbox
                            checked={baseInfo.brideMarkFirst}
                            onChange={checked => onChange({...baseInfo, brideMarkFirst: checked})}
                            label={'신부 먼저 표시'}
                        />
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
    `
}

export default BaseInfoOption;