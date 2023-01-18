const puppeteer = require('puppeteer')

// CLICK A BUTTON
async function clickStartAProject() {
    const browser = await puppeteer.launch({ headless: false, executablePath: '/opt/homebrew/bin/chromium' })
    const page = await browser.newPage()
    await page.goto('https://www.webstacks.com/')
    const elements = await page.$x('//*[@id="c6c6bca8-8975-582f-9ef1-cbcedad10b40"]')
    await elements[0].click()
    await page.waitForTimeout(6000)
    await browser.close()
}

clickStartAProject()