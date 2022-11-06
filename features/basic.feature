#Feature: Filter

#  Scenario: Filter Product By Size 12
#    Given I am on Product Page and click on size 12
#    When I click on Product 1
#    Then It should have size 12

#  Scenario: Filter Product By Size 11
#    Given I am on Product Page and click on size 11
#    When I click on Product 2
#    Then It should have size 11

Feature: Brand Filter

  Scenario Outline: Filter Product By Brand
    Given I am on page 
    When I click on "<brand>"
    Then It should have "<brand>" in the text

  Examples:
      | brand    | 
      | Carhartt | 
      | AdTec    |







  

