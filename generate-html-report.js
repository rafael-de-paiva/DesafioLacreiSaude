const reporter = require('cucumber-html-reporter');
const fs = require('fs-extra');
const path = require('path');

const jsonFile = 'cypress/report/report-json.json'; 
const reportDir = 'cypress/report';

fs.ensureDirSync(reportDir);

if (!fs.existsSync(jsonFile)) {
  console.error("Arquivo JSON não encontrado em:", jsonFile);
  process.exit(1);
}

reporter.generate({
  theme: 'bootstrap',
  jsonFile,
  output: path.join(reportDir, 'report-html.html'),
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "Staging",
    "Browser": "Chrome 135",
    "Platform": "Windows 10",
    "Executed": "Local"
  }
});
