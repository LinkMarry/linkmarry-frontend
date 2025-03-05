import {SVGProps} from "react";

export default function Pause(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M6 7C6 6.44772 6.44772 6 7 6H9C9.55228 6 10 6.44772 10 7V17C10 17.5523 9.55228 18 9 18H7C6.44772 18 6 17.5523 6 17V7Z"
                fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M5 7C5 5.89543 5.89543 5 7 5H9C10.1046 5 11 5.89543 11 7V17C11 18.1046 10.1046 19 9 19H7C5.89543 19 5 18.1046 5 17V7ZM9 7L7 7V17H9V7Z"
                  fill="current"/>
            <path
                d="M14 7C14 6.44772 14.4477 6 15 6H17C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18H15C14.4477 18 14 17.5523 14 17V7Z"
                fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M13 7C13 5.89543 13.8954 5 15 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H15C13.8954 19 13 18.1046 13 17V7ZM17 7L15 7V17H17V7Z"
                  fill="current"/>
        </svg>
    );
}
