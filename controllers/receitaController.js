import Receita from '../models/receitaModels.js';

// POST
export function createReceita(req, res) {
    try {
        const { nome, ingredientes, modoPreparo, tempoPreparo, rendimento, categoria, anotacao } = req.body;
        const newReceita = Receita.save();
        res.status(201).json(Receita);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// GET
export function getReceitas(req, res) {
    try {
        const receitas = Receita.find()
        res.status(200).json(receitas);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// UPDATE
export function updateReceita(req, res) {
    try {
        const updateReceita = Receita.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updateReceita);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE
export function deleteReceita(req, res) {
    try {
        Receita.findByIdAndDelete(req.params.id);
        res.json({massage: 'Receita apagada!'})
    } catch(err) {
        res.status(500).json({massage: err.massage});
    }
};