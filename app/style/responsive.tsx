import {css} from "@linaria/core";

export const BREAK_POINT_MAP = {
    MOBILE: 767,
    TABLET: 1024,
} as const;

export const responsive = {
    mobile: `@media (max-width: ${BREAK_POINT_MAP.MOBILE}px)`,
    tablet: `@media (min-width: ${BREAK_POINT_MAP.MOBILE + 1}px) and (max-width: ${BREAK_POINT_MAP.TABLET}px)`,
    desktop: `@media (min-width: ${BREAK_POINT_MAP.TABLET + 1}px)`,
    notMobile: `@media (min-width: ${BREAK_POINT_MAP.MOBILE + 1}px)`,
    notTablet: `@media (max-width: ${BREAK_POINT_MAP.MOBILE}px) and (min-width: ${BREAK_POINT_MAP.TABLET + 1}px)`,
    notDesktop: `@media (max-width: ${BREAK_POINT_MAP.TABLET}px)`,
};

export const mobileStyle = css`
    ${responsive.notMobile} {
        display: none;
    }
`;

export const notMobileStyle = css`
    ${responsive.mobile} {
        display: none;
    }
`;

export const tabletStyle = css`
    ${responsive.notTablet} {
        display: none;
    }
`;

export const notTabletStyle = css`
    ${responsive.tablet} {
        display: none;
    }
`;

export const desktopStyle = css`
    ${responsive.notDesktop} {
        display: none;
    }
`;

export const notDesktopStyle = css`
    ${responsive.desktop} {
        display: none;
    }
`;
