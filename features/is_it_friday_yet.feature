Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario Outline: Today is or is not Friday
    Given today is "<day>"
    And the date is <date>
    When I ask whether it's Friday yet
    And I ask whether it's the thirteenth
    Then I should be told "<answer>"
    And I should also be told "<dateAnswer>"


  Examples:
    | day             | answer | date | dateAnswer                   |
    | Friday          | TGIF   | 13   | Yes, it is the thirteenth    |
    | Sunday          | Nope   | 2    | No, it is not the thirteenth |
    | anything else!  | Nope   | 3    | No, it is not the thirteenth |
