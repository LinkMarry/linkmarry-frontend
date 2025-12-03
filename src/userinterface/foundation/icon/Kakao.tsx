import {type SVGProps} from 'react';

const Kakao = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="20" height="20" fill="#FEE500"/>
            <g clipPath="url(#clip0_237_1352)">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M10 4.3999C6.68612 4.3999 4 6.47521 4 9.03476C4 10.6266 5.03894 12.0299 6.62102 12.8645L5.95535 15.2962C5.89654 15.5111 6.14228 15.6824 6.33098 15.5579L9.2489 13.632C9.49514 13.6558 9.74538 13.6697 10 13.6697C13.3136 13.6697 16 11.5944 16 9.03476C16 6.47521 13.3136 4.3999 10 4.3999Z"
                      fill="black"/>
            </g>
            <defs>
                <clipPath id="clip0_237_1352">
                    <rect width="12" height="12" fill="white" transform="translate(4 4)"/>
                </clipPath>
            </defs>
        </svg>
    );
};

export default Kakao;
