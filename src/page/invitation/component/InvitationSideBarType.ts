import {IconType} from "@designsystem/foundation/icon";

export type InvitationSideBarType = 'dashboard' | 'design' | 'statistics';
export const invitationSideBarRecords: Record<InvitationSideBarType, {
    title: string;
    icon: IconType;
}> = {
    dashboard: {
        title: '대쉬보드',
        icon: IconType.Manage
    },
    design: {
        title: '디자인',
        icon: IconType.Star
    },
    statistics: {
        title: '통계',
        icon: IconType.ArcticonsSpotistats
    }
};
