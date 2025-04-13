import React, {useState} from 'react';
import MainWrapper from "@src/userinterface/pattern/header/MainWrapper";
import ProgressBar from "@src/ai/ProgressBar";
import {css} from "styled-components";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import Chat from "@src/ai/Chat";
import OptionChat from "@src/ai/OptionChat";
import Button from "@src/userinterface/component/Button";
import Spacer from "@src/userinterface/component/Spacer";

const AiCustomPage = () => {
    const [flow, setFlow] = useState(1);
    const [target, setTarget] = useState<string>();
    const [feature, setFeature] = useState<string[]>([]);
    const [answer, setAnswer] = useState(false);

    return (
        <MainWrapper hasFooter={false}>
            <Column $alignItems={'center'}>
                <Column $gap={50} $alignItems={'stretch'} $ui={css`
                    max-width: 896px;
                    width: 100%;
                `}>
                    <Column $gap={40} $alignSelf={'center'} $alignItems={'center'} $ui={css`
                        margin-top: 72px;
                        max-width: 452px;
                        width: 100%;
                    `}>
                        <Text type={'h3'} bold={true}>AI 맞춤 템플릿 추천</Text>
                        <ProgressBar progress={flow * 25} text={`${flow}/4 단계`} ui={css`
                            align-self: stretch;
                        `}/>
                    </Column>
                    <Column $gap={16} $alignItems={'stretch'}>
                        {{
                            1: <>
                                <Chat message={'정보를 주시면 취향에 맞는 템플릿을 추천해 드릴게요!'} type={'ai'}/>
                                <OptionChat
                                    answer={answer}
                                    title={'어떤 스타일을 선호하시나요?'}
                                    options={['모던', '로맨틱', '클래식']}
                                    selectedOption={target}
                                    onChange={option => setTarget(option)}
                                    onConfirm={() => setAnswer(true)}
                                />
                                {answer && (
                                    <Chat message={target!} type={'user'}/>
                                )}
                            </>,
                            2: <>
                                <OptionChat
                                    answer={answer}
                                    title={'어떤 분이 사용하실 예정인가요?\n신랑, 신부, 혼주용에 따라 템플릿 폰트가 변경됩니다.'}
                                    options={['신랑, 신부용', '혼주용', '지인용']}
                                    selectedOption={feature}
                                    onChange={newValue => setFeature(newValue)}
                                    onConfirm={() => setAnswer(true)}
                                />
                                {answer && (
                                    <Chat message={feature.join(', ')} type={'user'}/>
                                )}
                            </>,
                            3: <>
                                <OptionChat
                                    answer={answer}
                                    title={'청첩장에 어떤 요소를 포함하고 싶으신가요? (중복 선택 가능)'}
                                    options={['지도 기능', '참석의사 RSVP', '방명록']}
                                    selectedOption={feature}
                                    onChange={newValue => setFeature(newValue)}
                                    onConfirm={() => setAnswer(true)}
                                />
                                {answer && (
                                    <Chat message={feature.join(', ')} type={'user'}/>
                                )}
                            </>,
                            4: <>
                                <img src="/Chat.png" alt="" width={280} onClick={() => {
                                    setAnswer(true);
                                }}/>
                                {answer && (
                                    <Chat message={'화이트'} type={'user'}/>
                                )}
                            </>
                        }[flow]}
                    </Column>
                    <Row $ui={css`
                        align-self: flex-end;
                    `}>
                        <Button text={'다음'} buttonType={'tonal'} enabled={answer} onClick={() => {
                            if (flow >= 4) {
                                window.location.href = '/editor?designId=1';
                                // window.location.href = '/sign-in'
                                return;
                            }
                            setAnswer(false);
                            setFlow(i => i + 1);
                        }}/>
                    </Row>
                    <Spacer h={32}/>
                </Column>
            </Column>
        </MainWrapper>
    );
};

export default AiCustomPage;
