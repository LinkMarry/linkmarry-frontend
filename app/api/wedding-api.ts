import type Wedding from "~/api/value/Wedding.ts";
import index from "~/api/index.ts";
import {type ResponseData, type ResponseVoid} from "~/api/value/Response.ts";
import type WeddingDashboard from "~/api/value/WeddingDashboard.ts";
import type WeddingRequest from "~/api/value/request/WeddingRequest.ts";
import type RsvpRequest from "~/api/value/request/RsvpRequest.ts";
import type GuestCommentRequest from "~/api/value/request/GuestCommentRequest.ts";
import type EditCommentRequest from "~/api/value/request/EditCommentRequest.ts";
import type DeleteCommentRequest from "~/api/value/request/DeleteCommentRequest.ts";
import type WeddingStatistics from "~/api/value/WeddingStatistics.ts";
import {type WeddingDto} from "~/api/value/WeddingDto.ts";
import type Comment from "~/api/value/Comment.ts";
import type RsvpInfo from "~/api/value/RsvpInfo.ts";

const PATH = 'wedding';

/**
 * URL 중복 확인
 */
async function checkUrlConflict(url: string): Promise<ResponseVoid> {
    const {data} = await index.post(`${PATH}/check/${url}`);
    return data;
}

/**
 * 자신의 청첩장(대쉬보드) 모두 불러오기
 */
async function getMyWedding(): Promise<ResponseData<WeddingDashboard>> {
    const {data} = await index.get(PATH);
    return data;
}

/**
 * 청첩장 URL 로 불러오기  (수정을 위한)
 */
async function getWedding(url: string): Promise<ResponseData<Wedding>> {
    const {data} = await index.get(`${PATH}/${url}`);
    return data;
}

/**
 * 청첩장 생성 (첫 생성)
 */
async function createWedding(req: WeddingDto): Promise<ResponseVoid> {
    const {data} = await index.post(PATH, req);
    return data;
}

/**
 * 청첩장 수정
 */
async function editWedding(req: WeddingDto): Promise<ResponseVoid> {
    const {data} = await index.patch(PATH, req);
    return data;
}

/**
 * 청첩장 불러오기 (실제 모청 확인)
 */
async function getWeddingInvitation(url: string, req: WeddingRequest): Promise<ResponseData<Wedding>> {
    const {data} = await index.post(`${PATH}/${url}`, req, {
        shouldAuthorizeRequest: false
    });
    return data;
}

/**
 * 청첩장 삭제
 */
async function removeWedding(url: string): Promise<ResponseVoid> {
    const {data} = await index.delete(`${PATH}/${url}`);
    return data;
}

/**
 * 기존 청첩장 URL 변경
 */
async function changeWeddingUrl(originUrl: string, newUrl: string): Promise<ResponseVoid> {
    const {data} = await index.patch(`${PATH}/${originUrl}/${newUrl}`);
    return data;
}

/**
 * 참석여부
 */
async function createRsvp(req: RsvpRequest): Promise<ResponseVoid> {
    const {data} = await index.post(`${PATH}/rsvp`, req, {
        shouldAuthorizeRequest: false
    });
    return data;
}

/**
 * 방명록 작성
 */
async function createComment(req: GuestCommentRequest): Promise<ResponseVoid> {
    const {data} = await index.post(`${PATH}/comment`, req, {
        shouldAuthorizeRequest: false
    });
    return data;
}

/**
 * 방명록 수정
 */
async function editComment(req: EditCommentRequest): Promise<ResponseVoid> {
    const {data} = await index.patch(`${PATH}/comment`, req, {
        shouldAuthorizeRequest: false
    });
    return data;
}

/**
 * 방명록 삭제
 */
async function removeComment(req: DeleteCommentRequest): Promise<ResponseVoid> {
    const {data} = await index.delete(`${PATH}/comment`, {
        data: req
    });
    return data;
}

/**
 * 방명록만 불러오기
 */
async function getComments(url: string): Promise<ResponseData<Comment[]>> {
    const {data} = await index.get(`${PATH}/comment/${url}`, {
        shouldAuthorizeRequest: false
    });
    return data;
}

/**
 * 청첩장 통계 불러오기
 */
async function getStatistics(url: string): Promise<ResponseData<WeddingStatistics>> {
    const {data} = await index.get(`${PATH}/statistics/${url}`);
    return data;
}

/**
 * 링크 공유
 */
async function shareLink(url: string): Promise<ResponseVoid> {
    const {data} = await index.post(`${PATH}/link/${url}`, undefined, {
        shouldAuthorizeRequest: false
    });
    return data;
}

/**
 * 워터마크 제거
 */
async function removeWatermark(url: string): Promise<ResponseVoid> {
    const {data} = await index.post(`${PATH}/watermark/${url}`);
    return data;
}

/**
 * 응답된 RSVP 조회하기
 */
async function getRsvp(rul: string): Promise<ResponseData<RsvpInfo[]>> {
    const {data} = await index.get(`${PATH}/rsvp/${rul}`);
    return data;
}

const weddingApi = {
    checkUrlConflict,
    getMyWedding,
    getWedding,
    createWedding,
    editWedding,
    getWeddingInvitation,
    changeWeddingUrl,
    removeWedding,
    createRsvp,
    createComment,
    editComment,
    removeComment,
    getComments,
    getStatistics,
    shareLink,
    removeWatermark,
    getRsvp
}

export default weddingApi;
