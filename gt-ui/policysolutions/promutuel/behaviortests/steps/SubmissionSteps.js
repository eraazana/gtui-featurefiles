"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { t } from "testcafe";
import PCWorld from "../../../../policysolutions/promutuel/utils/world";
import { PCUtil } from "../../utils/PCUtil"

let submissionScenario;

Given(/^a Quoted \"(.*)\" Submission$/, async function(t,stepArguments) {
  PCWorld.lob = stepArguments[0];
  submissionScenario = PCUtil.selectPolicyLine(PCWorld.lob);
  await submissionScenario.createSubmission();
  if(PCWorld.lob != "Pleasure Boat"){
    await submissionScenario.goToRiskAnalysisScreen();
    // await submissionScenario.fillUpRiskAnalysisScreen();
    await submissionScenario.goToPolicyReviewScreen();
    await submissionScenario.quoteSubmission();
    await submissionScenario.goToRiskAnalysisScreen();
    await submissionScenario.approveUWIssues();
    if(PCWorld.lob == "Bond"){
      await submissionScenario.goToDocumentScreen();
      await submissionScenario.fillUpDocumentScreen();
      await submissionScenario.goToQuoteScreen();
      await submissionScenario.selectDocumentProposalSigned();
    }
  }else{
    await submissionScenario.goToPolicyReviewScreen();
    await submissionScenario.quoteSubmission();
  }
});

Given(/^a \"(.*)\" Submission$/, async function(t,stepArguments) {
  PCWorld.lob = stepArguments[0];
  submissionScenario = PCUtil.selectPolicyLine(PCWorld.lob);
  await submissionScenario.createSubmission();
  if(PCWorld.lob != "Pleasure Boat"){
    await submissionScenario.goToRiskAnalysisScreen();
    // await submissionScenario.fillUpRiskAnalysisScreen();
  }
  await submissionScenario.goToPolicyReviewScreen();
});

When(/^I \"(.*)\" this submission$/, async function(t ,stepArguments) {
  let func = stepArguments[0];
  switch(func){
    case "issue":
      await submissionScenario.issueSubmission();
      break;
    case "quote":
      await submissionScenario.quoteSubmission();
      break;
  }
});

Then(/^the submission should be \"(.*)\"$/, async function(t, stepArguments) {
  let status = stepArguments[0];
  let submissionStatus = await submissionScenario.getSubmissionStatus();
  await t.expect(submissionStatus).contains(status);
});
