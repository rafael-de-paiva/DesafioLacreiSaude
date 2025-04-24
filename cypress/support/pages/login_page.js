/// <reference types="cypress" />

export default {
    field: {
        login: 'input[id="email"]',
        password: 'input[id="password"]',
    },

    btn: {
        login: 'button[id="entrar"]',
        register: 'button[id="criar-conta"]'
    },

    validateLoginPage() {
        cy.clearAllCookies()
        cy.clearLocalStorage()
        cy.visit('/')
        cy.get('button[id="entrar"]').should('be.visible')
    },

    gotoRegisterPage() {
        cy.get('button[id="criar-conta"]').click()
    }
}