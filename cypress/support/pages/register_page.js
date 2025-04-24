/// <reference types="cypress" />

export default {
    field: {
        firstName: 'input[id="first_name"]',
        lastName: 'input[id="last_name"]',
        email: 'input[id="email"]',
        confirmEmail: 'input[id="email2"]',
        password: 'input[id="password1"]',
        confirmPassword: 'input[id="password2"]'
    },

    checkbox: {
        terms: 'input[name="accepted_privacy_document"]',
        older: 'input[name="is_18_years_old_or_more"]'
    },

    btn: {
        register: 'div[class="sc-12af5372-0 cEjzSb"]'
    },

    validateRegisterPage() {
        cy.get(this.field.firstName).should('be.visible')
    },

    startRegistering(firstName, lastName, email1, email2, password, checkboxOlder) {

        cy.get(this.field.firstName).type(firstName);
        cy.get(this.field.lastName).type(lastName);
        cy.get(this.field.email).type(email1);
        cy.get(this.field.confirmEmail).type(email2);
        cy.get(this.field.password).type(password);
        cy.get(this.field.confirmPassword).type(password);
        cy.get(this.checkbox.terms).check({ force: true });
        if (checkboxOlder) {
            cy.get(this.checkbox.older).check({ force: true });
        }
    },

    FinishRegistering() {
        cy.get(this.btn.register).click();
    },

    verifyMessage(message) {
        cy.contains(message).should('be.visible')
    }
}