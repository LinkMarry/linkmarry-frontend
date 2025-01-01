import React from 'react';
import HasHeader from "../../designsystem/component/header/hasHeader";
import S from './MyPage.style';
import Text from "../../designsystem/component/text";
import {TextType} from "../../designsystem/foundation/text/textType";
import HorizontalDivider from "../../designsystem/component/horizontalDivider";
import colors from "../../designsystem/foundation/colors";
import {Column, Row} from "../../designsystem/component/flexLayout";
import Button from "../../designsystem/component/button";
import Spacer from "../../designsystem/component/spacer";

function MyPage() {
    return (
        <HasHeader>
            <S.container>
                <S.sideBar.container>
                    <SideBarItem title={'프로필'} selected={false} onClick={() => {

                    }}/>
                    <SideBarItem title={'설정'} selected={false} onClick={() => {

                    }}/>
                    <HorizontalDivider color={colors.g200} style={{marginTop: 20}}/>
                    <SideBarItem title={'로그아웃'} selected={false} onClick={() => {

                    }}/>
                </S.sideBar.container>
                <S.baseInfo.container>
                    <Text text={'기본 정보'} type={TextType.p2} style={{fontWeight: '700'}}/>
                    <Column gap={32} $alignItems={'stretch'}>
                        <Row gap={38}>
                            <div style={{background: colors.g100, borderRadius: 84 / 2, width: 84, height: 84}}></div>
                            {/* TODO: DUMMY */}
                            <Column gap={12}>
                                <Text text={'나의 프로필'} type={TextType.p5}/>
                                <Button text={'사진 업로드'} role={'assistive'} style={{width: 264}}/>
                            </Column>
                        </Row>
                        <Column $alignItems={'stretch'}>
                            <Row style={{height: 52}}>
                                <Text text={'이름'} type={TextType.p5} style={{width: 122}}/>
                                <Text text={'ㅇㅇㅇ'} type={TextType.p5} color={colors.g500}
                                      style={{width: 122}}/>{/* TODO: DUMMY */}
                                <Spacer/>
                                <S.baseInfo.nameSettingButton>
                                    <Text text={'설정'} type={TextType.btn1} color={colors.g600}/>
                                </S.baseInfo.nameSettingButton>
                            </Row>
                            <Row style={{height: 52}}>
                                <Text text={'이메일'} type={TextType.p5} style={{width: 122}}/>
                                <Text text={'wow@gmail.com'} type={TextType.p5} color={colors.g500}
                                      style={{width: 122}}/>{/* TODO: DUMMY */}
                            </Row>
                        </Column>
                    </Column>
                </S.baseInfo.container>
            </S.container>
        </HasHeader>
    );
}

// SideBarItem
interface SideBarItemProps {
    title: string;
    selected: boolean;
    onClick: () => void;
}

function SideBarItem(
    {
        title,
        selected,
        onClick
    }: SideBarItemProps
) {
    return (
        <S.sideBar.item onClick={onClick}>
            <Text text={title} type={TextType.p2} color={selected ? colors.black : colors.g400}/>
        </S.sideBar.item>
    );
}

export default MyPage;