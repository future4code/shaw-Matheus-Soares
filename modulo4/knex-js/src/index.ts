import app from './app'
import { Request, Response } from "express"
import connection from './connection'

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

  return result[0][0]
}

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.end()
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
});

/*exercicio1*/
/*a - temos a resposta do mysql*/
/*b*/
const searchByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `);
  return result[0][0];
}

app.get("/users/name/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name

    console.log(await searchByName(name))

    res.send(searchByName(name))
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})
/*c*/
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);//as count - renomear
  return result[0][0].count;
};

app.get("/users/gender/:gender", async (req: Request, res: Response) => {
  try {
    const gender = req.params.gender

    console.log(await countActors(gender))

    res.send(countActors(gender))
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

/*exercicio 2*/
async function getActor() {
  const result = await connection.raw(`
    SELECT * FROM Actor
  `)

  return result[0]
}

app.get('/users/get/Actor', async (req: Request, res: Response) => {
  try {
    const allUser = await getActor();
    res.send(allUser)
    console.log(allUser)
  } catch (err: any) {
    res.status(400).send(err.sqlMessage || err.message)
    //console.log(err.message)
  }
})

/*a*/

const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

app.put('/users/salario/:id/:salary', async (req: Request, res: Response) => {
  try {
    const salary = Number(req.params.salary)
    const id = req.params.id

    // if (!salary || !id || typeof (salary) != 'number' || typeof (id) != 'string') {
    //   throw new Error('parametro invalido')
    // } else {
      	console.log(await updateActor(id, salary))
        res.send(updateActor(id, salary))
    // }
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message)
  }
})

/*b*/

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
};

app.delete('/users/delete/:id', async (req: Request, res: Response) => {
  try {
    console.log(await deleteActor(req.params.id))
    res.send(deleteActor(req.params.id))
  } catch (error: any) {
    res.send('erro')
  }
})

/*c*/

const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};











