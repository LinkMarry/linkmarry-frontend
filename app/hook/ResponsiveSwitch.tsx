import {css} from "@linaria/core";

export const breakpoints = {
    mobile: 767,
    tablet: 1024,
};

export const responsive = {
    mobile: `@media (max-width: ${breakpoints.mobile}px)`,
    tablet: `@media (min-width: ${breakpoints.mobile + 1}px) and (max-width: ${breakpoints.tablet}px)`,
    desktop: `@media (min-width: ${breakpoints.tablet + 1}px)`,
    notMobile: `@media (min-width: ${breakpoints.mobile + 1}px)`,
    notTablet: `@media (max-width: ${breakpoints.mobile}px) and (min-width: ${breakpoints.tablet + 1}px)`,
    notDesktop: `@media (max-width: ${breakpoints.tablet}px)`
}


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