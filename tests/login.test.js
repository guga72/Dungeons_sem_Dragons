const assert = require('assert'),
    puppeteer = require('puppeteer')


let browser, page;

beforeEach(async() => {
    browser = await puppeteer.launch({
        headless: false
    });

    page = await browser.newPage();
    await page.goto("localhost:3000/")
})

afterEach(async() => {
    await browser.close();
})

test("testar url", async() => {
    const url = await page.url();
    assert(url === "http://localhost:3000")
})

test("testar cadastro e login", async() => {

    await page.waitFor('input[name=email2]');
    await page.waitFor('input[name=senha2]');
    await page.waitFor('button[name=cadastro]');
    await page.waitFor('input[name=email]');
    await page.waitFor('input[name=senha]');
    await page.waitFor('button[name=login]');

    await page.$eval('input[name=email2]', el => el.value = 'teste2@teste.com');
    await page.$eval('input[name=senha2]', el => el.value = 'senhateste');
    await page.$eval('button[name=cadastro]', el => el.click());


    await page.$eval('input[name=email2]', el => el.value = 'teste2@teste.com');
    await page.$eval('input[name=senha2]', el => el.value = 'senhateste');
    await page.$eval('button[name=login]', el => el.click());




})