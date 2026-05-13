import {createContext} from "react";

export type AutoFocusValue = {
    autoFocus: boolean;
    setAutoFocus: (value: boolean) => void;
};
export const AutoFocusContext = createContext<AutoFocusValue | null>(null);
