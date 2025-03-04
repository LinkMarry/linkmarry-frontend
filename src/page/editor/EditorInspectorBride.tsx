import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "../../designsystem/component/Divider";
import Input from "../../designsystem/component/Input";
import Spacer from "@designsystem/component/Spacer";
import {css} from "styled-components";
import Select from "@designsystem/component/Select";
import Checkbox from "@designsystem/component/Checkbox";
import FormToggle from "@designsystem/component/FormToggle";

const EditorInspectorBride = () => {
    return (
        <Column $alignItems={'stretch'} gap={32}>
            <Text type={'p1'} bold={true}>신부측 정보</Text>
            <Divider/>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신부 성함</Text>
                <Column $alignItems={'stretch'} gap={8}>
                    <Row gap={8}>
                        <Input placeholder={'성'}/>
                        <Input placeholder={'이름'}/>
                        <Input placeholder={'영문 이름'}/>
                    </Row>
                    <Row gap={8}>
                        <Select
                            items={[]}
                            OnChange={index => {

                            }}
                            customStyle={css`
                                flex: 1;
                            `}
                        />
                        <Spacer/>
                        <Spacer/>
                    </Row>
                </Column>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신랑 아버지</Text>
                <Row gap={8} $alignItems={'center'}>
                    <Input placeholder={'성'} customStyle={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'이름'} customStyle={css`
                        flex: 1;
                    `}/>
                    <Checkbox checked={false} OnChange={checked => {
                    }} label={'故'} customStyle={css`
                        flex: 1;
                    `}/>
                </Row>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신랑 어머니</Text>
                <Row gap={8} $alignItems={'center'}>
                    <Input placeholder={'성'} customStyle={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'이름'} customStyle={css`
                        flex: 1;
                    `}/>
                    <Checkbox checked={false} OnChange={checked => {
                    }} label={'故'} customStyle={css`
                        flex: 1;
                    `}/>
                </Row>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신랑 아버지</Text>
                <FormToggle
                    checked={false}
                    OnChange={checked => {
                    }}
                    label={'국화꽃으로 표시'}
                />
            </Column>
        </Column>
    );
};

export default EditorInspectorBride;
