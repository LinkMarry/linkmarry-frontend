import {allCasesOfEnum} from "@util/enum.util";

enum GuestCommentDesign {
    BASIC = 'BASIC',
    STICKER = 'STICKER',
}

export const guestCommentDesignList = allCasesOfEnum(GuestCommentDesign);
export const guestCommentDesignMap: Record<GuestCommentDesign, {
    korean: string
}> = {
    [GuestCommentDesign.BASIC]: {
        korean: '기본형'
    },
    [GuestCommentDesign.STICKER]: {
        korean: '스티커'
    }
};

export default GuestCommentDesign;
