import type {ResponseData, ResponseVoid, NotificationRequest, Notification} from "~/domain";
import {httpClient} from "~/api/index.ts";

const PATH = "notification";

export async function createNotification(req: NotificationRequest): Promise<ResponseVoid> {
    const {data} = await httpClient.post(PATH, req);
    return data;
}

export async function getNotifications(): Promise<ResponseData<Notification[]>> {
    const {data} = await httpClient.get(PATH, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

export async function getNotification(id: number): Promise<ResponseData<Notification>> {
    const {data} = await httpClient.get(`${PATH}/${id}`, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

export async function editNotification(id: number, req: NotificationRequest): Promise<ResponseVoid> {
    const {data} = await httpClient.patch(`${PATH}/${id}`, req);
    return data;
}

export async function getPrivacyPolicyNotifications(): Promise<ResponseData<Notification[]>> {
    const {data} = await httpClient.get(`${PATH}/privacy`);
    return data;
}

export async function getTermsNotifications(): Promise<ResponseData<Notification[]>> {
    const {data} = await httpClient.get(`${PATH}/terms`);
    return data;
}
