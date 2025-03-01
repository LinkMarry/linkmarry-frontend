import {createContext, useContext} from "react";

const AutoFocusContext = createContext<{
    autoFocus: boolean;
    setAutoFocus: (value: boolean) => void;
}>({
    autoFocus: true,
    setAutoFocus: () => {},
});

export const useAutoFocus = () => useContext(AutoFocusContext);

export default AutoFocusContext;