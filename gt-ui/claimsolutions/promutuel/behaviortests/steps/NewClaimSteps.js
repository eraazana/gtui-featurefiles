"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { t } from "testcafe";
import world from "../../../promutuel/utils/world.js";
import { CCUtil } from "../../utils/CCUtil";
import { NewClaimScenario } from "../../scenarios/NewClaimScenario.js";
import { ExposureScenario } from "../../scenarios/ExposureScenario";
import { onApp } from "../../../../pageregistry/onApp.js";
import { RecoveryScenario } from "../../scenarios/RecoveryScenario.js";
import { CheckScenario } from "../../scenarios/CheckScenario.js";

var newClaim = new NewClaimScenario();
let exposureScenario = new ExposureScenario();
let onCCApp = new onApp("CC");
let onPCApp = new onApp("PC");
let recoveryScenario = new RecoveryScenario();
let checkScenario = new CheckScenario();

Given(/^I am a user with the adjuster role$/, async function() {
    await onCCApp.loginWithUser("P91OGS8", "gw");
});

When(/^I login as an adjuster on Claimcenter$/, async function() {
    await onCCApp.loginWithUser("P91OGS8", "gw");
    
});

Given(/^I am a user with the Com-Expert role$/, async function() {
    await onCCApp.loginWithUser("P91OGS8", "gw");
});

Given (/^a claim with exposure, reserve and check$/, async function() {
    newClaim = CCUtil.selectPolicyLine(world.lineOfBusiness);
    await newClaim.createNewFullClaim();
    await newClaim.saveAndAssign();
    await newClaim.viewClaim();
    await exposureScenario.createExposure();
    await recoveryScenario.createReserve();
    await checkScenario.createCheck();
});

When(/^I create a \"(.*)\" claim$/, async function(t, stepArguments) {
    world.lineOfBusiness = stepArguments[0];
    newClaim = CCUtil.selectPolicyLine(world.lineOfBusiness);
    await newClaim.createNewFullClaim();
    await newClaim.saveAndAssign();
    await newClaim.viewClaim();
    // await newClaim.getClaimNumber(); 
});

When(/^I create a claim$/, async function(t, stepArguments) {
    newClaim = CCUtil.selectPolicyLine(world.lineOfBusiness);
    await newClaim.createNewFullClaim();
    await newClaim.saveAndAssign();
    await newClaim.viewClaim();
});

Then(/^the claim should be available$/, async function() {
    let claimNumber = await newClaim.getClaimNumberInClaimSummary();
    await t.expect(claimNumber).notEql(null);
});

Then(/^the claim summary should be displayed$/, async function() {
    let claimNumber = await newClaim.getClaimNumberInClaimSummary();
    await t.expect(claimNumber).notEql(null);
});

