export function formatPhone(phone: string): string {
    if (phone.length > 13) {
        return phone.slice(0, 13);
    }

    return phone
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
}
