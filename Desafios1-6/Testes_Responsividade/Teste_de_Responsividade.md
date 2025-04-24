# 🧪 Testes de Responsividade

## **📋 Descrição Geral**
Os testes de responsividade foram realizados no site da **Lacrei Saúde** utilizando o navegador **Google Chrome**, com o recurso de simulação de dispositivos móveis via **DevTools**, além da execução em resolução padrão de desktop.  
O objetivo foi validar se a interface se adapta corretamente a diferentes tamanhos de tela, mantendo **legibilidade**, **alinhamento visual**, **acessibilidade** e **usabilidade funcional**.

---

## **🖥️ Ambiente de Teste**
- **Data:** 23/04/2025  
- **Navegador:** Google Chrome Versão 135.0.7049.97 (64 bits)  
- **Dispositivo Real:** Desktop 1366x768  
- **Dispositivo Simulado:** iPhone SE via DevTools  
- **Resoluções Testadas:**
  - 📱 **Mobile:** 375x667 (iPhone SE)
  - 🖥️ **Desktop:** 1366x768 em tela cheia (F11)

---

## **📊 Resultados dos Testes**

### ✅ **1. Teste em dispositivo móvel (simulado via DevTools)**
- **Resolução:** 375x667 (iPhone SE)
- **Resultado:** **Parcialmente conforme**
- **Observações:**
  - Layout geral responsivo e bem adaptado.
  - Campos e botões estavam utilizáveis e visíveis.
  - ❗ Durante o fluxo de **confirmação de cadastro**, foi identificado um pequeno **bug visual com sobreposição de palavras** em uma parte da tela.
  - Nenhum comprometimento funcional foi observado.

### ✅ **2. Teste em desktop (resolução padrão)**
- **Resolução:** 1366x768 (tela cheia)
- **Resultado:** **Parcialmente conforme**
- **Observações:**
  - A navegação e layout se comportaram corretamente na maior parte do tempo.
  - ❗ O mesmo **pequeno bug visual** na tela de confirmação de cadastro também foi percebido. Uma linha horizontal.
  - Demais telas (login, busca de profissionais, visualização de perfil) funcionaram corretamente.

---

## **📂 Fluxos testados**
- Cadastro de usuário
- Confirmação de e-mail
- Login
- Busca de profissionais
- Acesso ao perfil do usuário
- Interações com menus e navegação principal

---

## **🎥 Evidências**

> ✅ Todos os testes foram gravados em vídeo e podem ser acessados pelos links abaixo:

1. **Execução em Mobile (iPhone SE simulado):**  
   [🔗 Acessar vídeo Mobile](https://youtube.com/shorts/avu5afHtWUA?feature=share)

2. **Execução em Desktop (1366x768):**  
   [🔗 Acessar vídeo Desktop](https://youtu.be/06zLMuCLl9s)

---

## **📝 Conclusão**

Os testes de responsividade realizados mostram que a plataforma da **Lacrei Saúde** é **majoritariamente compatível com diferentes tamanhos de tela**, adaptando seu layout de forma eficiente e funcional.

O único ponto observado foi um **pequeno erro visual de sobreposição textual** na tela de confirmação de cadastro, tanto na versão mobile quanto na versão desktop, o que **não impacta a funcionalidade, mas pode afetar a experiência visual e a acessibilidade**.

🛠️ **Sugestão de melhoria:**  
- Corrigir o CSS da tela de confirmação para evitar sobreposição entre textos e elementos em resoluções menores.

---

> **Status Final:** ⚠️ **Responsividade geral: Boa, com um pequeno bug visual.**
