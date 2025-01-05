import WeddingInfo from "@remote/value/WeddingInfo";

export default interface WeddingDashboard {
    // 본인이 생성한 모청
    weddingInfo: WeddingInfo[];
    
    // 워터마크 제거 가능한 수
    invitation: number;
}

export const dummyWeddingDashboard: WeddingDashboard[] = [
    {
        weddingInfo: [
            {
                img: 'https://i.namu.wiki/i/dHwukCxqwzULmsh1k48_d0qvcKL7bREJrvwxUNY9ncDmgqllBkSALCFyQVizMeK3zJLMk2J9ozDqpopxM9Yc6g.webp',
                url: 'https://linkmarry-web/suasijsijsasdjisj',
                createdDate: '2024-12-31 10:10:10'
            }
        ],
        invitation: 1
    },
    {
        weddingInfo: [
            {
                img: 'https://i.namu.wiki/i/dHwukCxqwzULmsh1k48_d0qvcKL7bREJrvwxUNY9ncDmgqllBkSALCFyQVizMeK3zJLMk2J9ozDqpopxM9Yc6g.webp',
                url: 'https://linkmarry-web/suasijsijsasdjisj',
                createdDate: '2024-12-31 10:10:10'
            }
        ],
        invitation: 1
    },
    {
        weddingInfo: [
            {
                img: 'https://i.namu.wiki/i/dHwukCxqwzULmsh1k48_d0qvcKL7bREJrvwxUNY9ncDmgqllBkSALCFyQVizMeK3zJLMk2J9ozDqpopxM9Yc6g.webp',
                url: 'https://linkmarry-web/suasijsijsasdjisj',
                createdDate: '2024-12-31 10:10:10'
            }
        ],
        invitation: 1
    },
    {
        weddingInfo: [
            {
                img: 'https://i.namu.wiki/i/dHwukCxqwzULmsh1k48_d0qvcKL7bREJrvwxUNY9ncDmgqllBkSALCFyQVizMeK3zJLMk2J9ozDqpopxM9Yc6g.webp',
                url: 'https://linkmarry-web/suasijsijsasdjisj',
                createdDate: '2024-12-31 10:10:10'
            }
        ],
        invitation: 1
    },
];