import type {
    Wedding,
    ResponseData,
    ResponseVoid,
    WeddingDashboard,
    WeddingRequest,
    RsvpRequest,
    GuestCommentRequest,
    EditCommentRequest,
    DeleteCommentRequest,
    WeddingStatistics,
    WeddingDto,
    Comment,
    RsvpInfo,
} from "~/domain";
import {httpClient} from "~/api/index.ts";

const PATH = "wedding";

/**
 * URL 중복 확인
 */
export async function checkUrlConflict(url: string): Promise<ResponseVoid> {
    const {data} = await httpClient.post(`${PATH}/check/${url}`);
    return data;
}

/**
 * 자신의 청첩장(대쉬보드) 모두 불러오기
 */
export async function getMyWedding(): Promise<ResponseData<WeddingDashboard>> {
    const {data} = await httpClient.get(PATH);
    return data;
}

/**
 * 청첩장 URL 로 불러오기  (수정을 위한)
 */
export async function getWedding(url: string): Promise<ResponseData<Wedding>> {
    const {data} = await httpClient.get(`${PATH}/${url}`);
    return data;
}

/**
 * 청첩장 생성 (첫 생성)
 */
export async function createWedding(req: WeddingDto): Promise<ResponseVoid> {
    const {data} = await httpClient.post(PATH, req);
    return data;
}

/**
 * 청첩장 수정
 */
export async function editWedding(req: WeddingDto): Promise<ResponseVoid> {
    const {data} = await httpClient.patch(PATH, req);
    return data;
}

/**
 * 청첩장 불러오기 (실제 모청 확인)
 */
export async function getWeddingInvitation(url: string, req: WeddingRequest): Promise<ResponseData<Wedding>> {
    const {data} = await httpClient.post(`${PATH}/${url}`, req, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

/**
 * 청첩장 삭제
 */
export async function removeWedding(url: string): Promise<ResponseVoid> {
    const {data} = await httpClient.delete(`${PATH}/${url}`);
    return data;
}

/**
 * 기존 청첩장 URL 변경
 */
export async function changeWeddingUrl(originUrl: string, newUrl: string): Promise<ResponseVoid> {
    const {data} = await httpClient.patch(`${PATH}/${originUrl}/${newUrl}`);
    return data;
}

/**
 * 참석여부
 */
export async function createRsvp(req: RsvpRequest): Promise<ResponseVoid> {
    const {data} = await httpClient.post(`${PATH}/rsvp`, req, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

/**
 * 방명록 작성
 */
export async function createComment(req: GuestCommentRequest): Promise<ResponseVoid> {
    const {data} = await httpClient.post(`${PATH}/comment`, req, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

/**
 * 방명록 수정
 */
export async function editComment(req: EditCommentRequest): Promise<ResponseVoid> {
    const {data} = await httpClient.patch(`${PATH}/comment`, req, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

/**
 * 방명록 삭제
 */
export async function removeComment(req: DeleteCommentRequest): Promise<ResponseVoid> {
    const {data} = await httpClient.delete(`${PATH}/comment`, {
        data: req,
    });
    return data;
}

/**
 * 방명록만 불러오기
 */
export async function getComments(url: string): Promise<ResponseData<Comment[]>> {
    const {data} = await httpClient.get(`${PATH}/comment/${url}`, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

/**
 * 청첩장 통계 불러오기
 */
export async function getStatistics(url: string): Promise<ResponseData<WeddingStatistics>> {
    const {data} = await httpClient.get(`${PATH}/statistics/${url}`);
    return data;
}

/**
 * 링크 공유
 */
export async function shareLink(url: string): Promise<ResponseVoid> {
    const {data} = await httpClient.post(`${PATH}/link/${url}`, undefined, {
        shouldAuthorizeRequest: false,
    });
    return data;
}

/**
 * 워터마크 제거
 */
export async function removeWatermark(url: string): Promise<ResponseVoid> {
    const {data} = await httpClient.post(`${PATH}/watermark/${url}`);
    return data;
}

/**
 * 응답된 RSVP 조회하기
 */
export async function getRsvp(rul: string): Promise<ResponseData<RsvpInfo[]>> {
    const {data} = await httpClient.get(`${PATH}/rsvp/${rul}`);
    return data;
}
