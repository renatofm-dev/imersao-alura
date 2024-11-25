import { getTodosOsPosts, criarPost } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Chama a função para obter todos os posts e armazena os resultados.
    const resultados = await getTodosOsPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os resultados da consulta no formato JSON. 
    res.status(200).json(resultados);
} 

export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try{
        const postCriado = await criarPost(novoPost)
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Error":"Falha na requisição"})
        
    }
}

