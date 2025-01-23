import React, {ChangeEvent, useRef, useState} from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import OptionSegmentedButton from "@page/invitation/design/component/OptionSegmentedButton";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import colors from "@designsystem/foundation/colors";
import Icon, {IconType} from "@designsystem/foundation/icon";
import LinkShare from "@remote/value/LinkShare";
import VoidInput from "@src/component/VoidInput";
import fileApi from "@remote/api/FileApi";
import AddDismissButton from "@src/component/AddDismissButton";
import LoadingOverlay from "@src/component/LoadingOverlay";

type LinkShareMode = 'kakaotalk' | 'url';
const linkShareModeRecord: Record<LinkShareMode, string> = {
    kakaotalk: '카카오톡',
    url: 'URL'
}
const linkShareModes: LinkShareMode[] = ['kakaotalk', 'url'];
const linkShareModesTitle = linkShareModes.map(mode => linkShareModeRecord[mode]);

interface LinkShareOptionProps {
    linkShare: LinkShare;
    onChange: (linkShare: LinkShare) => void;
}

function LinkShareOption(
    {
        linkShare,
        onChange
    }: LinkShareOptionProps
) {
    const [selectedShareModeIndex, setSelectedShareModeIndex] = useState(0);
    const [isFetching, setIsFetching] = useState(false);

    const imageFieldRef = useRef<HTMLInputElement>(null);

    const selectedShareMode = linkShareModes[selectedShareModeIndex];
    const imgUrl = selectedShareMode === 'url' ? linkShare.urlImg : linkShare.kakaoImgUrl;

    const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return;

        const file = files[0];
        if (!file) return;

        setIsFetching(true);

        const {data} = await fileApi.upload(file);
        switch (selectedShareMode) {
            case 'url':
                onChange({...linkShare, urlImg: data.url});
                break;
            case 'kakaotalk':
                onChange({...linkShare, kakaoImgUrl: data.url});
                break;
        }

        setIsFetching(false);
    };

    return (
        <S.container>
            <Column gap={32}>
                <OptionSegmentedButton
                    style={{width: 264}}
                    selectedIndex={selectedShareModeIndex}
                    items={linkShareModesTitle}
                    onClickItem={mode => {
                        setSelectedShareModeIndex(mode);
                    }}
                />
                <Column gap={20}>
                    <Row gap={12}>
                        <OptionLabel label={'사진'} style={{alignSelf: 'flex-start'}}/>
                        {imgUrl ? (
                            <AddDismissButton dismiss={() => {
                                switch (selectedShareMode) {
                                    case 'kakaotalk':
                                        onChange({...linkShare, kakaoImgUrl: ''});
                                        break;
                                    case 'url':
                                        onChange({...linkShare, urlImg: ''});
                                        break;
                                }
                                if (imageFieldRef.current) {
                                    imageFieldRef.current.value = '';
                                }
                            }}>
                                <S.image src={imgUrl}/>
                            </AddDismissButton>
                        ) : (
                            <S.addImageContainer htmlFor={'choose-link-share-image'}>
                                <Icon type={IconType.AddLine} tint={colors.g600} size={24}/>
                                {isFetching && <LoadingOverlay/>}
                            </S.addImageContainer>
                        )}
                        <VoidInput
                            id={'choose-link-share-image'}
                            ref={imageFieldRef}
                            onChange={uploadImage}
                            type={'file'}
                            accept={'image/*'}
                        />
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'제목'}/>
                        <OptionTextField fieldProps={{
                            value: selectedShareMode === 'kakaotalk' ? linkShare.kakaoTitle : linkShare.urlTitle,
                            onChange: event => onChange(selectedShareMode === 'kakaotalk' ? {
                                ...linkShare,
                                kakaoTitle: event.target.value
                            } : {
                                ...linkShare,
                                urlTitle: event.target.value
                            })
                        }} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'내용'}/>
                        <OptionTextField fieldProps={{
                            value: selectedShareMode === 'kakaotalk' ? linkShare.kakaoContent : linkShare.urlContent,
                            onChange: event => onChange(selectedShareMode === 'kakaotalk' ? {
                                ...linkShare,
                                kakaoContent: event.target.value
                            } : {
                                ...linkShare,
                                urlContent: event.target.value
                            })
                        }} width={264}/>
                    </Row>
                </Column>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        padding: 36px;
    `,
    addImageContainer: styled.label`
        display: flex;
        position: relative;
        width: 128px;
        height: 128px;
        border: 1px solid ${colors.g200};
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `,
    image: styled.img`
        display: flex;
        width: 128px;
        object-fit: cover;
        height: 128px;
    `
}

export default LinkShareOption;