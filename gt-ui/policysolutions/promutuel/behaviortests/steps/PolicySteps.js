"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { t } from "testcafe";
import { onApp } from "../../../../pageregistry/onApp"
import { AccountScenario } from "../../scenarios/AccountScenario";
import { PCUtil } from "../../utils/PCUtil"
import CCWorld from "../../../../claimsolutions/promutuel/utils/world";
import PCWorld from "../../utils/world";

let onPCApp = new onApp("PC");
let accountScenario = new AccountScenario();
let submissionScenario;

Given(/^I am a user with the Producer role$/, async function() {
  await onPCApp.loginWithUser('P45AR6A', 'gw');
});

Given(/^a (.*) policy$/, async function(t, stepArguments) {

  CCWorld.lineOfBusiness = PCWorld.lob = stepArguments[0].replace(/["]+/g, "");
  submissionScenario = PCUtil.selectPolicyLine(CCWorld.lineOfBusiness);
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
  await submissionScenario.issueSubmission();
});

Given(/^a \"(.*)\" policy with \"(.*)\" days lead time$/, async function(t, stepArguments) {
  PCWorld.lob = stepArguments[0];
  PCWorld.renewPolicy = 1;
  PCWorld.leadTime = stepArguments[1];
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
  await submissionScenario.issueSubmission();
});


