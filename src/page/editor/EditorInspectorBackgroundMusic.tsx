import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Spacer from "@designsystem/component/Spacer";
import Toggle from "@designsystem/component/Toggle";
import Divider from "@designsystem/component/Divider";
import FormToggle from "@designsystem/component/FormToggle";
import {css} from "styled-components";
import Button from "@designsystem/component/Button";
import {IconType} from "@designsystem/foundation/Icon";

const EditorInspectorBackgroundMusic = () => {
    return (
        <Column $alignItems={'stretch'} gap={32}>
            <Row $alignItems={'center'}>
                <Text type={'p1'} bold={true}>Title</Text>
                <Spacer/>
                <Toggle checked={false} OnChange={checked => {
                }}/>
            </Row>
            <Divider/>
            <Column $alignItems={'stretch'} gap={8}>
                <Item/>
                <Item/>
                <Item/>
            </Column>
            <Button text={'직접 등록'} leadingIcon={IconType.AddLine} buttonType={'outlined'}/>
            <FormToggle checked={false} OnChange={checked => {
            }} label={'자동 재생'}/>
            <Divider/>
            <Text type={'p3'} customStyle={css`
                color: var(--g-400);
            `}>브라우저 정책에 따라 자동 재생 기능이 작동하지 않을 수 있습니다.</Text>
        </Column>
    );
};

const Item = () => {
    return (
        <Row $alignItems={'center'} gap={16} $customStyle={css`
            padding: 12px;
            border-radius: 12px;
            
            &:hover {
                background: var(--g-50);
            }
        `}>
            <div style={{height: 60, width: 60, background: 'gray'}}></div>
            <Column gap={4}>
                <Text type={'p3'}>title</Text>
                <Text type={'caption1'} customStyle={css`
                    color: var(--g-400);
                `}>tags</Text>
            </Column>
        </Row>
    )
}

export default EditorInspectorBackgroundMusic;
