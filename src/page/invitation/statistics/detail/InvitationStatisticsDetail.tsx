import React from 'react';
import S from './InvitationStatisticsDetail.style';
import {useNavigate, useSearchParams} from "react-router-dom";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import Icon, {IconType} from "../../../../designsystem/foundation/icon";
import colors from "../../../../designsystem/foundation/colors";
import Text from "../../../../designsystem/component/text";
import {TextType} from "../../../../designsystem/foundation/text/textType";
import HorizontalDivider from "../../../../designsystem/component/horizontalDivider";
import StatisticsValueCell from "./component/StatisticsValueCell";

function InvitationStatisticsDetail() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const url = searchParams.get('url') ?? '';

    return (
        <S.container>
            <Column gap={44} style={{width: 867, paddingTop: 64, marginLeft: 64}} $alignItems={'stretch'}>
                <Icon
                    type={IconType.NormalArrow}
                    tint={colors.g400}
                    size={24}
                    style={{cursor: 'pointer'}}
                    onClick={() => {
                        navigate('/invitation/statistics')
                    }}
                />
                <Column gap={8}>
                    <Text text={'https://linkmarry-web/sss'} type={TextType.h5}/>{/*TODO: DUMMY*/}
                    <Text text={'2024.02.01 작성'} type={TextType.p3} color={colors.g500}/>{/*TODO: DUMMY*/}
                </Column>
                <Column gap={60} $alignItems={'stretch'}>
                    <Column gap={32} $alignItems={'stretch'}>
                        <Column gap={8} $alignItems={'stretch'}>
                            <Row gap={12} $alignItems={'center'}>
                                <Text text={'하객 통계'} type={TextType.p2}/>
                                <Text text={'동행 인원을 포함한 수치입니다.'} type={TextType.btn1} color={colors.g300}/>
                            </Row>
                            <Row gap={12}>
                                <StatisticsValueCell label={'총 참석 가능 인원'} value={8} filtered={false}/>
                                <StatisticsValueCell label={'신랑측'} value={8} filtered={false}/>
                                <StatisticsValueCell label={'신부측'} value={8} filtered={true}/>
                            </Row>
                        </Column>
                        <Column gap={8} $alignItems={'stretch'}>
                            <Row gap={12} $alignItems={'center'}>
                                <Text text={'식사 여부'} type={TextType.p2}/>
                                <Text text={'동행 인원을 포함한 수치입니다.'} type={TextType.btn1} color={colors.g300}/>
                            </Row>
                            <Row gap={12}>
                                <StatisticsValueCell label={'식사함'} value={8} filtered={false}/>
                                <StatisticsValueCell label={'식사안함'} value={8} filtered={false}/>
                            </Row>
                        </Column>
                        <Column gap={8} $alignItems={'stretch'}>
                            <Text text={'디바이스 접속'} type={TextType.p2}/>
                            <Row gap={12}>
                                <StatisticsValueCell label={'모바일 접속'} value={8} filtered={false}/>
                                <StatisticsValueCell label={'데스크탑 접속'} value={8} filtered={false}/>
                            </Row>
                        </Column>
                    </Column>
                    <HorizontalDivider/>
                    <Column gap={20}>

                    </Column>
                </Column>
            </Column>
        </S.container>
    );
}

export default InvitationStatisticsDetail;