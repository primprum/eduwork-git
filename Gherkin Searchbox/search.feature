Feature: Searchbox Functionality

Scenario: Perform a Basic Keyword Search
    Given the user is on the homepage
    When the user enters "online" into the search box
    And the user presses Enter
    Then the user should see search results that include the keyword "online"
