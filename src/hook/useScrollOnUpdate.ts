import {type RefObject, useEffect, useState} from "react";
import {useAutoFocus} from "@src/hook/useAutoFocus.ts";

type DependencyList = readonly unknown[];

export default function useScrollOnUpdate<T extends HTMLElement>(
    ref: RefObject<T | null>,
    triggerDeps: DependencyList
) {
    const [isLoadedCount, setIsLoadedCount] = useState(0);
    const {autoFocus} = useAutoFocus();


    useEffect(() => {
        if (!autoFocus) {
            return;
        }

        if (isLoadedCount < 2) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsLoadedCount(i => i + 1);
            return;
        }

        ref.current?.scrollIntoView({behavior: "smooth", block: "center"});
        // eslint-disable-next-line
    }, triggerDeps);
}
