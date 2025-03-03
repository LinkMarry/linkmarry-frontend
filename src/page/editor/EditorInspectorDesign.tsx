import React, {useState} from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import TabBar, {dummyTabBarItems} from "@designsystem/component/TabBar";
import PhotoUploadBox from "@src/component/PhotoUploadBox";
import SegmentedButton from "@designsystem/component/SegmentedButton";

const EditorInspectorDesign = () => {
    const [selectedOpenningAnimationTab, setSelectedOpenningAnimationTab] = useState(0);

    return (
        <Column $alignItems={'stretch'} gap={32}>
            <Text type={'p1'} bold={true}>디자인</Text>
            {/*디자인*/}
            <Column $alignItems={'stretch'} gap={12}>
                <TabBar items={dummyTabBarItems} selectedTab={0} onChange={tab => {
                }}/>

            </Column>

            {/*대표 사진*/}
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>대표 사진</Text>
                <PhotoUploadBox/>
            </Column>

            {/*오프닝*/}
            <Column $alignItems={'stretch'} gap={12}>
                <Column $alignItems={'stretch'} gap={12}>
                    <Text type={'p3'} bold={true}>오프닝 애니메이션</Text>
                    <SegmentedButton
                        items={[
                            '레터링',
                            '타이핑'
                        ]}
                        selectedTab={selectedOpenningAnimationTab}
                        onChange={tab => setSelectedOpenningAnimationTab(tab)}
                    />
                </Column>
                <Column $alignItems={'stretch'} gap={12}>
                    <Text type={'p3'} bold={true}>문구</Text>

                </Column>
            </Column>
        </Column>
    );
};

export default EditorInspectorDesign;
