// Download - 

// Step by step process to handle file downloads in Playwright:

// 1. Launch the url
// 2. We have to wait for the download event to be triggered - const df = page.waitForEvent("download")
// 3. Identify and click on the element that is responsible for generation of download event.
// 4. Wait for completion of the download - const download = await df
// 5. By using the path module we can specify the location where we want to save the downloaded file. 
// 6. Download - download.suggestedFilename() - will return the filename for the downloaded file.
// 7. Save the file to the specified location - download.saveAs(filePath)

import {test, expect} from '@playwright/test'
import path from 'path'
import fs from 'fs'

test("Handling file downloads", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")

    await page.locator("button#generatePdf").click()

    // 2. We have to wait for the download event to be triggered
    const downloadResult = page.waitForEvent('download')


    // 3. Identify and click on the element that is responsible for generation of download event.
    await page.locator("a#pdfDownloadLink").click()

    // 4. Wait for completion of the download
    const download = await downloadResult;
  
    // 5. By using the path module we can specify the location where we want to save the downloaded file.
    const fileName = await download.suggestedFilename()
    const filePath = path.join(__dirname, "../downloads", fileName)
    console.log(filePath);
    // 7. Save the file to the specified location
    await download.saveAs(filePath)
    await page.waitForTimeout(3000)

    // 8. Verification of the downloaded file
    await expect(filePath).toContain(fileName)
    await expect(fs.existsSync(filePath)).toBe(true)


    // 9. Delete the downloaded file after verification (optional)
    // await download.delete()
    await fs.promises.unlink(filePath)

    await expect(fs.existsSync(filePath)).toBe(false)

})