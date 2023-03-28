@TestComponent=GPD
@DesignatedFunction @common @common_CC
Feature: CC Common Scenarios

#@PRECOND_GPD-8621
Background:
    Given I am a user with the Producer role
    And a Personal account
    And a "Pleasure Boat" policy

@TEST_GPD-8607 @view_claim_summary
Scenario: CC - Viewing Claim Summary screen
    Given I login as an adjuster on Claimcenter
    And I create a claim
    Then the claim summary should be displayed 

@TEST_GPD-8601 @add_note
Scenario: CC - Adding a Note in an existing claim
    Given I login as an adjuster on Claimcenter
    And I create a claim    
    When I add a Note
    Then the Note will reflect on the Notes page

@TEST_GPD-8600 @add_activity
Scenario: CC - Adding a Activity in an existing claim
    Given I login as an adjuster on Claimcenter
    And I create a claim    
    When I add an activity
    Then the activity is available

@TEST_GPD-8602 @search_claim
Scenario: CC - Searching for a claim using Claim Number
    Given I login as an adjuster on Claimcenter
    And I create a claim    
    And I search for a claim
    Then the claim should exist

@TEST_GPD-8603 @search_check
Scenario: CC - Searching for a check
    Given I login as an adjuster on Claimcenter
    And a claim with exposure, reserve and check
    When I search for the check
    Then the check should be available
    
@TEST_GPD-8606  @search_policy
Scenario: CC - Searching for a Policy
    Given I login as an adjuster on Claimcenter
    And I search for a policy number
    Then the policy should be available

@TEST_GPD-8605  @search_contact
Scenario: CC - Searching for a contact
    Given I login as an adjuster on Claimcenter
    And I search for a contact
    Then the contact should be available

@TEST_GPD-8604  @search_recovery
Scenario: CC - Searching for a recovery
    Given I login as an adjuster on Claimcenter
    And I create a claim
    And I create an exposure for the claim
    And I create a reserve and recovery reserve
    And I create a recovery
    And I search for the recovery
    Then the recovery should be available