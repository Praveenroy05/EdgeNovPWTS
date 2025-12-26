
import {test, expect} from '@playwright/test'


test("Login validation",  async ({page})=>{

  await page.goto("https://practicetestautomation.com/practice-test-login/")
  await page.getByLabel("Username").fill("student")
  await page.getByLabel("Password").fill("Password123")
  await page.locator("#submit").click()
  await expect(page.getByText("Logged In Successfully", {exact: true})).toBeVisible()
  await page.goto("https://google.com")

  //await page.lo
  //await page.getByRole()

  // Whenever you write the locator using css select or xpath we have to use a method know as locator("selector") to identify the element


  // Promise - pending, rejected, successful
  // Test steps:

  // Launch the url
  // fill the username
  // fill the password
  // click on login button
  // Valid if the login is successful or not


})


// JS & TS both are asynchronous 



// async-await - async and await goes together. We have to write async at function level and await at step level. Without async there is no use of await and without await there is no use of async.

// browser and page fixture


//