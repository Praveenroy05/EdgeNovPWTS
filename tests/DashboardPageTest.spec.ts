import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashoardPage'

let url = "https://rahulshettyacademy.com/client"
let email = "test7lYM@gmail.com"
let password = "Test@123"
let productName = "ZARA COAT 3"
let cartSuccessMsg = "Product Added To Cart"

// pre-condition - we are writing it inside the test.beforeEach()
let loginPage : LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(email, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Add the product to cart", async ()=>{
    await dashboardPage.searchAndAddProductToCart(productName)
    await expect(dashboardPage.addToCartSuccessMsg).toHaveText(cartSuccessMsg)
})

test("View product details", async ()=>{
    await dashboardPage.searchAndViewProductDetails(productName)
    await expect(dashboardPage.viewPageProductName).toHaveText(productName)
})


// JSON - excel
// JSON - Javascript OBJECT Notation

// Note: When you import a josn file inside a JS/TS file, the json data will get imported in the form JS/TS object.

// const obj = {
//     key : "value"
// }

// {
//     "key" : "value"
// }