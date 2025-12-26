//Assertions in Playwright:

// 2 Types of assertions are available in Playwright

// Hard and Soft Assertions

// Hard Assertion - The execution will stop immediately after the failure of an assertion
// await expect(newPage.locator("#bindings")).toContainText("WebDriver Language Bindings")


// Soft Assertion - The execution will continue even after the failure of an assertion and all the failure will be reported at the end of the test case execution

// await expect.soft(newPage.locator("#bindings")).toContainText("WebDriver Language Bindings")


// 1. Auto Retrying assertion 
// 2. Non-retrying assertion

/*
await expect(locator).toBeChecked()
await expect(locator).toBeHidden()  
await expect(locator).toBeVisible()
await expect(locator).toContainText()
await expect(locator).toHaveText()
await expect(locator).toHaveValue() - input field validation
await expect(locator).toHaveValues() - Multi select drop down validation
await expect(page).toHaveTitle()
await expect(page).toHaveURL()
await expect(response).toBeOK()

*/


// Codegen - Record and Playback tool in Playwright

