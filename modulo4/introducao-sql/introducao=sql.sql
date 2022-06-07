CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,/*primary key para indicar que é essencial*/
    name VARCHAR (255) NOT NULL,/*varchar para declarar string*/
    salary FLOAT NOT NULL,/*NOT NULL para indicar que nao pode ser NULL*/
    birth_date DATE NOT NULL,/*date para indicar que é no formato de data*/
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;/*aparentemente o DATABASES mostra meus dados, do servidor atual*/

SHOW TABLES;/*mostra as tables*/

DESCRIBE Actor;/*informacoes basicas sobre os parametros da TABLE*/

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("001", "Tony Ramos", 400000, "1948-08-25", "male");

INSERT INTO Actor (id, name, salary, birth_date, gender)/*nao é possivel criar sem gender*/
VALUES (2, "Glória Pires", 1200000, "1963-08-23", "female");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (2, "alguem", 12000, "1654-05-08", "male");/*entrada '2' duplicada para chave 'primaria'*/

INSERT INTO Actor (id, name, salary)/*numero de colunas é diferente do numero de valores*/
VALUES(/*acontece porque tem mais valores do que parametros sendo passados*/
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, salary, birth_date, gender)/*campo 'name' nao tem um valor pre definido*/ 
VALUES(/*acontece porque 'name' nao esta sendo passado como parametro*/
  "004",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)/*valor de data incorreto '1950' na coluna 'birth_date' linha 1*/
VALUES(/*indica que a data de nascimento deve ser uma string*/
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

/*exercicio3*/
/*a*/
SELECT * FROM Actor WHERE gender = "female";
/*b*/
SELECT salary FROM Actor WHERE name = "tony ramos";
/*c*/
SELECT * FROM Actor WHERE gender = 'invalid';/*nao sei*/
/*d*/
SELECT id, name, salary FROM Actor WHERE salary<500000;
/*e*/
SELECT id, name from Actor WHERE id = "002";/*coluna desconhecida 'nome' na lista*//*acontece porque foi escrito 'nome' em vez de 'name'*/

/*exercicio4*/
/*a*/
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;/*pega todos os atores cujo nomes começam com A ou J, e tem o salario superior a 300 mil*/
/*b*/
SELECT * FROM Actor
WHERE (name NOT LIKE 'A%') AND salary > 350000;
/*c*/
SELECT * FROM Actor
WHERE (name LIKE '%g%');
/*d*/
SELECT * FROM Actor
WHERE (name LIKE '%g%' OR name LIKE '%a%') AND salary BETWEEN 350000 AND 900000;

/*exercicio5*/
/*a*/
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
    avaliacao INT NOT NULL
);
/*b*/
INSERT INTO Movie (id, nome, sinopse, release_date, avaliacao)
VALUES('001', 'Se Eu Fosse Você', 
'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos',
'2006-01-06', 7),
('002', 'Doce de mãe', 
'Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais 
morar com ela', '2012-12-27', 10),
('003', 'Dona Flor e Seus Dois Maridos', 
'Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
que só quer saber de farras e jogatina nas boates. 
A vida de abusos acaba por acarretar sua morte precoce.',
'2017-11-02', 8),
('004', 'Tropa de elite', 
'Em Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE, 
que quer deixar a corporação e tenta encontrar um substituto para seu posto. 
Paralelamente dois amigos de infância se tornam policiais e se destacam pela honestidade 
e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão 
em que atuam.', '2007-10-05', 8);

/*exercicio6*/
/*a*/
SELECT id, nome, avaliacao FROM Movie
WHERE id LIKE '002';
/*b*/
SELECT * FROM Movie
WHERE nome LIKE 'tropa de elite';
/*c*/
SELECT id, nome, sinopse FROM Movie
WHERE avaliacao > 6;

/*exercicio7*/
/*a*/
SELECT * FROM Movie
WHERE nome LIKE '%VIDA%'; 
/*b*/
SELECT * FROM Movie
WHERE nome LIKE '%de%';
/*c*/
SELECT * FROM Movie
WHERE release_date<'2022-06-07';
/*d*/
SELECT * FROM Movie
WHERE avaliacao > 6 AND nome LIKE '%de%';




