
const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "100kb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/status", (req, res) => {
  res.json({
    online: true,
    name: "IA Script Maker",
    message: "O site está funcionando!"
  });
});

app.post("/api/gerar", (req, res) => {
  const { pedido } = req.body || {};

  if (!pedido || typeof pedido !== "string") {
    return res.status(400).json({
      erro: "Escreva o que você quer criar no Roblox."
    });
  }

  res.json({
    codigo: "-- Seu pedido: " + pedido.replace(/[\r\n]/g, " ") +
      "\n-- A geração por inteligência artificial será conectada depois.\nprint('Olá, Roblox!')"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("IA Script Maker rodando na porta " + PORT);
});
