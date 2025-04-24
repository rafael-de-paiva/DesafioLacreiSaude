const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const {createEsbuildPlugin} = require("@badeball/cypress-cucumber-preprocessor/esbuild");


module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://paciente-staging.lacreisaude.com.br",
    specPattern: "cypress/e2e/features/**/*.feature",
    screenshotOnRunFailure: false,

    setupNodeEvents: async (on, config) => {

      // 🔌 Adiciona o plugin principal do Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // ⚙️ Configura o bundler do esbuild com o plugin do cucumber
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      // 🛠️ Corrige erros com cy.task() esperados pelo cucumber
      on("task", {
        "cypress-cucumber-preprocessor:generate-json": () => null,
        "cypress-cucumber-preprocessor:before-spec": () => null,
        "cypress-cucumber-preprocessor:after-spec": () => null,
      });

      return config;
    }
  }
});

//⚠️ O pacote cucumber-html-reporter possui uma dependência (semver) com vulnerabilidade conhecida, mas foi utilizado somente para geração de relatórios locais durante a execução dos testes, sem riscos para o ambiente de produção.

