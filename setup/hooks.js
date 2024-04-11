const playwright = require('playwright')
const { Before, After, BeforeAll, AfterAll, Status, setDefaultTimeout, AfterStep } = require('@cucumber/cucumber')
const timeoutData = require('../config.json');

const timeout = timeoutData.waitTime;
setDefaultTimeout(timeout);

BeforeAll(async () => {
  // Giving browser- Chromium and headed mode
  global.browser = await playwright['chromium'].launch({ headless: false });
  // global.browser = await playwright['firefox'].launch({ headless: false });
  // global.browser = await playwright['webkit'].launch({ headless: false });
  // global.browser = await playwright['Google Chrome'].launch({ headless: false });
  console.log('Browser has launched')
})

AfterAll(async () => {
  await global.browser.close()
  console.log('Browser has Closed')
})

Before(async () => {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
  console.log('new context and page has created')
})

// AfterStep(async function(scenario) {
//   if (scenario.result.status === Status.FAILED) {
//     const ref = await global.page.screenshot({path: `report_cucumber/${scenario.pickle.name}.png`, fullPage: true });
//     this.attach(ref, 'image/png', scenario.pickle.name);
//   }
// })

After(async () => {
  await global.page.close()
  await global.context.close()
  console.log('context and page has closed')
})

After(async function (scenario) {
  if (scenario.result.status === Status.PASSED) {
    console.log('Passed  scenarios name has printed ==>  ' + `${scenario.pickle.name}`)
  }
  else {
    const ref = await global.page.screenshot({ path: `report_cucumber/${scenario.pickle.name}.png`, fullPage: true });
    console.log('Failed  scenarios name has printed and screenShots taken  ==>  /' + `${scenario.pickle.name}`)
    this.attach(ref, 'image/png', scenario.pickle.name);
  }
})