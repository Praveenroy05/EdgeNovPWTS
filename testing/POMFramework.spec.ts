// Framework - It is a design principle. Set of Guildlines.

function loginIntoApplication(){
    // fill the username 
    // fill the password 
    // click on login button 
}


// Duplication  - 100TCs - 300 line of code just to login into the application
// maintenance - 100TCs - 100 

// After implementing Function
// Call the loginIntoApplication() for all the 100TCs - 195 lines of code
// Maintenance becomes very easy - 100TCs - saving 99 steps in terms maintenance
// Resuability - 


// POM framework from scratch:

// There are different layers that we have to create:

// 1. PAGE LAYER - Will create a package or folder (pages) - Locators and methods(action). We will create a TS class to store the locators and methods specific to that particular page.Ex: - LoginPage.ts, DashboardPage.ts, .....

// 2. TEST LAYER - Will create a package or folder (tests). Pure test cases (Steps of the test cases) and assertions.
// Example :- LoginPageTest.spec.ts, DashboardPageTest.spec.ts, ....

// 3. DATA LAYER - JSON/EXCEL - TestData.json TestData.xlsx

// 4. CONFIGURATION LAYER - playwright.config.ts - Global Configuration

// 5. UTILS LAYER - Custom functions - get the data from excel, screenshot(), scrollDown(not in playwright)

// 6. REPORT LAYER - Html/Allure



