import {useEffect, useState} from "react";
import InfoMember from "@remote/value/InfoMember";
import memberApi from "@remote/api/MemberApi";

function useMember() {
    const [member, setMember] = useState<InfoMember>();

    useEffect(() => {
        (async () => {
            const {data} = await memberApi.getMyProfile();
            setMember(data);
        })();
    }, []);

    return {
        member
    }
}

export default useMember;
