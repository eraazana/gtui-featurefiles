'use strict';
const { Given, When, Then } = require('@cucumber/cucumber');
import world from "../../utils/world.js";
import { ContactScenario } from "../../scenarios/ContactScenario"

let contactScenario = new ContactScenario();

Given(/^a \"(.*)\" Contact$/, async function (t, stepArguments) {
    world.contactType = stepArguments[0];
    await contactScenario.createNewContact();
});

