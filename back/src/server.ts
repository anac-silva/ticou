import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_request, response) => {
    response.json({
        message: "API do ticou funcionou!"
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})