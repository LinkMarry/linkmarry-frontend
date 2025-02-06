import React, {useRef} from 'react';
import {Column, Row} from "@designsystem/component/FlexLayout";
import Divider from "@designsystem/component/Divider";
import Text from "@designsystem/component/Text";
import Greeting from "@remote/value/Greeting";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import useScrollOnUpdate from "@hook/useScrollOnUpdate";
import {css} from "styled-components";

export type InvitationLetterStyle = 'style1' | 'style2' | 'style3';

interface InvitationLetterTemplateProps {
    baseInfo: BaseInfo;
    greeting: Greeting;
    invitationLetterStyle: InvitationLetterStyle;
}

function InvitationLetterTemplate(
    {
        baseInfo,
        greeting,
        invitationLetterStyle
    }: InvitationLetterTemplateProps
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const invitationLetterRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(invitationLetterRef, [greeting]);

    return (
        <Column gap={40} $alignItems={'center'} ref={invitationLetterRef} $customStyle={css`
            padding: 72px 60px;
            background: white;
        `}>
            {invitationLetterStyle === 'style1' ? (
                <Text className={'override-font'} weight={300} size={12} font={'Aleo'} customStyle={css`
                    color: var(--g-300);
                `}>Wedding Invitation</Text>
            ) : invitationLetterStyle === 'style3' ? (
                <img src={'/invitationLetterIcon.svg'} width={20} height={20} alt="" style={{
                    color: 'white'
                }}/>
            ) : (
                <></>
            )}
            <GreetingContent text={greeting.greetingContent}/>
            <Divider style={{width: 140}}/>
            <Text weight={300} size={14} customStyle={css`
                color: var(--g-600);
            `}>
                <Row $alignItems={'center'} gap={8}>
                    <span>{first.korean} {first.name}</span><span>•</span><span>{second.korean} {second.name}</span>
                </Row>
            </Text>
        </Column>
    );
}

function GreetingContent(props: { text: string }) {
    return (
        <Text size={14} weight={300} customStyle={css`
            color: var(--g-600);
            overflow: hidden;
            word-break: break-all;
            white-space: pre-wrap;
            text-align: center;
        `}>{props.text}</Text>
    );
}

export default InvitationLetterTemplate;