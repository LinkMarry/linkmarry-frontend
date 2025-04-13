import {RefObject, useEffect, useState} from "react";
import useAutoFocus from "@src/hook/useAutoFocus";

export default function useScrollOnUpdate<T extends HTMLElement>(
    ref: RefObject<T | null>,
    triggerDeps: any[]
) {
    const [isLoadedCount, setIsLoadedCount] = useState(0);
    const {autoFocus} = useAutoFocus();


    useEffect(() => {
        if (!autoFocus) {
            return;
        }

        if (isLoadedCount < 2) {
            setIsLoadedCount(i => i + 1);
            return;
        }

        ref.current?.scrollIntoView({behavior: "smooth", block: "center"});
        // eslint-disable-next-line
    }, triggerDeps);
}
