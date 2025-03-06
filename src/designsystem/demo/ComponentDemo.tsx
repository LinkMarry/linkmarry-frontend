import React, {useState} from 'react';
import Button, {ButtonSize, ButtonType} from "@designsystem/component/Button";
import Divider, {DividerSize} from "@designsystem/component/Divider";
import Checkbox from "@designsystem/component/Checkbox";
import Radio from "@designsystem/component/Radio";
import Toggle from "@designsystem/component/Toggle";
import {Column} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import {IconType} from "@designsystem/foundation/Icon";
import Dialog from "@designsystem/pattern/dialog/Dialog";
import Popover from "@designsystem/pattern/Popover";
import SegmentedButton from "@designsystem/component/SegmentedButton";
import Input from "@designsystem/component/Input";
import Select from "@designsystem/component/Select";
import Textarea from "@designsystem/component/Textarea";

function ComponentDemo() {
    const buttonSizes: ButtonSize[] = ['large', 'medium', 'small'];
    const buttonRoles: ButtonType[] = ['filled', 'outlined', 'tonal'];

    const dividerSizes: DividerSize[] = ['large', 'medium', 'small'];

    const [textareaText, setTextareaText] = useState('');

    const [checked, setChecked] = useState(false);
    const [selected, setSelected] = useState(false);
    const [toggleChecked, setToggleChecked] = useState(false);

    const [showDialog, setShowDialog] = useState(false);

    const [selectedTabBarIndex, setSelectedTabBarIndex] = useState(0);
    const [selectedSelectIndex, setSelectedSelectIndex] = useState(0);

    return (
        <Column gap={8} css={css`
            padding: 20px;
        `}>
            {buttonRoles.map(role => (
                <div style={{
                    display: 'flex',
                    gap: 8
                }}>
                    {buttonSizes.map(size =>
                        <div style={{
                            display: 'flex',
                            gap: 8
                        }}>
                            <Button text={'로그인'} leadingIcon={IconType.AddLine} trailingIcon={IconType.AddLine}
                                    buttonType={role} size={size}/>
                            <Button text={'로그인'} leadingIcon={IconType.AddLine} trailingIcon={IconType.AddLine}
                                    buttonType={role} size={size} enabled={false}/>
                        </div>
                    )}
                </div>
            ))}

            {dividerSizes.map(size => (
                <Divider size={size}/>
            ))}
            <Checkbox
                style={{
                    marginTop: 32
                }}
                label={'title'}
                checked={checked}
                OnChange={setChecked}
            />
            <Radio
                label={'title'}
                selected={selected}
                onChange={setSelected}
            />
            <Toggle
                checked={toggleChecked}
                OnChange={setToggleChecked}
            />
            <Button text={'show dialog'} onClick={() => setShowDialog(true)}/>
            {showDialog && (
                <Dialog
                    title={'Title'}
                    description={'Description'}
                    dismiss={() => setShowDialog(false)}
                    dismissButtonProps={{
                        text: 'Cancel'
                    }}
                    confirmButtonProps={{
                        text: 'Confirm'
                    }}
                />
            )}
            <Popover
                items={[
                    {
                        icon: IconType.Book,
                        text: 'title',
                        onClick: () => {

                        },
                    },
                    {
                        icon: IconType.Book,
                        text: 'title',
                        type: 'destructive',
                        onClick: () => {

                        },
                    }
                ]}
                dismiss={() => {
                }}
                ui={css`
                    position: relative;
                `}
            />
            <SegmentedButton items={[
                '레터링',
                '타이핑',
                '타이핑'
            ]} selectedTab={selectedTabBarIndex} ui={css`
                width: 316px;
            `} onChange={tab => setSelectedTabBarIndex(tab)}/>
            <Input placeholder={'Label'} ui={css`
                margin-top: 24px;
            `}/>
            <Input placeholder={'Label'} hasLabel={false} ui={css`
                margin-top: 24px;
            `}/>
            <Textarea placeholder={'Label'} ui={css`
                margin-top: 24px;
            `}/>
            <Textarea placeholder={'Label'} hasLabel={false}/>
            <Select
                items={[
                    'Option1',
                    'Option2'
                ]}
                selected={selectedSelectIndex}
                OnChange={index => {
                    setSelectedSelectIndex(index);
                }}
            />
        </Column>
    );
}

export default ComponentDemo;
