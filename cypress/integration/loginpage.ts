export class LogInPage {
    login(username: string = 'user1', password: string = 'pa55word'): void {
        cy.visit('http://localhost:3000/')
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(password)
        cy.get('button[id=login_button]').click()
    }
    loadNewsFailed(username: string = 'user1', password: string = 'pa55word'): void {
        cy.visit('http://localhost:3000/')
        cy.intercept('GET','https://api.thecatapi.com/v1/images/search?limit=24&size=thumb&api_key=56498775-ea47-419a-b808-891cf4dd579f',{ forceNetworkError: true }).as('getNetworkFailure')
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(password)
        cy.get('button[id=login_button]').click()
        cy.wait('@getNetworkFailure')
    }

}
