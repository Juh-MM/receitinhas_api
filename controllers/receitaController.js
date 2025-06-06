import Receita from '../models/receitaModels.js';

// POST
export async function createReceita(req, res) {
    try {
        const { nome, ingredientes, modoPreparo, tempoPreparo, rendimento, categoria, anotacao } = req.body;
        const newReceita = new Receita({
            nome,
            ingredientes,
            modoPreparo,
            tempoPreparo,
            rendimento,
            categoria,
            anotacao
        });
        await newReceita.save();
        
        res.status(201).json(Receita);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// GET
export async function getReceitas(req, res) {
    try {
        const receitas = await Receita.find()
        res.status(200).json(receitas);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// UPDATE
export async function updateReceita(req, res) {
    try {
        const { id } = req.params;
        const { nome, ingredientes, modoPreparo, tempoPreparo, rendimento, categoria, anotacao } = req.body;
        const updateReceita = await Receita.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updateReceita) return res.status(404).json({ message: 'Receita não encontrada' });
        res.status(200).json(updateReceita);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE
export async function deleteReceita(req, res) {
    try {
        const { id } = req.params;
        const deleteReceita = await Receita.findByIdAndDelete(req.params.id);
        if (!deleteReceita) return res.status(200).json({massage: 'Receita apagada!'})

    } catch(err) {
        res.status(500).json({massage: err.massage});
    }
};