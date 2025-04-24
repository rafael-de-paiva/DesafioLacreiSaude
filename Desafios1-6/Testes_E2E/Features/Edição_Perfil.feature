Feature: Edição de perfil da pessoa usuária
    Como pessoa usuária 
    Quero editar minhas informações cadastrais
    Para manter meu perfil conforme minhas preferências

    Scenario: Editar com valor realista
        Given Que estou na página de perfil de usuario
        And   Clico em "Editar Dados"
        When  Eu preencher todos os valores de forma realista
        And   Clico em "Salvar"
        Then  Os valores novos deverão ser exibidos no perfil

    Scenario: Editar com valor irrealista
        Given Que estou na página de perfil de usuario
        And   Clico em "Editar Dados"
        When  Eu preencher o campo "Data de Nascimento" com um valor irreal
        And   Clico em "Salvar"
        Then  A alteração de credenciais deve ser negada
        
    Scenario: Editar com campo vazio 
        Given Que estou na página de perfil de usuario
        And   Clico em "Editar Dados"
        When  Eu deixar o campo data com um valor vazio
        And   Clico em "Salvar"
        Then  Deverá retornar o aviso "Data de nascimento deve ser preenchida"

