import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import MyPageSidebarItem from "@page/mypage/component/MyPageSidebarItem";
import {IconType} from "@designsystem/foundation/Icon";
import {useNavigate} from "react-router-dom";

const MyPageDetailSidebar = () => {
    const navigate = useNavigate();

    return (
        <Column gap={32} $alignItems={'stretch'} ui={css`
            width: 216px;
        `}>
            <MyPageSidebarItem icon={IconType.ExpandArrow} text={'돌아가기'} onClick={() => {
                navigate(-1);
            }}/>
        </Column>
    );
};

export default MyPageDetailSidebar;
