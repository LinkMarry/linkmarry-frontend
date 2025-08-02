import * as XLSX from 'xlsx';
import RsvpInfo from "@src/infrastructure/network/value/RsvpInfo";
import GuestType from "@src/infrastructure/network/enumeration/GuestType";
import Rsvp from "@src/infrastructure/network/value/Rsvp";

type ClearedRsvpInfo = Omit<RsvpInfo, 'id' | 'createdDate'>;

export function downloadExcelFromRsvpInfo(
    rsvpInfoList: ClearedRsvpInfo[],
    rsvp: Rsvp,
    title: string,
) {
    const rsvpInfoHeaders: Record<keyof ClearedRsvpInfo, string> = {
        guestName: '이름',
        guestType: '참석측',
        isAttend: '참석 여부',
        isMeal: '식사 여부',
        guestCnt: '참석 인원',
        guestPhone: '전화번호',
        bus: '버스 탑성 여부',
        guestComment: '추가 전달 사항',
    };

    function prettifyRsvpInfo(rsvpInfo: ClearedRsvpInfo): Record<keyof ClearedRsvpInfo, any> {
        return {
            guestName: rsvpInfo.guestName,
            guestType: rsvpInfo.guestType === GuestType.GROOM ? '신랑측' : '신부측',
            isAttend: rsvpInfo.isAttend ? '참석' : '불참',
            isMeal: rsvp.attendMealStatus ? (rsvpInfo.isMeal ? '식사함' : '식사 안 함') : '-',
            guestCnt: rsvp.attendGuestCntStatus ? (rsvpInfo.guestCnt) : '-',
            guestPhone: rsvp.attendPhoneStatus ? (rsvpInfo.guestPhone) : '-',
            bus: rsvp.attendBusStatus ? (rsvpInfo.bus ? '탑승' : '미탑승') : '-',
            guestComment: rsvp.attendEtcStatus ? (rsvpInfo.guestComment) : '-',
        };
    }

    downloadExcel(rsvpInfoList.map(prettifyRsvpInfo), title, rsvpInfoHeaders);
}

function downloadExcel<T>(data: T[], title: string, labelMap: Record<keyof T, string>) {
    const labelledData = convertToLabelledData(data, labelMap);
    const worksheet = XLSX.utils.json_to_sheet(labelledData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, title);
    XLSX.writeFile(workbook, `${title}.xlsx`);
}

function convertToLabelledData<T>(data: T[], labelMap: Record<keyof T, string>): Record<string, any>[] {
    return data.map(row => {
        const newRow: Record<string, any> = {};
        for (const key in row) {
            const label = labelMap[key as keyof T] || key;
            newRow[label] = (row as any)[key];
        }
        return newRow;
    });
}
