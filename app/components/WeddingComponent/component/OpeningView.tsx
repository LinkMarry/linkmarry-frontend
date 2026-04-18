import type WeddingDesign from "~/api/value/WeddingDesign.ts";

import {useMemo, useEffect, useState} from "react";
import {css, cx, type LinariaClassName} from "@linaria/core";

interface OpeningViewProps {
    weddingDesign: WeddingDesign;
}

function OpeningView({weddingDesign}: OpeningViewProps) {
    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);

    const {style, svgPath} = useMemo((): {
        style: LinariaClassName;
        svgPath: string;
    } => {
        switch (weddingDesign.openingText) {
            case "We're getting married!":
                return {
                    style: css`
                        background: var(--g-400);
                    `,
                    svgPath: "/opening/We’re getting married!.svg"
                };
            case "Welcome to Our Wedding":
                return {
                    style: css`
                        background: var(--p-100);
                    `,
                    svgPath: "/opening/Welcome to Our Wedding.svg"
                };
            case "저희 둘 결혼합니다":
                return {
                    style: css`
                        background: #F7F7F2;
                    `,
                    svgPath: "/opening/저희 둘 결혼합니다.svg"
                };
            case "새로운 시작을 함께해주세요":
                return {
                    style: css`
                        background: var(--g-50);
                    `,
                    svgPath: "/opening/새로운 시작을 함께해주세요.svg"
                };
            default:
                return {
                    style: css``,
                    svgPath: ""
                };
        }
    }, [weddingDesign.openingText]);

    const hide = weddingDesign.opening === 'NONE' || !visible;

    useEffect(() => {
        if (hide) return;

        const fadeTimer = setTimeout(() => {
            setFading(true); // 2초 뒤 fade 시작
        }, 3000);

        const removeTimer = setTimeout(() => {
            setVisible(false); // 2.5초 뒤 제거
        }, 5000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, [hide]);

    if (hide) {
        return null;
    }

    return (
        <div
            className={cx(
                css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    transition: opacity 2s ease;
                    opacity: 1;
                `,
                fading &&
                css`
                    opacity: 0;
                `,
                style,
            )}
        >
            <div className={css`
                margin-top: 300px;
            `}>
                <img src={svgPath} alt={weddingDesign.openingText}/>
            </div>
        </div>
    );
}

export default OpeningView;
