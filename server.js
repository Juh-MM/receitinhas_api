import express from 'express';
import receitaRouter from './routes/receitaRouter.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then (() => console.log('MongoDB Conectado!'))
  .catch(err => console.log('Erro ao conectar:', err));

app.listen(3000, () => console.log('Servidor rodando :)'))
