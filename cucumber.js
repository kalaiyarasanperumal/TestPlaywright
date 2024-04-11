const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-definitions/**/*.step.js
    --require config/config.js 
    --require config.json
    --format summary  
    --require progress-bar
    --require package.json  
    --require playwright.config.js  
    --publish-quiet  
    --format @cucumber/pretty-formatter
    --format html:report_cucumber/cucumber-html-report.html
    `

module.exports = {
  default: `${common} features/**/*.feature`,

}