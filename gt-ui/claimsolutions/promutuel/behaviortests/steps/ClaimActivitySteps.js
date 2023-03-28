"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { t } from "testcafe";
import { ClaimActivityScenario } from "../../scenarios/ClaimActivityScenario";


let claimActivityScenario = new ClaimActivityScenario();

When(/^I add an activity$/, async function() {
    await claimActivityScenario.addActivity();
});

Then(/^the activity is available$/, async function() {
   let activityExist = await claimActivityScenario.checkActivityExist();
   await t.expect(activityExist).ok();
});