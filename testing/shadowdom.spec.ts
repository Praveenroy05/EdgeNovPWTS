import {test, expect} from '@playwright/test';

test("Handling shadow dom element", async ({page})=>{

    await page.goto("https://books-pwakit.appspot.com/explore?")
    await page.locator("#input").fill("Testing")
    await page.locator("div.icon").click()
    await expect(page.locator("h2.title").first()).toHaveText("Expert MySQL")

})