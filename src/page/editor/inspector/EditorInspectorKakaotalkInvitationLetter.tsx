import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Input from "@designsystem/component/Input";
import Textarea from "@designsystem/component/Textarea";
import {css} from "styled-components";
import PhotoUploadBox from "@src/component/PhotoUploadBox";
import SharingLink from "@src/component/SharingLink";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Divider from "@designsystem/component/Divider";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";
import {getKoreanByKakaoStyle, kakaoStyleList} from "@remote/value/LinkShare";
import {kakaoButtonList, kakaoButtonMap} from "@remote/enumeration/KakaoButton";

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
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={linkShare.kakaoTitle} onChange={event => update(draft => {
                    draft.linkShare.kakaoTitle = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>내용</Text>
                <Textarea hasLabel={false} value={linkShare.kakaoContent} onChange={event => update(draft => {
                    draft.linkShare.kakaoContent = event.target.value;
                })} customStyle={css`
                    height: 194px;
                `}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>사진 첨부</Text>
                <PhotoUploadBox id={'EditorInspectorKakaotalkInvitationLetter-kakaoImgUrl'} onChange={images => update(draft => {
                    draft.linkShare.kakaoImgUrl = images[0];
                })}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>버튼 추가</Text>
                <SegmentedButton
                    items={kakaoButtonList.map(i => kakaoButtonMap[i].korean)}
                    selectedTab={kakaoButtonList.indexOf(linkShare.kakaoButton)}
                    onChange={tab => update(draft => {
                        draft.linkShare.kakaoButton = kakaoButtonList[tab];
                    })}
                />
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>스타일</Text>
                <SegmentedButton
                    items={kakaoStyleList.map(i => getKoreanByKakaoStyle(i))}
                    selectedTab={kakaoStyleList.indexOf(linkShare.kakaoStyle)}
                    onChange={tab => update(draft => {
                        draft.linkShare.kakaoStyle = kakaoStyleList[tab];
                    })}
                />
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>미리보기</Text>
                <SharingLink button={linkShare.kakaoButton} Style={linkShare.kakaoStyle}/>
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorKakaotalkInvitationLetter;
