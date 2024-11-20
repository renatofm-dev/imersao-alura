import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
    let mongoClient;
    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('conectado ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('conectado ao mongodb atlas com sucesso')

        return mongoClient;
    } catch (erro) {
        console.error('falaha na conexao com o banco', erro);
        process.exit();
        
    }
}