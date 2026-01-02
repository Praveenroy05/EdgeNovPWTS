import xlsx from 'xlsx'

// Which excel file? - filePath
// Which sheet data? - sheetName

export class Helper{

    static getDataFromExcel(filePath: string, sheetName: string){
        const workbook = xlsx.readFile(filePath)
        const sheet = workbook.Sheets[sheetName]
        const jsonData = xlsx.utils.sheet_to_json(sheet)
        return jsonData
    }

}

// 1. Install 'xlsx' library - npm install --save-dev xlsx
// 2. Create and store the excel file inside TestData folder
// 3. Create a reusable function which helps us in terms of reading the excel file 
// 4. Convert the excel data into JSON format and return that jsin data from the function