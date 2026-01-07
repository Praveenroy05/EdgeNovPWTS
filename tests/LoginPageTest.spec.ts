// Calling the different methods from the Page classes - 

import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

let url = "https://rahulshettyacademy.com/client"
let email = "test7lYM@gmail.com"
let password = "Test@123"
let invalidPassword = "Test"

test.describe.configure({mode: 'serial', timeout: 30000})

let loginPage :LoginPage
test.beforeEach(async ({page})=>{
   loginPage = new LoginPage(page) 
   await loginPage.launchURL(url)
})

test.describe("Login Page Test Suite", ()=>{
    test("Login Validation", {tag : ['@smoke', '@regression']},async ()=>{
        test.step("Login into Application with valid credentials", async ()=>{
            await loginPage.loginIntoApplication(email, password)
        })
        test.step("Verify Home Page is visible after login", async ()=>{
            await expect(loginPage.homePageIdentifier).toBeVisible()
        })
    })

    test("@regression @smoke Invalid Login Validation", async ()=>{
        await loginPage.invalidLogin(email, invalidPassword)
        await expect(loginPage.errorMsg).toHaveText("Incorrect email or password.")
    })
})
