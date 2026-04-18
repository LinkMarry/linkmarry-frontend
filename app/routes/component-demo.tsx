import {useState} from 'react';
import Button, {type ButtonSize, type ButtonType} from "~/components/core/Button.tsx";
import Divider, {type DividerSize} from "~/components/core/Divider.tsx";
import Checkbox from "~/components/core/Checkbox.tsx";
import Toggle from "~/components/core/Toggle.tsx";
import {css} from "@linaria/core";
import Dialog from "~/components/core/dialog/Dialog.tsx";
import SegmentedButton from "~/components/core/SegmentedButton.tsx";
import Input from "~/components/core/Input.tsx";
import Select from "~/components/core/Select.tsx";
import Textarea from "~/components/core/Textarea.tsx";
import Popover from "~/components/core/Popover.tsx";
import View from "~/components/core/View.tsx";
import Loading from "~/components/core/Loading.tsx";
import LoadingOverlay from "~/components/core/LoadingOverlay.tsx";

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
            <Loading/>
            <div style={{
                position: 'relative',
                width: 100,
                height: 100,
                borderRadius: 10,
                overflow: 'hidden',
            }}>
                <LoadingOverlay/>
            </div>
        </View>
    );
}

export default ComponentDemo;
