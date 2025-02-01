import React, {useRef} from 'react';
import {Column, Row} from "@designsystem/component/flexLayout";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import colors from "@designsystem/foundation/colors";
import Text from "@designsystem/component/text";
import Greeting from "@remote/value/Greeting";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import useScrollOnUpdate from "@hook/useScrollOnUpdate";

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
        <Column gap={40} padding={'72px 60px'} background={colors.white} $alignItems={'center'} ref={invitationLetterRef}>
            {invitationLetterStyle === 'style1' ? (
                <Text className={'override-font'} weight={300} size={12} font={'Aleo'} color={colors.g300}>
                    Wedding Invitation
                </Text>
            ) : invitationLetterStyle === 'style3' ? (
                <img src={'/invitationLetterIcon.svg'} width={20} height={20} alt="" color={colors.white}/>
            ) : (
                <></>
            )}
            <GreetingContent text={greeting.greetingContent}/>
            <HorizontalDivider style={{width: 140}}/>
            <Text weight={300} size={14} color={colors.g600}>
                <Row $alignItems={'center'} gap={8}>
                    <span>{first.korean} {first.name}</span><span>•</span><span>{second.korean} {second.name}</span>
                </Row>
            </Text>
        </Column>
    );
}

function GreetingContent(props: { text: string }) {
    return (
        <Text
            size={14}
            color={colors.g600}
            weight={300}
            style={{
                overflow: 'hidden',
                wordBreak: 'break-all',
                whiteSpace: 'pre-wrap',
                textAlign: 'center'
            }}
        >{props.text}</Text>
    );
}

export default InvitationLetterTemplate;