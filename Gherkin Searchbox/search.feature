Feature: Searchbox Functionality

Scenario: Perform a Basic Keyword Search
    Given User is on the homepage
    When User enters "online" into the search box
    And User presses Enter
    Then User should see search results that include the keyword "online"
