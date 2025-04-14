import * as XLSX from 'xlsx';

export function downloadExcel<T>(data: T[], title: string) {
    console.log('download')
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, title);
    XLSX.writeFile(workbook, `${title}.xlsx`);
}
