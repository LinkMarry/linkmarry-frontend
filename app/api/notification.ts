import type {ResponseData, NotificationRequest, Notification} from "~/domain";
import {httpClient} from "~/api/index.ts";

const PATH = "notification";

export async function createNotification(req: NotificationRequest) {
    const {data} = await httpClient.post<ResponseData>(PATH, req);
    return data;
}

export async function getNotifications() {
    const {data} = await httpClient.get<ResponseData<Notification[]>>(PATH, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

export async function getNotification(id: number) {
    const {data} = await httpClient.get<ResponseData<Notification>>(`${PATH}/${id}`, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

export async function editNotification(id: number, req: NotificationRequest) {
    const {data} = await httpClient.patch<ResponseData>(`${PATH}/${id}`, req);
    return data;
}

export async function getPrivacyPolicyNotifications() {
    const {data} = await httpClient.get<ResponseData<Notification[]>>(`${PATH}/privacy`);
    return data;
}

export async function getTermsNotifications() {
    const {data} = await httpClient.get<ResponseData<Notification[]>>(`${PATH}/terms`);
    return data;
}
