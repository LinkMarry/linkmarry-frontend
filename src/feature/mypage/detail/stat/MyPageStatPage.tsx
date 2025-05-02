import React from 'react';
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import {css} from "styled-components";
import Divider from "@src/userinterface/component/Divider";
import Spacer from "@src/userinterface/component/Spacer";
import Button from "@src/userinterface/component/Button";
import {IconType} from "@src/userinterface/foundation/Icon";
import useResponsive from "@src/hook/useResponsive";
import WeddingStatistics from "@src/infrastructure/network/value/WeddingStatistics";
import Loading from "@src/userinterface/specific/Loading";
import View from "@src/userinterface/core/View";
import {getRsvpText} from "@src/infrastructure/network/value/RsvpInfo";
import makeText from "@src/userinterface/foundation/text/TextType";
import {downloadExcel} from "@src/shared/excel-util";
import useMyPageStat from "@src/feature/mypage/detail/stat/useMyPageStat";

const CellStyle = css`
    padding: 4px 6px;
    color: var(--g-900);
    ${makeText('p3')};
    min-width: 108px;
`;

const MyPageStatPage = () => {
    const {statistics, wedding, rsvp} = useMyPageStat();

    return (
        <Column $alignItems={'stretch'} $gap={24} $flex={1} $ui={css`
            min-width: 0;
        `}>
            <Text type={'h5'} bold={true} ui={css`
                color: var(--g-800);
            `}>
                통계 확인
            </Text>
            <Column $alignItems={'stretch'} $gap={48}>
                <Column $gap={8} $alignItems={'stretch'}>
                    <Text type={'caption1'} bold={true} ui={css`
                        color: var(--g-400);
                    `}>
                        통계
                    </Text>
                    {statistics ? (
                        <Stats statistics={statistics}/>
                    ) : (
                        <Loading/>
                    )}
                </Column>
                <Column $gap={8} $alignItems={'stretch'}>
                    <Row $alignItems={'flex-end'}>
                        <Text type={'caption1'} bold={true} ui={css`
                            color: var(--g-400);
                        `}>
                            RSVP
                        </Text>
                        <Spacer/>
                        {wedding?.rsvp.rsvpActivate && (
                            <Button
                                text={'Excel 파일 다운받기'} trailingIcon={IconType.StopArrowDown} size={'small'}
                                buttonType={'outlined'}
                                onClick={() => {
                                    if (rsvp) {
                                        downloadExcel(rsvp, '방명록');
                                    }
                                }}
                            />
                        )}
                    </Row>
                    {wedding?.rsvp.rsvpActivate ? (
                        <Column $alignItems={'flex-start'} $ui={css`
                            border-radius: 8px;
                            border: 1px solid var(--g-100);
                            overflow-x: scroll;
                        `}>
                            <View as={'table'} $ui={css`
                                & td:not(:last-child) {
                                    border-right: 1px solid var(--g-100);
                                }

                                border-collapse: collapse;
                                border-spacing: 0;
                            `}>
                                <View as={'tr'} $ui={css`
                                `}>
                                    <View as={'td'} $ui={css`
                                        ${CellStyle};
                                        color: var(--g-500);
                                    `}>이름</View>
                                    <View as={'td'} $ui={css`
                                        ${CellStyle};
                                        color: var(--g-500);
                                    `}>참석측</View>
                                    <View as={'td'} $ui={css`
                                        ${CellStyle};
                                        color: var(--g-500);
                                    `}>식사 여부</View>
                                    <View as={'td'} $ui={css`
                                        ${CellStyle};
                                        color: var(--g-500);
                                    `}>참석 인원</View>
                                    <View as={'td'} $ui={css`
                                        ${CellStyle};
                                        color: var(--g-500);
                                    `}>전화번호</View>
                                    <View as={'td'} $ui={css`
                                        ${CellStyle};
                                        color: var(--g-500);
                                    `}>버스 탑승 여부</View>
                                    <View as={'td'} $ui={css`
                                        ${CellStyle};
                                        color: var(--g-500);
                                    `}>추가 전달사항</View>
                                </View>
                                {rsvp ? rsvp.map(rsvp => (
                                    <View key={rsvp.id} as={'tr'} $ui={css`
                                        border-top: 1px solid var(--g-100);
                                    `}>
                                        <View as={'td'} $ui={css`
                                            ${CellStyle};
                                        `}>{rsvp.guestName}</View>
                                        <View as={'td'} $ui={css`
                                            ${CellStyle};
                                        `}>{getRsvpText(rsvp)}</View>
                                        <View as={'td'} $ui={css`
                                            ${CellStyle};
                                        `}>{wedding?.rsvp.attendMealStatus ? (rsvp.isMeal ? '식사함' : '식사 안 함') : '-'}</View>
                                        <View as={'td'} $ui={css`
                                            ${CellStyle};
                                        `}>{wedding?.rsvp.attendGuestCntStatus ? rsvp.guestCnt : '-'}</View>
                                        <View as={'td'} $ui={css`
                                            ${CellStyle};
                                        `}>{wedding?.rsvp.attendPhoneStatus ? rsvp.guestPhone : '-'}</View>
                                        <View as={'td'} $ui={css`
                                            ${CellStyle};
                                        `}>{wedding?.rsvp.attendBusStatus ? rsvp.bus : '-'}</View>
                                        <View as={'td'} $ui={css`
                                            ${CellStyle};
                                        `}>{wedding?.rsvp.attendEtcStatus ? rsvp.guestComment : '-'}</View>
                                    </View>
                                )) : (
                                    <Loading ui={css`
                                        margin-top: 40px;
                                    `}/>
                                )}
                            </View>
                        </Column>
                    ) : (
                        <Column $gap={8} $alignItems={'center'} $ui={css`
                            margin-top: 20px;
                        `}>
                            <Text type={'p1'}>RSVP 집계가 비활성화 되어있습니다</Text>
                            <Text type={'p3'} ui={css`
                                color: var(--g-500);
                            `}><View as={'span'} onClick={() => {
                                if (wedding) {
                                    window.open(`/editor/${wedding.url}`);
                                }
                            }} $ui={css`
                                cursor: pointer;
                                text-decoration: underline;
                            `}>에디터</View>에서 활성화 할 수 있습니다</Text>
                        </Column>
                    )}
                </Column>
                <Spacer h={64}/>
            </Column>
        </Column>
    );
};

interface StatsProps {
    statistics: WeddingStatistics;
}

const Stats = (props: StatsProps) => {
    const {deviceSize} = useResponsive();

    if (deviceSize === 'mobile') {
        return <MobileStats {...props}/>;
    }

    return <DesktopStats {...props}/>
}

const DesktopStats = ({statistics}: StatsProps) => {
    return (
        <Row $gap={24} $alignItems={'stretch'}>
            <StatCell title={'총 참석 가능 인원'} value={`${statistics.totalRsvpVisitorCnt}명`}/>
            <Divider direction={'vertical'}/>
            <StatCell title={'식사 인원'} value={`${statistics.totalMealCnt}명`}/>
            <Divider direction={'vertical'}/>
            <StatCell title={'링크 클릭 횟수'} value={`${statistics.totalVisitorCnt}회`}/>
        </Row>
    )
}

const MobileStats = ({statistics}: StatsProps) => {
    return (
        <Column $alignItems={'stretch'} $gap={8}>
            <StatCell title={'총 참석 가능 인원'} value={`${statistics.totalRsvpVisitorCnt}명`}/>
            <StatCell title={'식사 인원'} value={`${statistics.totalMealCnt}명`}/>
            <StatCell title={'링크 클릭 횟수'} value={`${statistics.totalVisitorCnt}회`}/>
        </Column>
    )
};

interface StatCellProps {
    title: string;
    value: string;
}

const StatCell = (props: StatCellProps) => {
    const {deviceSize} = useResponsive();

    if (deviceSize === 'mobile') {
        return <MobileStatCell {...props}/>;
    }

    return <DesktopStatCell {...props}/>;
}

const DesktopStatCell = ({title, value}: StatCellProps) => {
    return (
        <Column $alignItems={'stretch'} $flex={1}>
            <Text type={'p2'} ui={css`
                color: var(--g-500);
            `}>{title}</Text>
            <Text type={'p2'} bold={true} ui={css`
                color: var(--g-600);
            `}>{value}</Text>
        </Column>
    )
}

const MobileStatCell = ({title, value}: StatCellProps) => {
    return (
        <Row>
            <Text type={'p3'} ui={css`
                color: var(--g-500);
            `}>{title}</Text>
            <Spacer/>
            <Text type={'p3'} bold={true} ui={css`
                color: var(--g-600);
            `}>{value}</Text>
        </Row>
    )
}

export default MyPageStatPage;
