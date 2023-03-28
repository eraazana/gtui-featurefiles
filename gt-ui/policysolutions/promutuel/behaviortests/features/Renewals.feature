@TestComponent=GPD 
@DesignatedFunction 
Feature: Policy Renewal

#@PRECOND_GPD-8533
Background: 
    Given I am a user with the Producer role
    And a Personal account

@renewal @TEST_GPD_8657
Scenario: Renew a Personal Auto policy
    Given a "Personal Auto" policy with "47" days lead time
    When I renew this policy
    Then the renewed policy should be "Bound"

@renewal @TEST_GPD_8658
Scenario: Renew a Homeowners policy
    Given a "Homeowners" policy with "50" days lead time
    When I renew this policy
    Then the renewed policy should be "Bound"

@renewal @TEST_GPD_8659
Scenario: Renew a Commercial Auto policy
    Given a "Commercial Auto" policy with "47" days lead time
    When I renew this policy
    Then the renewed policy should be "Bound"

@renewal @TEST_GPD_8660
Scenario: Renew a Hobby Farm policy
    Given a "Hobby Farm" policy with "47" days lead time
    When I renew this policy
    Then the renewed policy should be "Bound"

@renewal @TEST_GPD_8665
Scenario: Renew a Garage policy
    Given a "Garage" policy with "47" days lead time
    When I renew this policy
    Then the renewed policy should be "Bound"
    
@renewal @TEST_GPD_8661
Scenario: Renew a Pleasure Boat policy
    Given a "Pleasure Boat" policy with "47" days lead time
    When I renew this policy
    Then the renewed policy should be "Bound"

@renewal @TEST_GPD_8664
Scenario: Renew a Bond policy
    Given a "Bond" policy with "47" days lead time
    When I renew this policy
    Then the renewed policy should be "Bound"

@renewal @TEST_GPD_8667
Scenario: Renew a Enterprise policy
    Given a "Enterprise" policy with "47" days lead time
    When I renew this policy
    Then the renewed policy should be "Bound"

@renewal @TEST_GPD_8666
Scenario: Renew a Farm policy
    Given a "Farm" policy with "47" days lead time
    When I renew this policy
    Then the renewed policy should be "Bound"