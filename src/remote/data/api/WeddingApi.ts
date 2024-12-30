import Wedding from "../value/Wedding";
import customApi from "./foundation/customApi";
import {ResponseData} from "../value/Response";
import WeddingDashboard from "../value/WeddingDashboard";
import Device from "../enumeration/Device";

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
    async getWedding(url: string, req: { deviceType: Device, firstVisitor: boolean }): Promise<ResponseData<Wedding>> {
        const {data} = await customApi.post(`${WeddingApi.PATH}/${url}`, req);
        return data;
    }
}

const weddingApi = new WeddingApi();

export default weddingApi;