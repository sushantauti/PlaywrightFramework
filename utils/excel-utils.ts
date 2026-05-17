import XLSX from "xlsx";
const EXCEL_FILE = "test-data/hrm-data.xlsx";
export class ExcelUtils {

    public static readExcelData(sheetName: string): any {
        //Load exl file
        const workbook = XLSX.readFile(EXCEL_FILE);

        //Get the desired sheet
        const sheet = workbook.Sheets[sheetName];

        if(!sheet) {
            throw new Error(`Sheet not found: ${sheetName}`);
        }
        const data = XLSX.utils.sheet_to_json(sheet, { defval: "" });
        return data;
    }
}