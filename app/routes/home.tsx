import MainWrapper from "~/userinterface/pattern/header/MainWrapper";
import {css, cx} from "@linaria/core";
import Text from "~/userinterface/component/Text";
import View from "~/userinterface/core/View.tsx";
import {desktopStyle, mobileStyle, notMobileStyle, responsive} from "~/hook/ResponsiveSwitch";
import Button from "~/userinterface/component/Button.tsx";
import Divider from "~/userinterface/component/Divider.tsx";
import Icon from "~/userinterface/foundation/Icon.tsx";
import {useNavigate} from "react-router";
import {type ComponentPropsWithoutRef, useState} from "react";
import {NAVER_STORE_URL} from "~/shared/constant.ts";
import {hideScrollBarStyle} from "~/userinterface/css.util.ts";


function Home() {
    const navigate = useNavigate();

    const handleViewSample = () => {
        navigate('/sample');
    };

    const handleCreateWedding = () => {
        navigate('/editor');
    };

    const handleNavigateNaverStore = () => {
        window.open(NAVER_STORE_URL);
    };

    return (
        <MainWrapper>
            <View>
                <Section1
                    onViewSample={handleViewSample}
                    onCreateWedding={handleCreateWedding}
                />
                <Section2/>
                <Section3/>
                <Section4 onViewSample={handleViewSample}/>
                <Section5/>
                <Section6 onNavigateNaverStore={handleNavigateNaverStore}/>
            </View>
        </MainWrapper>
    );
}

interface Section1Props {
    onViewSample: () => void;
    onCreateWedding: () => void;
}

function Section1({onViewSample, onCreateWedding}: Section1Props) {
    return (
        <View ui={css`
            background: #FCFBF9;
            align-items: center;
            padding: 100px 0;
        `}>
            <View ui={css`
                max-width: 1100px;
                width: 100%;
                gap: 64px;
                align-items: center;
            `}>
                <View ui={css`
                    gap: 36px;
                    align-items: center;
                `}>
                    <View ui={css`
                        gap: 8px;
                        padding: 0 20px;
                        text-align: center;
                        overflow-wrap: break-word;
                        word-break: keep-all;
                    `}>
                        <Text type={'h3'} bold={true} ui={css`
                            color: var(--g-900);
                            white-space: pre-line;
                            text-align: center;

                            ${responsive.mobile} {
                                font-size: 28px;
                                line-height: 140%;
                                font-weight: 800;
                            }
                        `}>특별한 순간 특별한 초대.{'\n'}<span className={css`
                            color: var(--p-800);
                        `}>링크메리</span>와 함께</Text>
                        <Text type={'p3'} ui={css`
                            color: var(--g-500);

                            ${responsive.mobile} {
                                font-size: 14px;
                                font-weight: 600;
                                line-height: 150%;
                            }
                        `}>
                            다양한 스타일, 나만의 청첩장을 무료로 제작
                        </Text>
                    </View>
                    <View ui={css`
                        flex-direction: row !important;
                        gap: 8px;
                    `}>
                        <Button text={'초대장 만들기'} onClick={onCreateWedding} ui={css`
                            box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.28);
                        `}/>
                        <Button text={'샘플 보기'} buttonType={'outlined'} onClick={onViewSample} ui={css`
                            background: white !important;
                            outline: none !important;
                            box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
                        `}/>
                    </View>
                </View>
                <View ui={css`
                    position: relative;
                    flex-direction: row !important;
                    padding: 0 20px;
                    align-items: center;
                `}>
                    <img src={'/home/shape2.svg'} alt={'shape2'} className={css`
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        z-index: 10;
                    `}/>
                    <img src={'/home/shape1.svg'} alt={'shape1'} className={css`
                        position: absolute;
                        right: 0;
                        top: 0;
                    `}/>
                    <img src={'/home/section1-phone1.png'} alt={'phone1'} className={css`
                        height: 331px;
                        width: 160px;
                        rotate: 4deg;

                        ${responsive.mobile} {
                            width: 100px;
                            height: 207px;
                        }
                    `}/>
                    <img src={'/home/section1-phone2.png'} alt={'phone2'} className={css`
                        height: 370px;
                        width: 180px;
                        rotate: -4deg;
                        margin-left: -44px;

                        ${responsive.mobile} {
                            width: 120px;
                            height: 248px;
                        }
                    `}/>
                    <img src={'/home/section1-phone3.png'} alt={'phone3'} className={css`
                        height: 331px;
                        width: 160px;
                        rotate: 6deg;
                        margin-left: -44px;

                        ${responsive.mobile} {
                            width: 100px;
                            height: 207px;
                        }
                    `}/>
                </View>
            </View>
        </View>
    );
}

function Section2() {
    return (
        <View ui={css`
            align-items: center;
            padding: 120px 0;
        `}>
            <View ui={css`
                max-width: 1100px;
                width: 100%;
                gap: 68px;
            `}>
                <View ui={css`
                    gap: 8px;
                    align-items: center;
                    padding: 0 20px;
                    text-align: center;
                    overflow-wrap: break-word;
                    word-break: keep-all;
                `}>
                    <Text type={'h4'} bold={true} ui={css`
                        color: var(--g-900);

                        ${responsive.mobile} {
                            font-size: 24px;
                            line-height: 140%;
                            font-weight: 800;
                        }
                    `}>
                        링크메리가 특별한 이유
                    </Text>
                    <Text type={'p3'} ui={css`
                        white-space: pre-wrap;
                        text-align: center;
                        color: var(--g-500);

                        ${responsive.mobile} {
                            font-size: 14px;
                            font-weight: 600;
                            line-height: 150%;
                        }
                    `}>
                        디자인은 아름답게, 기능은 편리하게.{'\n'}하객과 신랑신부 모두를 배려한 기능을 담았습니다.
                    </Text>
                </View>
                <View ui={css`
                    ${responsive.desktop} {
                        flex-direction: row !important;
                        gap: 16px;
                    }

                    ${responsive.notDesktop} {
                        gap: 24px;
                        padding: 0 20px;
                    }
                `}>
                    <View ui={css`
                        gap: 16px;

                        ${responsive.desktop} {
                            flex: 1;
                        }

                        ${responsive.notDesktop} {
                            flex-direction: row !important;
                        }
                    `}>
                        <Section2Item
                            title={'모바일 경험'}
                            description={'어떤 기기에서도 예쁜 반응형 디자인과 부드러운 모션'}
                            iconSrc={'/home/Mobile.svg'}
                        />
                        <Section2Item
                            title={'오시는 길'}
                            description={'카카오맵 지도 & 네비게이션 연동으로 하객분들이 편하게'}
                            iconSrc={'/home/Location Point.svg'}
                        />
                    </View>
                    <Divider direction={'vertical'} ui={desktopStyle}/>

                    <View ui={css`
                        gap: 16px;

                        ${responsive.desktop} {
                            flex: 1;
                        }

                        ${responsive.notDesktop} {
                            flex-direction: row !important;
                        }
                    `}>
                        <Section2Item
                            title={'감성적인 갤러리'}
                            description={'슬리아드, 그리드, 하이트라이트 등\n' +
                                '웨딩 화보를 매거진처럼'}
                            iconSrc={'/home/Favorite Photo.svg'}
                        />
                        <Section2Item
                            title={'BGM & 영상'}
                            description={'우리만의 분위기를 담은 배경음악과\n' +
                                '식전 영상'}
                            iconSrc={'/home/Heart.svg'}
                        />
                    </View>
                    <Divider direction={'vertical'} ui={desktopStyle}/>

                    <View ui={css`
                        gap: 16px;

                        ${responsive.desktop} {
                            flex: 1;
                        }

                        ${responsive.notDesktop} {
                            flex-direction: row !important;
                        }
                    `}>
                        <Section2Item
                            title={'스마트한 RSVP'}
                            description={'참석 여부, 동반인 수, 식사 여부까지 실시간으로 확인하고 엑셀로 관리'}
                            iconSrc={'/home/User Check.svg'}
                        />
                        <Section2Item
                            title={'축의금 안내'}
                            description={'참석하지 못해도\n' +
                                '계좌번호로 마음 전하기'}
                            iconSrc={'/home/Payment Card.svg'}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

interface Section2ItemProps {
    title: string;
    description: string;
    iconSrc: string;
}

function Section2Item({title, description, iconSrc}: Section2ItemProps) {
    return (
        <View ui={css`
            gap: 24px;

            ${responsive.desktop} {
                padding: 20px 40px 20px 44px;
            }

            ${responsive.notDesktop} {
                padding: 16px 12px;
                flex: 1;
            }
        `}>
            <View ui={css`
                align-items: center;
                justify-content: center;
                padding: 10px;
                border-radius: 12px;
                background: var(--p-200);
                align-self: flex-start;
            `}>
                <img src={iconSrc} alt={title} className={css`
                    width: 24px;
                    height: 24px;
                `}/>
            </View>
            <View ui={css`
                gap: 6px;
            `}>
                <Text type={'p2'} bold={true} ui={css`
                    color: var(--g-900);

                    ${responsive.mobile} {
                        font-size: 16px;
                        line-height: 150%;
                        font-weight: 600;
                    }
                `}>
                    {title}
                </Text>
                <Text type={'p3'} ui={css`
                    color: var(--g-600);
                    white-space: pre-line;

                    ${responsive.mobile} {
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 150%;
                    }
                `}>
                    {description}
                </Text>
            </View>
        </View>
    )
}

interface Review {
    content: string;
    username: string;
}

const reviewData: Review[] = [
    {
        content: '다른 모바일 청첩장과는 달리 레트로나 빈티지 같은 독특한 스타일로 청첩장을 만들 수 있어서 좋네요. 아내가 아주 좋아합니다!',
        username: 'gn****',
    },
    {
        content: '완전 똥손인데도 쉽고 빠르게 만들수있어서 좋아요. 특히 하객들 참석 및 식사유무 데이터화 할수있어서 편해요ㅎㅎ',
        username: 'ster****',
    },
    {
        content: '실시간 대응해주시고, 버그도 실시간으로 수정해주셔서 만족합니다 ㅎㅎ 고물가시대에 가성비짱!',
        username: 'dao_****'
    },
    {
        content: '친구들, 양가 부모님들께서 다 좋아하셔서 만족했습니다 ㅎㅎ',
        username: 'lovelyej****'
    },
    {
        content: '친구 결혼할 때 청첩장 보고 너무 예뻐서 따라 구매했습니다 ㅎㅎ 여기가 다양하고 예뻐요!!',
        username: 'okus****'
    }
];

function Section3() {
    return (
        <View ui={css`
            background: var(--p-100);
            align-items: center;
            padding: 120px 0;
            overflow: hidden;
        `}>
            <View ui={css`
                width: 100%;
                gap: 68px;
                align-items: center;
            `}>
                <View ui={css`
                    gap: 8px;
                    align-items: center;
                    padding: 0 20px;
                    text-align: center;
                    overflow-wrap: break-word;
                    word-break: keep-all;
                `}>
                    <Text type={'h4'} bold={true} ui={css`
                        color: var(--g-900);

                        ${responsive.mobile} {
                            font-size: 24px;
                            line-height: 140%;
                            font-weight: 800;
                        }
                    `}>
                        실제 사용자들의 생생한 후기
                    </Text>
                    <View ui={css`
                        flex-direction: row !important;
                        gap: 12px;
                        align-items: center;
                    `}>
                        <View ui={css`
                            flex-direction: row !important;
                            gap: 2px;
                        `}>
                            {Array.from({length: 5}).map((_, index) => (
                                <img
                                    key={index}
                                    src={'/home/Star.svg'}
                                    alt={`Star ${index + 1}`}
                                    width={20}
                                    height={20}
                                />
                            ))}
                        </View>
                        <Text type={'p2'} bold={true} ui={css`
                            color: #595651;
                        `}>4.8/5.0</Text>
                    </View>
                    <Text type={'caption2'} ui={css`
                        color: #9CA3AF;
                    `}>
                        2953개의 리뷰
                    </Text>
                </View>
                <View ui={css`
                    width: 100%;
                    gap: 20px;
                    align-items: center;
                `}>
                    <View ui={cx(
                        css`
                            flex-direction: row !important;
                            gap: 20px;
                            width: 100%;
                            overflow-x: auto;
                            padding: 0 20px;
                        `,
                        hideScrollBarStyle
                    )}>
                        {reviewData.map((review, index) => (
                            <Section3ReviewItem key={index} review={review}/>
                        ))}
                    </View>
                    <Icon iconType={'ExpandArrow'} size={24} ui={css`
                        fill: var(--p-500);
                        rotate: 270deg;
                    `}/>
                    <View ui={css`
                        flex-direction: row !important;
                        gap: 20px;
                    `}>
                        {[
                            '/home/section3-wedding1.png',
                            '/home/section3-wedding2.png',
                            '/home/section3-wedding3.png',
                            '/home/section3-wedding4.png',
                            '/home/section3-wedding5.png',
                        ].map((src, index) => (
                            <img src={src} alt={'wedding'} key={index} className={css`
                                width: 60px;
                                height: 80px;
                                object-fit: cover;
                            `}/>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
}

interface Section3ReviewItemProps {
    review: Review;
}

function Section3ReviewItem(
    {
        review
    }: Section3ReviewItemProps
) {
    return (
        <View ui={css`
            padding: 24px;
            border-radius: 24px;
            border: 1px solid var(--p-500);
            height: 202px;
            min-width: 315px;
            background: white;
            justify-content: space-between;
        `}>
            <View ui={css`
                flex-direction: row !important;
                gap: 8px;
                align-items: center;
            `}>
                <View ui={css`
                    flex-direction: row !important;
                `}>
                    {Array.from({length: 5}).map((_, index) => (
                        <img key={index} src={'/home/Star1.svg'} alt={`Star ${index}`}/>
                    ))}
                </View>
                <Text type={'caption2'} ui={css`
                    color: var(--g-500);
                `}>5.0</Text>
            </View>
            <View ui={css`
                gap: 8px;
            `}>
                <Text type={'p3'} bold={true} ui={css`
                    color: var(--g-800);
                `}>
                    {review.content}
                </Text>
            </View>
            <View ui={css`
                flex-direction: row !important;
                gap: 8px;
                align-items: center;
            `}>
                <View ui={css`
                    width: 32px;
                    height: 32px;
                    background: var(--g-100);
                    border-radius: 50%;
                `}/>
                <View>
                    <Text type={'caption2'} ui={css`
                        color: var(--g-800);
                    `}>okus****</Text>
                    <Text type={'caption2'} ui={css`
                        color: var(--g-400);
                    `}>2024.09.16</Text>
                </View>
            </View>
        </View>
    );
}

const section4Data = [
    {
        src: '/home/section4-classic-romance.png',
        title: 'Classic Romance',
        category: 'Classsic',
        isHot: false
    },
    {
        src: '/home/section4-classic-elegance.png',
        title: 'Classic Elegance',
        category: 'Romantic',
        isHot: true
    },
    {
        src: '/home/section4-romantic-forest.png',
        title: 'Romantic Forest',
        category: 'Modern',
        isHot: false
    },
    {
        src: '/home/section4-dream-wedding.png',
        title: 'Dream Wedding',
        category: 'Romantic',
        isHot: false
    },
    {
        src: '/home/section4-dear-my-love.png',
        title: 'Dear My Love',
        category: 'Romantic',
        isHot: true
    }
]

interface Section4Props {
    onViewSample: () => void;
}

function Section4({onViewSample}: Section4Props) {
    return (
        <View ui={css`
            background: #FDFBF8;
            align-items: center;
            padding: 160px 0;
        `}>
            <View ui={css`
                width: 100%;
                gap: 68px;
                align-items: center;
            `}>
                <View ui={css`
                    gap: 8px;
                    align-items: center;
                    padding: 0 20px;
                    text-align: center;
                    overflow-wrap: break-word;
                    word-break: keep-all;
                `}>
                    <Text type={'h4'} bold={true} ui={css`
                        color: var(--g-900);

                        ${responsive.mobile} {
                            font-size: 24px;
                            line-height: 140%;
                            font-weight: 800;
                        }
                    `}>
                        마음에 드는 청첩장을 찾아보세요
                    </Text>
                    <Text type={'p3'} ui={css`
                        color: var(--g-500);

                        ${responsive.mobile} {
                            font-size: 14px;
                            font-weight: 600;
                            line-height: 150%;
                        }
                    `}>
                        100가지가 넘는 다양한 스타일, 나만의 청첩장을 무료로 제작
                    </Text>
                </View>
                <View ui={cx(
                    css`
                        width: 100%;
                        overflow-x: auto;
                    `,
                    hideScrollBarStyle
                )}>
                    <View ui={css`
                        display: flex;
                        flex-direction: row !important;
                        gap: 44px;
                        width: fit-content;
                        margin: 0 auto;
                        padding: 0 20px;
                    `}>
                        {section4Data.map(item => (
                            <View key={item.title} ui={css`
                                gap: 23px;
                            `}>
                                <img src={item.src} alt={item.title} className={css`
                                    width: 196px;
                                    height: 360px;
                                    border-radius: 20px;
                                    box-shadow: 0 4px 17px 0 rgba(0, 0, 0, 0.16);
                                `}/>
                                <View ui={css`
                                    padding: 0 4px;
                                `}>
                                    <View ui={css`
                                        flex-direction: row !important;
                                        align-items: center;
                                    `}>
                                        <Text font={'Abhaya Libre'} size={20} ui={css`
                                            color: #594131;
                                            flex: 1;
                                        `}>{item.title}</Text>
                                        {item.isHot && (
                                            <Text type={'caption2'} ui={css`
                                                background: var(--p-300);
                                                padding: 2px 8px;
                                                border-radius: 20px;
                                                color: var(--p-800);
                                            `}>
                                                HOT
                                            </Text>
                                        )}
                                    </View>
                                    <Text type={'caption2'} ui={css`
                                        color: var(--g-700);
                                    `}>
                                        {item.category}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
                <Button
                    text={'샘플 모두 보기'}
                    buttonType={'outlined'}
                    trailingIcon={'NormalArrow'}
                    onClick={onViewSample}
                    ui={css`
                        svg {
                            rotate: 180deg;
                            fill: var(--g-600);
                        }

                        background: var(--p-100) !important;
                        outline: 2px solid var(--p-400) !important;
                        color: var(--g-800) !important;
                        backdrop-filter: blur(8px);
                    `}
                />
            </View>
        </View>
    )
}

interface Section5Props {

}

function Section5({}: Section5Props) {
    const [selectedCard, setSelectedCard] = useState(0);

    const phoneSrc = {
        0: '/home/section5-phone1.png',
        1: '/home/section5-phone2.png',
        2: '/home/section5-phone3.png',
    }[selectedCard];

    return (
        <View ui={css`
            background: white;
            align-items: center;
            padding: 120px 0;
            overflow: hidden;
        `}>
            <View ui={css`
                max-width: 1100px;
                width: 100%;
                gap: 68px;
                align-items: center;

                ${responsive.mobile} {
                    gap: 56px;
                }
            `}>
                <View ui={css`
                    gap: 8px;
                    align-items: center;
                    padding: 0 20px;
                    text-align: center;
                    overflow-wrap: break-word;
                    word-break: keep-all;
                `}>
                    <Text type={'h4'} bold={true} ui={css`
                        color: var(--g-900);

                        ${responsive.mobile} {
                            font-size: 24px;
                            line-height: 140%;
                            font-weight: 800;
                        }
                    `}>
                        5분만에 만드는 초대장
                    </Text>
                    <Text type={'p3'} ui={css`
                        color: var(--g-500);

                        ${responsive.mobile} {
                            font-size: 14px;
                            font-weight: 600;
                            line-height: 150%;
                        }
                    `}>
                        복잡한 과정 없이 3분 만에 완성하세요.
                    </Text>
                </View>
                <View ui={css`
                    gap: 100px;

                    ${responsive.desktop} {
                        flex-direction: row !important;
                    }

                    ${responsive.notDesktop} {
                        flex-direction: column-reverse !important;
                        align-self: stretch;
                        padding: 0 20px;
                        gap: 40px;
                        width: 100%;
                        align-items: center;
                    }
                `}>
                    <View ui={css`
                        gap: 16px;
                    `}>
                        <Section5Item
                            index={0}
                            selected={selectedCard === 0}
                            title={'청첩장 디자인 선택'}
                            description={'다양한 청첩장 템플릿 중 취향에 맞는 디자인을 선택하세요.'}
                            onClick={() => setSelectedCard(0)}
                        />
                        <Section5Item
                            index={1}
                            selected={selectedCard === 1}
                            title={'정보 입력'}
                            description={'예식 정보, 갤러리, 초대글을 쉽고 간편하게 입력하세요.'}
                            onClick={() => setSelectedCard(1)}
                        />
                        <Section5Item
                            index={2}
                            selected={selectedCard === 2}
                            title={'즉시 완성'}
                            description={'결제 즉시 고유 URL이 생성되며 바로 공유할 수 있습니다.'}
                            onClick={() => setSelectedCard(2)}
                        />
                    </View>
                    <img src={phoneSrc} alt={'phone'} className={css`
                        width: 204px;
                        height: 423px;
                    `}/>
                </View>
            </View>
        </View>
    );
}

interface Section5ItemProps extends ComponentPropsWithoutRef<'div'> {
    index: number;
    selected: boolean;
    title: string;
    description: string;
}

function Section5Item({index, selected, title, description, ...props}: Section5ItemProps) {
    return (
        <View {...props} ui={cx(
            css`
                flex-direction: row !important;
                position: relative;
                padding: 20px 24px;
                width: 557px;
                border-radius: 16px;
                gap: 24px;
                align-items: center;
                overflow: hidden;
                cursor: pointer;

                ${responsive.notDesktop} {
                    width: auto;
                    max-width: 557px;
                }
            `,
            selected ? css`
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
                border: 1px solid var(--p-500);
            ` : css`
                border: 1px solid var(--g-100);
            `
        )}>
            <View
                ui={cx(
                    css`
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        background: var(--p-100);
                        z-index: 1;
                    `,
                    selected ? css`
                        opacity: 0.6;
                    ` : css`
                        opacity: 0.2;
                    `
                )}
            />
            <Text type={'h3'} bold={true} ui={cx(
                css`
                    z-index: 2;
                `,
                selected ? css`
                    color: var(--p-800);
                ` : css`
                    color: var(--p-400);
                `
            )}>
                0{index + 1}
            </Text>
            <View ui={css`
                flex: 1;
                z-index: 2;
            `}>
                <Text type={'p2'} bold={true} ui={css`
                    color: var(--g-900);

                    ${responsive.notDesktop} {
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 150%;
                    }
                `}>{title}</Text>
                <Text type={'p3'} ui={css`
                    color: var(--g-600);

                    ${responsive.notDesktop} {
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 150%;
                    }
                `}>{description}</Text>
            </View>
        </View>
    )
}

interface Section6Props {
    onNavigateNaverStore: () => void;
}

function Section6({onNavigateNaverStore}: Section6Props) {
    return (
        <View ui={css`
            background: var(--p-100);
            align-items: center;
            padding: 120px 0;
            overflow: hidden;
        `}>
            <View ui={css`
                max-width: 1100px;
                width: 100%;
                gap: 68px;
            `}>
                <View ui={css`
                    align-items: center;
                    gap: 8px;
                    padding: 0 20px;
                    text-align: center;
                    overflow-wrap: break-word;
                    word-break: keep-all;
                `}>
                    <Text type={'h4'} bold={true} ui={css`
                        color: var(--g-900);

                        ${responsive.mobile} {
                            font-size: 24px;
                            line-height: 140%;
                            font-weight: 800;
                        }
                    `}>
                        지금 당장 구매하세요!
                    </Text>
                    <Text type={'p3'} ui={css`
                        color: var(--g-500);

                        ${responsive.mobile} {
                            font-size: 14px;
                            font-weight: 600;
                            line-height: 150%;
                        }
                    `}>
                        링크메리 청첩장 전템플릿을 더 저렴한 가격으로 구매하세요.
                    </Text>
                </View>
                <View ui={css`
                    gap: 60px;
                    padding: 0 20px;
                `}>
                    <View ui={css`
                        border-radius: 24px;
                        width: 720px;
                        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.20);
                        overflow: hidden;
                        align-self: center;

                        ${responsive.mobile} {
                            width: 100%;
                            max-width: 517px;
                        }
                    `}>
                        <View ui={css`
                            position: relative;
                            align-items: center;
                            background: white;
                        `}>
                            <img
                                src={'/home/shape1.svg'}
                                alt={'shape1'}
                                className={css`
                                    position: absolute;
                                    left: 62px;
                                    top: 28px;

                                    ${responsive.mobile} {
                                        scale: 0.66;
                                        left: 28px;
                                        top: 36px;
                                    }
                                `}
                            />
                            <img
                                src={'/home/shape2.svg'}
                                alt={'shape1'}
                                className={css`
                                    position: absolute;
                                    left: 48px;
                                    bottom: 52px;
                                    scale: 2;

                                    ${responsive.mobile} {
                                        scale: 1.1;
                                        left: 15px;
                                        bottom: 20px;
                                    }
                                `}
                            />
                            <img
                                src={'/home/shape2.svg'}
                                alt={'shape1'}
                                className={css`
                                    position: absolute;
                                    right: -16px;
                                    top: 4px;
                                    scale: 2.66;

                                    ${responsive.mobile} {
                                        scale: 1.66;
                                    }
                                `}
                            />
                            <View ui={css`
                                padding: 56px 0;
                                flex-direction: row !important;
                                gap: 50px;
                                justify-content: center;

                                ${responsive.mobile} {
                                    gap: 17px;
                                }
                            `}>
                                <img src={'/home/section6-phone1.png'} alt={'phone1'} className={css`
                                    width: 140px;
                                    height: 290px;
                                    border-radius: 22px;
                                    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.20);

                                    ${responsive.mobile} {
                                        width: 64px;
                                        height: 132px;
                                        border-radius: 10px;
                                    }
                                `}/>
                                <img src={'/home/section6-phone2.png'} alt={'phone2'} className={css`
                                    width: 140px;
                                    height: 290px;
                                    border-radius: 22px;
                                    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.20);

                                    ${responsive.mobile} {
                                        width: 64px;
                                        height: 132px;
                                        border-radius: 10px;
                                    }
                                `}/>
                                <img src={'/home/section6-phone3.png'} alt={'phone3'} className={css`
                                    width: 140px;
                                    height: 290px;
                                    border-radius: 22px;
                                    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.20);

                                    ${responsive.mobile} {
                                        width: 64px;
                                        height: 132px;
                                        border-radius: 10px;
                                    }
                                `}/>
                            </View>
                        </View>
                        <View ui={css`
                            padding: 24px 0;
                            background: #171717;
                            gap: 12px;
                            align-items: center;
                        `}>
                            <Text type={'h4'} bold={true} ui={css`
                                ${responsive.mobile} {
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    font-weight: 700;
                                    font-size: 20px;
                                    line-height: 150%;
                                }
                            `}>
                                <span className={css`color: white`}>링크메리 청첩장</span>{' '}
                                <span className={css`color: var(--p-600)`}>선착순 얼리버드 할인 진행 중!</span>
                            </Text>
                            <View ui={css`
                                gap: 4px;
                                align-items: center;
                            `}>
                                <Text type={'p1'} bold={true} ui={cx(
                                    css`
                                        color: var(--g-400);
                                        text-decoration: line-through;
                                    `,
                                    mobileStyle
                                )}>
                                    29,800원
                                </Text>
                                <View ui={css`
                                    flex-direction: row !important;
                                    align-items: center;
                                    gap: 26px;

                                    ${responsive.mobile} {
                                        gap: 12px;
                                    }
                                `}>
                                    <View ui={css`
                                        flex-direction: row !important;
                                        gap: 12px;
                                        align-items: center;
                                    `}>
                                        <Text type={'h4'} bold={true} ui={css`
                                            color: var(--p-800);
                                            font-size: 24px;

                                            ${responsive.mobile} {
                                                font-weight: 800;
                                                line-height: 140%;
                                            }
                                        `}>
                                            70%
                                        </Text>
                                        <Text type={'h4'} ui={cx(
                                            css`
                                                color: var(--g-400);
                                                text-decoration: line-through;
                                            `,
                                            notMobileStyle
                                        )}>
                                            29,800원
                                        </Text>
                                    </View>
                                    <Text type={'h2'} bold={true} ui={css`
                                        color: white;

                                        ${responsive.mobile} {
                                            font-size: 28px;
                                            font-weight: 800;
                                            line-height: 140%;
                                        }
                                    `}>
                                        8,700원
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Button
                        text={'네이버스토어 바로가기'}
                        onClick={onNavigateNaverStore}
                        leadingIcon={(
                            <img src="/naver.svg" alt=""/>
                        )}
                        ui={css`
                            background: #03C75A !important;
                            gap: 8px !important;
                            box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.28);
                            align-self: center;
                        `}
                    />
                </View>
            </View>
        </View>
    );
}

export default Home;