// Drop Down - 

// 2 Types of DD

// 1. Static drop down - The value will never get changes - gender selection
    // a. Single select drop down
    // b. Multi select drop down
      
// 2. Dynamic drop down - The value of the DD can be changing
    // a. Single select drop down
    // b. Multi select drop down


// Developement of a drop down
// 1. <select> tag 
// 2. NON <select> tag  - div, span, li, option


// 1. DD developed using <select> tag 
// Step by step procedure to select the value from the DD

// 1. launch the url
// 2. Locate the drop down element by writing the locator
// 3. Get the value from the DD by using - selectOption("value" or {label or value or index})
// Example : page.locator("#dd").selectOption("AF", {label: 'text'} {value: 'AF'} {index: 2})
// 4. If the drop down is multi select - selectOption(["AS", "AF", "IND"])
// selectOption([{label:'India'}, {index:15}, {value: 'BS'}])


// 2. DD developed using NON <select> tag
// Step by step procedure to select the value from the DD

// 1. launch the url
// 2. Locate the drop down element by writing the locator
// 3. Click on the drop down element
// 4. Identify and click on the element that you are trying to select from the DD


import {test,expect} from '@playwright/test'

test("Drop down developed using SELECT tag handling", async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown")
    await page.locator("#country").selectOption("AR")
   // await page.waitForTimeout(2000)
    await page.locator("#country").selectOption({value:'BB'})
   // await page.waitForTimeout(2000)
    await page.locator("#country").selectOption({label:'Romania'})
   // await page.waitForTimeout(2000)
    await page.locator("#country").selectOption({index:24})
   // await page.waitForTimeout(2000)

   await page.goto("https://demoqa.com/select-menu")
   await page.locator("#cars").selectOption(["saab", 'audi'])
   //await page.waitForTimeout(2000)
   await page.locator("#cars").selectOption([{label: 'Volvo'}, {index: 2}])
   //await page.waitForTimeout(2000)
})

test("Drop down developed using non SELECT tag handling", async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#withOptGroup").click()
    await page.locator("#react-select-2-option-1-0").click()

    await page.locator("div.css-1hwfws3").last().click()
    await page.locator("#react-select-4-option-0").click()
    await page.locator("#react-select-4-option-2").click()
    await page.waitForTimeout(2000)

})