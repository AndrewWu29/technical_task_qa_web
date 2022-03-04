import { LogInPage } from "./loginpage"

const logInPage = new LogInPage()


// As a user I want to see my news
describe('News test suite', () => {
    /* beforeEach(function () {
        logInPage.login()
    }) */
    // Scenario 1 - News cards are loaded
    it('News cards are loaded', ()=> {
        // Given - there is internet connection
        // When - the user successfully signs in to the app
        /** Then - news cards are displayed in rows
         * and each card contains 
         * an image, text and a view button 
         * (cards can have one or more images 
         * scrollable horizontally)
         */
        logInPage.login()
        cy.get('div[class=react-swipeable-view-container]', {timeout:6000}).its('length').then(newsCardsCount =>{
            let newsCardsArray = []
            newsCardsArray[newsCardsCount- 1] = newsCardsCount
            let countNum = 0
            cy.wrap(newsCardsArray).each((index) =>{
                            cy.get('#article_image_' + countNum)
                    .should('have.attr', 'src')
                    .and('exist')
                cy.get('#article_link_' + countNum)
                    .should('include.text', 'View')
                    .should('have.attr', 'href')
                    .and('exist')
                countNum += 1
                let newsCardsHeadings = ':nth-child(' + countNum  + ') > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-h5'
                let newsCardsBodies = ':nth-child(' + countNum + ') > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-body1'
                cy.get(newsCardsHeadings).invoke('text').should('match', /^[a-zA-Z]*/).and('exist')
                cy.get(newsCardsBodies).should('include.text', 'This is a media card.').and('exist')
            })
        })
    })
    // Scenario 2 - Failed to load news
    it('Failed to load news', ()=> {
        // Given - there is no internet connection
        // When - the user successfully signs in to the app
        /** Then - “failed to load news” error message 
         * and a Retry button are displayed
         */
        logInPage.loadNewsFailed()
        cy.get('#news_failed > .MuiTypography-gutterBottom')
            .should('contain', 'Failed to load news')
            .and('be.visible')
        cy.get('.css-12wjmzy-MuiTypography-root')
            .should('contain', 'Failed to fetch')
            .and('be.visible')
    })
    // Scenario 3 - News view button is clicked
    it('News view button is clicked', ()=> {
        logInPage.login()
        // Given - the news cards are successfully loaded on the screen
        cy.get('div[class=react-swipeable-view-container]', {timeout:6000})
            .its('length')
            .should('eq', 24)
        cy.url().should('include', 'news')
        // When - the user clicks on the view button of the card
        // Then - user is navigated to the image of the card
        cy.get('#article_link_0').invoke('attr', 'href').then(href =>{
            cy.get('#article_link_0').click()
            cy.url().should('include', href)
        })
    })
})