import InfoMember from "@remote/value/InfoMember";
import {createContext, useContext} from "react";

type AppState = {
    member?: InfoMember
};
const AppStateContext = createContext<AppState>({});

export const useAppState = () => useContext(AppStateContext);

export default AppStateContext;
