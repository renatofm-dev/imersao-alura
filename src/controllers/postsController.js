import { getTodosOsPosts } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Chama a função para obter todos os posts e armazena os resultados.
    const resultados = await getTodosOsPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os resultados da consulta no formato JSON. 
    res.status(200).json(resultados);
} 

