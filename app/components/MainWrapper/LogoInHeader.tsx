import {Logo} from "~/components";
import {css} from "@linaria/core";
import {useNavigate} from "react-router";

export const LogoInHeader = () => {
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
