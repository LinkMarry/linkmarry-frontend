import {IconType} from "@designsystem/foundation/icon";

export type InvitationSideBarType = 'dashboard' | 'statistics';
export const invitationSideBarRecords: Record<InvitationSideBarType, {
    title: string;
    icon: IconType;
}> = {
    dashboard: {
        title: '대쉬보드',
        icon: IconType.Manage
    },
    statistics: {
        title: '통계',
        icon: IconType.ArcticonsSpotistats
    }
};
