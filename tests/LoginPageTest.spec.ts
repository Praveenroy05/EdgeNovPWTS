// Calling the different methods from the Page classes - 

import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

let url = "https://rahulshettyacademy.com/client"
let email = "test7lYM@gmail.com"
let password = "Test@123"
let invalidPassword = "Test"

test("Login Validation", async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(email, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Invalid Login Validation", async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.invalidLogin(email, invalidPassword)
    await expect(loginPage.errorMsg).toHaveText("Incorrect email or password.")
})
