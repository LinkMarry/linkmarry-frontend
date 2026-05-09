import {css} from "@linaria/core";
import {useNavigate} from "react-router";
import Logo from "~/components/Logo.tsx";

export default function LogoInHeader() {
    const navigate = useNavigate();
    return (
        <Logo
            ui={css`
                cursor: pointer;
            `}
            onClick={() => {
                navigate("/");
            }}
        />
    );
}
