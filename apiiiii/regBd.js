const mysql = require('mysql2/promise');
const pessoasData = require('./src/data/data.json');

async function main() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'dadosJson'
    });

    for (const pessoa of pessoasData) {
        await connection.execute('INSERT INTO pessoas (nome, rg, cpf) VALUES (?, ?, ?)', [pessoa.nome, pessoa.rg, pessoa.cpf]);
    }

    await connection.end();

    console.log('Dados inseridos com sucesso no banco de dados MySQL.');
}

main().catch(err => console.error('Erro ao inserir dados no banco de dados MySQL:', err));
