import type {Wedding, ResponseData, WeddingDashboard, WeddingStatistics, WeddingDto, Comment, RsvpInfo} from "~/domain";
import type {
    RsvpRequest,
    WeddingRequest,
    GuestCommentRequest,
    EditCommentRequest,
    DeleteCommentRequest,
} from "~/api/request";

import {httpClient} from "~/api/index.ts";

const PATH = "wedding";

/**
 * URL 중복 확인
 */
export async function checkUrlConflict(url: string) {
    const {data} = await httpClient.post<ResponseData>(`${PATH}/check/${url}`);
    return data;
}

/**
 * 자신의 청첩장(대쉬보드) 모두 불러오기
 */
export async function getMyWedding() {
    const {data} = await httpClient.get<ResponseData<WeddingDashboard>>(PATH);
    return data;
}

/**
 * 청첩장 URL 로 불러오기  (수정을 위한)
 */
export async function getWedding(url: string) {
    const {data} = await httpClient.get<ResponseData<Wedding>>(`${PATH}/${url}`);
    return data;
}

/**
 * 청첩장 생성 (첫 생성)
 */
export async function createWedding(req: WeddingDto) {
    const {data} = await httpClient.post<ResponseData>(PATH, req);
    return data;
}

/**
 * 청첩장 수정
 */
export async function editWedding(req: WeddingDto) {
    const {data} = await httpClient.patch<ResponseData>(PATH, req);
    return data;
}

/**
 * 청첩장 불러오기 (실제 모청 확인)
 */
export async function getWeddingInvitation(url: string, req: WeddingRequest) {
    const {data} = await httpClient.post<ResponseData<Wedding>>(`${PATH}/${url}`, req, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

/**
 * 청첩장 삭제
 */
export async function removeWedding(url: string) {
    const {data} = await httpClient.delete<ResponseData>(`${PATH}/${url}`);
    return data;
}

/**
 * 기존 청첩장 URL 변경
 */
export async function changeWeddingUrl(originUrl: string, newUrl: string) {
    const {data} = await httpClient.patch<ResponseData>(`${PATH}/${originUrl}/${newUrl}`);
    return data;
}

/**
 * 참석여부
 */
export async function createRsvp(req: RsvpRequest) {
    const {data} = await httpClient.post<ResponseData>(`${PATH}/rsvp`, req, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

/**
 * 방명록 작성
 */
export async function createComment(req: GuestCommentRequest) {
    const {data} = await httpClient.post<ResponseData>(`${PATH}/comment`, req, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

/**
 * 방명록 수정
 */
export async function editComment(req: EditCommentRequest) {
    const {data} = await httpClient.patch<ResponseData>(`${PATH}/comment`, req, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

/**
 * 방명록 삭제
 */
export async function removeComment(req: DeleteCommentRequest) {
    const {data} = await httpClient.delete<ResponseData>(`${PATH}/comment`, {
        data: req,
    });
    return data;
}

/**
 * 방명록만 불러오기
 */
export async function getComments(url: string) {
    const {data} = await httpClient.get<ResponseData<Comment[]>>(`${PATH}/comment/${url}`, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

/**
 * 청첩장 통계 불러오기
 */
export async function getStatistics(url: string) {
    const {data} = await httpClient.get<ResponseData<WeddingStatistics>>(`${PATH}/statistics/${url}`);
    return data;
}

/**
 * 링크 공유
 */
export async function shareLink(url: string) {
    const {data} = await httpClient.post<ResponseData>(`${PATH}/link/${url}`, undefined, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

/**
 * 워터마크 제거
 */
export async function removeWatermark(url: string) {
    const {data} = await httpClient.post<ResponseData>(`${PATH}/watermark/${url}`);
    return data;
}

/**
 * 응답된 RSVP 조회하기
 */
export async function getRsvp(rul: string) {
    const {data} = await httpClient.get<ResponseData<RsvpInfo[]>>(`${PATH}/rsvp/${rul}`);
    return data;
}
