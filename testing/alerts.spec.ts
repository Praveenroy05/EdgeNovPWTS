// Alert/pop-up - "dialog" event
// Multiple Tabs/windows - "popup" event
// File Download - "download" event

// Different types of alert
// 1. Simple alert - Will have single button
// 2. Confirm Alert - Will have 2 buttons - Ok/Cancel
// 3. Prompt Alert - Along with the 2 buttons it will have textbox


// To handle the alert or pop-up we have to handle the "dialog" event on the oage
// page.on("event", function)
// page.waitForEvent("popup")

import {test, expect} from '@playwright/test'


test("Alert handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // page.on(event, eventhandler - call back function)

    // Dialog - class inside playwright
    // dialog.accept() - Ok
    // dialog.dismiss() - Cancel
    // dialog.message() - Get the text value that is displaying on the alert
    const promptText = "Playwright"
    page.on("dialog", (dialog) =>{
       console.log(dialog.message());
       dialog.accept(promptText)
      //  dialog.dismiss()
    })
    await page.locator("button#alertBtn").click()
    await page.locator("button#confirmBtn").click()
    await expect(page.locator("p#demo")).toHaveText("You pressed OK!")

    await page.locator("button#promptBtn").click()
    await expect(page.locator("p#demo")).toHaveText(`Hello ${promptText}! How are you today?`)

})