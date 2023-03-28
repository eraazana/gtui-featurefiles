@TestComponent=GPD 
@DesignatedFunction
Feature: Issue Submission

#@PRECOND_GPD-8533
Background: 
    Given I am a user with the Producer role
    And a Personal account

@issue_submission @TEST_GPD-8599
Scenario: PC - Issue a Commercial Auto submission
    Given a Quoted "Commercial Auto" Submission
    When I "issue" this submission
    Then the submission should be "Bound"

@issue_submission @TEST_GPD-8581
Scenario: PC - Issue a Bond submission
    Given a Quoted "Bond" Submission
    When I "issue" this submission
    Then the submission should be "Bound"

@issue_submission @TEST_GPD-8582
Scenario: PC - Issue a Enterprise submission
    Given a Quoted "Enterprise" Submission
    When I "issue" this submission
    Then the submission should be "Bound"

@issue_submission @TEST_GPD-8584
Scenario: PC - Issue a Farm submission
    Given a Quoted "Farm" Submission
    When I "issue" this submission
    Then the submission should be "Bound"

@issue_submission @TEST_GPD-8585
Scenario: PC - Issue a Garage submission
    Given a Quoted "Garage" Submission
    When I "issue" this submission
    Then the submission should be "Bound"

@issue_submission @TEST_GPD-8588
Scenario: PC - Issue a Hobby Farm submission
    Given a Quoted "Hobby Farm" Submission
    When I "issue" this submission
    Then the submission should be "Bound"

@issue_submission @TEST_GPD-8592
Scenario: Issue a Homeowners submission
    Given a Quoted "Homeowners" Submission
    When I "issue" this submission
    Then the submission should be "Bound"

@issue_submission @TEST_GPD-8579
Scenario: PC - Issue a Personal Auto submission
    Given a Quoted "Personal Auto" Submission
    When I "issue" this submission
    Then the submission should be "Bound"

@issue_submission @TEST_GPD-8594
Scenario: PC - Issue a Pleasure Boat submission
    Given a Quoted "Pleasure Boat" Submission
    When I "issue" this submission
    Then the submission should be "Bound"

@issue_submission @TEST_GPD-8597
Scenario: PC - Issue a Specific Worksite submission
    Given a Quoted "Specific Worksite" Submission
    When I "issue" this submission
    Then the submission should be "Bound"

@issue_submission @TEST_GPD-8598
Scenario: PC - Issue a Wrap-up submission
    Given a Quoted "Wrap-up" Submission
    When I "issue" this submission
    Then the submission should be "Bound"