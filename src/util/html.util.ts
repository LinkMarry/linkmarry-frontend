import {RefObject} from "react";

export const increaseFontSize = (ref: RefObject<HTMLElement>, increment: number) => {
    if (ref.current) {
        // containerRef 아래 모든 요소 가져오기
        const elements = ref.current.querySelectorAll("*");

        elements.forEach((element) => {
            const htmlElement = element as HTMLElement;
            if (!htmlElement) return;
            
            const computedStyle = window.getComputedStyle(element);
            const currentFontSize = parseFloat(computedStyle.fontSize);

            // 이미 증가한 요소인지 확인 (커스텀 데이터 속성 사용)
            if (!htmlElement.dataset.originalFontSize) {
                htmlElement.dataset.originalFontSize = `${currentFontSize}`; // 원래 크기 저장
            }

            // 원래 크기에서만 증가값을 더함
            const originalFontSize = parseFloat(htmlElement.dataset.originalFontSize);
            htmlElement.style.fontSize = `${originalFontSize + increment}px`;
        });
    }
};