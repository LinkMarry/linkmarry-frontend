import {type SVGProps} from "react";

export default function Video(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M6 8C5.44772 8 5 8.44772 5 9V15C5 15.5523 5.44772 16 6 16H13C13.5523 16 14 15.5523 14 15V9C14 8.44772 13.5523 8 13 8H6ZM3 9C3 7.34315 4.34315 6 6 6H13C14.6569 6 16 7.34315 16 9V15C16 16.6569 14.6569 18 13 18H6C4.34315 18 3 16.6569 3 15V9Z"
                  fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M17.7506 7.51819C19.0601 6.47057 21 7.40291 21 9.07993V14.9187C21 16.5957 19.0601 17.528 17.7506 16.4804L14.7506 14.0804C14.2762 13.7009 14 13.1262 14 12.5187V11.4799C14 10.8724 14.2762 10.2977 14.7506 9.91819L17.7506 7.51819ZM19 9.07993L16 11.4799V12.5187L19 14.9187V9.07993Z"
                  fill="current"/>
        </svg>
    );
}
