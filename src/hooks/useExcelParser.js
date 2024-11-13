import {useCallback} from 'react';
import * as XLSX from 'xlsx';

export const useExcelParser = () => {

    const parseExcelFile = useCallback(async (arrayBuffer) => {
        try {
            const data = new Uint8Array(arrayBuffer);
            const workbook = XLSX.read(data, {type: 'array'});
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            const jsonData = XLSX.utils.sheet_to_json(sheet, {
                header: [
                    "Molport ID",
                    "Supplier",
                    "SMILES",
                    "Sell Unit",
                    "Measure",
                    "Price (USD)",
                    "Direct Shipping Time (Days)",
                    "Direct Shipping Price (USD)"
                ]
            });

            return jsonData.filter(row => row["Molport ID"]);
        } catch (error) {
            console.error("Error parsing Excel file:", error);
            throw error;
        }
    }, []);

    return {parseExcelFile};
};
