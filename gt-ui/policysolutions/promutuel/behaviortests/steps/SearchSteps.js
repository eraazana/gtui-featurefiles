'use strict';
const {Given, When, Then} = require('@cucumber/cucumber');
import { SearchScenario } from "../../scenarios/SearchScenario";
import { t } from "testcafe";
import world from "../../utils/world";


let searchScenario = new SearchScenario();

Given(/^I search for that \"(.*)\"$/, async function(t, stepArguments) {
  let func = stepArguments[0];
  switch(func){
      case "account":
        await searchScenario.searchAccount(world.accountNumber);
        break;
      case "policy":
        await searchScenario.searchPolicy(world.policyNumber);
        break;
      case "contact":
        await searchScenario.searchContact(world.contactType);
        break;
  }
  
});



