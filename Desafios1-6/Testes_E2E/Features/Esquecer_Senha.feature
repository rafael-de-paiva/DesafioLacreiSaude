Feature: Esquecer senha e resetar
    Como pessoa usuária que esqueceu sua senha
    Quero solicitar a redefinição por e-mail
    Para que eu possa recuperar o acesso à plataforma com segurança
    
    Scenario: Requisição com sucesso
        Given Que estou na página de redefinir senha
        And   Preencho o campo "Email" com uma conta ja existente
        When  Eu clicar em "Enviar link"
        Then  Devo ver a mensagem "Verifique seu e-mail para redefinir a senha"

    Scenario: Requisição vazia
        Given Que estou na página de redefinir senha
        And   Seleciono a campo "Email"
        When  Eu desselecionar o campo o deixado vazio
        Then  Devo ver a mensagem "Por favor, utilize um formato de e-mail válido. Por exemplo: email@dominio.com.br"

    Scenario: Requisição errada
        Given Que estou na página de redefinir senha
        And   Seleciono a campo "Email" com uma conta não existente
        When  Eu clicar em "Enviar link"
        Then  Devo ver a mensagem "Algo deu errado, por favor, confira os dados inseridos e tente novamente."