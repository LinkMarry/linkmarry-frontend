import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import WeddingDashboard from "@remote/value/WeddingDashboard";
import StatisticsInvitationCell from "@page/invitation/statistics/component/StatisticsInvitationCell";
import weddingApi from "@remote/api/WeddingApi";
import {css} from "styled-components";
import CustomStyle from "@designsystem/component/CustomStyle";
import Spacer from "@designsystem/component/Spacer";

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
        <Row flex={1} $customStyle={css`
            background: white;
            overflow-y: scroll;
        `}>
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
                <CustomStyle as={'ul'} $customStyle={css`
                    display: grid;
                    grid-template-columns: repeat(3, 1fr); /* 3열 구성 */
                    gap: 28px;
                    justify-items: start;
                `}>
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
                </CustomStyle>
                <Spacer h={32}/>
            </Column>
        </Row>
    );
}

export default InvitationStatistics;