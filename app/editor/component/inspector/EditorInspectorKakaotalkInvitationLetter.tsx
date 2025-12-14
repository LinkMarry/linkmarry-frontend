import Text from "~/userinterface/component/Text.tsx";
import Input from "~/userinterface/component/Input.tsx";
import Textarea from "~/userinterface/component/Textarea.tsx";
import {css} from "@linaria/core";
import PhotoUploadBox from "~/userinterface/specific/PhotoUploadBox.tsx";
import SharingLink from "~/userinterface/specific/SharingLink.tsx";
import SegmentedButton from "~/userinterface/component/SegmentedButton.tsx";
import EditorInspectorWrapper from "~/editor/component/inspector/EditorInspectorWrapper.tsx";
import type Binding from "~/shared/Binding.ts";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import {getKoreanByKakaoStyle, kakaoStyleList} from "~/infrastructure/network/value/LinkShare.ts";
import {kakaoButtonList, kakaoButtonMap} from "~/infrastructure/network/enumeration/KakaoButton.ts";
import View from "~/userinterface/core/View.tsx";


const EditorInspectorKakaotalkInvitationLetter = (
    {
        value: {linkShare},
        update
    }: Binding<WeddingDto>
) => {
    return (
        <EditorInspectorWrapper type={'kakaotalkInvitationLetter'}>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={linkShare.kakaoTitle} onChange={event => update(draft => {
                    draft.linkShare.kakaoTitle = event.target.value;
                })}/>
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>내용</Text>
                <Textarea hasLabel={false} value={linkShare.kakaoContent} onChange={event => update(draft => {
                    draft.linkShare.kakaoContent = event.target.value;
                })} ui={css`
                    height: 194px;
                `}/>
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>사진 첨부</Text>
                <PhotoUploadBox
                    id={'EditorInspectorKakaotalkInvitationLetter-kakaoImgUrl'}
                    value={linkShare.kakaoImgUrl}
                    onChange={newValue => update(draft => {
                        draft.linkShare.kakaoImgUrl = newValue;
                    })}
                />
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>버튼 추가</Text>
                <SegmentedButton
                    items={kakaoButtonList.map(i => kakaoButtonMap[i].korean)}
                    selectedTab={kakaoButtonList.indexOf(linkShare.kakaoButton)}
                    onChange={tab => update(draft => {
                        draft.linkShare.kakaoButton = kakaoButtonList[tab];
                    })}
                />
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>스타일</Text>
                <SegmentedButton
                    items={kakaoStyleList.map(i => getKoreanByKakaoStyle(i))}
                    selectedTab={kakaoStyleList.indexOf(linkShare.kakaoStyle)}
                    onChange={tab => update(draft => {
                        draft.linkShare.kakaoStyle = kakaoStyleList[tab];
                    })}
                />
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>미리보기</Text>
                <SharingLink
                    title={linkShare.kakaoTitle}
                    button={linkShare.kakaoButton}
                    background={linkShare.kakaoImgUrl || `${window.location.origin}/ogimage.png`}
                    Style={linkShare.kakaoStyle}
                />
            </View>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorKakaotalkInvitationLetter;
