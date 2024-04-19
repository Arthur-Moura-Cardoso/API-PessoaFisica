CREATE DATABASE dadosJson;

USE dadosJson;

CREATE TABLE pessoas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    rg VARCHAR(20),
    cpf VARCHAR(14)
);

select * from pessoas;