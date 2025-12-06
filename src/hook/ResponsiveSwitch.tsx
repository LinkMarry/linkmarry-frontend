import {css, type RuleSet} from "styled-components";

export const breakpoints = {
    mobile: 767,
    tablet: 1024,
};

export const responsive = {
    mobile: (styles: RuleSet) => css`
        @media (max-width: ${breakpoints.mobile}px) {
            ${styles}
        }
    `,
    tablet: (styles: RuleSet) => css`
        @media (min-width: ${breakpoints.mobile + 1}px) and (max-width: ${breakpoints.tablet}px) {
            ${styles}
        }
    `,
    desktop: (styles: RuleSet) => css`
        @media (min-width: ${breakpoints.tablet + 1}px) {
            ${styles}
        }
    `,
    notMobile: (styles: RuleSet) => css`
        @media (min-width: ${breakpoints.mobile + 1}px) {
            ${styles}
        }
    `,
    notTablet: (styles: RuleSet) => css`
        @media (max-width: ${breakpoints.mobile}px),
        (min-width: ${breakpoints.tablet + 1}px) {
            ${styles}
        }
    `,
    notDesktop: (styles: RuleSet) => css`
        @media (max-width: ${breakpoints.tablet}px) {
            ${styles}
        }
    `,
};

export const mobileStyle = css`
    ${responsive.notMobile(css`
        display: none;
    `)};
`;

export const notMobileStyle = css`
    ${responsive.mobile(css`
        display: none;
    `)};
`;

export const tabletStyle = css`
    ${responsive.notTablet(css`
        display: none;
    `)};
`;

export const notTabletStyle = css`
    ${responsive.tablet(css`
        display: none;
    `)}
`;


export const desktopStyle = css`
    ${responsive.notDesktop(css`
        display: none;
    `)};
`;

export const notDesktopStyle = css`
    ${responsive.desktop(css`
        display: none;
    `)};
`;