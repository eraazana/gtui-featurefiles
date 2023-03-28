"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { onApplication } from "@gtui/gt-ui-framework";
import { CheckScenario } from "../../scenarios/CheckScenario";
import { NewClaimScenario } from "../../scenarios/NewClaimScenario";
import { SearchScenario } from "../../scenarios/SearchScenario";
import { RecoveryScenario } from "../../scenarios/RecoveryScenario";
import { t } from "testcafe";

let searchScenario = new SearchScenario();
let newClaim = new NewClaimScenario();
let checkScenario = new CheckScenario();
let onCCApp = new onApplication("CC");

let recoveryScenario = new RecoveryScenario();

//This is login only - does not check if claim exists
Given(/^a claim exists$/, async function() {
    await onCCApp.navigateToApp();
    await onCCApp.loginWithUser("P91OGS8", "gw");
});

Then(/^the claim should exist$/, async function() {
    await searchScenario.validateClaim();
});

When(/^I search for a claim$/, async function() {
    await searchScenario.searchViaClaim();
});

//check
Given(/^an existing claim with a check$/, async function() {
    await searchScenario.checkTab();
});

When(/^I search for the check$/, async function() {
    await searchScenario.checkSearch();
});

Then(/^the check should be available$/, async function() {
    let count = await searchScenario.getCheckRowCount();
    await t.expect(count).gt(0);
});

When(/^I search for a policy number$/, async function() {
    await newClaim.createNewClaim();
    await newClaim.findAPolicy();
});

Then(/^the policy should be available$/, async function() {
    let policyRowCount = await searchScenario.getPolicyRowCount();
    await t.expect(policyRowCount).gt(0);
});

//recovery

When(/^I search for a contact$/, async function() {
    await searchScenario.searchContact();
});

Then(/^the contact should be available$/, async function() {
    await searchScenario.validateContact();
});

When (/^I create a check$/, async function() {
    await checkScenario.createCheck();
});

When (/^I create a reserve$/, async function() {
    await recoveryScenario.createReserve();
});

When (/^I search for the recovery$/, async function() {
    await searchScenario.recoverySearch();
});

Then(/^the recovery should be available$/, async function() {
    await searchScenario.validateRecovery();
});