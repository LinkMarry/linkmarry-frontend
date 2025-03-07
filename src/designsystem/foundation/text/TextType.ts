import {RuleSet} from "styled-components";
import {implementText} from "@designsystem/foundation/text/TextProperties";
import {CSSProperties} from "react";

export type FontFamily =
    'Pretendard'
    | 'Aleo'
    | 'Rufina'
    | 'SCoreDream'
    | 'LINESeedKR'
    | 'GangwonEduAll'
    | 'iceJaram'
    | 'GyeonggiBatang'
    | 'UnrealScienceOrbit'
    | 'UnrealScienceMedicine'
    | 'KoPubWorldBatang'
    | 'TheFaceShopInklipquid'
    | 'KyoboHandwriting2020';

export const fontFamilyList: FontFamily[] = [
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
    'KyoboHandwriting2020'
];

export type TextType =
    'h1' |
    'h2' |
    'h3' |
    'h4' |
    'h5' |
    'p1' |
    'p2' |
    'p3' |
    'caption1' |
    'caption2';

export const textTypes: TextType[] = [
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
];

export const textTypeMap: Record<TextType, {
    fontFamily: FontFamily;
    fontWeight: CSSProperties['fontWeight'];
    boldFontWeight: CSSProperties['fontWeight'];
    fontSize: number;
    lineHeight: CSSProperties['lineHeight'];
}> = Object.freeze({
    h1: {
        fontFamily: 'Pretendard',
        fontWeight: 500,
        boldFontWeight: 800,
        fontSize: 40,
        lineHeight: '130%'
    },
    h2: {
        fontFamily: 'Pretendard',
        fontWeight: 500,
        boldFontWeight: 800,
        fontSize: 36,
        lineHeight: '130%'
    },
    h3: {
        fontFamily: 'Pretendard',
        fontWeight: 500,
        boldFontWeight: 800,
        fontSize: 32,
        lineHeight: '130%'
    },
    h4: {
        fontFamily: 'Pretendard',
        fontWeight: 500,
        boldFontWeight: 800,
        fontSize: 28,
        lineHeight: '140%'
    },
    h5: {
        fontFamily: 'Pretendard',
        fontWeight: 500,
        boldFontWeight: 800,
        fontSize: 24,
        lineHeight: '140%'
    },
    p1: {
        fontFamily: 'Pretendard',
        fontWeight: 500,
        boldFontWeight: 700,
        fontSize: 20,
        lineHeight: '150%'
    },
    p2: {
        fontFamily: 'Pretendard',
        fontWeight: 500,
        boldFontWeight: 700,
        fontSize: 18,
        lineHeight: '150%'
    },
    p3: {
        fontFamily: 'Pretendard',
        fontWeight: 400,
        boldFontWeight: 600,
        fontSize: 16,
        lineHeight: '150%'
    },
    caption1: {
        fontFamily: 'Pretendard',
        fontWeight: 400,
        boldFontWeight: 600,
        fontSize: 14,
        lineHeight: '150%'
    },
    caption2: {
        fontFamily: 'Pretendard',
        fontWeight: 400,
        boldFontWeight: 600,
        fontSize: 12,
        lineHeight: '150%'
    },
});

export default function makeText(text: TextType, bold: boolean = false): RuleSet {
    const properties = textTypeMap[text];
    return implementText({
        fontFamily: properties.fontFamily,
        fontWeight: bold ? properties.boldFontWeight : properties.fontWeight,
        fontSize: properties.fontSize,
        lineHeight: properties.lineHeight,
    });
}
