import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Bem vindo ao meu servidor Express! - tsc-watca");
});

let usuarios = [
  {
    nome: "Giovanni Finetto",
    idade: 21,
  },
  {
    nome: "Erika Buonopane",
    idade: 37,
  },
];

app.get("/users", (req: Request, res: Response) => {
  res.send(usuarios);
});

app.post("/users", (req: Request, res: Response) => {
  let user = req.body;
  usuarios.push(user);
  res.send({
    message: "Usuário criado com sucesso!",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
