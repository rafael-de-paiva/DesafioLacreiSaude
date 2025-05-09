# ✅ Resultados dos Testes de Acessibilidade – Lacrei Saúde

## **Descrição Geral**
Os testes de acessibilidade foram realizados com base nas diretrizes da **WCAG 2.1 – nível AA**, utilizando as ferramentas **Google Lighthouse**, inspeção manual e simulação de navegação por teclado.  
A finalidade foi validar a acessibilidade da página de login da aplicação mobile (via simulação) quanto a:

- Navegação por teclado
- Contraste de cores
- Conformidade com leitores de tela e foco visual

---

## **1. Teste Automatizado com Lighthouse**

- **URL testada:** https://paciente-staging.lacreisaude.com.br/institutional/
- **Pontuação geral de acessibilidade:** **100/100**
- **Ambiente:**
  - Dispositivo: Simulação de iPhone SE
  - Navegador: Google Chrome (modo mobile)
  - Conexão: 4G limitada
  - Data da execução: 22/04/2025

**Resumo dos resultados:**
- Nenhum problema encontrado em foco de elementos interativos
- Uso correto de ARIA labels e nomes de botões
- Sem uso de atributos obsoletos ou inválidos

---

## **2. Navegação por Teclado e Leitores de Tela**

- **Status:** **Conforme**
- Os campos de e-mail, senha, botão de login e links extras recebem foco corretamente com a tecla `Tab`.
- Os botões podem ser ativados com `Enter`.
- A ordem de navegação está lógica e sem “saltos”.
- Os elementos possuem `aria-label`, `placeholder` ou `label` explícito associado.

**Conformidade com WCAG:**
- [✓] 2.1.1 — Teclado
- [✓] 2.4.3 — Ordem de foco
- [✓] 2.4.7 — Foco visível
- [✓] 4.1.2 — Nome, função e valor acessíveis

---

## **3. Contraste de Cores**

- **Ferramenta usada:** Lighthouse + inspeção visual em tela simulada mobile
- **Critérios validados:**
  - [✓] 1.4.3 — Contraste mínimo (AA): ≥ 4.5:1 para textos normais
  - [✓] 1.4.6 — Contraste reforçado (AAA): ≥ 7:1 para textos grandes
- **Exemplos validados:**

| Elemento                  | Contraste estimado | Status         | Observação                                  |
|---------------------------|--------------------|----------------|---------------------------------------------|
| Texto do botão "Entrar"   | ~7.5:1             | Conforme (AA)  | Excelente visibilidade                      |
| Campos de input           | >12:1              | Conforme (AAA) | Placeholder e texto legível mesmo em 4G     |
| Título da página          | >15:1              | Conforme (AAA) | Cor escura sobre fundo claro sem riscos     |

---

## **4. Sugestões de Melhoria**

Mesmo com alta conformidade técnica, recomenda-se:

1. **Testar com leitores de tela reais** como NVDA (Windows) ou VoiceOver (macOS) para garantir a experiência real do usuário.
2. **Reforçar a borda de foco visual** para pessoas com baixa visão ou em modo alto contraste.
3. Incluir **textos alternativos em imagens futuras** para garantir acessibilidade contínua conforme a aplicação for evoluindo.

---

## **5. Evidências**

🖼️ **Captura da aba Lighthouse (pontuação 100):**  

![Relatório Lighthouse1](./Evidencias%20e%20Comprovações/Acessibilidade1.png)
![Relatório Lighthouse1](./Evidencias%20e%20Comprovações/Acessibilidade2.png)
![Relatório Lighthouse1](./Evidencias%20e%20Comprovações/Acessibilidade3.png)
![Relatório Lighthouse1](./Evidencias%20e%20Comprovações/Acessibilidade4.png)

🎥 **Vídeo de navegação por teclado:**  
- [Video](https://youtu.be/HKaiREIjlLU)
---

## **Conclusão**

A aplicação testada demonstrou excelente aderência aos critérios essenciais de acessibilidade da WCAG 2.1.  
A experiência de navegação por teclado, leitura e visualização é satisfatória tanto em desktop quanto em simulações mobile, garantindo autonomia e inclusão a diversos perfis de usuários.

---
