CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,/*primary key para indicar que é essencial*/
    name VARCHAR (255) NOT NULL,/*varchar para declarar string*/
    salary FLOAT NOT NULL,/*NOT NULL para indicar que nao pode ser NULL*/
    birth_date DATE NOT NULL,/*date para indicar que é no formato de data*/
    gender VARCHAR(6) NOT NULL
);

CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
    avaliacao INT NOT NULL
);

/*exercicio1*/
/*a*/
ALTER TABLE Actor DROP COLUMN salary;/*remove a coluna 'salary'*/
/*b*/
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);/*muda a variavel 'gender' para 'sex' e suas prorpiedades*/
/*c*/
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);/*muda a vaeiavel 'gender' para um VARCHAR(255)*/
/*d*/
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

/*exercicio2*/
/*a*/
UPDATE Actor SET birth_date = '2000-05-05' WHERE id = '003';
/*b*/
UPDATE Actor SET name = 'JULIANA PAES' WHERE id = '005';
UPDATE Actor SET name = 'Juliana Paes' WHERE id = '005';
/*c*/
UPDATE Actor SET name = 'Renato Russo', salary = 40000, birth_date = '1960-03-27', 
gender = 'male' WHERE id = '005';
/*d*/
UPDATE Actor SET name = 'Renato Russo', salary = 40000, birth_date = '1960-03-27', 
gender = 'male' WHERE id = '009';/*funciona, mas nada é adicionado*/

SELECT * FROM Movie;

/*exercicio3*/
/*a*/
DELETE FROM Actor WHERE name = 'fernanda montenegro';
/*b*/
DELETE FROM Actor WHERE gender = 'male' AND salary > 1000000;

/*exercicio4*/ 
/*a*/
SELECT MAX(salary) FROM Actor;
/*b*/
SELECT MIN(salary) FROM Actor;
/*c*/
SELECT COUNT(*) FROM Actor WHERE gender = 'female';
/*d*/
SELECT SUM(salary) FROM Actor;

/*exercicio5*/
/*a*/
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;/*esse codigo conta o numero de pessoas e ordena-os por genero*/
/*b*/
SELECT id, name FROM Actor ORDER BY name DESC;
/*c*/
SELECT * FROM Actor ORDER BY salary;
/*d*/
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
/*e*/
SELECT AVG(salary), gender FROM Actor GROUP BY gender;

/*exercicio6*/
/*a*/
ALTER TABLE Movie ADD playing_limit_date DATE;
/*b*/
ALTER TABLE Movie CHANGE avaliacao avaliacao FLOAT;
/*c*/
UPDATE Movie SET playing_limit_date = '2022-06-10';
UPDATE Movie SET playing_limit_date = '2021-05-08' WHERE id = '001' OR id = '002';
/*d*/
DELETE FROM Movie Where id = '004';
UPDATE Movie SET sinopse = 'sinopse' WHERE id = '004';
/*o codigo roda mas a linha sinopse nao é encontrada*/


















