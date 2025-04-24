/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import login_page from "../pages/login_page";
import register_page from "../pages/register_page";
import generateUserData from "../data/user_data";

before(() => {
    console.log("MAILSLURP_API_KEY:", Cypress.env("MAILSLURP_API_KEY"));
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
});

Given ('I am on the login page', function () {
    login_page.validateLoginPage();
})

When ('I go to register page', function () {
    login_page.gotoRegisterPage();
    register_page.validateRegisterPage();
})

When('I fill all fields', function () {
    const user_data = generateUserData();
    register_page.startRegistering(user_data.firstName, user_data.lastName, user_data.email , user_data.email, user_data.password, true);
})


When('I click Cadastrar', function () {
    register_page.FinishRegistering();
})

Then('I should see the message {string}', function (message) {
    register_page.verifyMessage(message);
})

When('I fill all fields leaving divergent emails', function () {
    const user_data = generateUserData();
    register_page.startRegistering(user_data.firstName, user_data.lastName, user_data.email , `1${user_data.email}`,user_data.password, true);
})

When('I fill all fields except for 18 older checkbox', function () {
    const user_data = generateUserData();
    register_page.startRegistering(user_data.firstName, user_data.lastName, user_data.email , user_data.email, user_data.password, false);
})

