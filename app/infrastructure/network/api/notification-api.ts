import {type ResponseData, type ResponseVoid} from "~/infrastructure/network/value/Response";
import api from "~/infrastructure/network/api/foundation/api";
import type NotificationRequest from "~/infrastructure/network/value/request/NotificationRequest";
import type Notification from "~/infrastructure/network/value/Notification";

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

async function getPrivacyPolicyNotifications(): Promise<ResponseData<Notification[]>> {
    const {data} = await api.get(`${PATH}/privacy`);
    return data;
}

async function getTermsNotifications(): Promise<ResponseData<Notification[]>> {
    const {data} = await api.get(`${PATH}/terms`);
    return data;
}

const notificationApi = {
    createNotification,
    getNotifications,
    getNotification,
    editNotification,
    getPrivacyPolicyNotifications,
    getTermsNotifications
};

export default notificationApi;
