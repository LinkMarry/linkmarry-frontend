import {Text, Divider, Dialog, Loading, View} from "~/components";
import {useState} from "react";

import {css} from "@linaria/core";

import {useAuth} from "~/hook/useAuth.tsx";

const MyPageInfo = () => {
    const [showRemoveMemberDialog, setShowRemoveMemberDialog] = useState(false);
    const {member, removeMember} = useAuth();

    return (
        <View
            ui={css`
                gap: 24px;
                flex: 1;
            `}
        >
            <Dialog
                show={showRemoveMemberDialog}
                title={"정말 멤버를 탈퇴하시겠습니까?"}
                dismiss={() => setShowRemoveMemberDialog(false)}
                dismissButtonProps={{text: "취소"}}
                confirmButtonProps={{
                    text: "탈퇴",
                    onClick: async () => {
                        await removeMember();
                    },
                }}
            />

            <Text type={"h5"} bold={true}>
                회원정보
            </Text>
            <View
                ui={css`
                    gap: 8px;
                `}
            >
                {member ? (
                    <View>
                        <Item title={"이름"} value={member.name} />
                        <Item title={"이메일"} value={member.email} />
                    </View>
                ) : (
                    <Loading />
                )}
                <Divider />
                <Text
                    type={"p3"}
                    ui={css`
                        color: var(--g-500);
                        text-decoration: underline;
                        height: 52px;
                        cursor: pointer;
                        align-self: flex-start;
                        display: flex;
                        align-items: center;
                    `}
                    onClick={() => {
                        setShowRemoveMemberDialog(true);
                    }}
                >
                    {"회원탈퇴"}
                </Text>
            </View>
        </View>
    );
};

const Item = (props: {title: string; value: string}) => {
    return (
        <View
            flexDirection={"row"}
            ui={css`
                align-items: center;
                height: 52px;
            `}
        >
            <Text
                type={"p3"}
                ui={css`
                    width: 122px;
                    color: var(--g-500);
                `}
            >
                {props.title}
            </Text>
            <Text
                type={"p3"}
                ui={css`
                    width: 122px;
                    color: var(--g-600);
                `}
                bold={true}
            >
                {props.value}
            </Text>
        </View>
    );
};

export default MyPageInfo;
