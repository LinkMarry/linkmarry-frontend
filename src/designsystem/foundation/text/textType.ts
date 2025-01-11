import {RuleSet} from "styled-components";
import TextProperties, {implementText} from "@designsystem/foundation/text/textProperties";

export type LinkMarryFont =
    'LINESeedKR'
    | 'Aleo'
    | 'GangwonEduAll'
    | 'SCoreDream'
    | 'Rufina'
    | 'Pretendard';

export const linkMarryFonts: LinkMarryFont[] = [
    'LINESeedKR', 'Aleo', 'GangwonEduAll', 'SCoreDream', 'Rufina', 'Pretendard'
];

export type TextType =
    'h1' |
    'h2' |
    'h3' |
    'h4' |
    'h5' |
    'h6' |
    'p1' |
    'p2' |
    'p3' |
    'p4' |
    'p5' |
    'btn1' |
    'caption1' |
    'caption2';
export const textTypes: TextType[] = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p1', 'p2', 'p3', 'p4', 'p5', 'btn1', 'caption1', 'caption2'
]

export const textTypeMap: Record<TextType, TextProperties> = Object.freeze({
    h1: {
        fontFamily: 'Pretendard',
        fontWeight: 700,
        fontSize: 40,
        lineHeight: '130%'
    },
    h2: {
        fontFamily: 'Pretendard',
        fontWeight: 700,
        fontSize: 32,
        lineHeight: '130%'
    },
    h3: {
        fontFamily: 'Pretendard',
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '130%'
    },
    h4: {
        fontFamily: 'Pretendard',
        fontWeight: 600,
        fontSize: 24,
        lineHeight: '140%'
    },
    h5: {
        fontFamily: 'Pretendard',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: '140%'
    },
    h6: {
        fontFamily: 'Pretendard',
        fontWeight: 600,
        fontSize: 20,
        lineHeight: '150%'
    },
    p1: {
        fontFamily: 'Pretendard',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: '150%'
    },
    p2: {
        fontFamily: 'Pretendard',
        fontWeight: 500,
        fontSize: 18,
        lineHeight: '150%'
    },
    p3: {
        fontFamily: 'Pretendard',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: '150%'
    },
    p4: {
        fontFamily: 'Pretendard',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '160%'
    },
    p5: {
        fontFamily: 'Pretendard',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '160%'
    },
    btn1: {
        fontFamily: 'Pretendard',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '150%'
    },
    caption1: {
        fontFamily: 'Pretendard',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '150%'
    },
    caption2: {
        fontFamily: 'Pretendard',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: '140%'
    },
});

export default function makeText(text: TextType): RuleSet {
    const properties = textTypeMap[text];
    return implementText(properties);
}