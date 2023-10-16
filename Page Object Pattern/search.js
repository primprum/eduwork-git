import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SearchPage from "./search.page";

Given("User is on the homepage", () => {
  SearchPage.visit();
});

When("User enters {string} into the search box", (keyword) => {
  SearchPage.fillSearchbox(keyword);
});

When("User presses Enter", () => {
  SearchPage.submitSearchbox();
});

Then("User should see search results that include the keyword {string}", (keyword) => {
  SearchPage.assertSearchResult(keyword);
});
