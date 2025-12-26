import {test, expect} from '@playwright/test'

test("Handling frames", async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Frames.html")

    const framePage = page.frameLocator("#singleframe")
    await framePage.locator("[type='text']").first().fill("No Frame")
    await expect(framePage.locator("[type='text']").first()).toHaveValue("No Frame")

    // Handling Nested Frames
    await page.getByText("Iframe with in an Iframe").click()

    const outerFrame = page.frameLocator("#Multiple iframe")
    const innerFrame = outerFrame.frameLocator(".iframe-container iframe")

    await innerFrame.locator("[type='text']").fill("Nested Frames")
    await expect(innerFrame.locator("[type='text']")).toHaveValue("Nested Frames")

    await page.waitForTimeout(3000)

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})