// Importa o módulo Express, que é a base do nosso servidor web.
import express from "express"; 
import routes from "./src/routes/postsRoutes.js";
// Cria uma instância do Express, que será nosso servidor web.
const app = express(); 
app.use(express.static("uploads"))
routes(app)

app.listen(3000, () => { // Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.
    console.log("servidor escutando...");
});




