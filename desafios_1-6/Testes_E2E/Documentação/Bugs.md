# 🐞 Relatório de Bugs

**Software:** https://paciente-staging.lacreisaude.com.br

**QA Responsável:** Rafael de Paiva Florencio Silva  
**Data:** [23/04/2025]

---

## 🔴 Bug 01: Redirecionamento Pós cadasto

| Campo                  | Informação                                                |
|------------------------|------------------------------------------------------------|
| **Descrição**          | Reinicia o pós cadastro após concluir              |
| **Severidade**         | Alta                             |


### 🧪 Passo a passo para simular o bug:
1. Realize login com uma conta recém cadastrada pela primeira vez
2. Selecione todos os radio buttons e markdown necessários até a parte 5
3. Clique em "Concluir"
4. Clique em "Buscar profissionais"

### ✅ Comportamento Esperado:
A página deveria redirecionar o usuário para a página de busca de profissionais

### ❌ Comportamento Obtido:
O usuario retorna para o inicio do pós cadastro e precisa selecionar as informações mais uma vez para que então seja redirecionado corretamente.

---

### 🖥️ Ambiente

| Item                     | Informação                    |
|--------------------------|-------------------------------|
| **Sistema Operacional**  |        Windows 10 Pro         |
| **Dispositivo**          |       Mobile (DevTools)       | 
| **Navegador**            |      Chrome v135.0.7049.97    |

---

### 📸 Evidência
- [Vídeo](https://youtube.com/shorts/1dfYVMIMdNY?feature=share)

---
### 💡 Pontos importantes
- Este bug ocorre sempre que o um usuario fizer esse pós cadastro.
- Não impede que o usuário prossiga porém pode pode confudi-lo
- Se deve revisar a lógica do campo para que este bug não continue o quanto antes
---

## 🔴 Bug 02: Ir para "Ajuda" desloga

| Campo                  | Informação                                                |
|------------------------|------------------------------------------------------------|
| **Descrição**          | Usuário desloga ao entrar na página de ajuda              |
| **Severidade**         |  Baixa                             |


### 🧪 Passo a passo para simular o bug:
1. Acesse sua págica inicial após logar
2. Clique no ícone de interrogação

### ✅ Comportamento Esperado:
O icone e atalho para ir a página de perfil deveria ser mantido.

### ❌ Comportamento Obtido:
Aparece um icone para entrar novamente como "Pasciente" ou "Profissional"

---

### 🖥️ Ambiente

| Item                     | Informação                    |
|--------------------------|-------------------------------|
| **Sistema Operacional**  |        Windows 10 Pro         |
| **Dispositivo**          |       Mobile (DevTools)       | 
| **Navegador**            |      Chrome v135.0.7049.97    |

---

### 📸 Evidência(s)
- [Vídeo](https://youtube.com/shorts/BAskgDs0U1A?feature=share)

---
### 💡 Pontos importantes
- Este bug ocorre sempre que o usuário entrar nesta página
- Clicar em "Pasciente" faz com que você retorne a pagina inicial do seu perfil sem precisar fazer o processo completo de login mas ainda impede o usuário de acessar informações do perfil diretamente.
- Não afeta muito a expiencia de usuario mas pode confundir.
- Quando possível corrigir a logica de validação de login para que o usuario permaneça logado quando nesta págica
---

## 🔴 Bug 03: Ver consultas retorna ao incio

| Campo                  | Informação                                                |
|------------------------|------------------------------------------------------------|
| **Descrição**          | Clicar em "Minha consultas" leva para a página inicial            |
| **Severidade**         | Alta                             |

### 🧪 Passo a passo para simular o bug:
1. Acesse sua págica inicial ou qualquer outra acessível ao logar.
2. Clique no icone de perfil
3. Clique em "Minhas Consultas"

### ✅ Comportamento Esperado:
O usuario deveria ser direcionado para um página que exiba consultas marcadas.

### ❌ Comportamento Obtido:
A página é completamente inacessível e fazer isso faz o usuário retornar a página inicial de perfil.

---

### 🖥️ Ambiente

| Item                     | Informação                    |
|--------------------------|-------------------------------|
| **Sistema Operacional**  |        Windows 10 Pro         |
| **Dispositivo**          |       Mobile (DevTools)       | 
| **Navegador**            |      Chrome v135.0.7049.97    |

---

### 📸 Evidência(s)
- [Vídeo](https://youtube.com/shorts/y8hHDBYK82U?feature=share)

---
### 💡 Pontos importantes
- Esta bug impede que o usuário acesse as consultas. Impedindo completamente sua utilidade.
- A lógica de redirecionamento deve ser corrigido o mais urgentemente possível.
---
## 🔴 Bug 04: Edição de perfil irrealista

| Campo                  | Informação                                                |
|------------------------|------------------------------------------------------------|
| **Descrição**          | Usuario pode inserir valores irrealistas no perfil              |
| **Severidade**         | Medio                             |


### 🧪 Passo a passo para simular o bug:
1. Esteja logado e entre na página de ediçao de perfil
2. Insira no campo "Data de Nascimento" um valor irrealista (Ex: 01/01/1000)

### ✅ Comportamento Esperado:
A página deveria negar a mudança de informação e pedir uma data válida.

### ❌ Comportamento Obtido:
A página permite a alteração normalmente.

---

### 🖥️ Ambiente

| Item                     | Informação                    |
|--------------------------|-------------------------------|
| **Sistema Operacional**  |        Windows 10 Pro         |
| **Dispositivo**          |       Mobile (DevTools)       | 
| **Navegador**            |      Chrome v135.0.7049.97    |

---

### 📸 Evidência
- [Vídeo](https://youtube.com/shorts/4ElWzKUpz_8?feature=share)

---
### 💡 Pontos importantes
- Este bug ocorre sempre que o usuário tentar mudar suar informações com valores irrealistas.
- Facilita a criação de perfis não legítimos.
- Se deve revisar a lógica de validação do campo de data de nascimento para permitir somente valores enter 1900 e o ano atual.
