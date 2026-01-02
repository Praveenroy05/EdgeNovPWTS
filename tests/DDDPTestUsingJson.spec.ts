import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashoardPage'

import products from '../TestData/datadriven.json'


let loginPage : LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})
for(let product of products){
    test(`View product details for ${product.productName}`, async ()=>{
        await loginPage.launchURL(product.url)
        await loginPage.loginIntoApplication(product.email, product.password)
        await expect(loginPage.homePageIdentifier).toBeVisible()
        await dashboardPage.searchAndViewProductDetails(product.productName)
        await expect(dashboardPage.viewPageProductName).toHaveText(product.productName)
    })
}

/*

const products1 = 
[{url: 'https://rahulshettyacademy.com/client',
    email: 'test7lYM@gmail.com',
    password: 'Test@123',
    productName: 'ZARA COAT 3'},
  {
    url: 'https://rahulshettyacademy.com/client',
    email: 'test7lYM@gmail.com',
    password: 'Test@123',
    productName: 'ADIDAS ORIGINAL' },
  {
    url: 'https://rahulshettyacademy.com/client',
    email: 'test7lYM@gmail.com',
    password: 'Test@123',
    productName: 'iphone 13 pro'}]
console.log(products1[0].productName)

// for(variable declartion of array){}

for(let product of products1){
    console.log(product.productName);
}

*/


