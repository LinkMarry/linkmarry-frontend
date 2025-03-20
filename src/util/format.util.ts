class FormatUtil {
    private constructor() {
    }

    static formatPhone(phone: string): string {
        phone = phone.replace(/[^0-9-]/g, '');

        switch (phone.length) {
            case 4:
                return phone[3] === "-"
                    ? phone.slice(0, 3) // 010-
                    : `${phone.slice(0, 3)}-${phone[3]}`; // 0108
            case 9:
                return phone[8] === "-"
                    ? phone.slice(0, 8) // 010-1234-
                    : `${phone.slice(0, 8)}-${phone[8]}`; // 010-12345
            default:
                return phone.length >= 14
                    ? phone.slice(0, 13) // 010-1234-56789
                    : phone;
        }
    }
}

export default FormatUtil;
