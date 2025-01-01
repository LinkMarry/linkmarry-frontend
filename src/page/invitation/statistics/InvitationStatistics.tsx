import React from 'react';
import S from './InvitationStatistics.style';
import {Column} from "../../../designsystem/component/flexLayout";
import Text from "../../../designsystem/component/text";
import {TextType} from "../../../designsystem/foundation/text/textType";
import colors from "../../../designsystem/foundation/colors";
import {dummyWeddingDashboard} from "../../../remote/value/WeddingDashboard";
import StatisticsInvitationCell from "./component/StatisticsInvitationCell";
import {useNavigate} from "react-router-dom";

function InvitationStatistics() {
    const navigate = useNavigate();
    
    return (
        <S.container>
            <Column gap={44} style={{marginLeft: 64}} flex={1}>
                <Column gap={8} style={{marginTop: 64}}>
                    <Text text={'내 디자인'} type={TextType.h5} color={colors.black}/>
                    <Text text={'원하는 청첩장을 만들어보세요!'} type={TextType.p3} color={colors.g500}/>
                </Column>
                <S.items>
                    {dummyWeddingDashboard.map((weddingDashboard, index) =>
                        <StatisticsInvitationCell
                            key={index}
                            weddingDashboard={weddingDashboard}
                            onClick={() => {
                                navigate(`detail?url=wow`) // TODO: DUMMY
                            }}
                        />
                    )}
                </S.items>
            </Column>
        </S.container>
    );
}

export default InvitationStatistics;