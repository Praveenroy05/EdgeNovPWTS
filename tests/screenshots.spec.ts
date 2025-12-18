// Scrrenshot

// 1. Screenshot of the page (viewport)
// 2. Screenshot of a specific element
// 3. Full page screenshot

import {test, expect} from '@playwright/test';

test("Taking screenshots", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    // Screenshot of the page (viewport)
    // screenshot({path:'path of the folder/filename.png'})
    await page.screenshot({path:'screenshots/pageScreenshot.png'})
    //  Screenshot of a specific element
    await page.getByPlaceholder("Enter Name").screenshot({path:'screenshots/elementScreenshot.png'})
    // Full page screenshot
    await page.screenshot({path:'screenshots/fullPageScreenshot.png', fullPage:true})

})