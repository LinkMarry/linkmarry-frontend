import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import StatisticsValueCell from "@page/invitation/statistics/detail/component/StatisticsValueCell";
import {CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Tooltip} from 'chart.js';
import {Line} from "react-chartjs-2";
import weddingApi from "@remote/api/WeddingApi";
import WeddingStatistics from "@remote/value/WeddingStatistics";
import Wedding from "@remote/value/Wedding";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import GuestType, {guestTypeRecord} from "@remote/enumeration/GuestType";
import WeddingStatisticsInfo, {fillMissingDates} from "@remote/value/WeddingStatisticsInfo";
import Button from "@designsystem/component/Button";
import Spacer from "@designsystem/component/Spacer";
import ToolTip from "@designsystem/component/ToolTip";
import {getWeddingUrl} from "@util/string.util";
import styled, {css, RuleSet} from "styled-components";
import makeText from "@designsystem/foundation/text/TextType";
import CustomStyle from "@designsystem/component/CustomStyle";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const makeData = (infos: WeddingStatisticsInfo[]) => {
    return {
        labels: infos.map(i => i.date),
        datasets: [
            {
                label: "방문자 수",
                data: infos.map(i => i.visitorCnt),
                borderColor: '#9E9E9E',
                fill: true,
                tension: 0,
            },
            {
                label: "링크 공유 수",
                data: infos.map(i => i.linkShareCnt),
                borderColor: '#FFA3B0',
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
            $customStyle={css`
                background: white;
                padding-top: 64px;
                padding-bottom: 120px;
                padding-left: 64px;
                overflow-y: scroll;
            `}
        >
            <Column gap={44} style={{width: 867}}>
                <Icon
                    iconType={IconType.NormalArrow}
                    size={24}
                    style={{cursor: 'pointer'}}
                    onClick={() => {
                        navigate('/statistics');
                    }}
                    customStyle={css`
                        fill: var(--g-400);
                    `}
                />
                {weddingStatistics && wedding && (
                    <>
                        <Column gap={8} $alignSelf={'stretch'}>
                            <Row $alignSelf={'stretch'}>
                                <Text
                                    type={'h5'}
                                    onClick={() => window.open(getWeddingUrl(wedding.url))}
                                    style={{
                                        cursor: 'pointer',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    {getWeddingUrl(wedding.url)}
                                </Text>
                                <Spacer/>
                                <Button text={'방명록 보기'} role={'assistive'} size={'medium'} onClick={() => {
                                    navigate(`/dashboard/guest-comment/${wedding.url}`);
                                }}/>
                            </Row>
                            <Text type={'p3'} customStyle={css`
                                color: var(--g-500);
                            `}>{weddingStatistics.createdDate} 작성</Text>
                        </Column>
                        <Column gap={60} $alignItems={'stretch'}>
                            <Column gap={32} $alignItems={'stretch'}>
                                <Column gap={8} $alignItems={'stretch'}>
                                    <Text type={'p2'}>방문자 통계</Text>
                                    <Column
                                        gap={8}
                                        $customStyle={css`
                                            padding: 20px;
                                            border-radius: 12px;
                                            border: 1px solid var(--g-200);
                                        `}
                                    >
                                        <Row gap={20}>
                                            <Column gap={4}>
                                                <Text type={'p4'} customStyle={css`
                                                    color: var(--g-600);
                                                `}>방문자 수 {weddingStatistics.totalVisitorCnt}</Text>
                                                <Divider customStyle={css`
                                                    background: var(--g-400);
                                                `}/>
                                            </Column>
                                            <Column gap={4}>
                                                <Text type={'p4'} customStyle={css`
                                                    color: var(--g-600);
                                                `}>링크 공유 수 {weddingStatistics.totalLinkShareCnt}</Text>
                                                <Divider customStyle={css`
                                                    background: var(--p-800);
                                                `}/>
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
                                        <Text type={'btn1'} customStyle={css`
                                            color: var(--g-300);
                                        `}>동행 인원을 포함한 수치입니다.</Text>
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
                                        <Text type={'btn1'} customStyle={css`
                                            color: var(--g-300);
                                        `}>동행 인원을 포함한 수치입니다.</Text>
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
                                        <Row
                                            $alignItems={'center'} $justifyContent={'center'} gap={8}
                                            $customStyle={css`
                                                padding: 48px 0;
                                                border: 1px solid var(--g-200);
                                                border-radius: 12px
                                            `}
                                        >
                                            <Text type={'p1'} customStyle={css`
                                                color: var(--g-600);
                                            `}>식사 정보가 집계되지 않았습니다</Text>
                                            <ToolTip content={
                                                <span style={{textAlign: 'center'}}>
                                                    청첩장을 생성할 때 참석의사 섹션에서 <b>식사 여부 항목을 활성화하지 않은 경우</b>,
                                                    <br/>
                                                    하객들의 식사 여부 통계가 수집되지 않습니다.
                                                </span>
                                            }>
                                                <Text
                                                    type={'p4'}
                                                    customStyle={css`
                                                        display: flex;
                                                        align-items: center;
                                                        justify-content: center;
                                                        width: 20px;
                                                        height: 20px;
                                                        border: 1.5px solid var(--g-400);
                                                        border-radius: 10px;
                                                        cursor: pointer;
                                                        color: var(--g-400);
                                                    `}
                                                >?</Text>
                                            </ToolTip>
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
                            <Divider/>
                            <Column gap={20} $alignItems={'stretch'}>
                                <OptionTextField
                                    leadingContent={
                                        <Icon iconType={IconType.Search} size={24}/>
                                    }
                                    width={264}
                                    style={{alignSelf: 'flex-end'}}
                                />
                                <Column gap={28} $alignItems={'center'}>
                                    <Column>
                                        <CustomStyle $customStyle={css`
                                            ${BaseRow};
                                            border-bottom: 1px solid black;
                                        `}>
                                            <Cell width={146}>작성일</Cell>
                                            <Cell width={106}>참석인</Cell>
                                            <Cell width={106}>참석여부</Cell>
                                            <Cell width={106}>식사여부</Cell>
                                            <Cell $customStyle={css`
                                                flex: 1;
                                            `}>전달사항</Cell>
                                            <Cell width={200}>전화번호</Cell>
                                        </CustomStyle>
                                        {weddingStatistics.rsvpInfos
                                            .filter(w => {
                                                if (selectedGuestType === undefined) return true;
                                                return w.guestType === selectedGuestType;
                                            })
                                            .map(rsvp => (
                                                <CustomStyle $customStyle={css`
                                                    ${BaseRow};
                                                    border-bottom: 1px solid var(--g-100);
                                                `}>
                                                    <Cell width={146}>{rsvp.createdDate}</Cell>
                                                    <Cell width={106}>{rsvp.guestName}</Cell>
                                                    <Cell width={106}>
                                                        {rsvp.isAttend ? (`${guestTypeRecord[rsvp.guestType].korean}측`) : '미참석'}
                                                    </Cell>
                                                    <Cell width={106}>
                                                        {wedding.rsvp.attendMealStatus ? (rsvp.isMeal ? '식사함' : '식사안함') : '-'}
                                                    </Cell>
                                                    <Cell $customStyle={css`
                                                        flex: 1;
                                                    `}>{wedding.rsvp.attendEtcStatus ? (rsvp.guestComment ?? '-') : '-'}</Cell>
                                                    <Cell width={200}>
                                                        {wedding.rsvp.attendPhoneStatus ? (rsvp.guestPhone ?? '-') : '-'}
                                                    </Cell>
                                                </CustomStyle>
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


const BaseRow = css`
    display: flex;
    padding: 0 8px;
    height: 60px;
    align-items: stretch;
`;

const BaseCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 146px;
    ${makeText('p4')};
`;

const Cell = styled(BaseCell)<{
    width?: number;
    $customStyle?: RuleSet;
}>`
    ${({width, $customStyle}) => css`
        ${width && css`
            width: ${width}px;
        `}
        ${$customStyle};
    `};
`


export default InvitationStatisticsDetail;