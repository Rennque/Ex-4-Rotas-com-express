const express = require('express');
const app = express();
app.use(express.json());


app.get('/envia/:name', (request, response) => {
    let name = request.params.name;
    response.send(`Rota de API criada pelo: ${name}`);
    console.log(`Rota de API criada pelo: ${name}`);
});

app.listen(3333, () => {
    console.log("Servidor iniciado com sucesso na porta 3333");
});