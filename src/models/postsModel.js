// Importa a função para conectar ao banco de dados (provavelmente MongoDB), definida no arquivo dbConfig.js.
import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO e armazena a conexão em uma constante.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Função assíncrona para obter todos os posts do banco de dados.
export async function getTodosOsPosts() {
    // Seleciona o banco de dados "imersao-instabyte" da conexão estabelecida.
    const db = conexao.db("imersao-instabyte");
    // Seleciona a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");
    // Executa uma consulta para encontrar todos os documentos na coleção e retorna os resultados como um array.
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {

    const db = conexao.db("imersao-instabyte");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}