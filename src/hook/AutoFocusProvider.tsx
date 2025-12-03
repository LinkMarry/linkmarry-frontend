import {type PropsWithChildren, useState} from "react";
import {AutoFocusContext} from "./useAutoFocus";

export const AutoFocusProvider = (props: PropsWithChildren) => {
    const [autoFocus, setAutoFocus] = useState(true);

    return (
        <AutoFocusContext.Provider value={{
            autoFocus,
            setAutoFocus: value => setAutoFocus(value),
        }}>
            {props.children}
        </AutoFocusContext.Provider>
    );
};