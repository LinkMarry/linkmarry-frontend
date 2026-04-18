import {css, cx, type LinariaClassName} from "@linaria/core";

export const fontFamilyList = [
    'Pretendard',
    'Aleo',
    'Rufina',
    'SCoreDream',
    'LINESeedKR',
    'GangwonEduAll',
    'iceJaram',
    'GyeonggiBatang',
    'UnrealScienceOrbit',
    'UnrealScienceMedicine',
    'KoPubWorldBatang',
    'TheFaceShopInklipquid',
    'KyoboHandwriting2020',
    'BR',
    'Eulyoo1945',
    'tvN',
    'Great Vibes',
    'Cafe24LovingU',
    'MuseumCulturalFoundationClassic',
    'BlackHanSans',
    'Abhaya Libre'
] as const;

export type FontFamily = typeof fontFamilyList[number];

export const fontFamilyStyle: Record<FontFamily, LinariaClassName> = {
    Pretendard: css`
        font-family: Pretendard, serif;
    `,
    Aleo: css`
        font-family: "Aleo", serif;
    `,
    Rufina: css`
        font-family: "Rufina", serif;
    `,
    SCoreDream: css`
        font-family: "SCoreDream", serif;
    `,
    LINESeedKR: css`
        font-family: "LINESeedKR", serif;
    `,
    GangwonEduAll: css`
        font-family: "GangwonEduAll", serif;
    `,
    iceJaram: css`
        font-family: "iceJaram", serif;
    `,
    GyeonggiBatang: css`
        font-family: "GyeonggiBatang", serif;
    `,
    UnrealScienceOrbit: css`
        font-family: "UnrealScienceOrbit", serif;
    `,
    UnrealScienceMedicine: css`
        font-family: "UnrealScienceMedicine", serif;
    `,
    KoPubWorldBatang: css`
        font-family: "KoPubWorldBatang", serif;
    `,
    TheFaceShopInklipquid: css`
        font-family: "TheFaceShopInklipquid", serif;
    `,
    KyoboHandwriting2020: css`
        font-family: "KyoboHandwriting2020", serif;
    `,
    BR: css`
        font-family: "BR", serif;
    `,
    Eulyoo1945: css`
        font-family: "Eulyoo1945", serif;
    `,
    tvN: css`
        font-family: "tvN", serif;
    `,
    "Great Vibes": css`
        font-family: "Great Vibes", serif;
    `,
    Cafe24LovingU: css`
        font-family: Cafe24LovingU, serif;
    `,
    MuseumCulturalFoundationClassic: css`
        font-family: MuseumCulturalFoundationClassic, serif;
    `,
    BlackHanSans: css`
        font-family: BlackHanSans, serif;
    `,
    "Abhaya Libre": css`
        font-family: "Arial Black", serif;
    `,
}

export const textTypes = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'p1',
    'p2',
    'p3',
    'caption1',
    'caption2'
] as const;

export type TextType = typeof textTypes[number];

const h1Style = cx(
    fontFamilyStyle.Pretendard,
    css`
        font-weight: 500;
        font-size: 40px;
        line-height: 130%;
    `
);

const h1BoldStyle = cx(
    h1Style,
    css`
        font-weight: 800;
    `
);

const h2Style = cx(
    fontFamilyStyle.Pretendard,
    css`
        font-weight: 500;
        font-size: 36px;
        line-height: 130%;
    `
);

const h2BoldStyle = cx(
    h2Style,
    css`
        font-weight: 800;
    `
);

const h3Style = cx(
    fontFamilyStyle.Pretendard,
    css`
        font-weight: 500;
        font-size: 32px;
        line-height: 130%;
    `
);

const h3BoldStyle = cx(
    h3Style,
    css`
        font-weight: 800;
    `
);

const h4Style = cx(
    fontFamilyStyle.Pretendard,
    css`
        font-weight: 500;
        font-size: 28px;
        line-height: 140%;
    `
);

const h4BoldStyle = cx(
    h4Style,
    css`
        font-weight: 800;
    `
);

const h5Style = cx(
    fontFamilyStyle.Pretendard,
    css`
        font-weight: 500;
        font-size: 24px;
        line-height: 140%
    `
);

const h5BoldStyle = cx(
    h5Style,
    css`
        font-weight: 800;
    `
);

const p1Style = cx(
    fontFamilyStyle.Pretendard,
    css`
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
    `
);

const p1BoldStyle = cx(
    p1Style,
    css`
        font-weight: 700;
    `
);

const p2Style = cx(
    fontFamilyStyle.Pretendard,
    css`
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
    `
);

const p2BoldStyle = cx(
    p2Style,
    css`
        font-weight: 700;
    `
);

const p3Style = cx(
    fontFamilyStyle.Pretendard,
    css`
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
    `
);

const p3BoldStyle = cx(
    p3Style,
    css`
        font-weight: 600;
    `
);

const caption1Style = cx(
    fontFamilyStyle.Pretendard,
    css`
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
    `
);

const caption1BoldStyle = cx(
    caption1Style,
    css`
        font-weight: 600;
    `
);

const caption2Style = cx(
    fontFamilyStyle.Pretendard,
    css`
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
    `
);

const caption2BoldStyle = cx(
    caption2Style,
    css`
        font-weight: 600;
    `
)

export const textStyles: Record<TextType, {
    normal: LinariaClassName;
    bold: LinariaClassName;
}> = {
    h1: {
        normal: h1Style,
        bold: h1BoldStyle
    },
    h2: {
        normal: h2Style,
        bold: h2BoldStyle
    },
    h3: {
        normal: h3Style,
        bold: h3BoldStyle
    },
    h4: {
        normal: h4Style,
        bold: h4BoldStyle
    },
    h5: {
        normal: h5Style,
        bold: h5BoldStyle
    },
    p1: {
        normal: p1Style,
        bold: p1BoldStyle
    },
    p2: {
        normal: p2Style,
        bold: p2BoldStyle
    },
    p3: {
        normal: p3Style,
        bold: p3BoldStyle
    },
    caption1: {
        normal: caption1Style,
        bold: caption1BoldStyle
    },
    caption2: {
        normal: caption2Style,
        bold: caption2BoldStyle
    },
};