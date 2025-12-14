import {type RefObject, useEffect, useState} from "react";
import {useAutoFocus} from "~/hook/useAutoFocus.ts";

type DependencyList = readonly unknown[];

export default function useScrollOnUpdate<T extends HTMLElement>(
    ref: RefObject<T | null>,
    triggerDeps: DependencyList,
    enable: boolean,
) {
    const [isLoadedCount, setIsLoadedCount] = useState(0);
    const {autoFocus} = useAutoFocus();


    useEffect(() => {
        if (!autoFocus || !enable) return;

        if (isLoadedCount < 2) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsLoadedCount(i => i + 1);
            return;
        }

        ref.current?.scrollIntoView({behavior: "smooth", block: "center"});
        // eslint-disable-next-line
    }, triggerDeps);
}
