import express from 'express';
import { createReceita, getReceitas, updateReceita, deleteReceita } from '../controllers/receitaController.js';

const router = express.Router();

// Rotas de plantações
router.post('/', createReceita);
router.get('/', getReceitas);  
router.put('/:id', updateReceita);
router.delete('/:id', deleteReceita); // Rota para deletar receita

export default router; 