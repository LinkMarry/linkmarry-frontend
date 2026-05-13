import {useContext, useState} from "react";
import {AutoFocusContext, type AutoFocusValue} from "./context";

export const useAutoFocusImpl = (): AutoFocusValue => {
    const [autoFocus, setAutoFocus] = useState(true);

    return {
        autoFocus,
        setAutoFocus: value => setAutoFocus(value),
    };
};

export const useAutoFocus = () => {
    const object = useContext(AutoFocusContext);
    if (!object) {
        throw new Error("useAutoFocus must be used within a Provider");
    }
    return object;
};
