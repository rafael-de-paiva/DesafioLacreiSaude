Feature: Register User
    As a person who wants to use the platform  
    I want to register by providing my personal information  
    So that I can access the services offered by Lacrei Saúde

    Scenario: Register User Successfully
        Given I am on the login page
        And I go to register page
        When I fill all fields
        And I click Cadastrar
        Then I should see the message "Estamos quase lá..."

    Scenario: Register with divergent emails
        Given I am on the login page
        And I go to register page
        When I fill all fields leaving divergent emails
        And I click Cadastrar
        Then I should see the message "Os e-mails não correspondem, digite novamente."

    Scenario: Register with divergent emails
        Given I am on the login page
        And I go to register page
        When I fill all fields except for 18 older checkbox
        And I click Cadastrar
        Then I should see the message "Você deve ter 18 anos ou mais."
    
    