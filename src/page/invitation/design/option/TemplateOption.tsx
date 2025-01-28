import React, {ChangeEvent, useRef, useState} from 'react';
import styled, {css, CSSProperties} from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import colors from "@designsystem/foundation/colors";
import OptionSelect from "@page/invitation/design/component/OptionSelect";
import Template, {
    templateColors,
    TemplateFontSize,
    templateFontSizeRecord,
    templateFontSizes, templateNames
} from "@remote/value/Template";
import {LinkMarryFont, linkMarryFonts} from "@designsystem/foundation/text/textType";
import SegmentedButton from "@designsystem/component/segmentedButton";
import Icon, {IconType} from "@designsystem/foundation/icon";
import VoidInput from "@src/component/VoidInput";
import fileApi from "@remote/api/FileApi";

interface TemplateOptionProps {
    template: Template;
    onChange: (template: Template) => void;
}

function TemplateOption(
    {
        template,
        onChange
    }: TemplateOptionProps
) {
    const [isFetching, setIsFetching] = useState(false);
    const imageFieldRef = useRef<HTMLInputElement>(null);
    const uploadImages = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return;
        
        const file = files[0];
        if (!file) return;
        
        setIsFetching(true);
        
        try {
            const {data} = await fileApi.upload(file);
            
        } catch (error) {
            
        } finally {
            setIsFetching(false);
            if (imageFieldRef.current) {
                imageFieldRef.current.value = '';
            }
        }
    };
    
    return (
        <S.container>
            <Column gap={32} flex={1}>
                <Row gap={12}>
                    <OptionLabel label={'디자인'} style={{alignSelf: 'flex-start'}}/>
                    <S.designWrapper>
                        {templateNames.map((templateName, index) => (
                            <SegmentedButton
                                key={index}
                                selected={templateName === template.templateName}
                                style={{width: 126}}
                                onClick={() => {
                                    onChange({...template, templateName});
                                }}>
                                {templateName}
                            </SegmentedButton>
                        ))}
                    </S.designWrapper>
                </Row>
                <HorizontalDivider/>
                <Row gap={12}>
                    <OptionLabel label={'배경색상'} style={{alignSelf: 'flex-start'}}/>
                    <S.backgroundColor.container>
                        {templateColors.map((color, index) => (
                            <S.backgroundColor.cell
                                key={index}
                                color={color}
                                selected={color === template.templateColor}
                                onClick={() => onChange({...template, templateColor: color})}
                            />
                        ))}
                    </S.backgroundColor.container>
                </Row>
                <Row gap={12}>
                    <OptionLabel label={'폰트'} style={{alignSelf: 'flex-start'}}/>
                    <Row gap={12}>
                        <OptionSelect
                            items={linkMarryFonts}
                            width={154}
                            value={template.templateFont}
                            onChange={event => {
                                const changedFont = event.target.value as LinkMarryFont;
                                if (changedFont) {
                                    onChange({...template, templateFont: changedFont})
                                }
                            }}
                            renderItem={item => <>{item}</>}
                        />
                        <OptionSelect
                            items={templateFontSizes}
                            value={template.templateFontSize}
                            onChange={event => {
                                const changedFontSize = event.target.value as TemplateFontSize;
                                if (changedFontSize) {
                                    onChange({...template, templateFontSize: changedFontSize});
                                }
                            }}
                            renderItem={item => <>{templateFontSizeRecord[item as TemplateFontSize].korean}</>}
                        />
                    </Row>
                </Row>
                <Row gap={12}>
                    <OptionLabel label={'대표사진'} style={{alignSelf: 'flex-start'}}/>
                    <S.addImageContainer htmlFor={'choose-template-image'}>
                        <Icon type={IconType.AddLine} tint={colors.g600} size={24}/>
                    </S.addImageContainer>
                    <VoidInput
                        id={'choose-template-image'}
                        ref={imageFieldRef}
                        onChange={uploadImages}
                        type={'file'}
                        accept={'image/*'}
                    />
                </Row>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        padding: 36px;
    `,
    designWrapper: styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 가로로 2개의 열 */
        gap: 12px;
    `,
    backgroundColor: {
        container: styled.div`
            display: grid;
            grid-template-columns: repeat(4, 1fr); /* 가로로 4개의 열 */
            grid-template-rows: repeat(2, 1fr); /* 세로로 2개의 행 */
            grid-gap: 12px;
        `,
        cell: styled.span<{ color: CSSProperties['color'], selected: boolean }>`
            width: 44px;
            height: 44px;
            background: ${({color}) => color};
            ${({selected}) => selected
                    ? css`
                        border: 2px solid ${colors.g500};
                    `
                    : css`
                        border: 1px solid ${colors.g200};
                    `
            }
            border-radius: 8px;
            cursor: pointer;
        `
    },
    addImageContainer: styled.label`
        display: flex;
        min-width: 128px;
        height: 128px;
        border: 1px solid ${colors.g200};
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `,
}

export default TemplateOption;