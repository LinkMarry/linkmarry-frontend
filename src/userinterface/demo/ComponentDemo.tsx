import React, {useState} from 'react';
import Button, {ButtonSize, ButtonType} from "@src/userinterface/component/Button";
import Divider, {DividerSize} from "@src/userinterface/component/Divider";
import Checkbox from "@src/userinterface/component/Checkbox";
import Toggle from "@src/userinterface/component/Toggle";
import {Column} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import {IconType} from "@src/userinterface/foundation/Icon";
import Dialog from "@src/userinterface/pattern/dialog/Dialog";
import SegmentedButton from "@src/userinterface/component/SegmentedButton";
import Input from "@src/userinterface/component/Input";
import Select from "@src/userinterface/component/Select";
import Textarea from "@src/userinterface/component/Textarea";
import Popover from "@src/userinterface/pattern/Popover";

function ComponentDemo() {
    const buttonSizes: ButtonSize[] = ['large', 'medium', 'small'];
    const buttonRoles: ButtonType[] = ['filled', 'outlined', 'tonal'];

    const dividerSizes: DividerSize[] = ['large', 'medium', 'small'];

    const [checked, setChecked] = useState(false);
    const [toggleChecked, setToggleChecked] = useState(false);

    const [showDialog, setShowDialog] = useState(false);

    const [selectedTabBarIndex, setSelectedTabBarIndex] = useState(0);
    const [selectedSelectIndex, setSelectedSelectIndex] = useState(0);

    return (
        <Column $gap={8} $ui={css`
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
            <Textarea placeholder={'Label'} $ui={css`
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
