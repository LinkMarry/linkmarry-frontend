import React from 'react';
import Wedding from "@remote/value/Wedding";
import * as S from '@src/component/template/Template1.style';
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import colors from "@designsystem/foundation/colors";
import {Column, Row} from "@designsystem/component/flexLayout";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Button from "@designsystem/component/button";
import Spacer from "@designsystem/component/spacer";

interface Template1Props {
    wedding?: Wedding;
}

function Template1(
    {
        wedding
    }: Template1Props
) {
    return (
        <S.container>
            <S.container1.root>
                <S.container1.titleWrapper>
                    <S.container1.title>MIN HYOLYN & TAFYANG</S.container1.title>
                    <HorizontalDivider color={colors.black}/>
                    <S.container1.descriptionWrapper>
                        <span>{wedding?.weddingSchedule.weddingDate}</span>
                        <span>{wedding?.weddingPlace.placeName}</span>
                    </S.container1.descriptionWrapper>
                </S.container1.titleWrapper>
                <Column gap={44} $alignItems={'center'}>
                    <S.container1.img src={wedding?.imgList[0]}/>
                    <Row gap={8}>
                        <span>신랑 {wedding?.baseInfo.groomName}</span>
                        <Icon type={IconType.HeartFill} size={16} color={colors.white}/>
                        <span>신부 {wedding?.baseInfo.brideName}</span>
                    </Row>
                </Column>
            </S.container1.root>
            <S.container2.root>
                <span>WEDDING DAY</span>
                <Column gap={25} $alignSelf={'stretch'} $alignItems={'center'}>
                    <HorizontalDivider/>
                    <span>(calendar)</span>
                    <HorizontalDivider/>
                </Column>
                <Column gap={24} $alignItems={'center'}>
                    <Row gap={12} $alignItems={'center'} style={{paddingLeft: 50, paddingRight: 50}}>
                        <S.container2.dateCell>
                            <span>DAYS</span>
                            <span>2</span>
                        </S.container2.dateCell>
                        <S.container2.dateCell>
                            <span>DAYS</span>
                            <span>2</span>
                        </S.container2.dateCell>
                        <S.container2.dateCell>
                            <span>DAYS</span>
                            <span>2</span>
                        </S.container2.dateCell>
                        <S.container2.dateCell>
                            <span>DAYS</span>
                            <span>2</span>
                        </S.container2.dateCell>
                    </Row>
                    <Row gap={4}>
                        {wedding?.baseInfo.groomName}<Icon type={IconType.HeartFill} size={16}
                                                           color={colors.black}/>{wedding?.baseInfo.brideName}의 결혼식이{1}일
                        남았습니다.
                    </Row>
                </Column>
            </S.container2.root>
            <S.container3.root>
                <Column gap={96} $alignItems={'stretch'}>
                    <Column gap={40} $alignItems={'center'}>
                        <Column gap={8} $alignItems={'center'}>
                            <span>{wedding?.baseInfo.groomFatherName}·{wedding?.baseInfo.groomMotherName}의 {wedding?.baseInfo.groomFamilyName}</span>
                            <span>신랑 {wedding?.baseInfo.groomName}</span>
                        </Column>
                        <HorizontalDivider color={colors.g200}/>
                        <Column gap={8} $alignItems={'center'}>
                            <span>{wedding?.baseInfo.brideFatherName}·{wedding?.baseInfo.brideMotherName}의 {wedding?.baseInfo.brideFamilyName}</span>
                            <span>신부 {wedding?.baseInfo.brideName}</span>
                        </Column>
                    </Column>
                    <Button text={'축하 연락하기'}/>
                </Column>
            </S.container3.root>
            <S.container4.root>
                <span>GALLERY</span>
                <span>....</span>
            </S.container4.root>
            <S.container5.root>
                <Spacer h={92}/>
                <Column gap={40} $alignItems={'center'}>
                    <span>LOCATION</span>
                    <Column $alignItems={'center'}>
                        <span>{wedding?.weddingPlace.placeName}</span>
                        <span>{wedding?.weddingPlace.addressName} {wedding?.weddingPlace.floorHall}</span>
                    </Column>
                    <span style={{marginTop: 40}}>(MAP)</span>
                    <span style={{
                        marginLeft: 24,
                        marginTop: 40,
                        alignSelf: 'stretch',
                        textAlign: 'start'
                    }}>{wedding?.weddingPlace.placeTransportation}</span>
                </Column>
                <Spacer h={65}/>
            </S.container5.root>
            <S.container6.root>
                <Column gap={40} $alignItems={'center'}>
                    <span>마음 전하실 곳</span>
                    <span>(컴포넌트)</span>
                </Column>
            </S.container6.root>
            <S.container7.root>
                <Column gap={40} $alignItems={'center'}>
                    <Column gap={12} $alignItems={'center'}>
                        <span>방명록</span>
                        <span>{wedding?.baseInfo.groomName}, {wedding?.baseInfo.brideName}에게 하고 싶은 말을 남겨주세요</span>
                    </Column>
                    <Column gap={12} $alignItems={'stretch'}>
                        {[1, 2, 3].map(e => (
                            <S.container7.comment>
                                
                            </S.container7.comment>
                        ))}
                    </Column>
                </Column>
                <Button text={'방명록 작성하기'} style={{
                    alignSelf: 'center'
                }}/>
            </S.container7.root>
        </S.container>
    );
}

export default Template1;