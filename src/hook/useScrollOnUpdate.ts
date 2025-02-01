import {RefObject, useEffect} from "react";

export default function useScrollOnUpdate<T extends HTMLElement>(
    ref: RefObject<T | null>,
    deps: any[]
) {
    useEffect(() => {
        ref.current?.scrollIntoView({behavior: "smooth", block: "center"});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}