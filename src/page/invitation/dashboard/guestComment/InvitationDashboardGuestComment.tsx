import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import styled from "styled-components";
import {Column} from "@designsystem/component/flexLayout";
import colors from "@designsystem/foundation/colors";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Text from "@designsystem/component/text";
import makeText, {TextType} from "@designsystem/foundation/text/textType";
import Comment from "@remote/value/Comment";
import weddingApi from "@remote/api/WeddingApi";

function InvitationDashboardGuestComment() {
    const [searchParams] = useSearchParams();
    const url = searchParams.get('url');
    const navigate = useNavigate();
    const [comments, setComments] = useState<Comment[]>();

    useEffect(() => {
        if (!url) {
            navigate(-1);
            return;
        }

        (async () => {
            const {data} = await weddingApi.getComments(url);
            setComments(data);
        })()
    }, []);

    return (
        <S.container>
            <Column gap={44} style={{marginLeft: 64, paddingTop: 64, width: 867}} $alignItems={'stretch'}>
                <Icon type={IconType.ExpandArrow} tint={colors.g400} style={{cursor: 'pointer'}} onClick={() => {
                    navigate('/invitation/dashboard');
                }}/>
                <Column>
                    <Text text={'방명록'} type={TextType.h5}/>
                    <Text text={`방명록 ${-1}건`} type={TextType.p3} color={colors.g500}/>
                </Column>
                <Column $alignItems={'stretch'}>
                    <S.header.row>
                        <S.header.dateCell>작성일</S.header.dateCell>
                        <S.header.nameCell>작성인</S.header.nameCell>
                        <S.header.messageCell>메세지</S.header.messageCell>
                    </S.header.row>
                    {comments ? comments.map(comment => (
                        <S.body.row>
                            <S.body.dateCell>2024.dummy..</S.body.dateCell>
                            <S.body.nameCell>{comment.name}</S.body.nameCell>
                            <S.body.messageCell>{comment.content}</S.body.messageCell>
                        </S.body.row>
                    )) : <div>...</div>}{/* TODO: Shimmer */}
                </Column>
            </Column>
        </S.container>
    );
}

const BaseRow = styled.div`
    display: flex;
    padding: 0 8px;
    height: 64px;
    align-items: stretch;
`;

const BaseCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 146px;
    ${makeText(TextType.p4)};
`

const S = {
    container: styled.div`
        display: flex;
        background: ${colors.white};
        overflow-y: scroll;
        flex: 1;
    `,
    header: {
        row: styled(BaseRow)`
            border-bottom: 1px solid ${colors.black};
        `,
        dateCell: BaseCell,
        nameCell: styled(BaseCell)`
            width: 106px;
        `,
        messageCell: styled(BaseCell)`
            flex: 1;
        `,
    },
    body: {
        row: BaseRow,
        dateCell: BaseCell,
        nameCell: styled(BaseCell)`
            width: 106px;
        `,
        messageCell: styled(BaseCell)`
            flex: 1;
        `,
    },
}

export default InvitationDashboardGuestComment;