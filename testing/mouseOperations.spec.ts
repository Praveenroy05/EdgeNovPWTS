// Mouse Operations:

// click - click()
// right click - click({button: 'right'})
// double click - dblclick()
// Mouse Over - hover()
// Scroll Down - scrollIntoViewIfNeeded()
// Drag and Drop - Locator.dragTo(Locator)

import {test, expect} from '@playwright/test'

test("Double click and right click operations", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    //dblclick() - Double click on an element
    await page.getByText("Double-Click Me To See Alert", {exact: true}).dblclick()
    await page.waitForTimeout(2000)

    // Right click - click({button:'right'}) - Right click on an element
    await page.getByText("right click me").click({button: 'right'})
    await page.waitForTimeout(2000)

    // toBeVisible() - It validates if the element is visible on the page or not.
    //await expect(page.getByText("Delete", {exact: true})).toBeVisible()
    await page.getByText("Delete", {exact: true}).click()
    await page.waitForTimeout(2000)


    // Note: Playwright auto handles alert or popup - Whenever alert/popup appears on the page, that means there will be an event get called as "dialog" on the page
})


test("Mouse Over on an element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    // Mouse Over  - hover() - Hover over on an element
    await page.getByText("Travel Policies", {exact: true}).hover()
    await expect(page.getByTestId("test-id-Baggage Information")).toHaveText("Baggage Information")
})

test("Scroll down on the page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // scrollIntoViewIfNeeded() - scroll inside the page
    await page.getByText("Download Files").scrollIntoViewIfNeeded()
    await page.getByText("Download Files").click()
    await expect(page.locator("h3.post-title")).toContainText("Download Files")
})

test("Drag and drop operations", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const sourceElement = page.locator("div#draggable")
    const targetElement = page.locator("div#droppable")

    //Locator.dragTo(Locator) - Drag the source element to the target element

    //await sourceElement.dragTo(targetElement)

    // Custom logic to handle drag and drop
    await sourceElement.hover()
    await page.mouse.down()
    await targetElement.hover()
    await page.mouse.up()

    await expect(page.locator("div#droppable p")).toHaveText("Dropped!")

})

