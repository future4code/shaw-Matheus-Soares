import connection from "./connection";

const printError = (error: any) => { console.log(error.sqlMessage || error.message)}

const createTables = () => connection
    .raw(`
        CREATE TABLE user_endereco(
            cep INT PRIMARY KEY,
            logradouro VARCHAR(255) NOT NULL,
            numero INT NOT NULL,
            complemento VARCHAR(255),
            bairro VARCHAR(255),
            cidade VARCHAR(255),
            estado VARCHAR(255)
        );
    `)
    .then(() => { console.log("Tabela criada")})
    .catch(printError);

    const insertUsers = () => connection("aula48_exercicio")
    .then(() => { console.log("Usuários criados") })
    .catch(printError);
 
 const closeConnection = () => { connection.destroy() }
 
 createTables()
    .then(insertUsers)
    .finally(closeConnection);