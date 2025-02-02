import {RefObject, useContext, useEffect} from "react";
import AutoFocusContext from "@src/context/AutoFocusContext";

export default function useScrollOnUpdate<T extends HTMLElement>(
    ref: RefObject<T | null>,
    deps: any[]
) {
    const {autoFocus} = useContext(AutoFocusContext);
    
    useEffect(() => {
        if (!autoFocus) return;
        
        ref.current?.scrollIntoView({behavior: "smooth", block: "center"});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}