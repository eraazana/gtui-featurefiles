@TestComponent=GPD
@DesignatedFunction
Feature: Capturing First Notice of Loss

#@PRECOND_GPD-8629
Background:
    Given I am a user with the Producer role
    And a Personal account

@TEST_GPD-8608 @fnol @personal_auto
Scenario: CC - Personal Auto LOB FNOL
    Given a "Personal Auto" policy
    And I login as an adjuster on Claimcenter
    When I create a "Personal Auto" claim
    Then the claim should be available
    
@TEST_GPD-8609 @fnol @commercial_auto
Scenario: CC - Commercial Auto LOB FNOL
    Given a "Commercial Auto" policy
    And I login as an adjuster on Claimcenter
    When I create a "Commercial Auto" claim
    Then the claim should be available

@TEST_GPD-8610 @fnol @homeowners
Scenario: CC - Homeowners LOB FNOL
    Given a "Homeowners" policy
    And I login as an adjuster on Claimcenter
    When I create a "Homeowners" claim
    Then the claim should be available

@TEST_GPD-8611 @fnol @enterprise
Scenario: CC - Enterprise LOB FNOL
    Given a "Enterprise" policy
    And I login as an adjuster on Claimcenter
    When I create a "Enterprise" claim
    Then the claim should be available

@TEST_GPD-8612 @fnol @farm
Scenario: CC - Farm LOB FNOL
    Given a "Farm" policy
    And I login as an adjuster on Claimcenter
    When I create a "Farm" claim
    Then the claim should be available
    
@TEST_GPD-8613 @fnol @hobby_farm
Scenario: CC - Hobby Farm LOB FNOL
    Given a "Hobby Farm" policy
    And I login as an adjuster on Claimcenter
    When I create a "Hobby Farm" claim
    Then the claim should be available

@TEST_GPD-8614 @fnol @specific_worksite
Scenario: CC - Specific Worksite LOB FNOL
    Given a "Specific Worksite" policy
    And I login as an adjuster on Claimcenter
    When I create a "Specific Worksite" claim
    Then the claim should be available

@TEST_GPD-8615 @fnol @pleasure_boat
Scenario: CC - Pleasure Boat LOB FNOL
    Given a "Pleasure Boat" policy
    And I login as an adjuster on Claimcenter
    When I create a "Pleasure Boat" claim
    Then the claim should be available

@TEST_GPD-8616 @fnol @wrap_up
Scenario: CC - Wrap-up LOB FNOL
    Given a "Wrap-up" policy
    And I login as an adjuster on Claimcenter
    When I create a "Wrap-up" claim
    Then the claim should be available

@TEST_GPD-8617 @fnol @bond
Scenario: CC - Bond LOB FNOL
    Given a "Bond" policy
    And I login as an adjuster on Claimcenter
    When I create a "Bond" claim
    Then the claim should be available

@TEST_GPD-8618 @fnol @garage
Scenario: CC - Garage LOB FNOL
    Given a "Garage" policy
    And I login as an adjuster on Claimcenter
    When I create a "Garage" claim
    Then the claim should be available