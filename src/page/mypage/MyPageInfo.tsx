import React, {ComponentPropsWithoutRef} from 'react';
import {Column, Row} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import {css} from "styled-components";
import Divider from "@designsystem/component/Divider";

function MyPageInfo() {
    return (
        <Column gap={24} $alignItems={'stretch'} $customStyle={css`
            flex: 1;
        `}>
            <Text type={'h5'} bold={true}>회원정보</Text>
            <Column gap={8} $alignItems={'stretch'}>
                <Column $alignItems={'stretch'}>
                    <Item title={'이름'} value={'name'}/>
                    <Item title={'이메일'} value={'email'}/>
                </Column>
                <Divider/>
                <Text
                    type={'p3'}
                    customStyle={css`
                        color: var(--g-500);
                        text-decoration: underline;
                        height: 52px;
                        cursor: pointer;
                        align-self: flex-start;
                        display: flex;
                        align-items: center;
                    `}
                    onClick={() => {
                        // todo: api
                    }}
                >{'회원탈퇴'}</Text>
            </Column>
        </Column>
    );
}

function Item(props: {
    title: string;
    value: string;
}) {
    return (
        <Row $alignItems={'center'} $customStyle={css`
            height: 52px;
        `}>
            <Text
                type={'p3'}
                customStyle={css`
                    width: 122px;
                    color: var(--g-500);
                `}
            >{props.title}</Text>
            <Text
                type={'p3'}
                customStyle={css`
                    width: 122px;
                    color: var(--g-600);
                `}
                bold={true}
            >{props.value}</Text>
        </Row>
    );
}

export default MyPageInfo;