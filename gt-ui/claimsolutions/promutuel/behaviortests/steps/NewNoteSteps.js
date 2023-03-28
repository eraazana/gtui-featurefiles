"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { t } from "testcafe";
import { NewClaimScenario } from "../../scenarios/NewClaimScenario";
import { SearchScenario } from "../../scenarios/SearchScenario";

let searchScenario = new SearchScenario();
let newClaimScenario = new NewClaimScenario();

Given(/^an existing claim$/, async function() {
    await searchScenario.searchViaClaim();
});

When(/^I open the claim$/, async function() {
    await searchScenario.validateClaim();
});

When(/^I open a (.*) claim$/, async function(t, stepArguments) {
      const claimType = stepArguments [0];
      
      switch (claimType) {
        case 'Personal Auto':
            await searchScenario.searchViaClaim();
            return await searchScenario.validateClaim();
        case 'Homeowners':
            await searchScenario.searchViaClaim();
            return await searchScenario.validateClaim();
        default:
          throw 'Unhandled LOB';
      }
});

When(/^I add a Note$/, async function() {
    await searchScenario.newNote();
});
  
Then(/^the Note will reflect on the Notes page$/, async function() {
    await searchScenario.validateNote();
    await t.wait(3000);
});

//TODO: This is a duplicate of above
When(/^I add a Note$/, async function() {
    await newClaimScenario.newNote();
    await newClaimScenario.validateNote();
});

When(/^I Save and Assign the claim$/, async function() {
    await newClaimScenario.saveAndAssign();
});