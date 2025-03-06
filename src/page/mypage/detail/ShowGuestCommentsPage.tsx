import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import {css} from "styled-components";
import Divider from "@designsystem/component/Divider";
import Spacer from "@designsystem/component/Spacer";
import Button from "@designsystem/component/Button";
import {IconType} from "@designsystem/foundation/Icon";
import useResponsive from "@hook/useResponsive";

const ShowGuestCommentsPage = () => {
    const {id} = useParams();

    useEffect(() => {

    }, []);

    return (
        <Column $alignItems={'stretch'} gap={24} flex={1}>
            <Text type={'h5'} bold={true} ui={css`
                color: var(--g-800);
            `}>
                방명록 확인
            </Text>
            <Column $alignItems={'stretch'} gap={48}>
                <Column gap={8} $alignItems={'stretch'}>
                    <Text type={'caption1'} bold={true}>
                        통계
                    </Text>
                    <Stats/>
                </Column>
                <Column gap={8} $alignItems={'stretch'}>
                    <Row $alignItems={'center'}>
                        <Text type={'caption1'} bold={true}>
                            방명록
                        </Text>
                        <Spacer/>
                        <Button text={'Excel 파일 다운받기'} trailingIcon={IconType.StopArrowDown} size={'small'}
                                buttonType={'outlined'}/>
                    </Row>
                </Column>
                {/*todo: table*/}
            </Column>
        </Column>
    );
};

const Stats = () => {
    const {deviceSize} = useResponsive();

    if (deviceSize === 'mobile') {
        return <MobileStats/>;
    }

    return <DesktopStats/>
}

const DesktopStats = () => {
    return (
        <Row gap={24} $alignItems={'stretch'}>
            <StatCell title={'총 참석 가능 인원'} value={'100명'}/>
            <Divider direction={'vertical'}/>
            <StatCell title={'총 참석 가능 인원'} value={'100명'}/>
            <Divider direction={'vertical'}/>
            <StatCell title={'총 참석 가능 인원'} value={'100명'}/>
        </Row>
    )
}

const MobileStats = () => {
    return (
        <Column $alignItems={'stretch'} gap={8}>
            <StatCell title={'총 참석 가능 인원'} value={'100명'}/>
            <StatCell title={'총 참석 가능 인원'} value={'100명'}/>
            <StatCell title={'총 참석 가능 인원'} value={'100명'}/>
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
        <Column $alignItems={'stretch'} flex={1}>
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

export default ShowGuestCommentsPage;
