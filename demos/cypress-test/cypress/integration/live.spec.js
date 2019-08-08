require('cypress-xpath')

const $searchInput = '//div[contains(@class, "search-input")]//input'
const $searchButton = '//div[contains(@class, "search-input")]//div[contains(@class, "pl-input-append")]';


describe('live pc', () => {
    it('should enter user page by search', () => {
        cy.visit('https://live.kuaishou.com');

        cy.wait(1000);

        cy.xpath($searchInput)
            .focus()
            .type('嗨氏')

        cy.xpath($searchButton)
            .click()

        cy.url().should('include', 'search');

        // xpath 不支持多个 tab
        // cy.xpath('(//a[contains(text(), "嗨氏")])[1]').click();
    });
})