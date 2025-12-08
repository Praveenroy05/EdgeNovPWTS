import {test, expect} from '@playwright/test'

// browser and page 

// fixture - fixture is an special type of function/object which help us in setting up and teardown process.

test("Browser fixture", async ({browser})=>{
    const context  = await browser.newContext({}) // creating a browser context
    const page  = await context.newPage() // Create a new page on the browser context
    await page.goto("https://google.com")

    const page1  = await context.newPage()
    await page1.goto("https://facebook.com")

    const page2  = await context.newPage()
    await page2.goto("https://linkedin.com")



})

test("page fixture", async ({page})=>{
    
})

// browser and page fixture will be automatically available to each and every test case . test()

