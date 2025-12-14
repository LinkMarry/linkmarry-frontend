import {useState} from 'react';
import Button, {type ButtonSize, type ButtonType} from "~/userinterface/component/Button.tsx";
import Divider, {type DividerSize} from "~/userinterface/component/Divider.tsx";
import Checkbox from "~/userinterface/component/Checkbox.tsx";
import Toggle from "~/userinterface/component/Toggle.tsx";
import {css} from "@linaria/core";
import Dialog from "~/userinterface/pattern/dialog/Dialog.tsx";
import SegmentedButton from "~/userinterface/component/SegmentedButton.tsx";
import Input from "~/userinterface/component/Input.tsx";
import Select from "~/userinterface/component/Select.tsx";
import Textarea from "~/userinterface/component/Textarea.tsx";
import Popover from "~/userinterface/pattern/Popover.tsx";
import View from "~/userinterface/core/View.tsx";

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
        <View ui={css`
            padding: 20px;
            gap: 8px;
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
                            <Button text={'로그인'} leadingIcon={'AddLine'} trailingIcon={'AddLine'}
                                    buttonType={role} size={size}/>
                            <Button text={'로그인'} leadingIcon={'AddLine'} trailingIcon={'AddLine'}
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
                        icon: 'Book',
                        text: 'title',
                        onClick: () => {

                        },
                    },
                    {
                        icon: 'Book',
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
        </View>
    );
}

export default ComponentDemo;
