// exercicio 1
// a - sim por gerar id's mais aleatorias
// b - 
import {generateId} from './services/gerarId'
generateId()

//exercicio 2
// a - 
import knex from 'knex'

const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};//o codigo insere novos dados numa table existente no arquivo sql

// b -
CREATE TABLE User (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

//exercicio 3
// a - transforma o conteudo em string
// b -

//exercicio 4
