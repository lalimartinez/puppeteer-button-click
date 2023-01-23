const puppeteer = require('puppeteer')

// CLICK A BUTTON
async function clickStartAProject() {
    const browser = await puppeteer.launch({ headless: false, executablePath: '/opt/homebrew/bin/chromium' });
    const page = await browser.newPage();
    await page.goto('https://www.webstacks.com/');
    await page.waitForTimeout(3000);

    const xButton = await page.$x('//*[@id="mutiny-preact-0df4392a-d9aa-4fe3-bede-8289ebaf933a"]/div/div[1]');
    await xButton[0].click();
    await page.waitForTimeout(2000);

    const elements = await page.$x('//*[@id="c6c6bca8-8975-582f-9ef1-cbcedad10b40"]');
    await elements[0].hover();
    await page.waitForTimeout(3000);

    await elements[0].click();
    await page.waitForTimeout(5000);

    await browser.close();
}

clickStartAProject()