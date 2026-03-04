import { useEffect } from 'react';

/**
 * 브라우저 확대(줌) 방지 훅
 * - 모바일: viewport meta 태그를 통한 핀치 줌 방지
 * - PC: Ctrl + 휠, Ctrl + +/-/0 키보드 단축키 차단
 */
function usePreventZoom(enable: boolean) {
    useEffect(() => {
        if (!enable) return;

        // 모바일 핀치 줌 방지
        const viewport = document.querySelector('meta[name="viewport"]');
        const original = viewport?.getAttribute('content') ?? 'width=device-width, initial-scale=1';
        viewport?.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');

        // PC 브라우저 확대 방지: Ctrl + 휠
        const handleWheel = (e: WheelEvent) => {
            if (e.ctrlKey) {
                e.preventDefault();
            }
        };

        // PC 브라우저 확대 방지: Ctrl + +/-/0 키보드 단축키
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')) {
                e.preventDefault();
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            viewport?.setAttribute('content', original);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [enable]);
}

export default usePreventZoom;
