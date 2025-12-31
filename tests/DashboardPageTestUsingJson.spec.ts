import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashoardPage'

import data from '../TestData/product.json'


// pre-condition - we are writing it inside the test.beforeEach()
let loginPage : LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(data.url)
    await loginPage.loginIntoApplication(data.email, data.password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Add the product to cart", async ()=>{
    await dashboardPage.searchAndAddProductToCart(data.productName)
    await expect(dashboardPage.addToCartSuccessMsg).toHaveText(data.cartSuccessMsg)
})

test("View product details", async ()=>{
    await dashboardPage.searchAndViewProductDetails(data.productName)
    await expect(dashboardPage.viewPageProductName).toHaveText(data.productName)
})



// const obj = 
// {
//     url : "https://rahulshettyacademy.com/client",
//     email : "test7lYM@gmail.com",
//     password : "Test@123",
//     productName : "ZARA COAT 3",
//     cartSuccessMsg: "Product Added To Cart"
// }

// const data = 
// {
//   url: 'https://rahulshettyacademy.com/client',
//   email: 'test7lYM@gmail.com',
//   password: 'Test@123',
//   productName: 'ZARA COAT 3',
//   cartSuccessMsg: 'Product Added To Cart'
// }
// console.log(data1.productName);

// Data driven testing using json
// data from excel

// annotation
// Allure report generation
// github
// jenkins
// AI-MCP, agent
// API - testing
// Table validation



