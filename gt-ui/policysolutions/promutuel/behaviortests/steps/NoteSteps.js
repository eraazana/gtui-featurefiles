'use strict';
const {When, Then} = require('@cucumber/cucumber');
import world from "../../utils/world";
import { NoteScenario } from "../../scenarios/NoteScenario";
import { SearchScenario } from "../../scenarios/SearchScenario";

const searchScenario = new SearchScenario();
const noteScenario = new NoteScenario();

When(/^I add an note to the \"(.*)\"$/, async function(t, stepArguments) {
  let func = stepArguments[0];
  switch(func){
      case "account":
        await searchScenario.searchAccount(world.accountNumber);
        await noteScenario.createNoteInAccount();
        break;
      case "policy":
        await searchScenario.searchPolicy(world.policyNumber);
        await noteScenario.createNoteInPolicy();
        break;
  }
});

Then(/^the note is added to the \"(.*)\" successfully$/, async function(t, stepArguments) {
  let noteLevelType = stepArguments[0];
  let subject = await noteScenario.getNoteSubject(noteLevelType);
  await t.expect(subject).notEql(null);
})