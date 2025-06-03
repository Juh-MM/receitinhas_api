require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const complaintsRoute = require('./routes/complaints'); // ou o caminho certo

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors({
  origin: 'https://desafiodeploy.netlify.app',
}));

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Conectado ao MongoDB');
    app.use('/api/complaints', complaintsRoute);
    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
  })
  .catch(err => {
    console.error('❌ Erro na conexão com o MongoDB:', err);
  });