# ✅ Resultados dos Testes Manuais

**Software:** https://paciente-staging.lacreisaude.com.br  
**QA Responsável:** Rafael de Paiva Florencio Silva  
**Data:** 23/04/2025  

---

## 📌 Fluxo: Cadastro da pessoa usuária

| Cenário                                       | Resultado       | Observação                               |
|-----------------------------------------------|-----------------|------------------------------------------|
| Cadastro com dados válidos                    | Sucesso         | Fluxo funcionando conforme esperado.     |
| Cadastro com e-mail inválido                  | Sucesso         | Mensagem de erro exibida corretamente.   |
| Cadastro sem preencher senha                  | Falha           | Não foi exibida mensagem de erro clara.  |

---

## 📌 Fluxo: Recuperação de senha

| Cenário                                       | Resultado       | Observação                               |
|-----------------------------------------------|-----------------|------------------------------------------|
| Recuperação com e-mail válido                 | Sucesso         | E-mail enviado com sucesso.              |
| Recuperação com e-mail inválido               | Sucesso         | Mensagem de erro exibida corretamente.   |
| Recuperação sem preencher o campo e-mail      | Sucesso         | Mensagem de erro exibida corretamente.   |

---

## 📌 Fluxo: Edição de perfil

| Cenário                                       | Resultado       | Observação                                                                    |
|-----------------------------------------------|-----------------|-------------------------------------------------------------------------------|
| Atualização com dados válidos                 | Sucesso         | Informações atualizadas corretamente.                                         |
| Atualização sem preencher nome                | Sucesso         | Mensagem de erro exibida corretamente.                                        |
| Atualização com data de nascimento inválida   | Falha           | O sistema aceitou uma data inválida sem exibir mensagem de erro.             |

---

## 📌 Fluxo: Busca de um profissional de saúde

| Cenário                                       | Resultado       | Observação                                                                    |
|-----------------------------------------------|-----------------|-------------------------------------------------------------------------------|
| Busca de profissional por especialidade       | Sucesso         | Informações exibidas corretamente.                                            |
| Busca de especialidade não existente          | Sucesso         | Mensagem de erro exibida corretamente.                                        |
| Entrar em contato com um profissional         | Sucesso         | O sistema exibe as opções de forma de contato com o profissional.            |

---

## 📊 Resumo Geral dos Testes

| Fluxo                            | Total de Testes | Testes com Sucesso | Testes com Falha |
|----------------------------------|------------------|---------------------|-------------------|
| Cadastro da pessoa usuária       | 3                | 2                   | 1                 |
| Recuperação de senha             | 3                | 3                   | 0                 |
| Edição de perfil                 | 3                | 2                   | 1                 |
| Busca de profissional de saúde   | 3                | 3                   | 0                 |

---

## 📝 Análise Geral

- A maioria dos fluxos críticos funcionam conforme o esperado.
- Falhas foram identificadas especialmente nos fluxos de **cadastro e edição de perfil**, onde o sistema não tratou corretamente validações de dados inválidos.
- O fluxo de **recuperação de senha** apresentou estabilidade total, com mensagens claras de erro e sucesso.
- A **busca de profissionais** mostrou ser robusta, exibindo informações ou mensagens adequadas para todos os tipos de entrada.

---

## ✅ Conclusão

Os testes manuais realizados cobriram os principais fluxos da plataforma sob condições variadas.  
A aplicação demonstrou bom comportamento geral, porém, foram encontradas inconsistências nos campos de validação, especialmente na manipulação de dados inválidos em perfis e cadastros.

Recomenda-se:

1. Revisar as validações dos campos de cadastro e edição de perfil.
2. Implementar mensagens de erro mais informativas e precisas onde não estão sendo exibidas.
3. Garantir testes automatizados para esses fluxos no futuro, para prevenir regressões.

---
