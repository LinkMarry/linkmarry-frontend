import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import S from '@page/invitation/statistics/InvitationStatistics.style';
import {Column} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import WeddingDashboard from "@remote/value/WeddingDashboard";
import StatisticsInvitationCell from "@page/invitation/statistics/component/StatisticsInvitationCell";
import weddingApi from "@remote/api/WeddingApi";
import {css} from "styled-components";

function InvitationStatistics() {
    const navigate = useNavigate();
    const [weddings, setWeddings] = useState<WeddingDashboard>();

    useEffect(() => {
        (async () => {
            const {data} = await weddingApi.getMyWedding();
            setWeddings(data);
        })();
    }, []);

    return (
        <S.container>
            <Column gap={44} flex={1} $customStyle={css`
                margin-left: 64px;
            `}>
                <Column gap={8} $customStyle={css`
                    margin-top: 64px;
                `}>
                    <Text type={'h5'} customStyle={css`
                        color: black;
                    `}>통계 확인</Text>
                    <Text type={'p3'} customStyle={css`
                        color: var(--g-500);
                    `}>통계를 통해 더 완벽한 결혼식을 준비하세요!</Text>
                </Column>
                <S.items>
                    {weddings && (
                        weddings.weddingInfo.map((weddingInfo, index) =>
                            <StatisticsInvitationCell
                                key={index}
                                weddingInfo={weddingInfo}
                                onClick={() => {
                                    navigate(`./${weddingInfo.url}`);
                                }}
                            />
                        )
                    )}
                </S.items>
            </Column>
        </S.container>
    );
}

export default InvitationStatistics;