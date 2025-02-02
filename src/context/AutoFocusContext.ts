import {createContext} from "react";

const AutoFocusContext = createContext<{
    autoFocus: boolean;
    setAutoFocus: (value: boolean) => void;
}>({
    autoFocus: true,
    setAutoFocus: () => {},
});

export default AutoFocusContext;