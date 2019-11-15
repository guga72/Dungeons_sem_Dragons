Feature: Criacao de personagem
  Jogador pode criar personagem

  Scenario Outline: Dada a possibilidade de criar um personagem ao jogador
    Given Jogador define - Nome: "<nome>" Sexo: "<sexo>" Raca: "<raca>"
    When Jogador cria personagem
    Then Personagem do jogador e criado

	  Examples:
    | nome    | sexo      | raca   |
    | Pedro   | masculino | humano |
    | Tiago   | masculino | humano |
    | Gustavo | masculino | humano |