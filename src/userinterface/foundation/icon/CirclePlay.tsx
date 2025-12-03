import {type SVGProps} from "react";

export default function CirclePlay(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
                  fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M8.5 8.94298C8.5 7.31623 10.3387 6.36999 11.6625 7.31551L15.942 10.3723C17.0587 11.17 17.0587 12.8296 15.942 13.6273L11.6625 16.6841C10.3387 17.6296 8.5 16.6833 8.5 15.0566V8.94298ZM14.7795 11.9998L10.5 8.94298V15.0566L14.7795 11.9998Z"
                  fill="current"/>
        </svg>

    );
}
