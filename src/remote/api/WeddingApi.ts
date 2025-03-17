import Wedding from "@remote/value/Wedding";
import api from "@remote/api/foundation/api";
import {ResponseData, ResponseVoid} from "@remote/value/Response";
import WeddingDashboard from "@remote/value/WeddingDashboard";
import WeddingRequest from "@remote/value/request/WeddingRequest";
import RsvpRequest from "@remote/value/request/RsvpRequest";
import GuestCommentRequest from "@remote/value/request/GuestCommentRequest";
import EditCommentRequest from "@remote/value/request/EditCommentRequest";
import DeleteCommentRequest from "@remote/value/request/DeleteCommentRequest";
import WeddingStatistics from "@remote/value/WeddingStatistics";
import WeddingDto from "@remote/value/WeddingDto";
import Comment from "@remote/value/Comment";
import RsvpInfo from "@remote/value/RsvpInfo";

class WeddingApi {
    private static PATH = 'wedding';

    /**
     * URL 중복 확인
     */
    async checkUrlConflict(url: string): Promise<ResponseVoid> {
        const {data} = await api.post(`${WeddingApi.PATH}/check/${url}`);
        return data;
    }

    /**
     * 자신의 청첩장(대쉬보드) 모두 불러오기
     */
    async getMyWedding(): Promise<ResponseData<WeddingDashboard>> {
        const {data} = await api.get(WeddingApi.PATH);
        return data;
    }

    /**
     * 청첩장 URL 로 불러오기  (수정을 위한)
     */
    async getWedding(url: string): Promise<ResponseData<Wedding>> {
        const {data} = await api.get(`${WeddingApi.PATH}/${url}`);
        return data;
    }

    /**
     * 청첩장 생성 (첫 생성)
     */
    async createWedding(req: WeddingDto): Promise<ResponseVoid> {
        const {data} = await api.post(WeddingApi.PATH, req);
        return data;
    }

    /**
     * 청첩장 수정
     */
    async editWedding(req: WeddingDto): Promise<ResponseVoid> {
        const {data} = await api.patch(WeddingApi.PATH, req);
        return data;
    }

    /**
     * 청첩장 불러오기 (실제 모청 확인)
     */
    async getWeddingInvitation(url: string, req: WeddingRequest): Promise<ResponseData<Wedding>> {
        const {data} = await api.post(`${WeddingApi.PATH}/${url}`, req, {
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 청첩장 삭제
     */
    async removeWedding(url: string): Promise<ResponseVoid> {
        const {data} = await api.delete(`${WeddingApi.PATH}/${url}`);
        return data;
    }

    /**
     * 기존 청첩장 URL 변경
     */
    async changeWeddingUrl(originUrl: string, newUrl: string): Promise<ResponseVoid> {
        const {data} = await api.patch(`${WeddingApi.PATH}/${originUrl}/${newUrl}`);
        return data;
    }

    /**
     * 참석여부
     */
    async createRsvp(req: RsvpRequest): Promise<ResponseVoid> {
        const {data} = await api.post(`${WeddingApi.PATH}/rsvp`, req, {
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 방명록 작성
     */
    async createComment(req: GuestCommentRequest): Promise<ResponseVoid> {
        const {data} = await api.post(`${WeddingApi.PATH}/comment`, req, {
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 방명록 수정
     */
    async editComment(req: EditCommentRequest): Promise<ResponseVoid> {
        const {data} = await api.patch(`${WeddingApi.PATH}/comment`, req, {
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 방명록 삭제
     */
    async removeComment(req: DeleteCommentRequest): Promise<ResponseVoid> {
        const {data} = await api.delete(`${WeddingApi.PATH}/comment`, {
            data: req,
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 방명록만 불러오기
     */
    async getComments(url: string): Promise<ResponseData<Comment[]>> {
        const {data} = await api.get(`${WeddingApi.PATH}/comment/${url}`, {
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 청첩장 통계 불러오기
     */
    async getStatistics(url: string): Promise<ResponseData<WeddingStatistics>> {
        const {data} = await api.get(`${WeddingApi.PATH}/statistics/${url}`);
        return data;
    }

    /**
     * 링크 공유
     */
    async shareLink(url: string): Promise<ResponseVoid> {
        const {data} = await api.post(`${WeddingApi.PATH}/link/${url}`, undefined, {
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 워터마크 제거
     */
    async removeWatermark(url: string): Promise<ResponseVoid> {
        const {data} = await api.post(`${WeddingApi.PATH}/watermark/${url}`);
        return data;
    }

    /**
     * 응답된 RSVP 조회하기
     */
    async getRsvp(rul: string): Promise<ResponseData<RsvpInfo[]>> {
        const {data} = await api.get(`${WeddingApi.PATH}/rsvp/${rul}`);
        return data;
    }
}

const weddingApi = new WeddingApi();

export default weddingApi;
