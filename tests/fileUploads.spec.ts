// Step by step process to handle file uploads in Playwright

// setInputFiles(filePath) - This method is used to upload files in Playwright

// 1. Launch the url
// 2. Locate the file input element
// 3. Use setInputFiles() method to upload the file
// 4. Verify the file is uploaded successfully


import {test, expect} from '@playwright/test'
import path from 'path'

test("Handling file uploads", async ({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    const filePath1 = path.join(__dirname, "../TestData/AILLM.jpg")
    const filePath2 = path.join(__dirname, "../TestData/AILLM1.jpg")

    await page.locator("#filesToUpload").setInputFiles([filePath1, filePath2])

    await expect(page.locator("#fileList li").first()).toContainText("AILLM")
    await expect(page.locator("#fileList li").last()).toContainText("AILLM1")
})

