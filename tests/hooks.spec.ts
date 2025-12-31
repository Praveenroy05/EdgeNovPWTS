// Hooks in Playwright
// Hooks - a special type of function which perform certain task. It can be setup for the test execution and teardown for the test execution

// 1. test.beforeAll() - It will be executed once before executing any of the test cases. Initialisation of report, log file, DB connection.
// 2. test.beforeEach() - It will run once before running each and every test cases. Precondition for the test case to be executed.
// 3. test()
// 4. test.afterEach() - It will run once after running each and every test.
// 5. test.afterAll() - It will be executed once after executing all of the test cases. Generation of report, log file, Close DB connection.


import {test} from '@playwright/test'

test.beforeAll(async ()=>{
    console.log("Before All");
})

test.afterAll(async ()=>{
    console.log("After All");
})

test.beforeEach(async ()=>{
    console.log("Before Each");
})

test.afterEach(async ()=>{
    console.log("After Each");
})

test("Test 1", async ()=>{
    console.log("Test1");
})

test("Test 2", async ()=>{
    console.log("Test2");
})

test("Test 3", async ()=>{
    console.log("Test3");
})