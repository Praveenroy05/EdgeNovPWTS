import {test, expect} from '@playwright/test';

test("Handling calendar", async ({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()

    // Day, month and year
    const targetDay = "5"
    const targetMonth = "May"
    const targetYear = "2027"

    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")

    while(true){
        const monthText = await monthPicker.textContent()
        const yearText = await yearPicker.textContent()

        if(monthText === targetMonth && yearText === targetYear){
            await page.getByText(targetDay, {exact: true}).last().click()
            break  
        }
        else
        {
            await page.getByText("Next").click()
        }
    }

    await page.waitForTimeout(3000)




    // initialization
    // while(condition){
    //     // code
    // }



})
