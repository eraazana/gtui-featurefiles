@TestComponent=GPD 
@DesignatedFunction 
Feature: Quote Submission

#@PRECOND_GPD-8533
Background: 
    Given I am a user with the Producer role
    And a Personal account

@quote_submission @TEST_GPD-8583
Scenario: PC - Quote a Commercial Auto submission
    Given a "Commercial Auto" Submission
    When I "quote" this submission
    Then the submission should be "Quoted"
    
@quote_submission @TEST_GPD-8595
Scenario: PC - Quote a Bond submission
    Given a "Bond" Submission
    When I "quote" this submission
    Then the submission should be "Quoted"

@quote_submission @TEST_GPD-8586
Scenario: PC - Quote a Enterprise submission
    Given a "Enterprise" Submission
    When I "quote" this submission
    Then the submission should be "Quoted"

@quote_submission @TEST_GPD-8587
Scenario: PC - Quote a Farm submission
    Given a "Farm" Submission
    When I "quote" this submission
    Then the submission should be "Quoted"

@quote_submission @TEST_GPD-8596
Scenario: PC - Quote a Garage submission
    Given a "Garage" Submission
    When I "quote" this submission
    Then the submission should be "Quoted"

@quote_submission @TEST_GPD-8589
Scenario: PC - Quote a Hobby Farm submission
    Given a "Hobby Farm" Submission
    When I "quote" this submission
    Then the submission should be "Quoted"

@quote_submission @TEST_GPD-8580
Scenario: PC - Quote a Homeowners submission
    Given a "Homeowners" Submission
    When I "quote" this submission
    Then the submission should be "Quoted"

@quote_submission @TEST_GPD-8269
Scenario: PC - Quote a Personal Auto submission
    Given a "Personal Auto" Submission
    When I "quote" this submission
    Then the submission should be "Quoted"

@quote_submission @TEST_GPD-8591
Scenario: PC - Quote a Pleasure Boat submission
    Given a "Pleasure Boat" Submission
    When I "quote" this submission
    Then the submission should be "Quoted"

@quote_submission @TEST_GPD-8590
Scenario: PC - Quote a Specific Worksite submission
    Given a "Specific Worksite" Submission
    When I "quote" this submission
    Then the submission should be "Quoted"

@quote_submission @TEST_GPD-8593
Scenario: PC - Quote a Wrap-up submission
    Given a "Wrap-up" Submission
    When I "quote" this submission
    Then the submission should be "Quoted"