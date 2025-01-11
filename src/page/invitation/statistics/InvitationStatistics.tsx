import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import S from '@page/invitation/statistics/InvitationStatistics.style';
import {Column} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import WeddingDashboard from "@remote/value/WeddingDashboard";
import StatisticsInvitationCell from "@page/invitation/statistics/component/StatisticsInvitationCell";
import weddingApi from "@remote/api/WeddingApi";

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
            <Column gap={44} style={{marginLeft: 64}} flex={1}>
                <Column gap={8} style={{marginTop: 64}}>
                    <Text text={'통계 확인'} type={'h5'} color={colors.black}/>
                    <Text text={'통계를 통해 더 완벽한 결혼식을 준비하세요!'} type={'p3'} color={colors.g500}/>
                </Column>
                <S.items>
                    {weddings && (
                        weddings.weddingInfo.map((weddingInfo, index) =>
                            <StatisticsInvitationCell
                                key={index}
                                weddingInfo={weddingInfo}
                                onClick={() => {
                                    navigate(`detail?url=${weddingInfo.url}`);
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