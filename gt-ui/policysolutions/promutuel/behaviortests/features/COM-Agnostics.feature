@TestComponent=GPD 
@DesignatedFunction @common @common_PC
Feature: PC Common scenarios


#@PRECOND_GPD-8533
Background: 
    Given I am a user with the Producer role
    And a Personal account

    # Search account
    @TEST_GPD-8575 @search_account
    Scenario: Creating and searching an account
        When I search for that "account"
        Then the "account" was found

    # Search policy
    @TEST_GPD-8574 @search_policy_pc
    Scenario: Searching for a Policy
        Given a "Personal Auto" policy
        When I search for that "policy"
        Then the "policy" was found

    # Search contact
    @TEST_GPD-8576 @search_contact
    Scenario: Creating and searchng contact
        Given a "Person" Contact 
        When I search for that "contact"
        Then the "contact" was found

    # View account summary
    @TEST_GPD-7883 @view_account_summary
    Scenario: Viewing an account summary overview
        When I need to quickly understand an account I haven’t reviewed
        Then I can find an overview of the account

    # Add activity
    @TEST_GPD-8572 @add_activity 
    Scenario: Adding a activity in a account
        When I add an activity to the "account"
        Then the activity is added to the "account" successfully

    @TEST_GPD-8573 @add_activity 
    Scenario: Adding a activity in a policy
        Given a "Personal Auto" policy
        When I add an activity to the "policy"
        Then the activity is added to the "policy" successfully

    # Add note
    @TEST_GPD-8570  @add_note 
    Scenario: Adding a note in a account
        When I add an note to the "account"
        Then the note is added to the "account" successfully

    @TEST_GPD-8571 @add_note_pc
    Scenario: Adding a note in a policy
        Given a "Personal Auto" policy
        When I add an note to the "policy"
        Then the note is added to the "policy" successfully