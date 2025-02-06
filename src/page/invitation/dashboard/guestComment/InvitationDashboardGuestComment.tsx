import React, {useEffect, useState} from 'react';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import styled, {css} from "styled-components";
import {Column} from "@designsystem/component/FlexLayout";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Text from "@designsystem/component/Text";
import makeText from "@designsystem/foundation/text/TextType";
import Comment from "@remote/value/Comment";
import weddingApi from "@remote/api/WeddingApi";

function InvitationDashboardGuestComment() {
    const {url} = useParams();
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
                <Icon iconType={IconType.ExpandArrow} customStyle={css`
                    fill: var(--g-400);
                    cursor: pointer;
                `} onClick={() => {
                    navigate('/dashboard');
                }}/>
                <Column>
                    <Text type={'h5'}>방명록</Text>
                    <Text type={'p3'} customStyle={css`
                        color: var(--g-500);
                    `}>방명록 {comments?.length ?? 0}건</Text>
                </Column>
                <Column $alignItems={'stretch'}>
                    <S.header.row>
                        <S.header.dateCell>작성일</S.header.dateCell>
                        <S.header.nameCell>작성인</S.header.nameCell>
                        <S.header.messageCell>메세지</S.header.messageCell>
                    </S.header.row>
                    {comments ? comments.map(comment => (
                        <S.body.row>
                            <S.body.dateCell>{comment.createdDate}</S.body.dateCell>
                            <S.body.nameCell>{comment.name}</S.body.nameCell>
                            <S.body.messageCell>{comment.comment}</S.body.messageCell>
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
    ${makeText('p4')};
`

const S = {
    container: styled.div`
        display: flex;
        background: white;
        overflow-y: scroll;
        flex: 1;
    `,
    header: {
        row: styled(BaseRow)`
            border-bottom: 1px solid black;
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