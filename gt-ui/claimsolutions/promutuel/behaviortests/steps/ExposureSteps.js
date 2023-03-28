"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
const { ExposureScenario } = require("../../scenarios/ExposureScenario");

let exposureScenario = new ExposureScenario();

When(/^I create an exposure for the claim$/, async function() {
    await exposureScenario.createExposure();
});