import {type RefObject, useEffect, useRef} from "react";
import {useAutoFocus} from "~/hook/useAutoFocus.ts";

type DependencyList = readonly unknown[];

// 전역 상태: 같은 이벤트 틱에서 발생하는 스크롤 요청 개수를 추적 (벌크 로드 검출용)
let scrollRequestsInTick = 0;
let scheduledScroll: (() => void) | null = null;
let resetScrollRequestsTick: ReturnType<typeof setTimeout> | null = null;

export default function useScrollOnUpdate<T extends HTMLElement>(
    ref: RefObject<T | null>,
    triggerDeps: DependencyList,
    enable: boolean,
) {
    const isMounted = useRef(false);
    const {autoFocus} = useAutoFocus();

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }

        if (!autoFocus || !enable) return;

        scrollRequestsInTick++;
        
        scheduledScroll = () => {
            ref.current?.scrollIntoView({behavior: "smooth", block: "center"});
        };

        if (!resetScrollRequestsTick) {
            resetScrollRequestsTick = setTimeout(() => {
                // 단일 섹션(1개)만 업데이트되었을 때만 스크롤 (전체 로드 방지)
                if (scrollRequestsInTick === 1 && scheduledScroll) {
                    scheduledScroll();
                }
                scrollRequestsInTick = 0;
                scheduledScroll = null;
                resetScrollRequestsTick = null;
            }, 50);
        }

        // eslint-disable-next-line
    }, triggerDeps);
}
