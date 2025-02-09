import {RefObject, useContext, useEffect, useState} from "react";
import AutoFocusContext from "@src/context/AutoFocusContext";

export default function useScrollOnUpdate<T extends HTMLElement>(
    ref: RefObject<T | null>,
    deps: any[]
) {
    const [isLoadedCount, setIsLoadedCount] = useState(0);
    const {autoFocus} = useContext(AutoFocusContext);
    
    useEffect(() => {
        if (!autoFocus) {
            return;
        }

        if (isLoadedCount < 2) {
            setIsLoadedCount(i => i + 1);
            return;
        }
        
        ref.current?.scrollIntoView({behavior: "smooth", block: "center"});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}