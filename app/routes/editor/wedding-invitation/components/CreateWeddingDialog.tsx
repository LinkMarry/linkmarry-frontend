import Dialog from "~/components/core/dialog/Dialog.tsx";
import Input from "~/components/core/Input.tsx";
import {useNavigate} from "react-router";
import Text from "~/components/core/Text.tsx";
import {css} from "@linaria/core";
import type Binding from "~/lib/Binding.ts";
import Icon from "~/components/core/icon";
import View from "~/components/core/View.tsx";
import type Wedding from "~/api/value/Wedding.ts";
import {useCreateWeddingDialog} from "./useCreateWeddingDialog.ts";

const CreateWeddingDialog = ({value, update}: Binding<Wedding>) => {
    const {
        showCreateWeddingDialog,
        isFetching,
        isError,
        urlFormatError,
        createWedding,
        handleNameChange,
        handleUrlChange,
    } = useCreateWeddingDialog({value, update});
    const navigate = useNavigate();

    return (
        <Dialog
            show={showCreateWeddingDialog}
            title={"새 디자인 만들기"}
            description={"청첩장에 사용할\n이름과 링크를 입력해 주세요."}
            dismiss={() => {}}
            confirmButtonProps={{
                text: "만들기",
                enabled: value.url.length > 0 && value.name.length > 0 && !isFetching,
                onClick: async () => await createWedding(),
            }}
            ui={css`
                position: relative;
            `}
        >
            <Icon
                size={20}
                iconType={"CrossLine"}
                onClick={() => navigate("/")}
                ui={css`
                    fill: var(--g-600);
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    cursor: pointer;
                `}
            />
            <View
                ui={css`
                    gap: 12px;
                `}
            >
                <Input
                    value={value.name}
                    onChange={event => handleNameChange(event.target.value)}
                    placeholder={"청첩장 이름"}
                />
                <View
                    ui={css`
                        gap: 4px;
                    `}
                >
                    <Input
                        hasLabel={false}
                        prefix={"wedding/"}
                        type={"text"}
                        maxLength={20}
                        value={value.url}
                        onChange={event => handleUrlChange(event.target.value)}
                        placeholder={"나만의 특별한 도메인"}
                    />
                    {urlFormatError && (
                        <Text
                            type={"p3"}
                            ui={css`
                                color: var(--r-500, red);
                            `}
                        >
                            {urlFormatError}
                        </Text>
                    )}
                    {isError && !urlFormatError && (
                        <Text
                            type={"p3"}
                            ui={css`
                                color: var(--r-500, red);
                            `}
                        >
                            이미 사용 중인 링크입니다.
                        </Text>
                    )}
                </View>
            </View>
        </Dialog>
    );
};

export default CreateWeddingDialog;
