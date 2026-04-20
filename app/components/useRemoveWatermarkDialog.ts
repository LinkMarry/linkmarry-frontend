import { useState } from 'react';
import { useNavigate } from "react-router";
import naverApi from "~/api/naver-api.ts";
import weddingApi from "~/api/wedding-api.ts";
import { isAxiosError } from "axios";
import { formatPhone } from "~/lib/format-util.ts";

interface UseRemoveWatermarkDialogProps {
    url: string;
}

export function useRemoveWatermarkDialog({ url }: UseRemoveWatermarkDialogProps) {
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const removeWatermark = async () => {
        try {
            await naverApi.order(phone);
        } catch (error) {
            console.log(error);
            return;
        }

        try {
            await weddingApi.removeWatermark(url);
            alert('워터마크 제거 완료!');
            navigate(0);
        } catch (error) {
            console.error(error);
            if (isAxiosError(error) && error.response && error.status === 404) {
                alert(`워터마크 제거 실패 - ${error.response.data.message}`);
            } else {
                alert('워터마크 제거 실패 - 고객센터에 문의하세요');
            }
        }
    };

    const handlePhoneChange = (value: string) => {
        const formatedPhone = formatPhone(value);
        setPhone(formatedPhone);
    };

    return {
        phone,
        removeWatermark,
        handlePhoneChange
    };
}
