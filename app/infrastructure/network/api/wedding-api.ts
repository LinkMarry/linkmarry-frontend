import type Wedding from "~/infrastructure/network/value/Wedding";
import api from "~/infrastructure/network/api/foundation/api";
import {type ResponseData, type ResponseVoid} from "~/infrastructure/network/value/Response";
import type WeddingDashboard from "~/infrastructure/network/value/WeddingDashboard";
import type WeddingRequest from "~/infrastructure/network/value/request/WeddingRequest";
import type RsvpRequest from "~/infrastructure/network/value/request/RsvpRequest";
import type GuestCommentRequest from "~/infrastructure/network/value/request/GuestCommentRequest";
import type EditCommentRequest from "~/infrastructure/network/value/request/EditCommentRequest";
import type DeleteCommentRequest from "~/infrastructure/network/value/request/DeleteCommentRequest";
import type WeddingStatistics from "~/infrastructure/network/value/WeddingStatistics";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto";
import type Comment from "~/infrastructure/network/value/Comment";
import type RsvpInfo from "~/infrastructure/network/value/RsvpInfo";

const PATH = 'wedding';

/**
 * URL 중복 확인
 */
async function checkUrlConflict(url: string): Promise<ResponseVoid> {
    const {data} = await api.post(`${PATH}/check/${url}`);
    return data;
}

/**
 * 자신의 청첩장(대쉬보드) 모두 불러오기
 */
async function getMyWedding(): Promise<ResponseData<WeddingDashboard>> {
    const {data} = await api.get(PATH);
    return data;
}

/**
 * 청첩장 URL 로 불러오기  (수정을 위한)
 */
async function getWedding(url: string): Promise<ResponseData<Wedding>> {
    const {data} = await api.get(`${PATH}/${url}`);
    return data;
}

/**
 * 청첩장 생성 (첫 생성)
 */
async function createWedding(req: WeddingDto): Promise<ResponseVoid> {
    const {data} = await api.post(PATH, req);
    return data;
}

/**
 * 청첩장 수정
 */
async function editWedding(req: WeddingDto): Promise<ResponseVoid> {
    const {data} = await api.patch(PATH, req);
    return data;
}

/**
 * 청첩장 불러오기 (실제 모청 확인)
 */
async function getWeddingInvitation(url: string, req: WeddingRequest): Promise<ResponseData<Wedding>> {
    const {data} = await api.post(`${PATH}/${url}`, req, {
        shouldAuthorizeRequest: false
    });
    return data;
}

/**
 * 청첩장 삭제
 */
async function removeWedding(url: string): Promise<ResponseVoid> {
    const {data} = await api.delete(`${PATH}/${url}`);
    return data;
}

/**
 * 기존 청첩장 URL 변경
 */
async function changeWeddingUrl(originUrl: string, newUrl: string): Promise<ResponseVoid> {
    const {data} = await api.patch(`${PATH}/${originUrl}/${newUrl}`);
    return data;
}

/**
 * 참석여부
 */
async function createRsvp(req: RsvpRequest): Promise<ResponseVoid> {
    const {data} = await api.post(`${PATH}/rsvp`, req, {
        shouldAuthorizeRequest: false
    });
    return data;
}

/**
 * 방명록 작성
 */
async function createComment(req: GuestCommentRequest): Promise<ResponseVoid> {
    const {data} = await api.post(`${PATH}/comment`, req, {
        shouldAuthorizeRequest: false
    });
    return data;
}

/**
 * 방명록 수정
 */
async function editComment(req: EditCommentRequest): Promise<ResponseVoid> {
    const {data} = await api.patch(`${PATH}/comment`, req, {
        shouldAuthorizeRequest: false
    });
    return data;
}

/**
 * 방명록 삭제
 */
async function removeComment(req: DeleteCommentRequest): Promise<ResponseVoid> {
    const {data} = await api.delete(`${PATH}/comment`, {
        data: req,
        shouldAuthorizeRequest: false
    });
    return data;
}

/**
 * 방명록만 불러오기
 */
async function getComments(url: string): Promise<ResponseData<Comment[]>> {
    const {data} = await api.get(`${PATH}/comment/${url}`, {
        shouldAuthorizeRequest: false
    });
    return data;
}

/**
 * 청첩장 통계 불러오기
 */
async function getStatistics(url: string): Promise<ResponseData<WeddingStatistics>> {
    const {data} = await api.get(`${PATH}/statistics/${url}`);
    return data;
}

/**
 * 링크 공유
 */
async function shareLink(url: string): Promise<ResponseVoid> {
    const {data} = await api.post(`${PATH}/link/${url}`, undefined, {
        shouldAuthorizeRequest: false
    });
    return data;
}

/**
 * 워터마크 제거
 */
async function removeWatermark(url: string): Promise<ResponseVoid> {
    const {data} = await api.post(`${PATH}/watermark/${url}`);
    return data;
}

/**
 * 응답된 RSVP 조회하기
 */
async function getRsvp(rul: string): Promise<ResponseData<RsvpInfo[]>> {
    const {data} = await api.get(`${PATH}/rsvp/${rul}`);
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
