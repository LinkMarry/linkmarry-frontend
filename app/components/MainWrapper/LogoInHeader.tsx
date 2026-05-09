import {css} from "@linaria/core";
import {useNavigate} from "react-router";
import Logo from "~/components/Logo.tsx";

const LogoInHeader = () => {
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
};

export default LogoInHeader;
