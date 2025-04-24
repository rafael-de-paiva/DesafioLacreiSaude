Feature: Busca de um profissional de saúde
    Como pessoa usuária da plataforma
    Quero buscar profissionais de saúde por nome ou especialidade
    Para que eu possa encontrar atendimento adequado às minhas necessidades
    
    Scenario: Busca vazia
        Given Que o usuario na pagina de busca de profissionais
        And   Preenche o campo de busca com um valor vazio
        When  O usuario realiza a pesquisa
        Then  Uma lista com todos os profissionais deve ser exibida

    Scenario: Busca não encontrada
        Given Que o usuario na pagina de busca de profissionais
        And   Preenche o campo de busca com um valor sem correspondências
        When  O usuario realiza a pesquisa
        Then  Deverá ser imprimido o texto "Não encontramos o que você procura."

    Scenario: Validação por Celular
        Given Que o usuario realizou uma busca pagina de busca de profissionais
        And   Selecionou um profissional e clicou em e "Exibir contato"
        When  O usuario inserir um numero de celular válido
        Then  Deverá ser imprimido o texto "Enviamos o código por SMS."

