// Store locators and methods related to Login Page

import { Locator, Page } from "@playwright/test";

// Add a product to the car dynamically

// 1. Go to the dashboard
// 2. Find out total number of products are available on the page
// 3. Looping concept to ge the text value of a product and compare with the required product that you want to select.
// 4. Write a logic to click on the ad to cart button


export class DashboardPage{

    // Locators
    page : Page
    products : Locator
    addToCartSuccessMsg : Locator
    viewPageProductName : Locator
    viewPageProductPrice : Locator

    constructor(page: Page){
        this.page = page
        this.products = this.page.locator("div.card-body") 
        // div.card-body b
        this.addToCartSuccessMsg = this.page.locator("#toast-container")
        this.viewPageProductName = this.page.locator("div.rtl-text h2")
        this.viewPageProductPrice = this.page.locator("div.rtl-text h3")
    }


    // Methods


    async searchAndAddProductToCart(productName : string){
        await this.products.first().waitFor({state:'visible'})
        // count() - Returns the number of elements matching the locator.
        const countOfProducts = await this.products.count()

        for(let i=0; i<countOfProducts; i++){
            const productText = await this.products.nth(i).locator("b").textContent()
            if(productText === productName){
                await this.products.nth(i).locator("button").last().click()
                break;
            }
        }
    }

    async searchAndViewProductDetails(productName : string){
        await this.products.first().waitFor({state:'visible'})
        // count() - Returns the number of elements matching the locator.
        const countOfProducts = await this.products.count()

        for(let i=0; i<countOfProducts; i++){
            const productText = await this.products.nth(i).locator("b").textContent()
            if(productText === productName){
                await this.products.nth(i).locator("button").first().click()
                break;
            }
        }
    }
}