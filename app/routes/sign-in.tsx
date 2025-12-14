import {css} from "@linaria/core";
import MainWrapper from "~/userinterface/pattern/header/MainWrapper.tsx";
import Text from "~/userinterface/component/Text.tsx";
import {useAuth} from "~/hook/useAuth.tsx";
import View from "~/userinterface/core/View.tsx";
import Icon from "~/userinterface/foundation/Icon.tsx";

function SignIn() {
    const {signInWithKakao} = useAuth();

    return (
        <MainWrapper hasFooter={false}>
            <View ui={css`
                gap: 32px;
                flex: 1;
                align-items: center;
                justify-content: center;
            `}>
                <View ui={css`
                    gap: 8px;
                    align-items: center;
                `}>
                    <View as={'img'} src="/linkmarry.png" alt="" width={72} height={72} ui={css`
                        border-radius: 18px;
                    `}/>
                    <View ui={css`
                        gap: 4px;
                        align-items: center;
                    `}>
                        <Text type={'h4'} bold={true}>링크메리 로그인</Text>
                        <Text type={'p3'} ui={css`
                            color: var(--g-500);
                        `}>모바일 청접장으로 결혼을 더욱 특별하게</Text>
                    </View>
                </View>
                <View onClick={signInWithKakao} ui={css`
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    width: 300px;
                    height: 45px;
                    outline: none;
                    border: none;
                    background-color: #FEE500;
                    border-radius: 6px;
                    color: black;
                `}>
                    <View ui={css`
                        flex-direction: row;
                        gap: 6px;
                        align-items: center;
                    `}>
                        <Icon iconType={'Kakao'} size={24}/>
                        <Text type={'p3'} bold={true}>카카오 로그인</Text>
                    </View>
                </View>
            </View>
        </MainWrapper>
    );
}

export default SignIn;
