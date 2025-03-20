import React, {useRef} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Divider from "@designsystem/component/Divider";
import Text from "@designsystem/component/Text";
import Greeting from "@remote/value/Greeting";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import useScrollOnUpdate from "@hook/useScrollOnUpdate";
import {css} from "styled-components";
import FadeIn from "@src/component/fadein/FadeIn";
import GreetingDesign from "@remote/enumeration/GreetingDesign";

interface InvitationLetterTemplateProps {
    baseInfo: BaseInfo;
    greeting: Greeting;
}

function InvitationLetterTemplate(
    {
        baseInfo,
        greeting,
    }: InvitationLetterTemplateProps
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const invitationLetterRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(invitationLetterRef, [greeting]);

    return (
        <FadeIn>
            <Column $gap={40} $alignItems={'center'} ref={invitationLetterRef} $ui={css`
                padding: 72px 60px;
                background: white;
            `}>
                {greeting.greetingDesign === GreetingDesign.TEXT && (
                    <FadeIn>
                        <Text className={'override-font'} weight={300} size={12} font={'Aleo'} ui={css`
                            color: var(--g-300);
                        `}>Wedding Invitation</Text>
                    </FadeIn>
                )}
                {greeting.greetingDesign === GreetingDesign.FLOWER && (
                    <FadeIn>
                        <img src={'/invitationLetterIcon.svg'} width={20} height={20} alt="" style={{
                            color: 'white'
                        }}/>
                    </FadeIn>
                )}
                <FadeIn delay={200}>
                    <GreetingContent text={greeting.greetingContent}/>
                </FadeIn>
                <FadeIn delay={400}>
                    <Divider style={{width: 140}}/>
                </FadeIn>
                <FadeIn delay={600}>
                    <Text weight={300} size={14} ui={css`
                        color: var(--g-600);
                    `}>
                        <Row $alignItems={'center'} $gap={8}>
                            <span>{first.korean} {first.name}</span><span>•</span><span>{second.korean} {second.name}</span>
                        </Row>
                    </Text>
                </FadeIn>
            </Column>
        </FadeIn>
    );
}

function GreetingContent(props: { text: string }) {
    return (
        <Text size={14} weight={300} ui={css`
            color: var(--g-600);
            overflow: hidden;
            word-break: break-all;
            white-space: pre-wrap;
            text-align: center;
        `}>{props.text}</Text>
    );
}

export default InvitationLetterTemplate;
