import { css } from "@linaria/core";
import { useNavigate } from "react-router";
import Logo from "~/components/Logo.tsx";
import MobileHeader from "./MobileHeader.tsx";
import DesktopHeader from "./DesktopHeader.tsx";

function Header() {
    return (
        <>
            <MobileHeader />
            <DesktopHeader />
        </>
    )
}

export function LogoInHeader() {
    const navigate = useNavigate();
    return (
        <Logo ui={css`
            cursor: pointer;
        `} onClick={() => {
                navigate('/');
            }} />
    );
}

export default Header;

