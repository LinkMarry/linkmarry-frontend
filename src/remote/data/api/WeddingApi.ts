import Wedding from "../value/Wedding";
import customApi from "./foundation/customApi";
import {ResponseData} from "../value/Response";
import WeddingDashboard from "../value/WeddingDashboard";
import WeddingRequest from "../value/request/WeddingRequest";
import RsvpRequest from "../value/request/RsvpRequest";
import GuestCommentRequest from "../value/request/GuestCommentRequest";
import EditCommentRequest from "../value/request/EditCommentRequest";
import DeleteCommentRequest from "../value/request/DeleteCommentRequest";
import WeddingStatistics from "../value/WeddingStatistics";

class WeddingApi {
    private static PATH = 'wedding';

    /**
     * URL 중복 확인
     */
    async checkUrlConflict(url: string): Promise<Response> {
        const {data} = await customApi.post(`${WeddingApi.PATH}/check/${url}`);
        return data;
    }

    /**
     * 자신의 청첩장(대쉬보드) 모두 불러오기
     */
    async getMyWedding(): Promise<ResponseData<WeddingDashboard>> {
        const {data} = await customApi.get(WeddingApi.PATH);
        return data;
    }

    /**
     * 청첩장 URL 로 불러오기  (수정을 위한)
     */
    async getWeddingForEditing(url: string): Promise<ResponseData<Wedding>> {
        const {data} = await customApi.get(`${WeddingApi.PATH}/${url}`);
        return data;
    }

    /**
     * 청첩장 생성 (첫 생성)
     */
    async createWedding(req: Wedding): Promise<Response> {
        const {data} = await customApi.post(WeddingApi.PATH, req);
        return data;
    }

    /**
     * 청첩장 수정
     */
    async editWedding(req: Wedding): Promise<Response> {
        const {data} = await customApi.put(WeddingApi.PATH, req);
        return data;
    }

    /**
     * 청첩장 불러오기 (실제 모청 확인)
     */
    async getWedding(url: string, req: WeddingRequest): Promise<ResponseData<Wedding>> {
        const {data} = await customApi.post(`${WeddingApi.PATH}/${url}`, req);
        return data;
    }

    /**
     * 기존 청첩장 URL 변경
     */
    async changeWeddingUrl(originUrl: string, newUrl: string): Promise<Response> {
        const {data} = await customApi.patch(`${WeddingApi.PATH}/${originUrl}/${newUrl}`);
        return data;
    }

    /**
     * 참석여부
     */
    async createRsvp(req: RsvpRequest): Promise<Response> {
        const {data} = await customApi.post(`${WeddingApi.PATH}/rsvp`, req);
        return data;
    }

    /**
     * 방명록 작성
     */
    async createComment(req: GuestCommentRequest): Promise<Response> {
        const {data} = await customApi.post(`${WeddingApi.PATH}/comment`, req);
        return data;
    }

    /**
     * 방명록 수정
     */
    async editComment(req: EditCommentRequest): Promise<Response> {
        const {data} = await customApi.patch(`${WeddingApi.PATH}/comment`, req);
        return data;
    }

    /**
     * 방명록 삭제
     */
    async removeComment(req: DeleteCommentRequest): Promise<Response> {
        const {data} = await customApi.delete(`${WeddingApi.PATH}/comment`, req);
        return data;
    }

    /**
     * 청첩장 통계 불러오기
     */
    async getStatistics(url: string): Promise<WeddingStatistics> {
        const {data} = await customApi.get(`${WeddingApi.PATH}/statistics/${url}`);
        return data;
    }
}

const weddingApi = new WeddingApi();

export default weddingApi;