const playwright = require('playwright')


class SaavasPage {

  async saavasBaseUrl() {
    return await page.goto(global.BASE_URL);
  }
  async Username(_username) {
    return await page.locator('[id="username"]').fill(_username);
  }
  async Password(_password) {
    await page.locator('[id="password"]').fill(_password);
  }
  async clickSumbit() {
    await page.locator('[id="signInBtn"]').click();
  }
  async currentPageUrl() {
    return await page.url();
  }
  async HelpSymbol() {
    await page.getByRole('button', { name: 'help' }).locator('svg').click();
  }
  async userIDstatus() {
    return await page.locator('[id="usernameStatus"]').textContent();
  }
  async passwordStatus() {
    return await page.locator('[id="passwordStatus"]').textContent();
  }

  // async userIDstatus() {
  //   return await page.$eval('#usernameStatus', element => element.textContent);
  // }

  // async passwordStatus() {
  //   return await page.$eval('#passwordStatus', element => element.textContent);
  // }



  //**************************************** */
  async testleafUrl() {
    await page.goto('https://www.leafground.com/dashboard.xhtml');

  }
  async linkinedIn() {
    await page.goto('https://www.linkedin.com/');
  }

  async fillEmailadress() {
    await page.locator('[placeholder="E-mail Address"]').fill('kalai@annular.com');
  }

  async textmessageTeamAnnular() {
    await page.locator('textarea[role="textbox"]').fill('Team Annular');
  }

  async msgClicksumbit() {
    await page.locator('button[role="button"]:has-text("Send")').click();
  }

  async pause() {
    // Wait for 10 seconds

  }
  async take_screenshot() {
    // const ref1 = await global.page.screenshot({ path: `reports/vianame/${e.pickle}.png`, fullPage: true });//
    const ref = await global.page.screenshot({ path: `reports/TestScenario.png`, fullPage: true });

  }

  //******************* */
  async navigateToLoginScreen() {
    await page.goto('https://www.google.com/');
    //await page.locator('[aria-label="Search"]').click()
  }

  async enterTextSearchBox() {
    await page.locator('[aria-label="Search"]').click();
    await page.locator('[aria-label="Search"]').fill('linkedin');
    await page.waitForTimeout(3000)
  }
  async errormethod() {
    await page.wait('[dssfsd"Sesddarch"]').fill('linkedin')
  }

  async submitLoginForm() {
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
  }

  async submitLoginWithParameters(username, password) {
    await page.fill('#user-name', username)
    await page.fill('#password', password)
    await page.click('#login-button')
  }

  async assertUserIsLoggedIn() {
    await page.waitForSelector('.inventory_list')
  }

}

module.exports = { SaavasPage }
