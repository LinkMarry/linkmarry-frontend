import React from 'react';
import S from '@page/templates/TemplatesPage.style';
import HasHeader from "@designsystem/component/header/hasHeader";
import Text from "@designsystem/component/text";
import TemplateCell from "@page/templates/component/TemplateCell";

function TemplatesPage() {
    return (
        <HasHeader>
            <S.container>
                <Text type={'h5'}>모바일 청첩장 템플릿</Text>
                <S.templates>
                    {['Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test'].map(template => (
                        <TemplateCell title={template}/>
                    ))}
                </S.templates>
            </S.container>
        </HasHeader>
    );
}

export default TemplatesPage;