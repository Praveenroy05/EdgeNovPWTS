import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashoardPage'
import { Helper } from '../utils/Helper'
import path from 'path'

const filePath = path.join(__dirname, '../TestData/excel.xlsx')
const sheetName = "Login"

const products = Helper.getDataFromExcel(filePath,sheetName)

let loginPage : LoginPage
let dashboardPage : DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})
for(let product of products){
    test(`View product details for ${product.productName}`, async ()=>{
        await loginPage.launchURL(product.url)
        await loginPage.loginIntoApplication(product.username, product.password)
        await expect(loginPage.homePageIdentifier).toBeVisible()
        await dashboardPage.searchAndViewProductDetails(product.productName)
        await expect(dashboardPage.viewPageProductName).toHaveText(product.productName)
    })
}

// step by step process to get the data from excel





