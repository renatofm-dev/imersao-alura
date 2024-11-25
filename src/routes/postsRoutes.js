import express from "express";
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

const routes = (app) => {
    // Habilita o middleware para analisar o corpo das requisições que contêm dados no formato JSON.
    app.use(express.json());
    // Define uma rota GET para a URL "/posts" buscando todos os posts.
    app.get("/posts", listarPosts);
    // Define umma rota POST para criar um post 
    app.post("/posts", postarNovoPost)
}

export default routes;