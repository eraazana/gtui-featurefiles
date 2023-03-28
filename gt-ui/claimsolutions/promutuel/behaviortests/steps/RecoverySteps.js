"use strict";
const { Given, When, Then} = require("@cucumber/cucumber");
import { RecoveryScenario } from "../../scenarios/RecoveryScenario";

let recoveryScenario = new RecoveryScenario();

When(/^I create a reserve and recovery reserve$/, async function() {
    await recoveryScenario.createReserve();
    await recoveryScenario.createRecoveryReserve();
});

When(/^I create a recovery$/, async function() {
    await recoveryScenario.createRecovery();
});