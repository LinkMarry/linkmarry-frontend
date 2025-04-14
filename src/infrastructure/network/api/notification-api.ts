import {ResponseData, ResponseVoid} from "@src/infrastructure/network/value/Response";
import api from "@src/infrastructure/network/api/foundation/api";
import NotificationRequest from "@src/infrastructure/network/value/request/NotificationRequest";
import Notification from "@src/infrastructure/network/value/Notification";

const PATH = 'notification';

async function createNotification(req: NotificationRequest): Promise<ResponseVoid> {
    const {data} = await api.post(PATH, req);
    return data;
}

async function getNotifications(): Promise<ResponseData<Notification[]>> {
    const {data} = await api.get(PATH, {
        shouldAuthorizeRequest: false
    });
    return data;
}

async function getNotification(id: number): Promise<ResponseData<Notification>> {
    const {data} = await api.get(`${PATH}/${id}`, {
        shouldAuthorizeRequest: false
    });
    return data;
}

async function editNotification(id: number, req: NotificationRequest): Promise<ResponseVoid> {
    const {data} = await api.patch(`${PATH}/${id}`, req);
    return data;
}

const notificationApi = {
    createNotification,
    getNotifications,
    getNotification,
    editNotification
};

export default notificationApi;
