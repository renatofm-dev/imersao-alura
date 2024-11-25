import express from "express"; // Importa o framework Express para criar a aplicação web
import multer from "multer"; // Importa o Multer para lidar com o upload de arquivos

// Importa as funções para lidar com posts do controlador
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

// Configura o armazenamento dos arquivos enviados
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define o diretório onde os arquivos serão salvos
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Define o nome do arquivo salvo (mantém o nome original)
    cb(null, file.originalname);
  }
})

// Cria uma instância do Multer com a configuração de armazenamento
const upload = multer({ dest: "./uploads", storage });

// **Observação:** A linha comentada abaixo poderia ser utilizada para sistemas Linux/Mac
// const upload = multer({dest: "./uploads"})

// Define as rotas da aplicação
const routes = (app) => {
  // Habilita o parsing de dados JSON nas requisições
  app.use(express.json());

  // Rota GET para listar todos os posts
  app.get("/posts", listarPosts);

  // Rota POST para criar um novo post
  app.post("/posts", postarNovoPost);

  // Rota POST para fazer upload de uma imagem
  // O middleware `upload.single('imagem')` extrai o arquivo enviado com o nome 'imagem'
  app.post("/upload", upload.single("imagem"), uploadImagem);
}

export default routes; // Exporta a função das rotas para ser utilizada em outro arquivo