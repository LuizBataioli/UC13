const express = require("expres");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "catalogo_produtos",
  port: 3307,
});

conexao.connect((error) => {
  if (error) {
    console.error("Erro ao conectar ao banco de dados: " + error.stack);
    return;
  }
  console.log(
    "Conectado ao banco de dados com ID " + createConnection.threadId
  );
});
