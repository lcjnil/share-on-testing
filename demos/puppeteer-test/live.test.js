const $searchInput = '//div[contains(@class, "search-input")]//input'
const $searchButton = '//div[contains(@class, "search-input")]//div[contains(@class, "pl-input-append")]';


describe('live pc', () => {
    it('should search and enter user page', async () => {
        const page = await browser.newPage();
        await page.goto('https://live.kuaishou.com');

        await page.waitForXPath('//video');
        await page.setViewport({width: 1920, height: 1080})
        const [input] = await page.$x($searchInput);
        await input.type('嗨氏');

        const [button] = await page.$x($searchButton);

        console.log(await (await button.getProperty('className')).jsonValue())
    
        await button.click();
        await page.waitForNavigation();
        await page.waitForXPath('//a[contains(text(), "嗨氏")]')
        const [link] = await page.$x('//a[contains(text(), "嗨氏")]');
        await link.click();
        await expect(page).toMatch('嗨氏')

        await new Promise(resolve => setTimeout(resolve, 2000));
    })
});