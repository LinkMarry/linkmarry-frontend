import {type ResponseData, type ResponseVoid} from "~/api/value/Response.ts";
import api from "~/api/index.ts";
import type NotificationRequest from "~/api/value/request/NotificationRequest.ts";
import type Notification from "~/api/value/Notification.ts";

const PATH = "notification";

async function createNotification(req: NotificationRequest): Promise<ResponseVoid> {
    const {data} = await api.post(PATH, req);
    return data;
}

async function getNotifications(): Promise<ResponseData<Notification[]>> {
    const {data} = await api.get(PATH, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

async function getNotification(id: number): Promise<ResponseData<Notification>> {
    const {data} = await api.get(`${PATH}/${id}`, {
        shouldAuthorizeRequest: false,
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
    getTermsNotifications,
};

export default notificationApi;
