import {type PropsWithChildren} from "react";
import {AutoFocusContext} from "./context";
import {useAutoFocusImpl} from "./hook";

export const AutoFocusProvider = (props: PropsWithChildren) => {
    const value = useAutoFocusImpl();

    return <AutoFocusContext.Provider value={value}>{props.children}</AutoFocusContext.Provider>;
};
