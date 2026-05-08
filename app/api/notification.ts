import {type ResponseData, type ResponseVoid} from "~/api/value/Response.ts";
import {httpClient} from "~/api/index.ts";
import type NotificationRequest from "~/api/value/request/NotificationRequest.ts";
import type Notification from "~/api/value/Notification.ts";

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
