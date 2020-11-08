// import pages
import BasePage from "../components/BasePage"
import Navbar from "../components/Navbar"

// add constants for all elements on page
const URL = 'http://zero.webappsecurity.com/login.html'
const INPUT_USERNAME = '#user_login'
const INPUT_PASSWORD = '#user_password'
const BUTTON_SUBMIT = 'input[name="submit"]'
const ERROR_MESSAGE = '.alert-error'

export default class LoginPage extends BasePage {
    
    static login(username, password) {
        Navbar.clickSignIn()
        cy.login(username, password)
    }
    
    static visitLoginPage() {
        cy.visit(URL)
    }

    static fillUsername(name) {
        cy.get(INPUT_USERNAME).type(name)
    }

    static fillPassword(password) {
        cy.get(INPUT_PASSWORD).type(password)
    }

    static submitForm() {
        cy.get(BUTTON_SUBMIT).click()
    }

    static verifyAlertError(errorText) {
        cy.get(ERROR_MESSAGE).should('be.visible').and('contain', errorText)
    }

}