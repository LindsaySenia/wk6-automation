import { hasUncaughtExceptionCaptureCallback } from "process"
import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver') 

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/')
})

afterAll(async () => {
    await driver.quit()
})

test('Add a movie', async () => {
    let inputField = await driver.findElement(By.name('inputField'))

    let button = await driver.findElement(By.name('button'))

    await inputField.sendKeys('The Imaginarium of Doctor Parnassus')

    await button.click()

    await driver.sleep(2000)
})

test('Delete a button', async () => {
    let inputField = await driver.findElement(By.name('inputField'))

    let button = await driver.findElement(By.name('button'))

    await inputField.sendKeys('The Imaginarium of Doctor Parnassus')

    await button.click()

    await driver.sleep(4000)

    let deleteBtn = await driver.findElement(By.name('deleteBtn'))

    await deleteBtn.click()

    await driver.sleep(2000)


})

// test("Confirm delete message", async () => {
//     let messageText = await driver.findElement(By.css("#message")).getText()
//     expect('${testMovie} deleted!').toEqual(messageText)
// })