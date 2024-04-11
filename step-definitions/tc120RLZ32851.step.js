const { Given, When, Then } = require('@cucumber/cucumber')
const { PlaywrightPage } = require('../page-objects/tc120RLZ32851_page')
// const { parseGherkinMessageStream } = require("@cucumber/cucumber");
const { GherkinStreams } = require("@cucumber/gherkin");
const { setDefaultTimeout } = require('@cucumber/cucumber')
const timeoutData = require('../config.json');

const timeout = timeoutData.waitTime;
setDefaultTimeout(timeout);

const playwrightPage = new PlaywrightPage()

Given('User navigates to Playwright Dashboard page', async () => {
  await playwrightPage.saavasBaseUrl();
  console.log('URL is navigated');
});

When('User enters a {string} and {string} in the login page and Click Login Button', async (_username, _password) => {
  await playwrightPage.Username(_username);
  await playwrightPage.Password(_password);
  await playwrightPage.clickSumbit();
  console.log('User id and password  and sumbit button clicked');
});
Then('Validate the Username name and password has invalid message', async () => {
  const UseStatus = await playwrightPage.userIDstatus()
  assert.strictEqual(UseStatus, 'Username or password is incorrect');
  console.log(UseStatus);
  const PwdStatus = await playwrightPage.passwordStatus()
  assert.strictEqual(PwdStatus, 'Username or password is incorrect');
  console.log(PwdStatus);
});

Then('Dashboard page has navigated', async () => {
  const DashboadPageUrl = await playwrightPage.currentPageUrl()
  console.log(DashboadPageUrl);
  assert.strictEqual(DashboadPageUrl, 'https://nightly-www.savvasrealizedev.com/dashboard/viewer');
  console.log('URL is as expected');
});


When('Help Icon Present in TopNavbar with Question Mark Icon enrolled with Circle Icon with White background colour', async () => {
  await playwrightPage.HelpSymbol();
});


//*************************************************** */
When('Enter text message', async () => {
  await playwrightPage.fillEmailadress();
  await playwrightPage.textmessageTeamAnnular();
  await playwrightPage.msgClicksumbit();
})

Then('Pause', { timeout: 20000 }, async () => {
  await playwrightPage.pause();
})

Then('Take ScreenShot', async () => {
  await playwrightPage.take_screenshot();

})


//*************** */


Given('I visit a login page', async () => {
  await playwrightPage.navigateToLoginScreen();

});




When('Error', async () => {
  //await playwrightPage.errormethod();
})

Then('Enter the searchvalue', async () => {
  await playwrightPage.enterTextSearchBox();
})




