import {SVGProps} from "react";

export default function NormalArrow(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M11.1893 19.7071C11.5799 20.0976 12.213 20.0976 12.6036 19.7071C12.9941 19.3166 12.9941 18.6834 12.6036 18.2929L7.19454 12.8839L19 12.8839C19.5 12.8839 20 12.5 20 12C20 11.4788 19.5 11.1161 19 11.1161L7.19454 11.1161L12.6036 5.70711C12.9941 5.31658 12.9941 4.68342 12.6036 4.29289C12.213 3.90237 11.5799 3.90237 11.1893 4.29289L4.36612 11.1161C3.87796 11.6043 3.87796 12.3957 4.36612 12.8839L11.1893 19.7071Z"
                fill="current"/>
        </svg>
    )
}