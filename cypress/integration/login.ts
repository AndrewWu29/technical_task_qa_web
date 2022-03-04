import { LogInPage } from "./loginpage"

const logInPage = new LogInPage()


// As a user I want to log in to the web site
describe('Login test suite', () => {
    // beforeEach(function () {
        // cy.visit('http://localhost:3000')
    // })
    // Scenario 1 - User opens the web site for first time (when not logged in yet)
    it('User opens the web site for first time (when not logged in yet)', ()=> {
        // Given - the user opens web site for the first time (when not logged in yet)
        // Then - login screen with user name and password entries and login button is displayed
        cy.visit('http://localhost:3000')
        cy.get('input[name=username]')
            .should('have.value', '')
            .and('be.visible')
        cy.get('input[name=password]')
            .should('have.value', '')
            .and('be.visible')
        cy.get('button[id=login_button]')
            .should('have.text', 'Sign In')
            .and('be.visible')
    })
    // Scenario 2 - User login failed
    it('User login failed', ()=> {
        // Given - the user provided wrong user name and/or password
        cy.visit('http://localhost:3000')
        cy.get('input[name=username]')
            .should('be.visible').type('wrongusername')
        cy.get('input[name=password]')
            .should('be.visible').type('wrongpassword')
        // When - sign in button is clicked
        cy.get('button[id=login_button]')
            .should('have.text', 'Sign In')
            .click()
        // Then - error markers are displayed by user name and/or password entries
        cy.get('p[id=username-helper-text]')
            .should('have.text', 'Wrong username')
            .and('be.visible')
        cy.get('p[id=password-helper-text]')
            .should('have.text', 'Password incorrect')
            .and('be.visible')
        cy.get('legend[class=css-1z7n62]')
            .should('have.length', 2)
        cy.get('legend > span')
            .first()
            .should('have.text', 'Username')
        cy.get('legend > span')
            .eq(1)
            .should('have.text', 'Password')
    })
    // Scenario 3 - User login succeed (credentials provided below)
    it('User login succeed', ()=> {
        // Given - the user provided right user name and password
        cy.visit('http://localhost:3000')
        cy.get('input[name=username]').type('user1')
        cy.get('input[name=password]').type('pa55word')
        // When - sign in button is clicked
        cy.get('button[id=login_button]').click()
        // Then - user is taken to the news page
        cy.url().should('include', 'news')
        cy.get('.MuiToolbar-root > .MuiTypography-root')
            .should('contain', 'News')
        cy.get('.MuiTypography-h2')
            .should('contain', 'Todays top news')
        cy.get('.MuiContainer-root > .MuiTypography-h5')
            .and('contain', 'Some of the latest news articles for today')
    })
    // Scenario 4 - User opens web site next time (when previously logged in)
    it('User opens web site next time (when previously logged in)', ()=> {
        logInPage.login()
        // Given - the user opens web site next time (when previously logged in)
        // Then - user is taken straight to the news screen
        cy.url().should('include', 'news')
        cy.get('.css-16ybtzv > .MuiTypography-h6')
            .and('contain', 'You\'re all caught up!')
    })
})