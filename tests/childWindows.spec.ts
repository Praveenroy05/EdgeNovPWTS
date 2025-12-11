// Multiple windows or tabs - "popup" event
// To handle multiple windows or tabs we have to handle the "popup" event on the page
// When a new window or tab is opened, the "popup" event is emitted

import {test, expect} from '@playwright/test'

test("Handling multiple windows", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")

    await page.locator("#Tabbed button").click() // This will open a new tab or window
    // waitForEvent("event") - It will wait for the event to be triggered
    const newPage = await page.waitForEvent('popup')

    await newPage.getByText("Downloads").click()
    await expect.soft(newPage.locator("#bindings")).toContainText("WebDriver Language Bindings")

    await page.bringToFront() // To come back to the main page
    // Come back to the main page - you can use "page" fixture
    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})