import React, {useEffect, useState} from 'react';
import S from '@page/invitation/statistics/detail/InvitationStatisticsDetail.style';
import {useNavigate, useSearchParams} from "react-router-dom";
import {Column, Row} from "@designsystem/component/flexLayout";
import Icon, {IconType} from "@designsystem/foundation/icon";
import colors from "@designsystem/foundation/colors";
import Text from "@designsystem/component/text";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import StatisticsValueCell from "@page/invitation/statistics/detail/component/StatisticsValueCell";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from 'chart.js';
import {Line} from "react-chartjs-2";
import weddingApi from "@remote/api/WeddingApi";
import WeddingStatistics from "@remote/value/WeddingStatistics";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const data = {
    labels: [  // TODO: DUMMY
        "12/16",
        "12/17",
        "12/18",
        "12/19",
        "12/20",
        "12/21",
        "12/22",
        "12/23",
    ],
    datasets: [
        {
            label: "방문자 수",
            data: [1, 5, 10, 12, 15, 12, 8, 18], // TODO: DUMMY
            borderColor: colors.g400,
            fill: true,
            tension: 0,
        },
        {
            label: "링크 공유 수",
            data: [1, 3, 6, 8, 10, 9, 5, 3], // TODO: DUMMY
            borderColor: colors.p800,
            fill: true,
            tension: 0,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false, // 범례 제거
        },
        tooltip: {
            enabled: true, // 툴팁 활성화
        },
    },
    scales: {
        x: {
            grid: {
                display: false, // X축 그리드 제거
            },
        },
        y: {
            ticks: {
                stepSize: 5, // Y축 간격 설정
            },
            grid: {
                color: "#F2F2F2", // Y축 그리드 색상
                // drawBorder: false
            },
        },
    },
    elements: {
        point: {
            radius: 0, // 데이터 포인트 제거
        },
    },
};

function InvitationStatisticsDetail() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const url = searchParams.get('url');
    const [weddingStatistics, setWeddingStatistics] = useState<WeddingStatistics>();

    useEffect(() => {
        if (!url) {
            navigate(-1);
            return;
        }

        (async () => {
            const {data} = await weddingApi.getStatistics(url);
            setWeddingStatistics(data);
        })();
    }, []);

    return (
        <S.container>
            <Column gap={44} style={{width: 867, paddingTop: 64, marginLeft: 64}} $alignItems={'stretch'}>
                <Icon
                    type={IconType.NormalArrow}
                    tint={colors.g400}
                    size={24}
                    style={{cursor: 'pointer'}}
                    onClick={() => {
                        navigate('/invitation/statistics');
                    }}
                />
                {weddingStatistics && (
                    <>
                        <Column gap={8}>
                            <Text text={`https://linkmarry-web/${url}`} type={'h5'}/>
                            <Text text={'2024.02.01 작성'} type={'p3'} color={colors.g500}/>{/*TODO: DUMMY*/}
                        </Column>
                        <Column gap={60} $alignItems={'stretch'}>
                            <Column gap={32} $alignItems={'stretch'}>
                                <Column gap={8} $alignItems={'stretch'}>
                                    <Text text={'방문자 통계'} type={'p2'}/>
                                    <Column gap={8}
                                            style={{padding: 20, borderRadius: 12, border: `1px solid ${colors.g200}`}}>
                                        <Row gap={20}>
                                            <Column gap={4}>
                                                <Text text={`방문자 수 ${1}`} type={'p4'} color={colors.g600}/>
                                                <HorizontalDivider color={colors.g400}/>
                                            </Column>
                                            <Column gap={4}>
                                                <Text text={`링크 공유 수 ${1}`} type={'p4'} color={colors.g600}/>
                                                <HorizontalDivider color={colors.p800}/>
                                            </Column>
                                        </Row>
                                        <Line data={data} options={options}/>
                                    </Column>
                                </Column>
                                <Column gap={8} $alignItems={'stretch'}>
                                    <Row gap={12} $alignItems={'center'}>
                                        <Text text={'하객 통계'} type={'p2'}/>
                                        <Text text={'동행 인원을 포함한 수치입니다.'} type={'btn1'} color={colors.g300}/>
                                    </Row>
                                    <Row gap={12}>
                                        <StatisticsValueCell label={'총 참석 가능 인원'} value={weddingStatistics.totalVisitorCnt} filtered={false}/>
                                        <StatisticsValueCell label={'신랑측'} value={8} filtered={false}/>
                                        <StatisticsValueCell label={'신부측'} value={8} filtered={true}/>
                                    </Row>
                                </Column>
                                <Column gap={8} $alignItems={'stretch'}>
                                    <Row gap={12} $alignItems={'center'}>
                                        <Text text={'식사 여부'} type={'p2'}/>
                                        <Text text={'동행 인원을 포함한 수치입니다.'} type={'btn1'} color={colors.g300}/>
                                    </Row>
                                    <Row gap={12}>
                                        <StatisticsValueCell label={'식사함'} value={8} filtered={false}/>
                                        <StatisticsValueCell label={'식사안함'} value={8} filtered={false}/>
                                    </Row>
                                </Column>
                                <Column gap={8} $alignItems={'stretch'}>
                                    <Text text={'디바이스 접속'} type={'p2'}/>
                                    <Row gap={12}>
                                        <StatisticsValueCell label={'모바일 접속'} value={weddingStatistics.mobileCnt} filtered={false}/>
                                        <StatisticsValueCell label={'데스크탑 접속'} value={weddingStatistics.desktopCnt} filtered={false}/>
                                    </Row>
                                </Column>
                            </Column>
                            <HorizontalDivider/>
                            <Column gap={20}>

                            </Column>
                        </Column>
                    </>
                )}
            </Column>
        </S.container>
    );
}

export default InvitationStatisticsDetail;