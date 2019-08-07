const $searchInput = '//div[contains(@class, "search-input")]//input'
const $searchButton = '//div[contains(@class, "search-input")]//div[contains(@class, "pl-input-append")]';

module.exports = {
  'Search in live.kuaishou.com': function (browser) {
    browser
      .url('https://live.kuaishou.com')
      .useXpath()
      .waitForElementVisible('//video')
      .setValue($searchInput, '嗨氏')
      .click('xpath', $searchButton)

    browser.expect.url().contain(`/search/?keyword=${encodeURIComponent('嗨氏')}`)
    browser.click('partial link text', '嗨氏')
      .windowHandles((result) => {
        return browser.switchWindow(result.value[1])
      })
    browser.expect.url().contain('haishi_1229')
    browser
      .pause(1000)
    browser.end();
  }
};