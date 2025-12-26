import {test, expect} from '@playwright/test'

test("Handling input field and clicking on an element", async function({page}){

    // goto("URL") - Launch the url on the browser. URl should have https/https

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // fill("string") - set the value inside the input field

    let username = page.locator("#username")
    await username.first().fill("student")

    // toHaveValue("value") - It help us in validating an input field have some value as  "value"
    await expect(username).toHaveValue("student")

    let password  = page.getByRole('textbox', {name: 'Password'})
    await password.fill("Password123")
    await expect(password).toHaveValue('Password123')

    // click() - Click on an element
    await page.getByRole('button', {name: 'Submit'}).click()

    await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")
    await expect(page.locator("h1.post-title")).toContainText("Successfully")


    //await expect(page.url()).toContain("/logged-in-successfully/")



   // fill the username
   // Expect the username field should have value as "student" enterred successfully
   // Expect there should be an element which have a text as "Logged In Successfully"


   // Page layer - locators and methods - loginIntoApplication(){.....}
   // Test layer - loginPage.loginIntoApplication(username, password), assertion to check if the l

})

test("Handling radio button and checkbox", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const radioBtn = page.getByRole('radio', { name: 'Male', exact: true })
    // click or select the radio button
    // click() - Click on an element
    // check() - check method will validate if the radio or checkbox is already checked, if it is not already checked then it will click on the element.
    await expect(radioBtn).not.toBeChecked()
    await radioBtn.check()
    // Validate if the radio button is selected/checked or not
    // toBeChecked() - It will ensure if the radio button or checkbox is checked or not
    await expect(radioBtn).toBeChecked()

    const checkbox = page.getByRole('checkbox', {name: 'Wednesday'})

   // await checkbox.click()
    await checkbox.check()

    await expect(checkbox).toBeChecked()

})

test("Getting text value from an element and multiple elements", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // textContext() - It will help us in getting the text value from an element including the disabled enabled
    // innerText() - It will help us in getting the text value ONLY from visible element on the webpage
    const singleText = await page.locator("h3.post-title").innerText()
    console.log(singleText);

    // allTextContents()/allInnerTexts()
    const multipleTexts = await page.locator("h2.title").allInnerTexts()
    console.log(multipleTexts)
})


