const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('FluentBot Webhook está online 🚀');
});

app.post('/webhook', (req, res) => {
    console.log('📨 Nova requisição recebida no webhook:');
    console.log(req.body);
    res.send('Webhook recebeu com sucesso!');
});

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`);
});
