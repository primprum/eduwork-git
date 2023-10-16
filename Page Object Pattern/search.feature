Feature: Searchbox Functionality

Scenario Outline: Perform a Basic Keyword Search
    Given User is on the homepage
    When User enters "<keyword>" into the search box
    And User presses Enter
    Then User should see search results that include the keyword "<keyword>"
    Examples:
    | keyword |
    | online |
    | bank |
