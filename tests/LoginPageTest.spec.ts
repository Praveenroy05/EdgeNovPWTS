// Calling the different methods from the Page classes - 

import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test("Login Validation", async ({page})=>{
    const loginPage = new LoginPage()
   // loginPage.launchURL()
   // loginPage.loginIntoApplication()
   // Assertion
})