Feature: Store Navigation
 In order to navigate the store near me
 I will visit the page @https://stores.shoecarnival.com/

Scenario Outline: User can search nearby store by state
   Given I am on find store page
   When I entered the "<state>" in Enter city, state, or zip box
   Then all stores within the state will appear

  Examples:
      |state                      | 
      |Altamonte Springs, FL, US  | 
      |Cincinnati, OH, US         |
