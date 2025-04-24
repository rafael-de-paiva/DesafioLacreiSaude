# Desafio QA - Lacrei Saúde 🩺

[![Cypress Web Tests](https://github.com/rafael-de-paiva/DesafioLacreiSaude/actions/workflows/cypress-pipeline.yml/badge.svg)](https://github.com/rafael-de-paiva/DesafioLacreiSaude/actions/workflows/cypress-pipeline.yml)

Este repositório contém a entrega completa do **Desafio de Quality Assurance da Lacrei Saúde**, cobrindo os **7 desafios propostos**, incluindo:

- Testes automatizados (E2E) com Cypress + Cucumber
- Testes manuais documentados
- Testes de acessibilidade
- Testes de desempenho com K6
- Testes de responsividade
- Estrutura profissional com Page Objects e CI/CD

---

## 🧪 Testes Automatizados (Cypress + Cucumber)

Automação dos fluxos principais da aplicação `paciente-staging.lacreisaude.com.br`, incluindo:

- Cadastro de pessoa usuária
- Login
- Recuperação de senha
- Edição de perfil
- Busca de profissional de saúde

### 📁 Estrutura dos arquivos automatizados

```
cypress/
├── e2e/
│   └── features/                 → Arquivos `.feature` com os cenários BDD
├── report/                       → Relatório HTML gerado automaticamente
├── support/
│   ├── commands.js              → Comandos customizados
│   ├── e2e.js                   → Setup global dos testes
│   ├── data/user_data.js        → Gerador de dados com Faker
│   ├── pages/                   → Page Objects (ex: login_page.js, register_page.js)
│   └── step_definitions/       → Steps do Cucumber relacionados aos cenários
```

---

## 📂 Testes Manuais – Pasta `Desafios1-6`

A pasta `Desafios1-6/` contém toda a documentação dos testes manuais solicitados no desafio. Ela está organizada por tipo de teste e inclui:

### `Testes_E2E/`
Contém os testes manuais de ponta a ponta documentados em Markdown:

- 📄 `Documentação/`: arquivos `.md` com descrição de cada teste (ex: cadastro, login, recuperação de senha etc.)
- 📸 `Evidencias/`: imagens dos testes executados manualmente
- 🧩 `Features/`: arquivos `.feature` escritos em Gherkin como apoio à documentação manual

### `Testes_Responsividade/`
- Relatório em Markdown com os resultados dos testes feitos em diferentes resoluções de tela (mobile e desktop)
- Testes realizados com uso de DevTools (simulação de iPhone SE 375x667 e desktop 1366x768)
- Evidências disponíveis em vídeo (link sugerido no relatório)

### `Testes_Acessibilidade/`
- Relatório técnico baseado na ferramenta Lighthouse
- Avaliação de contraste, uso de ARIA, legibilidade, foco de teclado
- 📁 `Evidencias e Comprovações/`: screenshots de inspeções e relatórios visuais

### `Testes_Desempenho/`
- Relatório com análise de performance usando K6 (simulação de carga com VUs)
- Métricas como tempo de resposta e quantidade de requisições simultâneas
- 📁 `Evidencias/`: gráficos e capturas de tela com os resultados dos testes de stress

---

## 🧰 Tecnologias utilizadas

- Cypress
- Cucumber com `@badeball/cypress-cucumber-preprocessor`
- Faker.js (geração dinâmica de dados)
- Mochawesome + cucumber-html-reporter (relatório HTML)
- GitHub Actions (CI/CD)
- K6 (teste de desempenho)
- Lighthouse (teste de acessibilidade)

---

## ▶️ Como rodar localmente

```bash
npm install
npx cypress open
```

Ou para executar em modo headless e gerar o relatório:

```bash
npx cypress run && node generate-html-report.js
```

O relatório estará disponível em:  
`cypress/report/index.html`

---

## 🚀 CI/CD com GitHub Actions

Sempre que há um **pull request para a branch `main`**, os testes automatizados são executados pela pipeline:

```yaml
.github/workflows/cypress-pipeline.yml
```

Após a execução, o **relatório HTML é gerado automaticamente** e disponibilizado como **artifact (cypress-report)** no painel de Actions.

---

## 📦 Organização geral

```
├── .github/workflows           → Pipelines do GitHub Actions
├── cypress/                    → Código dos testes automatizados
│   ├── e2e/features            → Cenários BDD
│   ├── support/                → Steps, pages, commands, etc.
│   ├── report/                 → Relatório HTML
├── Desafios1-6/                → Testes manuais, evidências, features, relatórios
├── generate-html-report.js     → Script de geração do relatório HTML
├── cypress.config.js
├── package.json
```

---

## ✨ Autor

**Rafael de Paiva**  
💼 Projeto feito como parte do desafio técnico da **Lacrei Saúde**  
🐉 Desenvolvido com organização, dedicação e persistência para entregar uma solução de QA profissional.

