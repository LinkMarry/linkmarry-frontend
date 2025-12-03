import {Column} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import MyPageSidebarItem from "@src/feature/mypage/component/MyPageSidebarItem";
import {useNavigate} from "react-router-dom";

const MyPageDetailSidebar = () => {
    const navigate = useNavigate();

    return (
        <Column $gap={32} $alignItems={'stretch'} $ui={css`
            width: 216px;
        `}>
            <MyPageSidebarItem icon={'ExpandArrow'} text={'돌아가기'} onClick={() => {
                navigate(-1);
            }}/>
        </Column>
    );
};

export default MyPageDetailSidebar;
