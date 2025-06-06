import mongoose from 'mongoose';

const receitaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    ingredientes: { type: [String], required: true },
    modoPreparo: { type: [String], required: true },
    tempoPreparo: { type: Number, required: true }, // em minutos 
    rendimento: { type: String, required: false }, // ex: "4 porções"
    categoria: { type: String, required: true,
        enum: ['sobremesa', 'lanche', 'bebida', 'almoço', 'janta', 'cafe da manha', 'vegano', 'outro']},
    anotacao : { type: String, required: false }, 
});

const Receita = mongoose.model('Receita', receitaSchema);

export default Receita; 
