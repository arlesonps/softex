import express from 'express';
import bodyParser from 'body-parser';

// Criando uma instância do Express
const app = express();

// Middleware BodyParser para processar dados do corpo da solicitação
app.use(bodyParser.json());

// Dados de exemplo - simulando um banco de dados
let users = [
    { id: 1, name: 'Arleson' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

// EndPoint para listar todos os usuários
app.get('/users', (req, res) => {
    res.json(users);
});

// Rota HTTP para detalhes do usuário com base no ID
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === parseInt(id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

// EndPoint para adicionar um novo usuário
app.post('/users', (req, res) => {
    const { name } = req.body;
    if (name) {
        const newUser = {
            id: users.length + 1,
            name
        };
        users.push(newUser);
        res.status(201).json(newUser);
    } else {
        res.status(400).json({ message: 'Por favor, forneça um nome de usuário válido' });
    }
});

// Rota HTTP para saudação personalizada
app.get('/greet/:username', (req, res) => {
    const { username } = req.params;
    res.send(`Olá, ${username}! Bem-vindo!`);
});

// Porta em que o servidor será iniciado
const PORT = 3000;

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
