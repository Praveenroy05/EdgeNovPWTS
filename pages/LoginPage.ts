// Store locators and methods related to Login Page

import { Locator, Page } from "@playwright/test";

export class LoginPage{

    // Locators related to Login Page and
     
    page : Page
    username: Locator
    password: Locator
    loginBtn: Locator
    homePageIdentifier: Locator
    errorMsg: Locator

    constructor(page:Page){
        this.page = page
        this.username = this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginBtn = this.page.getByRole("button", {name:"Login"})
        this.errorMsg = this.page.locator("#toast-container")
        this.homePageIdentifier = this.page.locator("[routerlink='/dashboard/myorders']")
    }


    // Methods related to Login Page validation

    // launchURL()
    // loginIntoApplication()
    // invalidLogin()

    async launchURL(url:string){
        await this.page.goto(url)
    }

    async loginIntoApplication(username:string, password: string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    async invalidLogin(username:string, incorrectPassword:string){
        await this.username.fill(username)
        await this.password.fill(incorrectPassword)
        await this.loginBtn.click() 
    }

}


