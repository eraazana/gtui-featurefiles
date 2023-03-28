'use strict';
const {When, Then} = require('@cucumber/cucumber');
import { SubmissionScenario } from '../../scenarios/SubmissionScenario.js'; 
import { RenewalScenario } from "../../scenarios/RenewalScenario.js";
import world from "../../utils/world.js";

const  submissionScenario = new SubmissionScenario();
const  renewalScenario = new RenewalScenario();

When(/^I renew this policy$/, async function(t, stepArguments) {
    await submissionScenario.goToPolicyIssued();
    await renewalScenario.startRenewPolicy();
}); 

Then(/^the renewed policy should be \"(.*)\"$/, async function(t, stepArguments) {
    let status = stepArguments[0];
    let submissionStatus;
    switch(status){
      case "Bound":
        submissionStatus = await renewalScenario.getRenewalStatus();
        if(world.leadTime < 45 && world.leadTime > 0){
            await t.expect(submissionStatus).eql("Renewal (Bound)");
        }else{
            await t.expect(submissionStatus).eql("Renewal (Planned)");
        }
        break;
    }
  });