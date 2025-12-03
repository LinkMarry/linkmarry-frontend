import {createContext, useContext} from "react";

type AutoFocusObject = {
    autoFocus: boolean;
    setAutoFocus: (value: boolean) => void;
};
export const AutoFocusContext = createContext<AutoFocusObject | null>(null);


export const useAutoFocus = () => {
    const object = useContext(AutoFocusContext);
    if (!object) {
        throw new Error("useAutoFocus must be used within a Provider");
    }
    return object;
}