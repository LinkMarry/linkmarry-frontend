import Tag from "@src/infrastructure/network/enumeration/Tag";

export default interface Notification {
    // 공지 ID (PK)
    id: number;

    // 작성자 이름
    name: string;

    // 공지 제목
    title: string;

    // 공지 내용
    content: string;

    // 2020-01-01 형태 (작성일)
    date: string;

    // 공지 태그 (공지 종류)
    tag: Tag;
}

export const dummyNotifications: Notification[] = [
    {
        id: 0,
        name: '운영자',
        title: '개인정보 처리방침 개정안내',
        content: `안녕하세요. 링크메리 입니다.

링크메리 서비스를 이용해주시는 회원 여러분께 감사드리며, 링크메리 개인정보 처리방침 변경에 대한 안내 말씀 드립니다.

1. 변경 내용
- 서비스에서 개인정보 수집하는 내역을 현행화합니다.

3. 변경 시기
2025년 1월 9일

4. 문의 및 동의 철회
새로운 개인정보 처리방침 내용에 동의하지 않으시는 경우, 서비스 내에서 “탈퇴”를 신청하여 회원 탈퇴를 하실 수 있습니다. 개인정보 처리방침 내용에 대한 문의사항이 있으신 경우, 개인정보보호 담당부서(고객센터)로 문의주시면 친절하게 안내해 드리겠습니다.

회사는 앞으로도 이용자의 개인정보를 보다 안전하게 보호할 것을 약속드리며, 신뢰받는 서비스로 보답하겠습니다.

감사합니다.`,
        date: '2024.12.26',
        tag: Tag.NOTIFICATION
    },
    {
        id: 1,
        name: '운영자',
        title: '1.1 버전 업데이트 안내',
        content: '업데이트 됐수다',
        date: '2025.1.1',
        tag: Tag.UPDATE
    }
]
