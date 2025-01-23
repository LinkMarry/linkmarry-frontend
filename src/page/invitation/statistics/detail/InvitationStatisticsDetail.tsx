import React, {useEffect, useState} from 'react';
import S from '@page/invitation/statistics/detail/InvitationStatisticsDetail.style';
import {useNavigate, useParams} from "react-router-dom";
import {Column, Row} from "@designsystem/component/flexLayout";
import Icon, {IconType} from "@designsystem/foundation/icon";
import colors from "@designsystem/foundation/colors";
import Text from "@designsystem/component/text";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import StatisticsValueCell from "@page/invitation/statistics/detail/component/StatisticsValueCell";
import {CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Tooltip} from 'chart.js';
import {Line} from "react-chartjs-2";
import weddingApi from "@remote/api/WeddingApi";
import WeddingStatistics from "@remote/value/WeddingStatistics";
import Wedding from "@remote/value/Wedding";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import GuestType, {guestTypeRecord} from "@remote/enumeration/GuestType";
import WeddingStatisticsInfo, {fillMissingDates} from "@remote/value/WeddingStatisticsInfo";
import Button from "@designsystem/component/button";
import Spacer from "@designsystem/component/spacer";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const makeData = (infos: WeddingStatisticsInfo[]) => {
    return {
        labels: infos.map(i => i.date),
        datasets: [
            {
                label: "방문자 수",
                data: infos.map(i => i.visitorCnt),
                borderColor: colors.g400,
                fill: true,
                tension: 0,
            },
            {
                label: "링크 공유 수",
                data: infos.map(i => i.linkShareCnt),
                borderColor: colors.p800,
                fill: true,
                tension: 0,
            },
        ],
    };
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
    const {url} = useParams();

    const [weddingStatistics, setWeddingStatistics] = useState<WeddingStatistics>();
    const [wedding, setWedding] = useState<Wedding>();
    const [selectedGuestType, setSelectedGuestType] = useState<GuestType>();

    useEffect(() => {
        if (!url) {
            navigate(-1);
            return;
        }

        (async () => {
            const {data} = await weddingApi.getStatistics(url);
            setWeddingStatistics(data);
        })();

        (async () => {
            const {data} = await weddingApi.getWedding(url);
            setWedding(data);
        })();
    }, []);

    return (
        <Column
            flex={1}
            background={colors.white}
            style={{paddingTop: 64, paddingBottom: 120, paddingLeft: 64, overflowY: 'scroll'}}
        >
            <Column gap={44} style={{width: 867}}>
                <Icon
                    type={IconType.NormalArrow}
                    tint={colors.g400}
                    size={24}
                    style={{cursor: 'pointer'}}
                    onClick={() => {
                        navigate('/statistics');
                    }}
                />
                {weddingStatistics && wedding && (
                    <>
                        <Column gap={8} $alignSelf={'stretch'}>
                            <Row $alignSelf={'stretch'}>
                                <Text type={'h5'}>https://linkmarry-web/{wedding.url}</Text>
                                <Spacer/>
                                <Button text={'방명록 보기'} role={'assistive'} size={'medium'} onClick={() => {
                                    navigate(`/dashboard/guest-comment/${wedding.url}`);
                                }}/>
                            </Row>
                            <Text type={'p3'} color={colors.g500}>{weddingStatistics.createdDate} 작성</Text>
                        </Column>
                        <Column gap={60} $alignItems={'stretch'}>
                            <Column gap={32} $alignItems={'stretch'}>
                                <Column gap={8} $alignItems={'stretch'}>
                                    <Text type={'p2'}>방문자 통계</Text>
                                    <Column gap={8}
                                            style={{padding: 20, borderRadius: 12, border: `1px solid ${colors.g200}`}}>
                                        <Row gap={20}>
                                            <Column gap={4}>
                                                <Text type={'p4'} color={colors.g600}>방문자
                                                    수 {weddingStatistics.totalVisitorCnt}</Text>
                                                <HorizontalDivider color={colors.g400}/>
                                            </Column>
                                            <Column gap={4}>
                                                <Text type={'p4'} color={colors.g600}>링크 공유
                                                    수 {weddingStatistics.totalLinkShareCnt}</Text>
                                                <HorizontalDivider color={colors.p800}/>
                                            </Column>
                                        </Row>
                                        <Line
                                            data={makeData(fillMissingDates(weddingStatistics.weddingStatisticsInfos))}
                                            options={options}
                                        />
                                    </Column>
                                </Column>
                                <Column gap={8} $alignItems={'stretch'}>
                                    <Row gap={12} $alignItems={'center'}>
                                        <Text type={'p2'}>하객 통계</Text>
                                        <Text type={'btn1'} color={colors.g300}>동행 인원을 포함한 수치입니다.</Text>
                                    </Row>
                                    <Row gap={12}>
                                        <StatisticsValueCell
                                            label={'총 참석 가능 인원'}
                                            value={weddingStatistics.totalVisitorCnt}
                                            filtered={false}
                                        />
                                        <StatisticsValueCell
                                            label={'신랑측'}
                                            value={weddingStatistics.rsvpInfos.filter(w => w.guestType === GuestType.GROOM).length}
                                            filtered={selectedGuestType === GuestType.GROOM}
                                            onClick={() => {
                                                if (selectedGuestType === GuestType.GROOM) {
                                                    setSelectedGuestType(undefined);

                                                } else {
                                                    setSelectedGuestType(GuestType.GROOM);
                                                }
                                            }}
                                            style={{cursor: 'pointer'}}
                                        />
                                        <StatisticsValueCell
                                            label={'신부측'}
                                            value={weddingStatistics.rsvpInfos.filter(w => w.guestType === GuestType.BRIDE).length}
                                            filtered={selectedGuestType === GuestType.BRIDE}
                                            onClick={() => {
                                                if (selectedGuestType === GuestType.BRIDE) {
                                                    setSelectedGuestType(undefined);
                                                } else {
                                                    setSelectedGuestType(GuestType.BRIDE);
                                                }
                                            }}
                                            style={{cursor: 'pointer'}}
                                        />
                                    </Row>
                                </Column>
                                <Column gap={8} $alignItems={'stretch'}>
                                    <Row gap={12} $alignItems={'center'}>
                                        <Text type={'p2'}>식사 여부</Text>
                                        <Text type={'btn1'} color={colors.g300}>동행 인원을 포함한 수치입니다.</Text>
                                    </Row>
                                    {wedding.rsvp.attendMealStatus ? (
                                        <Row gap={12}>
                                            <StatisticsValueCell
                                                label={'식사함'}
                                                value={weddingStatistics.rsvpInfos.filter(w => w.isMeal).length}
                                                filtered={false}
                                            />
                                            <StatisticsValueCell
                                                label={'식사안함'}
                                                value={weddingStatistics.rsvpInfos.filter(w => !w.isMeal).length}
                                                filtered={false}
                                            />
                                        </Row>
                                    ) : (
                                        <Row $alignItems={'center'} $justifyContent={'center'} gap={8}
                                             padding={'48px 0'}
                                             style={{
                                                 border: `1px solid ${colors.g200}`,
                                                 borderRadius: 12
                                             }}
                                        >
                                            <Text type={'p1'} color={colors.g600}>식사 정보가 집계되지 않았습니다</Text>
                                            <Text
                                                style={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    width: 20, height: 20,
                                                    border: `1.5px solid ${colors.g400}`, borderRadius: 10,
                                                    cursor: 'pointer'
                                                }}
                                                type={'p4'}
                                                color={colors.g400}
                                            >?</Text>
                                        </Row>
                                    )}
                                </Column>
                                <Column gap={8} $alignItems={'stretch'}>
                                    <Text type={'p2'}>디바이스 접속</Text>
                                    <Row gap={12}>
                                        <StatisticsValueCell
                                            label={'모바일 접속'}
                                            value={weddingStatistics.mobileCnt}
                                            filtered={false}
                                        />
                                        <StatisticsValueCell
                                            label={'데스크탑 접속'}
                                            value={weddingStatistics.desktopCnt}
                                            filtered={false}
                                        />
                                    </Row>
                                </Column>
                            </Column>
                            <HorizontalDivider/>
                            <Column gap={20} $alignItems={'stretch'}>
                                <OptionTextField
                                    leadingContent={
                                        <Icon type={IconType.Search} size={24}/>
                                    }
                                    width={264}
                                    style={{alignSelf: 'flex-end'}}
                                />
                                <Column gap={28} $alignItems={'center'}>
                                    <Column>
                                        <S.rsvp.headerRow>
                                            <S.rsvp.cell width={146}>작성일</S.rsvp.cell>
                                            <S.rsvp.cell width={106}>참석인</S.rsvp.cell>
                                            <S.rsvp.cell width={106}>참석여부</S.rsvp.cell>
                                            <S.rsvp.cell width={106}>식사여부</S.rsvp.cell>
                                            <S.rsvp.contentCell>전달사항</S.rsvp.contentCell>
                                            <S.rsvp.cell width={200}>전화번호</S.rsvp.cell>
                                        </S.rsvp.headerRow>
                                        {weddingStatistics.rsvpInfos
                                            .filter(w => {
                                                if (selectedGuestType === undefined) return true;
                                                return w.guestType === selectedGuestType;
                                            })
                                            .map(rsvp => (
                                                <S.rsvp.bodyRow>
                                                    <S.rsvp.cell width={146}>{rsvp.createdDate}</S.rsvp.cell>
                                                    <S.rsvp.cell width={106}>{rsvp.guestName}</S.rsvp.cell>
                                                    <S.rsvp.cell
                                                        width={106}>{rsvp.isAttend ? (`${guestTypeRecord[rsvp.guestType].korean}측`) : '미참석'}</S.rsvp.cell>
                                                    <S.rsvp.cell
                                                        width={106}>{wedding.rsvp.attendMealStatus ? (rsvp.isMeal ? '식사함' : '식사안함') : '-'}</S.rsvp.cell>
                                                    <S.rsvp.contentCell>{wedding.rsvp.attendEtcStatus ? (rsvp.guestComment ?? '-') : '-'}</S.rsvp.contentCell>
                                                    <S.rsvp.cell
                                                        width={200}>{wedding.rsvp.attendPhoneStatus ? (rsvp.guestPhone ?? '-') : '-'}</S.rsvp.cell>
                                                </S.rsvp.bodyRow>
                                            ))
                                        }
                                    </Column>
                                </Column>
                            </Column>
                        </Column>
                    </>
                )}
            </Column>
        </Column>
    );
}

export default InvitationStatisticsDetail;