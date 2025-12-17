import {type ComponentPropsWithoutRef} from 'react';
import {css, cx} from "@linaria/core";
import Text from "~/userinterface/component/Text";
import View from "~/userinterface/core/View.tsx";
import Divider from "~/userinterface/component/Divider";
import {
    BUSINESS_INFORMATION_URL,
    CUSTOMER_SERVICE_CENTER_URL,
    NAVER_STORE_URL,
    NOTIFICATION_URL,
    PRIVACY_POLICY_URL,
    TERMS_OR_USE_URL
} from "~/shared/constant";
import {useNavigate} from "react-router";
import {desktopStyle, notDesktopStyle, responsive} from "~/hook/ResponsiveSwitch.tsx";

const detail1 = ['산다(SANDA)', '대표 : 양예성', '주소 : 경상북도 포항시 북구 장량주택로 3번길 6, 301호 (양덕동)', '전화 : 010-5584-3914', '이메일 : official.linkmarry@gmail.com'];
const detail2 = ['사업자등록번호 : 176-24-01729', '통신판매업 신고 : 2024-경북포항-0787호']

function Footer() {
    const navigate = useNavigate();

    return (
        <View as={'footer'} ui={css`
            padding: 0 24px;
            align-items: center;
        `}>
            <View ui={css`
                gap: 40px;
                max-width: 1100px;
                width: 100%;
            `}>
                <Divider/>
                <View ui={css`
                    gap: 72px;
                    padding-bottom: 72px;
                `}>
                    <View ui={css`
                        gap: 24px;

                        ${responsive.notMobile} {
                            flex-direction: row !important;
                            justify-content: space-between;
                        }
                    `}>
                        <View ui={css`
                            align-items: flex-start;
                            gap: 4px;
                        `}>
                            <Text type={'caption2'} bold={true} ui={css`
                                color: var(--g-600);
                                cursor: pointer;
                            `} onClick={() => window.open(CUSTOMER_SERVICE_CENTER_URL)}>고객센터</Text>
                            <Text type={'caption1'} ui={css`
                                color: var(--g-500);
                            `}>고객센터 운영시간 연중무휴 24시간 운영</Text>
                        </View>
                        <View ui={css`
                            flex-direction: row !important;
                            ${responsive.mobile} {
                                flex-direction: column !important;
                                gap: 16px;
                            }
                        `}>
                            <View ui={css`
                                gap: 4px;
                                align-items: flex-start;
                                width: 180px;
                            `}>
                                <Item text={'모바일 청첩장'} onClick={() => navigate('/mypage/wedding')}/>
                                <Item text={'회원정보'} onClick={() => navigate('/mypage/info')}/>
                            </View>
                            <View ui={css`
                                gap: 4px;
                                align-items: flex-start;
                                width: 180px;
                            `}>
                                <Item text={'공지사항'} onClick={() => navigate('/notification')}/>
                                <Item text={'네이버스토어'} onClick={() => window.open(NAVER_STORE_URL)}/>
                            </View>
                            <View ui={css`
                                gap: 4px;
                                align-items: flex-start;
                                width: 180px;
                            `}>
                                <Item text={'이용약관'} onClick={() => navigate('/terms')}/>
                                <Item text={'개인정보처리방침'} onClick={() => navigate('/privacy-policy')}/>
                                {/*<Item text={'이용약관'} onClick={() => window.open(TERMS_OR_USE_URL)}/>*/}
                                {/*<Item text={'개인정보처리방침'} onClick={() => window.open(PRIVACY_POLICY_URL)}/>*/}
                                <Item text={'사업자 정보 확인'} onClick={() => window.open(BUSINESS_INFORMATION_URL)}/>
                            </View>
                        </View>
                    </View>
                    <View ui={css`
                        gap: 4px;
                        align-items: flex-start;
                    `}>
                        <View ui={cx(
                            css`
                                gap: 16px;
                                flex-direction: row !important;
                                align-items: flex-start;
                            `,
                            desktopStyle
                        )}>
                            {detail1.map((text, index) => (
                                <Text key={index} type={'caption2'} ui={css`
                                    color: var(--g-500);
                                `}>{text}</Text>
                            ))}
                        </View>
                        <View ui={cx(
                            css`
                                gap: 16px;
                                flex-direction: row !important;
                                align-items: flex-start;
                            `,
                            desktopStyle
                        )}>
                            {detail2.map((text, index) => (
                                <Text key={index} type={'caption2'} ui={css`
                                    color: var(--g-500);
                                `}>{text}</Text>
                            ))}
                        </View>
                        {[...detail1, ...detail2].map((text, index) => (
                            <Text
                                key={index}
                                type={'caption2'}
                                ui={cx(
                                    css`
                                        color: var(--g-500);
                                    `,
                                    notDesktopStyle
                                )}
                            >{text}</Text>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
}

interface ItemProps extends ComponentPropsWithoutRef<'div'> {
    text: string;
}

function Item({text, ...props}: ItemProps) {
    return (
        <Text type={'caption2'} bold={true} ui={css`
            color: var(--g-600);
            cursor: pointer;
        `} {...props}>{text}</Text>
    );
}

export default Footer;
