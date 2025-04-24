Feature: Cadastro da pessoa usuária
    Como uma pessoa que deseja utilizar a plataforma
    Quero me cadastrar informando meus dados pessoais
    Para que eu possa acessar os serviços oferecidos pela Lacrei Saúde
   
    Scenario: Cadastro Parcial com Sucesso
        Given Que estou na página de cadastro de usuario
        And   Preencho todos os campos de cadastro corretamente
        When  Eu clico em "Cadastrar"
        Then  Eu devo ver a mensagem "Estamos quase lá..."

    Scenario: Email não correspondente
        Given Que estou na página de cadastro de usuario
        And   Preencho o campo "Email"
        When  Eu preencho o campo seguinte com um email diferente do inserido anteriormente
        And   Eu clico em "Cadastrar"
        Then  Devo ver a mensagem "Os e-mails não correspondem, digite novamente."

    Scenario: Pós-Cadastro com Sucesso
        Given Que verifiquei meu email anteriormente cadastrado
        And   Fiz login com minhas credenciais
        When  Eu preencer todos os campos pos cadastro
        And   Clicar em "Buscar Profissional"
        Then  Devo ser redirecionado para a pagina de busca de profissionais




