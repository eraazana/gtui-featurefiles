'use strict';
const {Given, Then, BeforeAll} = require('@cucumber/cucumber');
import world from "../../utils/world";
import { ActivityScenario } from "../../scenarios/ActivityScenario";
import { SearchScenario } from "../../scenarios/SearchScenario";

const searchScenario = new SearchScenario();
const activityScenario = new ActivityScenario();

Given(/^I add an activity to the \"(.*)\"$/, async function(t, stepArguments) {
    let func = stepArguments[0];
    switch(func){
        case "account":
            await searchScenario.searchAccount(world.accountNumber);
            await activityScenario.addActivityInAccount();
            break;
        case "policy":
            await searchScenario.searchPolicy(world.policyNumber);
            await activityScenario.addActivityInPolicy();
            break;
    }
});

Then(/^the activity is added to the \"(.*)\" successfully$/, async function(t, stepArguments) {
    let category = stepArguments[0];
    let activityDate = await activityScenario.getActivity(category);
    await t.expect(world.actTargetDate).eql(activityDate);
});