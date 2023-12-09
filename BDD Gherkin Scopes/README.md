# Considering The Scope of BDD in Gherkin Language

## [Previous Conversation at ChatGPT]

### Me:

So, the thing is, I want to test the website which calculates the Body Mass Index (BMI), but the output is very much depend on the Sex being chosen, Male or Female.

it's pretty much like this:

```gherkin
Feature: BMR Calculation with Activity Factor on Male or Female
  As a user
  The result of my BMR with activity factors should be based on my sex

Scenario: Calculate BMR with Activity Factors for Male
    Given user is on the FitByBeat BMI calculation page
    When user enters valid values for weight, height, age, and selects an activity factor
    And user selects sex as a Male
    And user clicks the calculate button
    Then user should see the calculated BMI, BMR, and BMR with Activity Factor value
    Then system stores BMR as "MaleBMR"

Scenario: Calculate BMR with Activity Factors for Female
    Given user is on the FitByBeat BMI calculation page
    When user enters valid values for weight, height, age, and selects an activity factor
    And user selects sex as a Female
    And user clicks the calculate button
    Then user should see the calculated BMI, BMR, and BMR with Activity Factor value
    And system stores BMR as "FemaleBMR"

Scenario: Compare BMR Results between Male and Female
    Then MaleBMR should not equal FemaleBMR
```

So, is that the scope that I should do with BDD Gherkin? or, should I only care about whether the input give the output, the button works, etc?

### AI:

The scenarios you've written are well-suited for BDD with Gherkin. BDD is about describing the behavior of a system from a user's perspective, and your scenarios capture that by specifying the expected behavior for calculating BMR with activity factors for both male and female users.

In BDD, it's common to focus on the high-level behavior of the system rather than the internal implementation details. The scenarios you've written are clear and focused on the expected outcomes based on user actions. They cover the key aspects of the BMI calculation process, including user input, the selection of activity factors, and the verification of the calculated BMI, BMR, and BMR with Activity Factor values.

The last scenario, "Compare BMR Results between Male and Female," is a good example of using BDD to ensure that the system behaves correctly. It checks whether the calculated BMR values for males and females are different, as expected.

BDD can be used not only for validating that the inputs give the correct outputs but also for ensuring that the overall system behavior aligns with the intended functionality. Your scenarios cover both input-output validation and the overall behavior of the system.

In summary, your use of BDD Gherkin for testing the BMI calculation with activity factors, considering differences between male and female results, is appropriate and aligns well with the principles of Behavior-Driven Development.

## [Reference]

- https://chat.openai.com/share/660dde45-7f60-4660-8c86-23e38255ad5e
