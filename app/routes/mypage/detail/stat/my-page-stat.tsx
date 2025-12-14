import Text from "~/userinterface/component/Text.tsx";
import {css, cx} from "@linaria/core";
import Divider from "~/userinterface/component/Divider.tsx";
import Spacer from "~/userinterface/component/Spacer.tsx";
import Button from "~/userinterface/component/Button.tsx";
import {mobileStyle, notMobileStyle} from "~/hook/ResponsiveSwitch.tsx";
import type WeddingStatistics from "~/infrastructure/network/value/WeddingStatistics.ts";
import Loading from "~/userinterface/specific/Loading.tsx";
import View from "~/userinterface/core/View.tsx";
import {getRsvpText} from "~/infrastructure/network/value/RsvpInfo.ts";
import {downloadExcelFromRsvpInfo} from "~/shared/excel-util.ts";
import useMyPageStat from "~/routes/mypage/detail/stat/useMyPageStat.ts";
import {textStyles} from "~/userinterface/foundation/text/TextType.ts";

const CellStyle = cx(
    css`
        padding: 4px 6px;
        color: var(--g-900);
        min-width: 108px;
    `,
    textStyles.p3.normal
);

const MyPageStat = () => {
    const {statistics, wedding, rsvpInfoList} = useMyPageStat();

    return (
        <View ui={css`
            gap: 24px;
            flex: 1;
            min-width: 0;
        `}>
            <Text type={'h5'} bold={true} ui={css`
                color: var(--g-800);
            `}>
                통계 확인
            </Text>
            <View ui={css`
                gap: 48px;
            `}>
                <View ui={css`
                    gap: 8px;
                `}>
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
                </View>
                <View ui={css`
                    gap: 8px;
                `}>
                    <View ui={css`
                        flex-direction: row;
                        align-items: flex-end;
                    `}>
                        <Text type={'caption1'} bold={true} ui={css`
                            color: var(--g-400);
                        `}>
                            RSVP
                        </Text>
                        <Spacer/>
                        {wedding?.rsvp.rsvpActivate && (
                            <Button
                                text={'Excel 파일 다운받기'} trailingIcon={'StopArrowDown'} size={'small'}
                                buttonType={'outlined'}
                                onClick={() => {
                                    if (rsvpInfoList && wedding) {
                                        downloadExcelFromRsvpInfo(rsvpInfoList, wedding.rsvp, '방명록');
                                    }
                                }}
                            />
                        )}
                    </View>
                    {wedding && (
                        wedding?.rsvp.rsvpActivate ? (
                            <View className={css`
                                border-radius: 8px;
                                border: 1px solid var(--g-100);
                                overflow-x: scroll;
                                align-items: flex-start;
                            `}>
                                <table className={css`
                                    & td:not(:last-child) {
                                        border-right: 1px solid var(--g-100);
                                    }

                                    border-collapse: collapse;
                                    border-spacing: 0;
                                `}>
                                    <thead>
                                    <tr>
                                        <td className={cx(CellStyle, css`
                                            color: var(--g-500);
                                        `)}>이름
                                        </td>
                                        <td className={cx(CellStyle, css`
                                            color: var(--g-500);
                                        `)}>참석측
                                        </td>
                                        <td className={cx(CellStyle, css`
                                            color: var(--g-500);
                                        `)}>식사 여부
                                        </td>
                                        <td className={cx(CellStyle, css`
                                            color: var(--g-500);
                                        `)}>참석 인원
                                        </td>
                                        <td className={cx(CellStyle, css`
                                            color: var(--g-500);
                                        `)}>전화번호
                                        </td>
                                        <td className={cx(CellStyle, css`
                                            color: var(--g-500);
                                        `)}>버스 탑승 여부
                                        </td>
                                        <td className={cx(CellStyle, css`
                                            color: var(--g-500);
                                        `)}>추가 전달사항
                                        </td>
                                    </tr>
                                    </thead>
                                    {rsvpInfoList ? rsvpInfoList.map(rsvp => (
                                        <tr key={rsvp.id} className={css`
                                            border-top: 1px solid var(--g-100);
                                        `}>
                                            <td className={css`
                                                ${CellStyle};
                                            `}>{rsvp.guestName}</td>
                                            <td className={css`
                                                ${CellStyle};
                                            `}>{getRsvpText(rsvp)}</td>
                                            <td className={css`
                                                ${CellStyle};
                                            `}>{wedding?.rsvp.attendMealStatus ? (rsvp.isMeal ? '식사함' : '식사 안 함') : '-'}</td>
                                            <td className={css`
                                                ${CellStyle};
                                            `}>{wedding?.rsvp.attendGuestCntStatus ? rsvp.guestCnt : '-'}</td>
                                            <td className={css`
                                                ${CellStyle};
                                            `}>{wedding?.rsvp.attendPhoneStatus ? rsvp.guestPhone : '-'}</td>
                                            <td className={css`
                                                ${CellStyle};
                                            `}>{wedding?.rsvp.attendBusStatus ? (rsvp.bus ? '탑승' : '미탑승') : '-'}</td>
                                            <td className={css`
                                                ${CellStyle};
                                            `}>{wedding?.rsvp.attendEtcStatus ? rsvp.guestComment : '-'}</td>
                                        </tr>
                                    )) : (
                                        <Loading ui={css`
                                            margin-top: 40px;
                                        `}/>
                                    )}
                                </table>
                            </View>
                        ) : (
                            <View ui={css`
                                margin-top: 20px;
                                gap: 8px;
                                align-items: center;
                            `}>
                                <Text type={'p1'}>RSVP 집계가 비활성화 되어있습니다</Text>
                                <Text type={'p3'} ui={css`
                                    color: var(--g-500);
                                `}><View as={'span'} onClick={() => {
                                    if (wedding) {
                                        window.open(`/editor/${wedding.url}`);
                                    }
                                }} ui={css`
                                    cursor: pointer;
                                    text-decoration: underline;
                                `}>에디터</View>에서 활성화 할 수 있습니다</Text>
                            </View>
                        )
                    )}
                </View>
                <Spacer h={64}/>
            </View>
        </View>
    );
};

interface StatsProps {
    statistics: WeddingStatistics;
}

const Stats = (props: StatsProps) => {
    return (
        <>
            <MobileStats {...props}/>
            <NotMobileStats {...props}/>
        </>
    );
}

const NotMobileStats = ({statistics}: StatsProps) => {
    return (
        <View ui={cx(
            css`
                flex-direction: row;
                gap: 24px;
            `,
            notMobileStyle
        )}>
            <StatCell title={'총 참석 가능 인원'} value={`${statistics.totalRsvpVisitorCnt}명`}/>
            <Divider direction={'vertical'}/>
            <StatCell title={'식사 인원'} value={`${statistics.totalMealCnt}명`}/>
            <Divider direction={'vertical'}/>
            <StatCell title={'링크 클릭 횟수'} value={`${statistics.totalVisitorCnt}회`}/>
        </View>
    )
}

const MobileStats = ({statistics}: StatsProps) => {
    return (
        <View ui={cx(
            css`
                gap: 8px;
            `,
            mobileStyle
        )}>
            <StatCell title={'총 참석 가능 인원'} value={`${statistics.totalRsvpVisitorCnt}명`}/>
            <StatCell title={'식사 인원'} value={`${statistics.totalMealCnt}명`}/>
            <StatCell title={'링크 클릭 횟수'} value={`${statistics.totalVisitorCnt}회`}/>
        </View>
    )
};

interface StatCellProps {
    title: string;
    value: string;
}

const StatCell = (props: StatCellProps) => {
    return (
        <>
            <MobileStatCell {...props}/>
            <NotMobileStatCell {...props}/>
        </>
    );
}

const NotMobileStatCell = ({title, value}: StatCellProps) => {
    return (
        <View ui={cx(
            css`
                flex: 1;
            `,
            notMobileStyle
        )}>
            <Text type={'p2'} ui={css`
                color: var(--g-500);
            `}>{title}</Text>
            <Text type={'p2'} bold={true} ui={css`
                color: var(--g-600);
            `}>{value}</Text>
        </View>
    );
}

const MobileStatCell = ({title, value}: StatCellProps) => {
    return (
        <View ui={cx(
            css`
                flex-direction: row;
            `,
            mobileStyle
        )}>
            <Text type={'p3'} ui={css`
                color: var(--g-500);
            `}>{title}</Text>
            <Spacer/>
            <Text type={'p3'} bold={true} ui={css`
                color: var(--g-600);
            `}>{value}</Text>
        </View>
    )
}

export default MyPageStat;
