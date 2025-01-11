import React from 'react';
import styled from "styled-components";
import {Column} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";

interface TemplateCellProps {
    title: string;
}

function TemplateCell(
    {
        title
    }: TemplateCellProps
) {
    return (
        <S.container>
            <S.img
                src={'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2024/02/26/fbc84c43-1b58-463b-9c8a-9855e3d1bb00.jpg'}
                alt=""
            />
            <Column gap={4} style={{padding: 20}}>
                <Text text={title} type={'p2'}/>
                {/*<Text text={'title'} type={'p5}/>*/}
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
        border-radius: 12px;
        overflow: hidden;
    `,
    img: styled.img`
        display: flex;
        width: 100%;
        height: 680px;
        object-fit: cover;
    `
}

export default TemplateCell;