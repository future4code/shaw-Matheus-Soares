CREATE TABLE competicao(
    id VARCHAR(255) PRIMARY KEY,
    competicao VARCHAR(255) NOT NULL,
    unidade ENUM ("s", "m") NOT NULL,
    boolean ENUM ("TRUE", "FALSE") DEFAULT "TRUE"
);

CREATE TABLE atleta(
    nome VARCHAR(255) PRIMARY KEY,
    value VARCHAR(255) NOT NULL,
    competicao VARCHAR(255) NOT NULL,
    FOREIGN KEY(competicao) REFERENCES competicao(id)
)

/*
    A API não deve aceitar cadastros de resultados se a competição já estiver encerrada.???????????????????????
    A API pode retornar o ranking/resultado parcial, caso a disputa ainda não estiver encerrada.
    No caso da competição do lançamento de dardos, cada atleta terá 3 chances, e o resultado da competição deverá levar em conta o lançamento mais distante de cada atleta.
    O Design da API, bem como input e output dos dados, fica a seu critério, sendo inclusive um dos pontos de avaliação.
    Testes são obrigatórios.
    Necessária criação de um Readme para informar o passo a passo de como rodar a API.
    Não é necessário criar um banco de dados, podendo manter os dados na memória. (hint: sqlite)
    Sugerimos a utilização do git para versionar a solução. Um Pull Request (PR) para este repo, num branch com seu 
nome_sobrenome seria excelente, pois mais do que analisar o código, queremos analisar o fluxo de trabalho,
a linha de pensamento e como evoluiu o código até chegar na solução.
*/