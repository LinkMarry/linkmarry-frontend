import React, {useState} from 'react';
import MainWrapper from "@designsystem/pattern/header/MainWrapper";
import ProgressBar from "@src/ai/ProgressBar";
import {css} from "styled-components";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Chat from "@src/ai/Chat";
import OptionChat from "@src/ai/OptionChat";
import useWeddingDesigns from "@hook/useWeddingDesigns";
import {groupByCategory} from "@remote/value/GroupedCategory";
import Button from "@designsystem/component/Button";

const AiCustomPage = () => {
    const {weddingDesigns} = useWeddingDesigns();
    const groupedWeddingDesigns = weddingDesigns ? groupByCategory(weddingDesigns) : undefined;
    const categories = groupedWeddingDesigns ? groupedWeddingDesigns.map(i => i.category) : undefined;
    const [flow, setFlow] = useState(1);
    const [target, setTarget] = useState<string>();
    const [feature, setFeature] = useState<string[]>([]);

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
                                    title={'어떤 스타일을 선호하시나요?'}
                                    options={categories}
                                    selectedOption={target}
                                    onChange={option => setTarget(option)}
                                    onConfirm={() => setFlow(2)}
                                />
                            </>,
                            2: <>
                                <OptionChat
                                    title={'어떤 분이 사용하실 예정인가요?\n신랑, 신부, 혼주용에 따라 템플릿 폰트가 변경됩니다.'}
                                    options={['신랑, 신부용', '혼주용', '지인용']}
                                    selectedOption={feature}
                                    onChange={newValue => setFeature(newValue)}
                                    onConfirm={() => setFlow(3)}
                                />
                            </>,
                            3: <>
                                <OptionChat
                                    title={'청첩장에 어떤 요소를 포함하고 싶으신가요? (중복 선택 가능)'}
                                    options={['지도 기능', '참석의사 RSVP', '방명록']}
                                    selectedOption={feature}
                                    onChange={newValue => setFeature(newValue)}
                                    onConfirm={() => setFlow(4)}
                                />
                            </>
                        }[flow]}
                    </Column>
                    <Row $ui={css`
                        align-self: flex-end;
                    `}>
                        <Button text={'다음'} buttonType={'tonal'} onClick={() => {
                            setFlow(i => i + 1);
                        }}/>
                    </Row>
                </Column>
            </Column>
        </MainWrapper>
    );
};

export default AiCustomPage;
