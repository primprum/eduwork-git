Feature: Login to Application

    As a valid user
    I can to log in into homepage
    As an invalid user
    I can't log in into homepage

Scenario: Valid title
    Given   I open login page
    When    I check the title
    Then    The title should display correct title    

Scenario: Valid login 
    Given   I open login page
    When    I submit login
    Then    I should see homepage

Scenario: Invalid login
    Given   I open login page
    When    I fill username with "invalid_username"
    And     I fill password with "invalid_password"
    And     I click on submit login
    Then    I would see error message