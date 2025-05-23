import React from 'react';
import {Column} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import Input from "@src/userinterface/component/Input";
import Textarea from "@src/userinterface/component/Textarea";
import {css} from "styled-components";
import PhotoUploadBox from "@src/userinterface/specific/PhotoUploadBox";
import SharingLink from "@src/userinterface/specific/SharingLink";
import SegmentedButton from "@src/userinterface/component/SegmentedButton";
import EditorInspectorWrapper from "@src/feature/editor/component/inspector/EditorInspectorWrapper";
import Binding from "@src/shared/Binding";
import WeddingDto from "@src/infrastructure/network/value/WeddingDto";
import {getKoreanByKakaoStyle, kakaoStyleList} from "@src/infrastructure/network/value/LinkShare";
import {kakaoButtonList, kakaoButtonMap} from "@src/infrastructure/network/enumeration/KakaoButton";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorKakaotalkInvitationLetter = (
    {
        value: {linkShare},
        update
    }: Props
) => {
    return (
        <EditorInspectorWrapper type={'kakaotalkInvitationLetter'}>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={linkShare.kakaoTitle} onChange={event => update(draft => {
                    draft.linkShare.kakaoTitle = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>내용</Text>
                <Textarea hasLabel={false} value={linkShare.kakaoContent} onChange={event => update(draft => {
                    draft.linkShare.kakaoContent = event.target.value;
                })} $ui={css`
                    height: 194px;
                `}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>사진 첨부</Text>
                <PhotoUploadBox
                    id={'EditorInspectorKakaotalkInvitationLetter-kakaoImgUrl'}
                    value={linkShare.kakaoImgUrl}
                    onChange={newValue => update(draft => {
                        draft.linkShare.kakaoImgUrl = newValue;
                    })}
                />
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>버튼 추가</Text>
                <SegmentedButton
                    items={kakaoButtonList.map(i => kakaoButtonMap[i].korean)}
                    selectedTab={kakaoButtonList.indexOf(linkShare.kakaoButton)}
                    onChange={tab => update(draft => {
                        draft.linkShare.kakaoButton = kakaoButtonList[tab];
                    })}
                />
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>스타일</Text>
                <SegmentedButton
                    items={kakaoStyleList.map(i => getKoreanByKakaoStyle(i))}
                    selectedTab={kakaoStyleList.indexOf(linkShare.kakaoStyle)}
                    onChange={tab => update(draft => {
                        draft.linkShare.kakaoStyle = kakaoStyleList[tab];
                    })}
                />
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>미리보기</Text>
                <SharingLink
                    title={linkShare.kakaoTitle}
                    button={linkShare.kakaoButton}
                    background={linkShare.kakaoImgUrl}
                    Style={linkShare.kakaoStyle}
                />
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorKakaotalkInvitationLetter;
