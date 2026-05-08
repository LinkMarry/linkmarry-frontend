import {useMemo, useState} from "react";
import {useNavigate} from "react-router";
import type Notification from "~/api/value/Notification.ts";
import {type TagWithAll} from "~/api/enumeration/Tag.ts";

interface UseNotificationScreenProps {
    notifications: Notification[];
}

export function useNotificationScreen({notifications}: UseNotificationScreenProps) {
    const [queryTag, setQueryTag] = useState<TagWithAll>("ALL");
    const navigate = useNavigate();

    const filteredNotifications = useMemo(() => {
        if (queryTag === "ALL") {
            return notifications;
        }
        return notifications.filter(i => i.tag === queryTag);
    }, [queryTag, notifications]);

    const handleNotificationClick = (id: number) => {
        navigate(`/notification/${id}`);
    };

    return {
        queryTag,
        setQueryTag,
        filteredNotifications,
        handleNotificationClick,
    };
}
