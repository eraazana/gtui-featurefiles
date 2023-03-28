"use strict";
import { t } from "testcafe";
import { Summary as Summary_policy } from "../../../pages/policy/Summary";
import { AccountScenario } from "../../scenarios/AccountScenario";
import { SearchScenario } from "../../scenarios/SearchScenario";
import world from "../../utils/world";

const { Given, When, Then } = require("@cucumber/cucumber");
const accountScenario = new AccountScenario();
const searchScenario = new SearchScenario();
const summary_policy = new Summary_policy();

Given(/^a Personal account$/, async function () {
  await accountScenario.createPersonalAccount();
});

When(/^an existing account$/, async function () {
  await searchScenario.searchAccount(world.accountNumber);
});

When(/^I need to quickly understand an account I haven’t reviewed$/, async function () {
  await accountScenario.openAccount();
});

Then(/^I can find an overview of the account$/, async function() {
  const accountNumber = await accountScenario.getAccountNumber();
  await t.expect(accountNumber).notEql(null);
});

Then(/^the \"(.*)\" was found$/, async function (t, stepArguments) {
  let func = stepArguments[0];
  switch(func){
    case "account":
      await t.expect(world.accountNumber).eql(await accountScenario.getAccountNumber());
      break;
    case "policy":
      await t.expect(world.policyNumber).eql(await summary_policy.policyDetailsDetailViewTile_DVPolicyNumber.getValue());
      break;
    case "contact":
      let response = await searchScenario.contactResultCount();
      await t.expect(response).gt(0);
      break;
  }
});

