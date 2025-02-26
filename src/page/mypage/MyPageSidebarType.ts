import {IconType} from "@designsystem/foundation/Icon";

type MyPageSidebarType =
    'wedding' |
    'info' |
    'logout';

export const myPageSidebarTypeList: MyPageSidebarType[] = [
    'wedding',
    'info',
    'logout'
];

export const myPageSidebarRecord: Record<MyPageSidebarType, {
    icon: IconType;
    text: string;
}> = {
    wedding: {
        icon: IconType.Envelope,
        text: '모바일 청첩장'
    },
    info: {
        icon: IconType.PersonLine,
        text: '회원정보'
    },
    logout: {
        icon: IconType.StopArrow,
        text: '로그아웃'
    }
}


export default MyPageSidebarType;